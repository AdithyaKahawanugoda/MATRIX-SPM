import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddDPersonModal from "./modals/AddDPersonModal";
import EditDPersonModal from "./modals/EditDPersonModal";

const columns = [
  { id: "no", label: "No", minWidth: 15 },
  { id: "userId", label: "UserID", minWidth: 30 },
  { id: "name", label: "Name", minWidth: 50 },
  { id: "email", label: "Email", minWidth: 160 },
  { id: "mobile", label: "Mobile", minWidth: 30 },
  { id: "province", label: "Province", minWidth: 100 },
  { id: "password", label: "Password", minWidth: 80 },
  { id: "action_1", label: "Action", minWidth: 80 },
  { id: "action_2", label: "Action", minWidth: 80 },
];

function createData(no, userId, name, email, mobile, province, password) {
  return {
    no,
    userId,
    name,
    email,
    mobile,
    province,
    password,
  };
}

const rows = [
  createData(
    1,
    "000001",
    "Caleb Dixon",
    "Caleb_Dixon3567@gembat.biz",
    "8-388-756-6404",
    "Western Province",
    "***********"
  ),
  createData(
    2,
    "000002",
    "Cristal Cobb",
    "Cristal_Cobb8840@elnee.tech",
    "1-504-781-8546",
    "Western Province",
    "***********"
  ),
  createData(
    3,
    "000003",
    "Cameron Farrant",
    "Cameron_Farrant1250@sveldo.biz",
    "5-250-168-8721",
    "Central Province",
    "***********"
  ),
  createData(
    4,
    "000004",
    "Sydney Holt",
    "Sydney_Holt3367@muall.tech",
    "0-458-773-8183",
    "Eastern Province",
    "***********"
  ),
  createData(
    5,
    "000005",
    "Irene Cavanagh",
    "Irene_Cavanagh1547@liret.org",
    "8-373-371-4615",
    "Eastern Province",
    "***********"
  ),
  createData(
    6,
    "000006",
    "Remy Olson",
    "Remy_Olson1636@twipet.com",
    "1-070-512-6858",
    "Northern Province",
    "***********"
  ),
  createData(
    7,
    "000007",
    "Denny Higgs",
    "Denny_Higgs229@extex.org",
    "0-863-482-2212",
    "Southern Province",
    "***********"
  ),
  createData(
    8,
    "000008",
    "Sebastian Moran",
    "Sebastian_Moran2064@vetan.org",
    "7-017-005-6104",
    "North Western Province",
    "***********"
  ),
  createData(
    9,
    "000009",
    "Liam Morrison",
    "Liam_Morrison1280@deons.tech",
    "0-547-766-2757",
    "North Central  Province",
    "***********"
  ),
  createData(
    10,
    "000010",
    "Nancy John",
    "Nancy_John4685@tonsy.org",
    "3-232-318-0202",
    "Uva Province",
    "***********"
  ),
  createData(
    11,
    "000011",
    "Hazel Chappell",
    "Hazel_Chappell3743@ubusive.com",
    "0-155-226-0280",
    "Sabaragamuwa Province",
    "***********"
  ),
  createData(
    12,
    "000012",
    "Mark Taylor",
    "Mark_Taylor7370@muall.tech",
    "5-245-475-8545",
    "North Central  Province",
    "***********"
  ),
  createData(
    13,
    "000013",
    "Chris Hope",
    "Chris_Hope8136@joiniaa.com",
    "1-337-778-0430",
    "North Central  Province",
    "***********"
  ),
  createData(
    14,
    "000014",
    "Henry Mcneill",
    "Henry_Mcneill7475@fuliss.net",
    "2-571-877-1468",
    "Sabaragamuwa Province",
    "***********"
  ),
  createData(
    15,
    "000015",
    "Johnathan Walker",
    "Johnathan_Walker5564@infotech44.tech",
    "1-517-787-6330",
    "North Western Province",
    "***********"
  ),
];

const DeliveryPersonManagement = () => {
  const [addDPersonOpen, setAddDPersonOpen] = useState(false);
  const [editDPersonOpen, setEditDPersonOpen] = useState(false);
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
            DELIVERY PERSON MANAGEMENT
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

          <div class=" flex flex-row-reverse px-0 m-3">
            <div>
              <button
                class="bg-gamboge hover:bg-halloweenOrange text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                  setEditDPersonOpen(false);
                  setAddDPersonOpen(true);
                }}
              >
                <icons class="mr-4">
                  <AddCircleRoundedIcon />
                </icons>
                ADD NEW USER
              </button>
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
                                {column.id === "action_1" && (
                                  <icon
                                    className="ml-2 hover:text-green-700"
                                    onClick={() => {
                                      setAddDPersonOpen(false);
                                      setEditDPersonOpen(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </icon>
                                )}

                                {column.id === "action_2" && (
                                  <icon className="ml-2 hover:text-ferrariRed">
                                    <DeleteForeverIcon />
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

      {addDPersonOpen && (
        <AddDPersonModal
          modalVisible={addDPersonOpen}
          setModalVisible={setAddDPersonOpen}
        />
      )}
      {editDPersonOpen && (
        <EditDPersonModal
          modalVisible={editDPersonOpen}
          setModalVisible={setEditDPersonOpen}
        />
      )}
    </div>
  );
};

export default DeliveryPersonManagement;
