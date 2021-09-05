import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 10000 },
  { name: "Feb", uv: 8000 },
  { name: "Mar", uv: 40000 },
  { name: "Apr", uv: 10000 },
  { name: "May", uv: 18900 },
  { name: "Jun", uv: 23900 },
  { name: "July", uv: 34900 },
];

const RevenueChart = () => {
  return (
    <div className="w-full p-4 pt-5 mb-4 h-96 bg-white shadow-2xl">
      <div className="w-full m-auto h-full ">
        <h1 className="text-center font-bold font-sans">Revenue</h1>
        <div className="w-full m-auto h-4/5 ">
          <div style={{ width: "100%" }}>
            <ResponsiveContainer width="100%" height={300} >
              <LineChart
                width={550}
                height={200}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  connectNulls
                  type="monotone"
                  dataKey="uv"
                  stroke="#042B58"
                  fill="#042B58"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
