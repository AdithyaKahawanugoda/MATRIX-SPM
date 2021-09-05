import React, { useState } from "react";
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
import { Icon } from "@material-ui/core";

const columns = [
  { id: "no", label: "No", minWidth: 15 },
  { id: "code", label: "InvoiceID", minWidth: 100 },
  { id: "name", label: "RetailShop", minWidth: 100 },
  { id: "address", label: "Amount", minWidth: 100 },
  { id: "deliveryType", label: "PaymentStatus", minWidth: 100 },
  // { id: "weight", label: "Qut.", minWidth: 30 },
  // { id: "orderType", label: "ISBN", minWidth: 200 },
  // { id: "paymentType", label: "TotalCost", minWidth: 100 },
];

function createData(no, code, name, address, deliveryType) {
  return {
    no,
    code,
    name,
    address,
    deliveryType,
  };
}

const rows = [
  createData(1, "000001", "SARASAVI", "20,380", "PENDING"),
  createData(2, "000002", "SOORIYA", "3,177", "COMPLETE"),
  createData(1, "000003", "GUNASENA", "15,000", "COMPLETE"),
  createData(1, "000004", "SARASAVI", "22,380", "PENDING"),
  createData(1, "000005", "SAMUDRA", "12,380", "COMPLETE"),
];

const Wholesales = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
        <Paper className=" rounded-xl px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
          {/* <header className="font-contentFont text-4xl mb-3 font-bold text-prussianBlue ">
          INVENTORY DASHBOARD
        </header>
        <hr /> */}
          <div className="flex justify-evenly align-middle">
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
                    378
                    <br />
                    Total bulk orders
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
                    19
                    <br />
                    Pending Payments
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
                    <p className="font-boldTallFont text-2xl">2</p>
                    Pending Orders
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </Paper>
        <div className=" rounded-lg  mt-3 mx-0 px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
          {/* <header className="font-contentFont text-2xl my-4 font-bold text-prussianBlue ">
          ALL STOCKS
        </header> */}

          <div className="rounded-xl   mt-8 mx-0 px-3 py-3 text-center border-0  shadow-md bg-white ">
            <div className="rounded-lg flex bg-gray-100">
              <div className="flex-initial  text-center  ml-4 mt-4 py-2 m-2">
                Search ISBN:
              </div>
              <div className="flex-initial px-0 py-2 m-2">
                <input
                  className="ml-0 mt-0  border-1 bg-gray-200 appearance-none border-2 border-gamboge rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-halloweenOrange"
                  id="inline-full-name"
                  type="text"
                ></input>
              </div>

              <div className=" flex-initial px-0 py-2 m-2">
                <button className="bg-gamboge hover:bg-halloweenOrange text-white font-bold py-2 px-4 rounded-full">
                  Search
                </button>
              </div>

              <div className="text-black  px-0 py-2 m-4">
                <Icon className="text-gray-500  hover:text-halloweenOrange">
                  <RefreshIcon />
                </Icon>
              </div>
            </div>

            <Paper className="mt-2">
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
                    {rows
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
                count={rows.length}
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

export default Wholesales;
