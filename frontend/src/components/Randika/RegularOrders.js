import React, { useState } from "react";
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
import ReplayIcon from "@material-ui/icons/Replay";

import TextField from "@material-ui/core/TextField";
import RevenueModal from "./RevenueModal";

function createData(col1, col2, col3, col4, col5, col6) {
  return { col1, col2, col3, col4, col5, col6 };
}

const rows = [
  createData("O4567","U7890", "B101", 1, 6743, "2021-05-25"),
  createData("O4578","U7814", "B101,B102,B111", 3, 5149, "2021-05-24"),
  createData("O7890","U7820", "B105,B108,B109,B120", 5, 2460, "2021-05-24"),
  createData("O6709","U7878", "B151,B111,B181", 4, 6024, "2021-05-24"),
  createData("O6789","U7823", "B141,B101,B111,B181", 4, 4939, "2021-05-25"),
  createData("O8976","U7814", "B191,B171,B111,B101", 4, 8765, "2021-05-24"),
  createData("O6704","U7889", "B118,B171,B181", 5, 3743, "2021-05-24"),
  createData("O5678","U7856", "B141", 2, 9400, "2021-05-24"),
  createData("O4578","U7812", "B178", 1, 6570, "2021-05-25"),
  createData("O6704","U7889", "B101", 1, 9800, "2021-05-24"),
  createData("O9856","U7885", "B191,B171,B181,B191", 4, 8120, "2021-05-24"),
  createData("O8932","U7887", "B121,B167", 2, 9370, "2021-05-24"),
  createData("O8963","U7863", "B171,B151,B171,B181", 4, 6340, "2021-05-25"),
];

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

function stableSort(array, comparator, searchDate) {
  const stabilizedThis = array
    .filter((val) => {
      if (searchDate === "") {
        return val;
      } else if (val.col6.toLowerCase().includes(searchDate.toLowerCase())) {
        return val;
      }
      return null;
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
    label: "Order ID",
  },
  { id: "col2", numeric: true, disablePadding: false, label: "Customer" },
  { id: "col3", numeric: true, disablePadding: false, label: "Book IDs" },
  { id: "col4", numeric: true, disablePadding: false, label: "QTY" },
  { id: "col5", numeric: true, disablePadding: false, label: "Net Tot" },
  { id: "col6", numeric: true, disablePadding: false, label: "Date" },
  { id: "col7", numeric: true, disablePadding: false, label: "" },
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

const RegularOrders = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchDate, setsearchDate] = useState("");

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

  return (
    <div className="w-11/12 h-auto p-4 mt-2 m-auto pt-5 rounded-xl bg-blueSapphire bg-opacity-30">
      <h1 className="text-4xl text-center text-prussianBlue font-bold mb-5">
        Regular Orders
      </h1>
      <div className="w-full h-auto bg-white p-3 rounded-xl">
        <div className="w-full h-16 mb-1 p-1 bg-blueSapphire bg-opacity-30 rounded-lg">
          <div className="w-max h-16" style={{ float: "left" }}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Choose Date"
                type="date"
                defaultValue="2021-05-23"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => {
                  setsearchDate(event.target.value);
                }}
              />
            </form>
          </div>
          <ReplayIcon
            style={{ float: "left" }}
            className="m-4"
            onClick={() => {
              setsearchDate("");
            }}
          />
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
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy), searchDate)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((val) => {
                      if (searchDate === "") {
                        return val;
                      } else if (
                        val.col6
                          .toLowerCase()
                          .includes(searchDate.toLowerCase())
                      ) {
                        return val;
                      }
                      return null;
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
                            align="left"
                            style={{ paddingLeft: "20px" }}
                          >
                            {row.col1}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ paddingLeft: "45px" }}
                          >
                            {row.col2}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ paddingLeft: "35px" }}
                          >
                            {row.col3}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ paddingLeft: "28px" }}
                          >
                            Rs.{row.col4}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ paddingLeft: "28px" }}
                          >
                            {row.col5}
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ paddingLeft: "28px" }}
                          >
                            {row.col6}
                          </TableCell>
                          <TableCell
                            align="left"
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
                              }}
                            >
                              View Customer
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  Total Revenue : {tot}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
      {revenueModalOpen && (
        <RevenueModal
          setModalVisible={setRevenueModalOpen}
          modalVisible={revenueModalOpen}
        />
      )}
    </div>
  );
};

export default RegularOrders;
