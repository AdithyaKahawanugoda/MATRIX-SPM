import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

const TodayCustomer = () => {
  return (
    <div className="w-full pt-4 h-96 mb-5 bg-white shadow-2xl">
      <div className="w-4/5 m-auto h-full ">
        <h1 className="text-center font-bold font-sans">Today New Customers</h1>
        <div className="w-full m-auto h-4/5 ">
          <div className="pt-10 h-4/5" style={{ margin: "auto" }}>
            <Avatar
              style={{ width: "100px", height: "100px", margin: "auto" }}
              src="/broken-image.jpg"
            />
          </div>
          <Divider />
          <div className="h-14 p-4 text-center">
            <h5>Today : 20</h5>
          </div>
          <Divider />
          <div className="p-1 h-3">
            <h5 className="text-center">Last Day : 3</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayCustomer;
