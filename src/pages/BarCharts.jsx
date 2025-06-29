import React from 'react';
import RatingsBar from '../components/charts/RatingsBar';
import CostBar from '../components/charts/CostBar';
import ShipmentBar from '../components/charts/ShipmentBar';
import data from "../data/train_data.json";

const BarCharts = () => {
  const importanceCostData = ["low", "medium", "high"].map(level => {
    const filtered = data.filter(d => d["Product_importance"] === level);
    const avgCost =
      filtered.reduce((a, c) => a + Number(c["Cost_of_the_Product"]), 0) /
      (filtered.length || 1);
    return { level, avgCost: parseFloat(avgCost.toFixed(2)) };
  });

  const genderShipmentData = ["Road", "Ship", "Flight"].map(mode => ({
    mode,
    Male: data.filter(
      d => d["Mode_of_Shipment"] === mode && d["Gender"] === "M"
    ).length,
    Female: data.filter(
      d => d["Mode_of_Shipment"] === mode && d["Gender"] === "F"
    ).length
  }));

 

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6">
      <CostBar data={importanceCostData} />
      <RatingsBar data={data} />
      <ShipmentBar data={genderShipmentData} />
    </div>
  );
};

export default BarCharts;
