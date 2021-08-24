import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import RefreshIcon from "@material-ui/icons/Refresh";
import axios from "axios";

const columns = [
  { id: "no", label: "No", minWidth: 15 },
  { id: "bookid", label: "BookID", minWidth: 50 },
  { id: "title", label: "Title", minWidth: 200 },
  { id: "translator", label: "Translator", minWidth: 150 },
  { id: "originalbook", label: "Original Book", minWidth: 200 },
  { id: "qut", label: "Qut.", minWidth: 50 },
  { id: "isbn", label: "ISBN", minWidth: 100 },
  { id: "totalcost", label: "Total Cost", minWidth: 100 },
];

// function createData(
//   no,
//   code,
//   name,
//   address,
//   weight,
//   orderType,
//   paymentType,
//   deliveryType
// ) {
//   return {
//     no,
//     code,
//     name,
//     address,
//     weight,
//     orderType,
//     paymentType,
//     deliveryType,
//   };
// }

// const rows = [
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     2,
//     "000002",
//     "LIMPOPO GALABASI",
//     "Priyanka Kahawanugoda",
//     377,
//     "98223456",
//     "544,000",
//     "Twenty Chickens and a Saddle"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
//   createData(
//     1,
//     "000001",
//     "RIDEE THARU WIYANA YATA",
//     "Priyanka Kahawanugoda",
//     2380,
//     "982343441",
//     "344,000",
//     "The Wind Is Silver"
//   ),
// ];

const InventoryInStock = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      await axios
        .get("http://localhost:6500/matrix/api/inventoryManager/getbooks")
        .then((res) => {
          console.log(res.data);
          setTableData(res.data.allBooks);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllBooks();
  }, []);

  useEffect(() => {
    if (tableData) {
      tableData.map((item) => {
        const createData = () => {
          let no = item._id;
          let code = item.ISBN;
          let name;
          let address;
          let weight;
          let orderType;
          let paymentType;
          let deliveryType;
          return {
            no,
            code,
            name,
            address,
            weight,
            orderType,
            paymentType,
            deliveryType,
          };
        };
        createData();
        console.log(item);
        console.log(item._id);
      });
    }
  }, [tableData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                ></input>
              </div>

              <div class=" flex-initial px-0 py-2 m-2">
                <button class="bg-gamboge hover:bg-halloweenOrange text-white font-bold py-2 px-4 rounded-full">
                  Search
                </button>
              </div>

              <div class="text-black  px-0 py-2 m-4">
                <icon class="text-gray-500  hover:text-halloweenOrange">
                  <RefreshIcon />
                </icon>
              </div>
            </div>

            <Paper class="mt-2">
              <TableContainer style={{ maxHeight: "440px" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            backgroundColor: "#065774",
                            opacity: "85%",
                            color: "white",
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
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
      </Grid>
    </div>
  );
};

export default InventoryInStock;
