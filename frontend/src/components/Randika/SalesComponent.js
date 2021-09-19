import React, { useState } from "react";
import TopSelling from "./TopSelling";
import AllSales from "./AllSales";

const SalesComponent = () => {
  const [openAllSales, setOpenAllSales] = useState(true);

  return (
    <div className="w-full h-auto  bg-white">
     <div className="w-full h-8  bg-white ">

     {!openAllSales && (
        <div
          className="w-48  h-9 rounded-full bg-gamboge transform hover:scale-110 motion-reduce:transform-none"
          onClick={() => {
            setOpenAllSales(true);
          }}
        >
          <h1
            className=" text-lg font-bold text-center m-auto mt-1"
            style={{ color: "white" }}
          >
            View All Sales
          </h1>
        </div>
      )}

      {openAllSales && (
        <div
          className="w-48 float-right h-9 rounded-full bg-gamboge transform hover:scale-110 motion-reduce:transform-none"
          onClick={() => {
            setOpenAllSales(false);
          }}
        >
          <h1
            className=" text-lg font-bold text-center m-auto mt-1"
            style={{ color: "white" }}
          >
            View Top Sellings
          </h1>
        </div>
      )}

     </div>

      <div className="pt-8">
        {!openAllSales && <TopSelling />}
        {openAllSales && <AllSales />}
      </div>
    </div>
  );
};

export default SalesComponent;
