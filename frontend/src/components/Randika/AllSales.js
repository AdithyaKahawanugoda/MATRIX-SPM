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

function createData(col1, col2, col3) {
  return { col1, col2, col3 };
}

const rows = [
  createData("B4567", 37, "67430"),
  createData("B4578", 250, "51490"),
  createData("B7890", 160, "24600"),
  createData("B6709", 159, "60240"),
  createData("B6789", 16, "4939"),
  createData("B8976", 32, "8765"),
  createData("B6704", 90, "3743"),
  createData("B5678", 50, "9400"),
  createData("B4578", 260, "6570"),
  createData("B6704", 225, "9800"),
  createData("B9856", 586, "8120"),
  createData("B8932", 190, "9370"),
  createData("B8963", 180, "6340"),
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
        val.col2 === searchTerm ||
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
  { id: "col1", numeric: true, disablePadding: false, label: "Book ID" },
  { id: "col2", numeric: true, disablePadding: false, label: "Total Sales" },
  { id: "col3", numeric: true, disablePadding: false, label: "Total Revenue" },
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

const AllSales = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setsearchTerm] = useState("");

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
    <div className="w-11/12 h-auto p-4 mt-2 m-auto pt-3 rounded-xl bg-blueSapphire bg-opacity-30">
      <h1 className="text-4xl text-center text-prussianBlue font-bold mb-5">
        All Sales
      </h1>
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
                        val.col2 === searchTerm ||
                        val.col3 === searchTerm
                      ) {
                        return val;
                      }
                      return null;
                    })
                    .map((row, index) => {
                      return (
                        <TableRow hover tabIndex={-1} key={row.name}>
                          <TableCell align="center">{row.col1}</TableCell>
                          <TableCell align="center">{row.col2}</TableCell>
                          <TableCell align="center">Rs.{row.col3}</TableCell>
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
    </div>
  );
};

export default AllSales;
