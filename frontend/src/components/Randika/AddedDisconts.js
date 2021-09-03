import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import UpdateDiscountModal from "./UpdateDiscountModal";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator, searchTerm) {
  const stabilizedThis = array
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.discountPercentage.label
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })
    .map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "col1",
    numeric: false,
    disablePadding: true,
    label: "Book",
  },
  { id: "col2", numeric: true, disablePadding: false, label: "Discount Lable" },
  {
    id: "col3",
    numeric: true,
    disablePadding: false,
    label: "Regular Percentage",
  },
  {
    id: "col4",
    numeric: true,
    disablePadding: false,
    label: "Bulk Perecentage",
  },
  { id: "col5", numeric: true, disablePadding: false, label: "Market Price" },
  { id: "col6", numeric: true, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className=" bg-blueSapphire">
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ color: "white" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const AddedDiscounts = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setsearchTerm] = useState("");

  const [revenueModalOpen, setRevenueModalOpen] = useState(false);

  let tot = 0;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [products, setProducts] = useState([]);
  const [lables, setLables] = useState([]);
  const [options, setOptions] = useState([]);
  let uniqueLables = [];
  let data = [];

  const [bookID, setbookID] = useState("");
  const [discountlable, setDiscountlable] = useState("");
  const [regularPercentage, setregularPercentage] = useState(0);
  const [bulkPercentage, setbulkPercentage] = useState(0);

  const setDisLables = () => {
    uniqueLables = lables.filter((c, index) => {
      return lables.indexOf(c) === index;
    });
    uniqueLables.map((item, index) => {
      let category = {
        value: item,
        label: item,
      };
      data.push(category);
    });

    setOptions(data);
  };

  useEffect(() => {
    const getNewsletterItems = async () => {
      try {
        await axios
          .get("http://localhost:6500/matrix/api/admin/getProducts")
          .then((res) => {
            for (let i = 0; i < res.data.Products.length; i++) {
              if (res.data.Products[i].discountPercentage.label) {
                products.push(res.data.Products[i]);
                lables.push(res.data.Products[i].discountPercentage.label);
              }
            }

            setDisLables();
          })
          .catch((err) => {
            alert(err.message);
          });
      } catch (err) {
        alert("error :" + err);
      }
    };
    getNewsletterItems();
  }, []);

  return (
    <div className="w-11/12 h-auto p-4 mt-2 m-auto pt-5 rounded-xl bg-blueSapphire bg-opacity-30">
      <h1 className="text-4xl text-center text-prussianBlue font-bold mb-5">
        Added Discounts
      </h1>
      <div className="w-full h-auto bg-white p-3 rounded-xl">
        <div className="w-full mb-1 p-1 bg-blueSapphire bg-opacity-30 r rounded-lg  h-12">
          <div className="w-2/3 float-left">
            <Select
              options={options}
              onChange={(event) => {
                setsearchTerm(event.value);
              }}
              className="basic-multi-select"
            />
          </div>
          <div
            className="w-max bg-gamboge float-left h-8 rounded-full p-3 mt-1 pt-1 ml-6"
            onClick={() => {
              setsearchTerm("");
            }}
          >
            <h1 className="lg:text-xl md:text-sm sm:text-sm   font-bold mb-5   font-thinFont text-white">
              VIEW ALL
            </h1>
          </div>
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={products.length}
                />
                <TableBody>
                  {stableSort(
                    products,
                    getComparator(order, orderBy),
                    searchTerm
                  )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (
                        val.discountPercentage.label
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      tot += row.col4;
                      return (
                        <TableRow hover tabIndex={-1} key={row.name}>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            align="center"
                          >
                            {row.publishingTitle}
                          </TableCell>
                          <TableCell align="center">
                            {" "}
                            {row.discountPercentage.label}
                          </TableCell>
                          <TableCell align="center">
                            {row.discountPercentage.regular}
                          </TableCell>
                          <TableCell align="center">
                            Rs.{row.discountPercentage.bulk}
                          </TableCell>
                          <TableCell align="center">
                            Rs.{row.marketPrice}
                          </TableCell>

                          <TableCell
                            align="center"
                            style={{ paddingLeft: "20px" }}
                          >
                            {" "}
                            <button
                              type="submit"
                              className="focus:outline-none bg-gamboge text-snow-900 text-base rounded border hover:border-transparent w-32 h-10 sm:w-80 sm:h-12"
                              style={{
                                boxShadow:
                                  "0px 10px 15px rgba(3, 17, 86, 0.25)",
                                float: "right",
                                color: "white",
                              }}
                              onClick={() => {
                                setRevenueModalOpen(true);
                                setbookID(row._id);
                                setDiscountlable(row.discountPercentage.label);
                                setregularPercentage(
                                  row.discountPercentage.regular
                                );
                                setbulkPercentage(row.discountPercentage.bulk);
                              }}
                            >
                              Update Discount
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={products.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
      {revenueModalOpen && (
        <UpdateDiscountModal
          setModalVisible={setRevenueModalOpen}
          modalVisible={revenueModalOpen}
          bookID={bookID}
          regularPercentage={regularPercentage}
          bulkPercentage={bulkPercentage}
          setDiscountlable={discountlable}
        />
      )}
    </div>
  );
};

export default AddedDiscounts;
