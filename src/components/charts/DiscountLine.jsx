import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const DiscountLine = ({ data }) => (
  <div className="bg-white  dark:bg-gray-200 p-4 rounded shadow-2xl col-span-1 md:col-span-2">
    <h3 className="text-blue-400 font-semibold mb-2">Discount vs. On-Time Delivery</h3>
    
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="ID" tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip
          formatter={(value, name) => {
            if (name === "Discount_offered") return [`${value}%`, "Discount Offered"];
            if (name === "Reached.on.Time_Y.N") return [value === 1 ? "Yes" : "No", "On-Time Delivery"];
            return [value, name];
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="Discount_offered"
          stroke="#FF3F33"
          strokeWidth={2}
          dot={{ r: 2 }}
          activeDot={{ r: 5 }}
          name="Discount Offered (%)"
        />
        <Line
          type="monotone"
          dataKey="Reached.on.Time_Y.N"
          stroke="#4435C1"
          strokeWidth={2}
          dot={{ r: 2 }}
          activeDot={{ r: 5 }}
          name="Reached On Time"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default DiscountLine;
