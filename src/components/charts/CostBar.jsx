import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";

// Define colors for each bar
const COLORS = ["#EF4444", "#F97316", "#EAB308"];

const CostBar = ({ data }) => (
  <div className="bg-white p-4 rounded shadow-2xl">
    <h3 className="text-blue-700 font-semibold mb-2">Avg Cost by Product Importance</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="level" />
        <Tooltip />
        <Bar dataKey="avgCost">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CostBar;
