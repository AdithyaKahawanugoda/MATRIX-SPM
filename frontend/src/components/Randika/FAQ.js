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
import SearchIcon from "@material-ui/icons/Search";
import ReplayIcon from "@material-ui/icons/Replay";
import ReplyFaqModal from "./ReplyFaqModal";

function createData(col1, col2, col3, col4) {
  return { col1, col2, col3, col4 };
}

const rows = [
  createData(
    "U456",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus1@gmail.com"
  ),
  createData(
    "U457",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus2@gmail.com"
  ),
  createData(
    "U789",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus3@gmail.com"
  ),
  createData(
    "U670",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",
    "cus4@gmail.com"
  ),
  createData(
    "U678",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus5@gmail.com"
  ),
  createData(
    "U897",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus6@gmail.com"
  ),
  createData(
    "U670",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus7@gmail.com"
  ),
  createData(
    "U567",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus8@gmail.com"
  ),
  createData(
    "U457",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus9@gmail.com"
  ),
  createData(
    "U670",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus10@gmail.com"
  ),
  createData(
    "U985",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus11@gmail.com"
  ),
  createData(
    "U893",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus12@gmail.com"
  ),
  createData(
    "U896",
    "5JTeVaw Z4jDXC zuYpC OIYAV64hU fD4pM kklFJ/b/ Qu01lhc by3N5T4 tUGitnV ysi9qEx 7wRiGOc lNi6Gt e3LZev 56v57 9A5t 9rfK1 o+Pec. 5Z1TEAQ8i HPZhmdPP P3csV EUNSp test des",

    "cus13@gmail.com"
  ),
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

function stableSort(array, comparator, searchTerm) {
  const stabilizedThis = array
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.col1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.col2.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.col3 === searchTerm
      ) {
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
    label: "Customer ID",
  },
  { id: "col2", numeric: true, disablePadding: false, label: "Message" },
  { id: "col3", numeric: true, disablePadding: false, label: "Email" },
  { id: "col4", numeric: true, disablePadding: false, label: "" },
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
    backgroundColor: "#D3DCDE",
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const FAQ = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setsearchTerm] = useState("");

  const [replyModalOpen, setReplyModalOpen] = useState(false);

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
    <div className="w-11/12 h-auto p-4 mt-1 m-auto pt-5 rounded-xl bg-blueSapphire bg-opacity-30">
      <h1 className="text-4xl text-center text-blueSapphire font-bold mb-5">
        Customer Messages
      </h1>
      <div className="w-full h-auto bg-white p-3 rounded-xl">
        <div className="w-full mb-1 p-1 bg-blueSapphire bg-opacity-30 r rounded-lg  h-14">
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
                  {stableSort(rows, getComparator(order, orderBy), searchTerm)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (
                        val.col1
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        val.col2
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        val.col3
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                      return null;
                    })
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

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
                                setReplyModalOpen(true);
                              }}
                            >
                              Reply
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
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>

      {replyModalOpen && (
        <ReplyFaqModal
          setModalVisible={setReplyModalOpen}
          modalVisible={replyModalOpen}
        />
      )}
    </div>
  );
};

export default FAQ;
