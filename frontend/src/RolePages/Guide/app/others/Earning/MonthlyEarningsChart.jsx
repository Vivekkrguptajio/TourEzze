import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function MonthlyEarningsChart() {
  const data = [
    { month: "Jan", earning: 25000 },
    { month: "Feb", earning: 30000 },
    { month: "Mar", earning: 45000 },
    { month: "Apr", earning: 38000 },
    { month: "May", earning: 52000 },
    { month: "Jun", earning: 60000 },
  ];

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold mb-3 text-green-800">
        Monthly Earnings Trend
      </h3>

      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earning" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
