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

const WeatherChart = ({
  data,
  title,
  dataKey = "temp",
  strokeColor = "#82ca9d",
  titleColor = "white",
}) => {
  return (
    <div
      style={{
        width: "100%",
        minWidth: 300,       // กำหนดความกว้างขั้นต่ำ
        height: 300,
        marginTop: "1rem",
        marginBottom: "2rem",
      }}
    >
      <h3
        style={{
          textAlign: "left",
          marginBottom: "0.5rem",
          color: titleColor,
        }}
      >
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="day" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", borderColor: "#555" }}
            labelStyle={{ color: "white" }}
            itemStyle={{ color: "white" }}
          />
          <Line type="monotone" dataKey={dataKey} stroke={strokeColor} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
