import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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
import SearchIcon from "@material-ui/icons/Search";
import ReplayIcon from "@material-ui/icons/Replay";
import BookRequestModal from "./BookRequestModal";

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
        val.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.language.toLowerCase().includes(searchTerm.toLowerCase())
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
    label: "No",
  },
  { id: "col2", numeric: true, disablePadding: false, label: "Book Name" },
  { id: "col3", numeric: true, disablePadding: false, label: "Author" },
  { id: "col4", numeric: true, disablePadding: false, label: "Description" },
  { id: "col4", numeric: true, disablePadding: false, label: "Language" },
  { id: "col5", numeric: true, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className=" bg-prussianBlue ">
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ paddingLeft: "10px", color: "white" }}
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
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
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
    minWidth: 800,
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
}));

const SampleNewsletterTable = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setsearchTerm] = useState("");
  const [bookRequests, setBookRequests] = useState([]);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
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

  useEffect(() => {
    const getBookRequests = async () => {
      try {
        await axios
          .get("http://localhost:6500/matrix/api/admin/getBookRequests")
          .then((res) => {
            setBookRequests(res.data.bookRequests);
            console.log(res.data.bookRequests);
          })
          .catch((err) => {
            alert(err.message);
          });
      } catch (err) {
        alert("error :" + err);
      }
    };
    getBookRequests();
  }, []);

  return (
    <div className="w-4/5 h-auto m-auto">
      <div className="w-full h-auto bg-white p-3 rounded-xl">
        <div className="w-full mb-1 p-1 bg-blueSapphire rounded-lg  h-14 bg-opacity-30">
          <SearchIcon
            style={{ float: "left", fontSize: 40, marginLeft: "10px" }}
          />
          <div className="w-2/3 h-16" style={{ float: "left" }}>
            <input
              type="text"
              className="w-full h-11 p-5 "
              id="code"
              placeholder="Search Here"
              value={searchTerm}
              onChange={(event) => {
                setsearchTerm(event.target.value);
              }}
              style={{ float: "left" }}
            ></input>
          </div>
          <ReplayIcon
            style={{ float: "left" }}
            className="m-3"
            onClick={() => {
              setsearchTerm("");
            }}
          />
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
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={bookRequests.length}
              />
              <TableBody>
                {stableSort(
                  bookRequests,
                  getComparator(order, orderBy),
                  searchTerm
                )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.bookName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.author
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.language
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((requests, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow tabIndex={1} key={requests._id}>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          style={{ padding: "10px" }}
                        >
                          {index + 1}
                        </TableCell>

                        <TableCell align="center">
                          {requests.bookName}
                        </TableCell>
                        <TableCell align="center">{requests.author}</TableCell>
                        <TableCell align="center">
                          {requests.description}
                        </TableCell>
                        <TableCell align="center">
                          {requests.language}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          <button
                            type="submit"
                            className="focus:outline-none text-snow-900 text-base rounded border hover:border-transparent w-32 h-10 sm:w-80 sm:h-12 bg-gamboge"
                            style={{
                              boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                              float: "right",
                              color: "white",
                            }}
                            onClick={() => {                            
                              setSampleModalOpen(true);
                            }}
                          >
                            SEND Request
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
            count={bookRequests.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      {sampleModalOpen && (
        <BookRequestModal    
          modalVisible={sampleModalOpen}   
          setModalVisible={setSampleModalOpen}
        />
      )}
    </div>
  );
};

export default SampleNewsletterTable;
