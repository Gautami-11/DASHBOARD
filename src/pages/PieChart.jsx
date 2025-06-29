import React, { useEffect, useState } from "react";
import Shipmentpie from "../components/charts/Shipmentpie";
import Deliverypie from "../components/charts/Deliverypie";
import rawData from "../data/train_data.json";

const PieChart = () => {
  const [shipmentData, setShipmentData] = useState([]);
  const [deliveryData, setDeliveryData] = useState([]);

  useEffect(() => {
    const limitedData = rawData.slice(0, 100);

   
    const shipmentCounts = ["Road", "Ship", "Flight"].map(mode => ({
      name: mode,
      value: limitedData.filter(d => d.Mode_of_Shipment === mode).length
    }));
    setShipmentData(shipmentCounts);

    
    const deliveryCounts = ["Road", "Ship", "Flight"].map(mode => {
      const total = limitedData.filter(d => d.Mode_of_Shipment === mode).length;
      const onTime = limitedData.filter(
        d => d.Mode_of_Shipment === mode && Number(d["Reached.on.Time_Y.N"]) === 1
      ).length;
      return {
        name: mode,
        value: total === 0 ? 0 : parseFloat(((onTime / total) * 100).toFixed(2))
      };
    });
    setDeliveryData(deliveryCounts);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-9">
      <Shipmentpie shipmentData={shipmentData} />
      <Deliverypie deliveryData={deliveryData} />
    </div>
  );
};

export default PieChart;
