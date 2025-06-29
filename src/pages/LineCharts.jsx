import React, { useEffect, useState } from 'react';
import PurchaseLine from '../components/charts/PurchaseLine';
import DiscountLine from '../components/charts/DiscountLine';
import data from "../data/train_data.json";

const LineCharts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data.slice(0, 100));
  }, []);

  // PurchaseLine data
  const purchaseRatingData = [...new Set(chartData.map(d => Number(d["Prior_purchases"])))]
    .map(p => {
      const filtered = chartData.filter(d => Number(d["Prior_purchases"]) === p);
      const avgRating =
        filtered.reduce((a, c) => a + Number(c["Customer_rating"]), 0) /
        (filtered.length || 1);
      return { Prior: p, Rating: parseFloat(avgRating.toFixed(2)) };
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-6">
      <DiscountLine data={chartData} />
      <PurchaseLine data={purchaseRatingData} />
    </div>
  );
};

export default LineCharts;
