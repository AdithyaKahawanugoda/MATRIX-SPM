import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
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

function createData(col1, col2, col3, col4, col5) {
  return { col1, col2, col3, col4, col5 };
}

const rows = [
  createData("O4567", "B101", 1, 6743, "2021-05-25"),
  createData("O4578", "B101,B102,B111", 3, 5149, "2021-05-24"),
  createData("O7890", "B105,B108,B109,B120", 5, 2460, "2021-05-24"),
  createData("O6709", "B151,B111,B181", 4, 6024, "2021-05-24"),
  createData("O6789", "B141,B101,B111,B181", 4, 4939, "2021-05-25"),
  createData("O8976", "B191,B171,B111,B101", 4, 8765, "2021-05-24"),
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
      } else if (val.col5.toLowerCase().includes(searchDate.toLowerCase())) {
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
  { id: "col2", numeric: true, disablePadding: false, label: "Book IDs" },
  { id: "col3", numeric: true, disablePadding: false, label: "QTY" },
  { id: "col4", numeric: true, disablePadding: false, label: "Net Tot" },
  { id: "col5", numeric: true, disablePadding: false, label: "Date" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className=" bg-gray-500">
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

const RegularOrders = ({ setModalVisible, modalVisible }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [searchDate, setsearchDate] = useState("");

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
    <Modal
      open={modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      center
      styles={{
        modal: {
          borderRadius: "10px",
          maxWidth: "800px",
          width: "100%",
        },
      }}
      focusTrapped={true}
    >
      <div className="w-full h-auto bg-white p-3 rounded-xl">
        <div className="w-full h-16 mb-1 p-1 bg-lightSilver rounded-lg">
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
                        val.col5
                          .toLowerCase()
                          .includes(searchDate.toLowerCase())
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
    </Modal>
  );
};

export default RegularOrders;
