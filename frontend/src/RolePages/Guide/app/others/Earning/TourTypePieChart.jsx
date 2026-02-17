import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function TourTypePieChart() {
  const data = [
    { name: "Trek Tours", value: 45 },
    { name: "Heritage Walks", value: 25 },
    { name: "Wildlife Tours", value: 20 },
    { name: "Cultural Tours", value: 10 },
  ];

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold mb-3 text-green-800">Revenue by Tour Type</h3>

      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={70} label>
              {data.map((_, i) => (
                <Cell key={i} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
