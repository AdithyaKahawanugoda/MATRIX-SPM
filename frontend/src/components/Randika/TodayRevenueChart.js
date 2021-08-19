import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  shape: {
    backgroundColor: "#042B58",
    width: 20,
    height: 20,
    borderRadius: "50%",
  },
  shape2: {
    backgroundColor: "#EA2300",
    width: 20,
    height: 20,
    borderRadius: "50%",
  },
}));

const TodayRevenue = () => {
  const classes = useStyles();
  const circle1 = <div className={clsx(classes.shape)} />;
  const circle2 = <div className={clsx(classes.shape2)} />;

  const data = [
    { name: "Regular Orders", value: 800 },
    { name: "Bulk Orders", value: 300 },
  ];
  const COLORS = ["#042B58", "#EA2300"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full pt-4 h-full">
      <div className="w-4/5 m-auto h-full bg-white shadow-2xl">
        <h1 className="text-center font-bold font-sans">Today Orders</h1>
        <div className="w-full m-auto h-48">
          <PieChart width={800} height={400} style={{ margin: "auto" }}>
            <Pie
              data={data}
              cx={140}
              cy={100}
              innerRadius={30}
              outerRadius={80}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              style={{ margin: "auto" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="m-1 h-11">
          <div style={{ float: "left", marginRight: "5px" }}>{circle1}</div>
          <div style={{ float: "left" }}>Regular Orders</div>

          <br />
          <div style={{ float: "left", marginRight: "5px" }}>{circle2}</div>
          <div style={{ float: "left" }}>Bulk Orders</div>
        </div>
        <Divider />
        <div className="h-14 p-4 text-center">
          <h5>Today Revenue : 44090.00</h5>
        </div>
        <Divider />
        <div className="p-1 h-3">
          <h5 className="text-center">Last Day : 55090.00</h5>
        </div>
      </div>
    </div>
  );
};

export default TodayRevenue;
