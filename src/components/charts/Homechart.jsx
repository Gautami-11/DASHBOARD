import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Homechart = () => {
  const demandData = [
    { id: 307, label: "Order 307", cost: 243 },
    { id: 308, label: "Order 308", cost: 163 },
    { id: 309, label: "Order 309", cost: 165 },
    { id: 310, label: "Order 310", cost: 266 },
    { id: 311, label: "Order 311", cost: 193 },
  ];

  return (
    <div className="w-full h-64 sm:h-72 md:h-96 bg-white dark:bg-slate-800 rounded-xl  p-2 sm:p-4 shadow-2xl">
      <h2 className="text-base sm:text-lg font-semibold text-center mb-2 sm:mb-4 text-gray-700 dark:text-gray-100">
        Demand Trend Over Orders
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={demandData}>
          <defs>
            <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis
            dataKey="label"
            tick={{
              fill: "var(--label-color, #000)",
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: "var(--label-color, #000)",
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--tooltip-bg, #fff)",
              color: "var(--tooltip-color, #000)",
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          />
          <Area
            type="monotone"
            dataKey="cost"
            stroke="#6366f1"
            fill="url(#colorDemand)"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <style>
        {`
          @media (max-width: 640px) {
            .recharts-wrapper {
              font-size: 10px;
            }
          }
          .dark .recharts-cartesian-axis-tick-value tspan {
            fill: #fff !important;
          }
          .recharts-cartesian-axis-tick-value tspan {
            fill: #000 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Homechart;
