import React from "react";
import Grid from "@material-ui/core/Grid";
import RevenueChart from "../components/Randika/RevenueChart";
import SalesChart from "../components/Randika/SalesChart";
import TodayBulkOrdersTable from "../components/Randika/TodayBulkOrdersTable";
import TodayCustomer from "../components/Randika/TodayCustomer";
import TodayRegularOrderTable from "../components/Randika/TodayRegularOrderTable";
import TodayRevenueChart from "../components/Randika/TodayRevenueChart";
import ToDoTable from "../components/Randika/ToDoTable";

const DeliveryDashboard = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={3}>
          <div className=" m-1">
            <TodayRevenueChart />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className=" m-1 w-full h-auto ">
            {" "}
            <RevenueChart />{" "}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <div className=" m-1 w-full h-auto ">
            <SalesChart />
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className=" m-1">
            <TodayCustomer />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className=" m-1 ">
            <ToDoTable />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className=" m-1">
            {" "}
            <TodayRegularOrderTable />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className=" m-1">
            {" "}
            <TodayBulkOrdersTable />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryDashboard;
