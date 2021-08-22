import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import ReplyIcon from "@material-ui/icons/Reply";
import RefreshIcon from "@material-ui/icons/Refresh";
import ReplyInquiriesModal from "./modals/ReplyInquiriesModal";

const columns = [
  { id: "no", label: "No", minWidth: 15 },
  { id: "code", label: "ID", minWidth: 30 },
  { id: "customerEmail", label: "CustomerEmail", minWidth: 50 },
  { id: "mobileNo", label: "Mobile Number", minWidth: 60 },
  { id: "message", label: "Message", minWidth: 390 },
  { id: "action", label: "Action", minWidth: 80 },
];

function createData(no, code, customerEmail, mobileNo, message, action) {
  return {
    no,
    code,
    customerEmail,
    mobileNo,
    message,
    action,
  };
}

const rows = [
  createData(
    1,
    "000001",
    "Matt_Rogan7179@famism.biz",
    "8-786-525-8581",
    "Where are My Parcel?"
  ),
  createData(
    2,
    "000002",
    "Liam_Clarke7498@cispeto.com",
    "2-322-777-7485",
    "How many Days wants to send a parcel to Jaffna"
  ),
  createData(
    3,
    "000003",
    "Jennifer_Mooney3434@dionrab.com",
    "4-886-276-6527",
    "How colud I confirm my order status?"
  ),
  createData(
    4,
    "000004",
    "Grace_Abbey8255@hourpy.biz",
    "8-125-742-0012",
    "How to Process bulk Orders?"
  ),
  createData(
    5,
    "000005",
    "Rick_Hamilton5771@bungar.biz",
    "5-188-381-4555",
    "How many Days wants to send a parcel to tangalle"
  ),
  createData(
    6,
    "000006",
    "Anthony_Jarvis8407@bungar.biz",
    "0-741-362-0676",
    "Where are My Parcel?"
  ),
  createData(
    7,
    "000007",
    "Bob_Wilkinson1080@vetan.org",
    "6-887-584-8070",
    "How to Process bulk Orders?"
  ),
  createData(
    8,
    "000008",
    "Denis_Wallace1391@nimogy.biz",
    "2-367-445-7772",
    "How many Days wants to send a parcel to Moratuwa"
  ),
  createData(
    9,
    "000009",
    "Sebastian_Price9722@nimogy.biz",
    "4-870-482-1241",
    "Where are My Parcel?"
  ),
  createData(
    10,
    "000010",
    "Ron_Baker1834@ovock.tech",
    "6-071-220-2308",
    "How to Process bulk Orders?"
  ),
  createData(
    11,
    "000011",
    "Ron_Jefferson7490@bungar.biz",
    "7-277-802-3044",
    "How to Process bulk Orders?"
  ),
  createData(12, "000012", "Johnny_Moore2148@qater.org", "6-271-263-1756", ""),
  createData(
    13,
    "000013",
    "Matt_Donnelly4839@joiniaa.com",
    "7-163-220-5741",
    ""
  ),
  createData(
    14,
    "000014",
    "Emerald_Lynch9064@ubusive.com",
    "7-103-045-0858",
    ""
  ),
  createData(
    15,
    "000015",
    "Lucas_Irwin3238@womeona.net",
    "0-011-275-3223",
    "How many Days wants to send a parcel to Jaffna"
  ),
];

const InquiriesManagement = () => {
  const [replyInquiriesOpen, setReplyInquiriesOpen] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
          <header class="font-contentFont text-4xl mb-0 font-bold text-prussianBlue ">
            CUSTOMER INQUIRIES MANAGEMENT
          </header>
        </Paper>
      </Grid>

      <div class=" rounded-lg  mt-3 mx-0 px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
        <div class="rounded-xl   mt-0 mx-0 px-3 py-3 text-center border-0  shadow-md bg-white ">
          <div class="rounded-lg flex bg-gray-100">
            <div class="flex-initial  text-center  ml-4 mt-4 py-2 m-2">
              Search Order ID:
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

          <Paper class="mt-0">
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
                                {column.id === "action" && (
                                  <icon
                                    className="ml-2 hover:text-gamboge"
                                    onClick={() => {
                                      setReplyInquiriesOpen(true);
                                    }}
                                  >
                                    <ReplyIcon />
                                  </icon>
                                )}
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
      {replyInquiriesOpen && (
        <ReplyInquiriesModal
          modalVisible={replyInquiriesOpen}
          setModalVisible={setReplyInquiriesOpen}
        />
      )}
    </div>
  );
};

export default InquiriesManagement;
