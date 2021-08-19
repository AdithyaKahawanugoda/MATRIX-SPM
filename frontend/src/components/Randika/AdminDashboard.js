import React from "react";
import NotificationTable from "./NotificationTable";
import RevenueChart from "./RevenueChart";
import SalesChart from "./SalesChart";
import TodayBulkOrdersTable from "./TodayBulkOrdersTable";
import TodayCustomer from "./TodayCustomer";
import TodayRegularOrderTable from "./TodayRegularOrderTable";
import TodayRevenueChart from "./TodayRevenueChart";
import ToDoTable from "./ToDoTable";

const AdminDashboard = () => {
  return (
    <div className="w-full h-auto">
      <div
        className="w-full bg-lightSilver"
        style={{ float: "left", height: "190vh" }}
      >
        {/* row 1 */}
        <div className="w-full h-96">
          <div className="w-1/3 h-96 " style={{ float: "left" }}>
            {" "}
            <TodayRevenueChart />{" "}
          </div>
          <div className="w-1/3 h-96 " style={{ float: "left" }}>
            <TodayCustomer />
          </div>
          <div className="w-1/3 h-96 " style={{ float: "left" }}>
            <ToDoTable />
          </div>
        </div>
        {/* row 1 */}
        {/* row 2 */}
        <div className="w-full h-96">
          <div className="w-1/2 h-96 " style={{ float: "left" }}>
            {" "}
            <RevenueChart />
          </div>
          <div className="w-1/2 h-96 " style={{ float: "left" }}>
            {" "}
            <SalesChart />{" "}
          </div>
        </div>
        {/* row 2 */}
        {/* row 3 */}
        <div className="w-full h-96">
          <div className="w-1/3 h-96 " style={{ float: "left" }}>
            <NotificationTable />
          </div>
          <div className="w-1/3 h-96 " style={{ float: "left" }}>
            <TodayRegularOrderTable />
          </div>
          <div className="w-1/3 h-96 " style={{ float: "left" }}>
            <TodayBulkOrdersTable />
          </div>
        </div>
        {/* row 3 */}
      </div>
    </div>
  );
};

export default AdminDashboard;
