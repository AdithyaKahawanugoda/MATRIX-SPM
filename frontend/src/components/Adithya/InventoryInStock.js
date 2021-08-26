import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import RefreshIcon from "@material-ui/icons/Refresh";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import axios from "axios";
import BookModal from "./BookModal";

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
        val.ISBN.includes(searchTerm) ||
        val._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.publishingTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.translator.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.originalTitle.toLowerCase().includes(searchTerm.toLowerCase())
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
  { id: "col2", numeric: true, disablePadding: false, label: "BookID" },
  { id: "col3", numeric: true, disablePadding: false, label: "ISBN" },
  { id: "col4", numeric: true, disablePadding: false, label: "Title" },
  { id: "col5", numeric: true, disablePadding: false, label: "Translator" },
  { id: "col6", numeric: true, disablePadding: false, label: "Original Book" },
  { id: "col7", numeric: true, disablePadding: false, label: "" },
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
}));

const InventoryInStock = () => {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("no");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);

  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [bookID, setBookID] = useState("");
  const [publishingTitle, setPublishingTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [translator, setTranslator] = useState("");
  const [originalAuthor, setOriginalAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [bookImage, setbookImage] = useState("");

  // const [title, setTitle] = useState("");
  // const [translator, setTranslator] = useState("");
  // const [originalbook, setOriginalBook] = useState("");

  useEffect(() => {
    const getAllBooks = async () => {
      await axios
        .get("http://localhost:6500/matrix/api/inventoryManager/getbooks")
        .then((res) => {
          setTableData(res.data.allBooks);
          console.log(tableData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllBooks();
  }, []);

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = tableData.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div>
      <Grid item xs={12}>
        <Paper class=" rounded-xl px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
          {/* <header class="font-contentFont text-4xl mb-3 font-bold text-prussianBlue ">
            INVENTORY DASHBOARD
          </header>
          <hr /> */}
          <div class="flex justify-evenly align-middle">
            <div>
              <Card className=" rounded-full opacity-90 hover:opacity-100 my-5">
                <CardActionArea
                  style={{
                    maxWidth: 350,
                    height: 100,
                    width: 300,
                    color: "white",
                    fontWeight: 400,
                    fontSize: "1.3rem",
                    backgroundColor: "#065774",
                  }}
                >
                  <div className="flex justify-center">
                    8565
                    <br />
                    Items in stock
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div>
              <Card className=" rounded-full opacity-90 hover:opacity-100 my-5">
                <CardActionArea
                  style={{
                    maxWidth: 350,
                    height: 100,
                    width: 300,
                    color: "white",
                    fontWeight: 400,
                    fontSize: "1.3rem",
                    backgroundColor: "#065774",
                  }}
                >
                  <div className="flex justify-center">
                    16
                    <br />
                    Published Books
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div>
              <Card className=" rounded-full opacity-90 hover:opacity-100 my-5">
                <CardActionArea
                  style={{
                    maxWidth: 350,
                    height: 100,
                    width: 300,
                    fontWeight: 900,
                    fontSize: "1.3rem",
                    background:
                      "linear-gradient(45deg, hsla(9, 100%, 46%, 1) 0%, hsla(38, 90%, 49%, 1) 45%)",
                  }}
                >
                  <div className="">
                    <p className="font-boldTallFont">LIMPOPO GALABASI</p>
                    Least in stock Book
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </Paper>
        <div class=" rounded-lg  mt-3 mx-0 px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
          {/* <header class="font-contentFont text-2xl my-4 font-bold text-prussianBlue ">
            ALL STOCKS
          </header> */}

          <div class="rounded-xl   mt-8 mx-0 px-3 py-3 text-center border-0  shadow-md bg-white ">
            <div class="rounded-lg flex bg-gray-100">
              <div class="flex-initial  text-center  ml-4 mt-4 py-2 m-2">
                Search ISBN:
              </div>
              <div class="flex-initial px-0 py-2 m-2">
                <input
                  class="ml-0 mt-0  border-1 bg-gray-200 appearance-none border-2 border-gamboge rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-halloweenOrange"
                  id="inline-full-name"
                  type="text"
                  placeholder="Search Here"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                ></input>
              </div>
              {/* 
              <div class=" flex-initial px-0 py-2 m-2">
                <button class="bg-gamboge hover:bg-halloweenOrange text-white font-bold py-2 px-4 rounded-full">
                  Search
                </button>
              </div> */}

              <div class="text-black  px-0 py-2 m-4">
                <icon
                  class="text-gray-500  hover:text-halloweenOrange"
                  onClick={() => {
                    setSearchTerm("");
                  }}
                >
                  <RefreshIcon />
                </icon>
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
                      rowCount={tableData.length}
                    />
                    <TableBody>
                      {stableSort(
                        tableData,
                        getComparator(order, orderBy),
                        searchTerm
                      )
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .filter((val) => {
                          if (searchTerm === "") {
                            return val;
                          } else if (
                            val.ISBN.includes(searchTerm) ||
                            val._id
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.publishingTitle
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.translator
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.originalTitle
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((book, index) => {
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow tabIndex={1} key={book._id}>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                style={{ padding: "10px" }}
                              >
                                {index + 1}
                              </TableCell>
                              <TableCell align="center">{book._id}</TableCell>
                              <TableCell align="center">{book.ISBN}</TableCell>
                              <TableCell align="center">
                                {book.publishingTitle}
                              </TableCell>
                              <TableCell align="center">
                                {book.translator}
                              </TableCell>
                              <TableCell align="center">
                                {book.originalTitle}
                              </TableCell>
                              <TableCell align="center">
                                {" "}
                                <button
                                  className="focus:outline-none bg-gamboge font-semibold rounded py-2 px-4"
                                  onClick={() => {
                                    setBookID(book._id);
                                    setPublishingTitle(book.publishingTitle);
                                    setOriginalTitle(book.originalTitle);
                                    setTranslator(book.translator);
                                    setOriginalAuthor(book.originalAuthor);
                                    setISBN(book.ISBN);
                                    setbookImage(book.bookImage);
                                    setBookModalOpen(true);
                                  }}
                                >
                                  View More
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
                  count={tableData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </div>
        </div>
      </Grid>

      {bookModalOpen && (
        <BookModal
          setModalVisible={setBookModalOpen}
          modalVisible={bookModalOpen}
          bookID={bookID}
          publishingTitle={publishingTitle}
          originalTitle={originalTitle}
          Translator={translator}
          originalAuthor={originalAuthor}
          ISBN={ISBN}
          bookImage={bookImage}
        />
      )}
    </div>
  );
};

export default InventoryInStock;
