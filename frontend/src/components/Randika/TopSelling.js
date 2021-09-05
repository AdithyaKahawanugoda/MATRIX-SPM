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
  {
    name: "Jan",
    b101: 10000,
    b102: 8000,
    b103: 5000,

    b106: 10000,

    b110: 20000,
  },
  {
    name: "Feb",
    b101: 8000,
    b102: 4500,
    b103: 8000,
    b106: 20000,
    b110: 8000,
  },
  {
    name: "Mar",
    b101: 20000,
    b102: 6000,
    b103: 4000,

    b106: 8000,

    b110: 8000,
  },
  {
    name: "Apr",
    b101: 10000,
    b102: 4000,
    b103: 3000,
    b106: 7000,
    b110: 9000,
  },
  {
    name: "May",
    b101: 18900,
    b102: 8500,
    b103: 20000,
    b106: 9000,
    b110: 9500,
  },
  {
    name: "Jun",
    b101: 23900,
    b102: 2000,
    b103: 7000,
    b106: 8000,
    b110: 11000,
  },
  {
    name: "July",
    b101: 14900,
    b102: 3000,
    b103: 1000,
    b106: 2000,
    b110: 8000,
  },
];

const TopSelling = () => {
  return (
    <div className="w-4/5 m-auto bg-white shadow-2xl">
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="90%" height={400} className="m-auto">
          <LineChart
            width={500}
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
              dataKey="b101"
              stroke="#000"
              fill="#000"
            />
            <Line
              connectNulls
              type="monotone"
              dataKey="b102"
              stroke="#065774"
              fill="#065774"
            />
            <Line
              connectNulls
              type="monotone"
              dataKey="b103"
              stroke="#D3DCDE"
              fill="#D3DCDE"
            />

            <Line
              connectNulls
              type="monotone"
              dataKey="b106"
              stroke="#EA2300"
              fill="#EA2300"
            />

            <Line
              connectNulls
              type="monotone"
              dataKey="b110"
              stroke="#EF9B0C"
              fill="#EF9B0C"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopSelling;
