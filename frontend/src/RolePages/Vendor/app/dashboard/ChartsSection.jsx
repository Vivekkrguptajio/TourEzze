import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function ChartsSection() {
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
  ];

  const categoryData = [
    { name: "Handicrafts", revenue: 45000 },
    { name: "Tribal Art", revenue: 32000 },
    { name: "Food Items", revenue: 25000 },
    { name: "Souvenirs", revenue: 18000 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

      {/* Sales Trend Line Chart */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          📈 Sales Trend (Last 6 Months)
        </h2>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#16a34a"
                strokeWidth={3}
                dot={{ r: 5, fill: "#16a34a" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue by Category Bar Chart */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          💰 Revenue by Category
        </h2>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#fb923c" barSize={45} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
