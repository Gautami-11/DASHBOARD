import React, { useRef, useLayoutEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = ["#36C2CE", "#03A6A1", "#478CCF"];

const DeliveryPie = ({ deliveryData }) => {
  const containerRef = useRef(null);
  const [outerRadius, setOuterRadius] = useState(150);
  const [fontSize, setFontSize] = useState(16);

  useLayoutEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width < 400) {
          setOuterRadius(60);
          setFontSize(10);
        } else if (width < 700) {
          setOuterRadius(90);
          setFontSize(12);
        } else {
          setOuterRadius(150);
          setFontSize(16);
        }
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Custom label renderer for better visibility
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 20;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={fontSize}
        style={{ pointerEvents: "none" }}
      >
        {`${name}: ${value}%`}
      </text>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-4 w-full rounded shadow-2xl" ref={containerRef}>
      <h3 className="text-green-300 font-semibold mb-2">On-Time Delivery (%) by Mode</h3>
      <div className="w-full" style={{ minHeight: 250, height: "40vw", maxHeight: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={deliveryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={outerRadius}
              label={renderCustomizedLabel}
              labelLine={true}
            >
              {deliveryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}%`, `${name}`]}
              cursor={{ fill: "rgba(0,0,0,0.1)" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeliveryPie;
