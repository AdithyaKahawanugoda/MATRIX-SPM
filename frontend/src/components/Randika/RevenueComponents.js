import React, { useState } from "react";
import BulkOrders from "./BulkOrders";
import RegularOrders from "./RegularOrders";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    width: 300,
    backgroundColor: "#D3DCDE",
  },
});

const RevenueComponents = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [openRegularOrders, setOpenRegularOrders] = useState(true);

  return (
    <div className="w-full h-auto p-1   ">
      {!openRegularOrders && (
        <div
          className="w-48  h-9 rounded-full bg-gamboge transform hover:scale-110 motion-reduce:transform-none"
          onClick={() => {
            setOpenRegularOrders(true);
          }}
        >
          <h1
            className=" text-lg font-bold text-center m-auto mt-1"
            style={{ color: "white" }}
          >
            View Regular Orders
          </h1>
        </div>
      )}

      {openRegularOrders && (
        <div
          className="w-48  h-9 rounded-full bg-gamboge transform hover:scale-110 motion-reduce:transform-none"
          onClick={() => {
            setOpenRegularOrders(false);
          }}
        >
          <h1
            className=" text-lg font-bold text-center m-auto mt-1"
            style={{ color: "white" }}
          >
            View Bulk Orders
          </h1>
        </div>
      )}
      {/* <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Bulk Orders"
          className="text-2xl"
          onClick={() => {
            setOpenRegularOrders(false);
            setOpenBulkOrders(true);
          }}
        />
        <BottomNavigationAction
          label="Regular Orders"
          onClick={() => {
            setOpenBulkOrders(false);
            setOpenRegularOrders(true);
          }}
        />
      </BottomNavigation> */}

      {!openRegularOrders && <BulkOrders />}
      {openRegularOrders && <RegularOrders />}
    </div>
  );
};

export default RevenueComponents;
