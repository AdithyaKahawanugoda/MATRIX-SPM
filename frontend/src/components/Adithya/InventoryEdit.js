import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import RefreshIcon from "@material-ui/icons/Refresh";
import EditIcon from "@material-ui/icons/Edit";

const columns = [
  { id: "no", label: "No", minWidth: 15 },
  { id: "code", label: "BookID", minWidth: 30 },
  { id: "name", label: "Title", minWidth: 100 },
  { id: "address", label: "Translator", minWidth: 100 },
  { id: "orderType", label: "ISBN", minWidth: 200 },
  { id: "paymentType", label: "TotalCost", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 15 },
];

function createData(
  no,
  code,
  name,
  address,
  weight,
  orderType,
  paymentType,
  deliveryType,
  action
) {
  return {
    no,
    code,
    name,
    address,
    weight,
    orderType,
    paymentType,
    deliveryType,
    action,
  };
}

const rows = [
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    2,
    "000002",
    "LIMPOPO GALABASI",
    "Priyanka Kahawanugoda",
    377,
    "98223456",
    "544,000",
    "Twenty Chickens and a Saddle",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
  createData(
    1,
    "000001",
    "RIDEE THARU WIYANA YATA",
    "Priyanka Kahawanugoda",
    2380,
    "982343441",
    "344,000",
    "The Wind Is Silver",
    <EditIcon />
  ),
];

const InventoryEdit = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Grid item xs={12}>
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

export default InventoryEdit;
