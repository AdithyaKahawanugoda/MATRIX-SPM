import React, { useEffect, useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Modal } from "react-responsive-modal";
import moment from "moment";

import { Image } from "cloudinary-react";

const useStyles = makeStyles({
  table: {
    minWidth: 30,
    fontWeight: "bold",
  },
});

const SalesModal = ({ setModalVisible, modalVisible, currentBook }) => {
  const classes = useStyles();
  const [regularOrders, setregularOrders] = useState([]);
  const getRegularOrders = async () => {
    try {
      await axios
        .get("http://localhost:6500/matrix/api/admin/getRegularOrders")
        .then((res) => {
          let temp = [];

          for (let i = 0; i < res.data.orders.length; i++) {
            if (currentBook === res.data.orders[i].productID) {
              temp.push(res.data.orders[i]);
            }
          }
          setregularOrders(temp);
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (err) {
      alert("error :" + err);
    }
  };

  useEffect(() => {
    getRegularOrders();
  }, []);

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
      <div className="w-full pt-4 h-auto mb-5 bg-white shadow-2xl">
        <div className="w-full4/5 m-auto h-full  pt-3">
          <div className="w-full m-auto h-4/5 p-5">
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead className="bg-prussianBlue font-white">
                  <TableRow>
                    <TableCell align="center" style={{ color: "white" }}>
                      Index
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                    Order ID
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Buyer
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {regularOrders.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">
                        <h1 className="font-bold text-md">{row._id}</h1>
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <h1 className="font-bold text-md">{row.buyerID}</h1>
                      </TableCell>
                      <TableCell align="center">
                        <h1 className="font-bold text-md">
                          {moment(row.purchasedDate).format("MM-DD-YYYY")}
                        </h1>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SalesModal;
