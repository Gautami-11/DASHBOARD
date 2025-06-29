import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const PurchaseLine = ({ data }) => (
  <div className="bg-white dark:bg-gray-200 p-4 rounded shadow-2xl">
    <h3 className="text-blue-700 font-semibold mb-2">Prior Purchases vs. Average Rating</h3>
  
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis
          dataKey="Prior"
          tick={{ fontSize: 12 }}
          label={{ value: "Prior Purchases", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          domain={[0, 5]}
          tick={{ fontSize: 12 }}
          label={{
            value: "Average Rating",
            angle: 90,
            position: "insideLeft",
            offset: 0
          }}
        />
        <Tooltip
          formatter={(value) => [`${value.toFixed(2)}`, "Average Rating"]}
          cursor={{ stroke: "#8884d8", strokeWidth: 1 }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="Rating"
          stroke="#4F46E5"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          name="Avg Rating"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default PurchaseLine;
