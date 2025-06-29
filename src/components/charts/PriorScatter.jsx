import React from "react";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip } from "recharts";

const PriorScatter = ({ data }) => (
  <div className="bg-white p-4 rounded shadow-2xl">
    <h3 className="text-pink-700 font-semibold mb-2">Prior Purchases vs Cost</h3>
    <ResponsiveContainer width="100%" height={250}>
      <ScatterChart>
        <XAxis dataKey="Prior_purchases" name="Prior Purchases" />
        <YAxis dataKey="Cost_of_the_Product" name="Cost ($)" />
        <Scatter data={data} fill="#EC4899" />
        <Tooltip />
      </ScatterChart>
    </ResponsiveContainer>
  </div>
);

export default PriorScatter;
