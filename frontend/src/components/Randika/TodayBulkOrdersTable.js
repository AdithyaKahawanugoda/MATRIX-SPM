import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  table: {
    minWidth: 30,
    fontWeight: "bold",
  },
});

function createData(PID, Qty, NetTot) {
  return { PID, Qty, NetTot };
}

const rows = [
  createData("B567", 50, 5000.0),
  createData("Bg678", 20, 40589.0),
  createData("B678", 100, 3500.0),
  createData("Bh456", 200, 4850.0),
];

const makeAlert = () => {
  alert("done");
};

const TodayBulkOrdersTable = () => {
  const classes = useStyles();
  return (
    <div className="w-full pt-1 h-96 mb-5 bg-white shadow-2xl">
      <div className="w-full m-auto h-full  pt-10">
        <h1 className="text-center font-bold font-sans pl-3 pr-3">
          Today Bulk Orders
        </h1>
        <IconButton
          aria-label="settings"
          style={{ float: "right" }}
          onClick={() => {
            makeAlert();
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <div className="w-full m-auto h-4/5 p-5">
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>PID</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>NetTot</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.PID}</TableCell>
                    <TableCell align="left">{row.Qty}</TableCell>
                    <TableCell align="left">{row.NetTot}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default TodayBulkOrdersTable;
