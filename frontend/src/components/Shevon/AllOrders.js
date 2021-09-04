import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { useEffect, useState } from "react";
import Icon from "@material-ui/core/Icon";

const columns = [
  { id: "no", label: "No", minWidth: 15 },
  { id: "code", label: "OrderID", minWidth: 30 },
  { id: "name", label: "CustomerName", minWidth: 50 },
  { id: "address", label: "Address", minWidth: 230 },
  { id: "weight", label: "Weight", minWidth: 30 },
  { id: "orderType", label: "OrderType", minWidth: 100 },
  { id: "paymentType", label: "PaymentType", minWidth: 100 },
  { id: "deliveryType", label: "DeliveryType", minWidth: 100 },
];

function createData(
  no,
  code,
  name,
  address,
  weight,
  orderType,
  paymentType,
  deliveryType
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
  };
}

const rows = [
  createData(
    1,
    "133331",
    "Tony Russell",
    "Mr. Tony Russell, Coalecroft  909, Ontario - 7480, Hungary",
    0.5 + "kg",
    "Retail",
    "Paid",
    "InTransit"
  ),
  createData(
    2,
    "137953",
    "Doug Wilton",
    "Mr. Doug Wilton, Longleigh   1845, Glendale - 5576, Panama",
    0.3 + "kg",
    "Retail",
    "Paid",
    "UnDeliverd"
  ),
  createData(
    3,
    "139968",
    "Roger Cobb",
    "Mr. Roger Cobb, Sundown 7120, Tokyo - 2368, Mali",
    0.9 + "kg",
    "Retail",
    "CashOnDelivery",
    "Delivered"
  ),
  createData(
    4,
    "142447",
    "Bryon Radley",
    "Mr. Bryon Radley, Bales  9695, Houston - 6560, Serbia",
    70 + "kg",
    "Bulk",
    "Invoice",
    "UnDeliverd"
  ),
  createData(
    5,
    "145227",
    "Fred Carter",
    "Mr. Fred Carter, Bloomsbury  8925, Otawa - 4818, Panama",
    0.2 + "kg",
    "Retail",
    "CashOnDelivery",
    "InTransit"
  ),
  createData(
    6,
    "340561",
    "Martin Talbot",
    "Mr. Martin Talbot, Aberavon  426, Oakland - 2273, Ireland",
    0.6 + "kg",
    "Retail",
    "Paid",
    "UnDeliverd"
  ),
  createData(
    7,
    "606106",
    "John Clifton",
    "Mr. John Clifton, Lexington 93, Glendale - 6215, Vatican City",
    0.8 + "kg",
    "Retail",
    "Paid",
    "UnDeliverd"
  ),
  createData(
    8,
    "864939",
    "Nate Hobson",
    "Mr. Nate Hobson, Blendon    9754, Henderson - 0324, Central African Republic",
    5 + "kg",
    "Bulk",
    "Invoice",
    "InTransit"
  ),
  createData(
    9,
    "630745",
    "Madelyn Woods",
    "Mrs. Madelyn Woods, Fairfield  2525, Lyon - 6460, Korea, North",
    45 + "kg",
    "Bulk",
    "Invoice",
    "UnDeliverd"
  ),
  createData(
    10,
    "233234",
    "Cara Reynolds",
    "Mrs. Cara Reynolds, Lincoln 3001, Venice - 8061, Kyrgyzstan",
    0.3 + "kg",
    "Retail",
    "Paid",
    "UnDeliverd"
  ),
  createData(
    11,
    "237593",
    "Nick Walton",
    "Mr. Nick Walton, Unwin  6947, St. Louis - 6607, Togo",
    0.8 + "kg",
    "Retail",
    "CashOnDelivery",
    "Delivered"
  ),
  createData(
    12,
    "667071",
    "Gwenyth Buckley",
    "Mrs. Gwenyth Buckley, Blanchard  2566, Pittsburgh - 2071, Fiji",
    10 + "kg",
    "Bulk",
    "Invoice",
    "InTransit"
  ),
  createData(
    13,
    "969969",
    "Johnathan Isaac",
    "Mr. Johnathan Isaac, Thoresby   5619, Santa Ana - 0765, Nigeria",
    0.5 + "kg",
    "Retail",
    "CashOnDelivery",
    "UnDeliverd"
  ),
  createData(
    14,
    "716539",
    "Doris Knight",
    "Ms. Doris Knight, Eldon  2417, Henderson - 7173, Malawi",
    0.1 + "kg",
    "Retail",
    "Paid",
    "Delivered"
  ),
  createData(
    15,
    "755968",
    "Eileen Truscott",
    "Mrs. Eileen Truscott, Vine  8883, Paris - 0678, Namibia",
    0.7 + "kg",
    "Retail",
    "CashOnDelivery",
    "InTransit"
  ),
];

const AllOrders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    setSelectedRows(rows);
  }, []);

  const search = () => {
    setSelectedRows(rows.filter((row) => !row.code.indexOf(searchKey.trim())));
  };

  const refresh = () => {
    setSelectedRows(rows);
    setSearchKey("");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className=" rounded-lg  mt-3 mx-0 px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
        <header className="font-contentFont text-2xl my-4 font-bold text-prussianBlue ">
          ALL ORDER DETAILS
        </header>

        <div className="rounded-xl   mt-8 mx-0 px-3 py-3 text-center border-0  shadow-md bg-white ">
          <div className="rounded-lg flex bg-gray-100">
            <div className="flex-initial  text-center  ml-4 mt-4 py-2 m-2">
              Search Order ID:
            </div>
            <div className="flex-initial px-0 py-2 m-2">
              <input
                className="ml-0 mt-0  border-1 bg-gray-200 appearance-none border-2 border-gamboge rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-halloweenOrange"
                id="inline-full-name"
                type="text"
                name="searchKey"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              ></input>
            </div>

            <div className=" flex-initial px-0 py-2 m-2">
              <button
                className="bg-gamboge hover:bg-halloweenOrange text-white font-bold py-2 px-4 rounded-full"
                onClick={search}
              >
                Search
              </button>
            </div>

            <div className="text-black  px-0 py-0 m-4">
              <Icon
                className="text-gray-500  hover:text-halloweenOrange"
                onClick={refresh}
              >
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
                  {selectedRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
    </div>
  );
};
export default AllOrders;
