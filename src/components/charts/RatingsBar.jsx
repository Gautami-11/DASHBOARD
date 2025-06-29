import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const RatingsBar = ({ data }) => {
  const ratings = [1, 2, 3, 4, 5];
  const ratingCounts = ratings.map(r => ({
    rating: r,
    count: data.filter(d => Number(d.Customer_rating) === r).length
  }));

  // Define colors for each bar
  const COLORS = ["#EF4444", "#F97316", "#EAB308", "#10B981", "#3B82F6"];

  return (
    <div className="bg-white p-4 rounded shadow-2xl">
      <h3 className="text-pink-800 font-semibold mb-2">Customer Rating Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={ratingCounts}>
          <XAxis dataKey="rating" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count">
            {ratingCounts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsBar;
