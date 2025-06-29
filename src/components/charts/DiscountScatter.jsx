import React from "react";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip } from "recharts";

const DiscountScatter = ({ data }) => (
  <div className="bg-white p-4 rounded shadow-2xl">
    <h3 className="text-blue-700 font-semibold mb-2">Weight vs Discount</h3>
    <ResponsiveContainer width="100%" height={250}>
      <ScatterChart>
        <XAxis dataKey="Discount_offered" />
        <YAxis dataKey="Weight_in_gms" />
        <Scatter data={data} fill="#60A2F0" />
        <Tooltip />
      </ScatterChart>
    </ResponsiveContainer>
  </div>
);

export default DiscountScatter;
