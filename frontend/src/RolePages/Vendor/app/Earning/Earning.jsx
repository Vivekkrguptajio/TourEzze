import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  IndianRupee,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const earningsData = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 18500 },
  { month: "Mar", amount: 21000 },
  { month: "Apr", amount: 19500 },
  { month: "May", amount: 26000 },
  { month: "Jun", amount: 24000 },
];

const dailyBookings = [
  { day: "Mon", value: 12 },
  { day: "Tue", value: 9 },
  { day: "Wed", value: 15 },
  { day: "Thu", value: 11 },
  { day: "Fri", value: 18 },
  { day: "Sat", value: 20 },
  { day: "Sun", value: 7 },
];

const payouts = [
  { id: "#TRX9843", date: "12 Nov 2025", amount: 8200, status: "Completed" },
  { id: "#TRX9721", date: "05 Nov 2025", amount: 5400, status: "Completed" },
  { id: "#TRX9634", date: "28 Oct 2025", amount: 7600, status: "Processing" },
];

export default function Earning() {
  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Earnings</h1>
          <p className="text-gray-500">
            Track your revenue, payouts and performance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
          <button className="flex items-center gap-2 bg-white border rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
            <Download size={16} />
            Download Report
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Earnings */}
        <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Total Earnings</p>
            <Wallet className="text-green-600" size={20} />
          </div>
          <h2 className="text-2xl font-bold flex items-center gap-1">
            <IndianRupee size={18} />
            1,24,500
          </h2>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <ArrowUpRight size={14} />
            <span>+18% vs last month</span>
          </div>
        </div>

        {/* This Month */}
        <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <p className="text-gray-500 text-sm">This Month</p>
          <h2 className="text-2xl font-bold flex items-center gap-1">
            <IndianRupee size={18} />
            26,000
          </h2>
          <p className="text-xs text-gray-500">From 34 completed orders</p>
        </div>

        {/* Pending Payout */}
        <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <p className="text-gray-500 text-sm">Pending Payout</p>
          <h2 className="text-2xl font-bold flex items-center gap-1">
            <IndianRupee size={18} />
            8,200
          </h2>
          <div className="flex items-center gap-1 text-xs text-orange-500">
            <ArrowDownRight size={14} />
            <span>Will be released in 2–3 days</span>
          </div>
        </div>

        {/* Avg. Order Value */}
        <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <p className="text-gray-500 text-sm">Avg. Order Value</p>
          <h2 className="text-2xl font-bold flex items-center gap-1">
            <IndianRupee size={18} />
            720
          </h2>
          <p className="text-xs text-gray-500">Based on last 30 days</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Overview */}
        <div className="bg-white border rounded-xl shadow-sm p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg">Earnings Overview</h3>
              <p className="text-gray-500 text-sm">
                Monthly revenue trend (₹)
              </p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earningsData} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(v) => `₹${v}`} />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#16a34a"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Bookings */}
        <div className="bg-white border rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-lg mb-1">Bookings This Week</h3>
          <p className="text-gray-500 text-sm mb-4">
            Number of confirmed bookings per day
          </p>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyBookings} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Payouts Table */}
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Recent Payouts</h3>
          <button className="text-sm text-green-700 hover:underline">
            View all
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Transaction ID</th>
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((p) => (
                <tr key={p.id} className="border-b last:border-0">
                  <td className="py-2">{p.id}</td>
                  <td className="py-2 text-gray-600">{p.date}</td>
                  <td className="py-2 font-semibold flex items-center gap-1">
                    <IndianRupee size={14} />
                    {p.amount}
                  </td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        p.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
