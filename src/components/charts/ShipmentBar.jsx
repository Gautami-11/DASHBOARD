import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

const ShipmentBar = ({ data }) => (
  <div className="bg-white p-4 rounded shadow-2xl">
    <h3 className="text-blue-700 font-semibold mb-2">Gender-wise Shipment Count</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="mode" />
        <Bar dataKey="Male" fill="#093FB4" />
        <Bar dataKey="Female" fill="#F05A7E" />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ShipmentBar;
