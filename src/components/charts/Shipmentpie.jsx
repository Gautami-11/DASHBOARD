import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { useEffect, useState } from "react";

const COLORS = ["#6366F1", "#34D399", "#478CCF"];

const ShipmentPie = ({ shipmentData }) => {
  const [chartHeight, setChartHeight] = useState(500);
  const [outerRadius, setOuterRadius] = useState(150);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight(450);
        setOuterRadius(75);
      } else if (window.innerWidth < 1024) {
        setChartHeight(350);
        setOuterRadius(110);
      } else {
        setChartHeight(500);
        setOuterRadius(150);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white  dark:bg-gray-700 p-4 w-full rounded shadow-2xl">
      <h3 className="text-blue-400 font-semibold mb-2">Mode of Shipment</h3>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <PieChart>
          <Pie
            data={shipmentData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {shipmentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value}`, `${name}`]}
            cursor={{ fill: 'rgba(0,0,0,0.1)' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShipmentPie;