import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";



const data = [
  {
    month: "Jun",
  
    count: 240,
    
  },
  {
    month: "Feb",
   
    count: 100,
   
  },
  {
    month: "Mar",
   
    count: 980,
    
  },
  {
    month: "Apr",
    
    count: 390,
   
  },
  {
    month: "May",
    
    count: 480,
  
  },
  {
    month: "June",
    
    count: 380,
    
  },
  {
    month: "jun",
   
    count: 430,
  
  },
];

const SalesChart = () => {
  return (
    <div className="w-full pt-10 h-full mb-9">
      <div className="w-4/5 m-auto h-full bg-white shadow-2xl">
        <h1 className="text-center font-bold font-sans">Today Orders</h1>
        <div className="w-full m-auto h-4/5 ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Bar dataKey="count" fill="#8884d8" label={{ position: "top" }}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={"#042B58"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
