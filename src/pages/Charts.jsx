// src/pages/Charts.jsx
import React, { useEffect, useState } from 'react';
import data from '../data/train_data.json';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area,
  ScatterChart, Scatter, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend
} from 'recharts';

const Charts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Limit to first 100 rows for performance
    setChartData(data.slice(0, 100));
  }, []);

  // Pie: Mode of Shipment distribution
  const shipmentData = ['Road', 'Ship', 'Flight'].map(mode => ({
    name: mode,
    value: chartData.filter(d => (d["Mode_of_Shipment"] || "") === mode).length
  }));

  // Bar: Customer Ratings
  const ratingData = [...Array(5)].map((_, i) => ({
    rating: i + 1,
    count: chartData.filter(d => Number(d["Customer_rating"]) === i + 1).length
  }));

  // Bar: Gender-wise Shipment
  const genderShipmentData = ['Road', 'Ship', 'Flight'].map(mode => ({
    mode,
    Male: chartData.filter(
      d => (d["Mode_of_Shipment"] || "") === mode && (d["Gender"] || "") === 'M'
    ).length,
    Female: chartData.filter(
      d => (d["Mode_of_Shipment"] || "") === mode && (d["Gender"] || "") === 'F'
    ).length
  }));

  // Line: Prior Purchases vs Avg Rating
  const purchaseRatingData = [
    ...new Set(chartData.map(d => Number(d["Prior_purchases"])))
  ].map(p => {
    const filtered = chartData.filter(d => Number(d["Prior_purchases"]) === p);
    const avgRating =
      filtered.reduce((acc, cur) => acc + Number(cur["Customer_rating"]), 0) /
      (filtered.length || 1);
    return { Prior: p, Rating: parseFloat(avgRating.toFixed(2)) };
  });

  // Bar: Avg Cost by Product Importance
  const importanceCostData = ['low', 'medium', 'high'].map(level => {
    const filtered = chartData.filter(
      d => (d["Product_importance"] || "") === level
    );
    const avgCost =
      filtered.reduce((acc, cur) => acc + Number(cur["Cost_of_the_Product"]), 0) /
      (filtered.length || 1);
    return { level, avgCost: parseFloat(avgCost.toFixed(2)) };
  });

  // Pie: Delivery Rate by Mode
  const deliveryRate = ['Road', 'Ship', 'Flight'].map(mode => {
    const total = chartData.filter(d => (d["Mode_of_Shipment"] || "") === mode).length;
    const onTime = chartData.filter(
      d =>
        (d["Mode_of_Shipment"] || "") === mode &&
        Number(d["Reached.on.Time_Y.N"]) === 1
    ).length;
    return {
      name: mode,
      value: total === 0 ? 0 : parseFloat(((onTime / total) * 100).toFixed(2))
    };
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {/* Pie - Shipment */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Mode of Shipment</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={shipmentData} dataKey="value" nameKey="name" fill="#3B82F6" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar - Ratings */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Customer Ratings</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ratingData}>
            <XAxis dataKey="rating" />
            <Bar dataKey="count" fill="#6366F1" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bar - Gender vs Shipment */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Gender-wise Shipment Count</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={genderShipmentData}>
            <XAxis dataKey="mode" />
            <Bar dataKey="Male" fill="#3B82F6" />
            <Bar dataKey="Female" fill="#93C5FD" />
            <Tooltip />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line - Discount vs Delivery */}
      <div className="bg-white p-4 rounded shadow col-span-1 md:col-span-2">
        <h3 className="text-blue-700 font-semibold mb-2">Discount vs Delivery</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="ID" />
            <Line dataKey="Discount_offered" stroke="#3B82F6" />
            <Line dataKey="Reached.on.Time_Y.N" stroke="#60A5FA" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Line - Prior Purchases vs Avg Rating */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Prior Purchases vs Avg Rating</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={purchaseRatingData}>
            <XAxis dataKey="Prior" />
            <Line dataKey="Rating" stroke="#4F46E5" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar - Avg Cost by Product Importance */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Avg Cost by Product Importance</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={importanceCostData}>
            <XAxis dataKey="level" />
            <Bar dataKey="avgCost" fill="#1D4ED8" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Area - Weight Distribution */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Weight Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={chartData}>
            <XAxis dataKey="ID" />
            <Area dataKey="Weight_in_gms" fill="#BFDBFE" stroke="#3B82F6" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Scatter - Weight vs Discount */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Weight vs Discount</h3>
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart>
            <XAxis dataKey="Discount_offered" />
            <YAxis dataKey="Weight_in_gms" />
            <Scatter data={chartData} fill="#60A5FA" />
            <Tooltip />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Donut - Delivery Rate by Mode */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-blue-700 font-semibold mb-2">Delivery Rate by Mode (%)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={deliveryRate}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#3B82F6"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;
