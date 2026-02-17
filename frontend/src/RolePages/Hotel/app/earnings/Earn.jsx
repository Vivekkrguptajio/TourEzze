import React from "react";
import { Calendar, ArrowUpRight, Wallet, FileDown, Banknote } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export default function Earn() {
  const stats = [
    {
      label: "Total Revenue",
      value: "₹12.66L",
      sub: "+18% from last month",
      icon: <Wallet size={18} />,
    },
    {
      label: "Net Earnings",
      value: "₹11.39L",
      sub: "After 10% commission",
      icon: <Banknote size={18} />,
    },
    {
      label: "This Month",
      value: "₹2.45L",
      sub: "+22% from Nov",
      icon: <ArrowUpRight size={18} />,
    },
    {
      label: "Next Payout",
      value: "₹65,000",
      sub: "Expected Dec 20",
      icon: <Calendar size={18} />,
    },
  ];

  const chartData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [180000, 200000, 175000, 185000, 190000, 220000],
        fill: true,
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        borderColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

  const settlements = [
    { date: "Dec 10, 2024", type: "Rooms", bookings: 12, amount: "₹85,000", status: "Paid" },
    { date: "Dec 05, 2024", type: "Vehicles", bookings: 18, amount: "₹42,000", status: "Paid" },
    { date: "Nov 30, 2024", type: "Rooms", bookings: 15, amount: "₹78,000", status: "Paid" },
    { date: "Nov 25, 2024", type: "Vehicles", bookings: 22, amount: "₹35,000", status: "Paid" },
    { date: "Dec 15, 2024", type: "Rooms", bookings: 8, amount: "₹65,000", status: "Pending" },
  ];

  return (
    <div className="text-white px-6 pb-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Earnings</h1>
          <p className="text-gray-400 text-sm">Track your revenue and payouts</p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#0a150f] border border-green-900 rounded-lg hover:border-green-500 text-sm">
          <FileDown size={16} /> Download Report
        </button>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#050c08] border border-green-900 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm">{s.label}</p>
              <div className="text-green-400">{s.icon}</div>
            </div>
            <h2 className="text-2xl font-semibold mt-2">{s.value}</h2>
            <p className="text-gray-500 text-xs mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* EARNINGS GRID */}
      <div className="grid lg:grid-cols-[2fr,1fr] gap-6 mt-8">

        {/* LEFT CHART */}
        <div className="bg-[#050c08] border border-green-900 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Monthly Earnings</h3>
          <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>

        {/* RIGHT COMMISSION BOX */}
        <div className="bg-[#050c08] border border-green-900 rounded-xl p-6">
          <h3 className="font-semibold mb-3">Commission Breakdown</h3>

          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <p>Gross Revenue</p>
              <p className="text-gray-300">₹12,66,000</p>
            </div>

            <div className="flex justify-between text-red-400">
              <p>Platform Commission (10%)</p>
              <p>-₹1,26,600</p>
            </div>

            <div className="flex justify-between border-t border-green-800 pt-2 font-semibold text-green-400">
              <p>Net Earnings</p>
              <p>₹11,39,400</p>
            </div>

            <h4 className="mt-4 font-semibold text-gray-300">Earnings by Type</h4>
            <div className="flex justify-between text-sm">
              <p>🛏 Rooms</p>
              <p>₹8,45,000</p>
            </div>

            <div className="flex justify-between text-sm">
              <p>🚗 Vehicles</p>
              <p>₹4,21,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* SETTLEMENT HISTORY */}
      <div className="bg-[#050c08] border border-green-900 rounded-xl mt-8 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Settlement History</h3>
          <button className="px-3 py-1 text-sm bg-green-900/40 border border-green-700 rounded-lg text-green-300">
            Weekly Payouts
          </button>
        </div>

        <div className="grid grid-cols-5 text-gray-400 text-sm border-b border-green-900 pb-2 mb-2">
          <p>Date</p>
          <p>Type</p>
          <p>Bookings</p>
          <p>Amount</p>
          <p>Status</p>
        </div>

        {settlements.map((s, i) => (
          <div key={i} className="grid grid-cols-5 text-sm py-3 border-b border-green-900 last:border-0">
            <p>{s.date}</p>
            <p>{s.type === "Rooms" ? "🛏 Rooms" : "🚗 Vehicles"}</p>
            <p>{s.bookings}</p>
            <p className="text-green-400">{s.amount}</p>
            <p>
              <span
                className={`px-3 py-1 rounded-lg text-xs ${
                  s.status === "Paid"
                    ? "bg-green-900 text-green-300 border border-green-700"
                    : "bg-yellow-900 text-yellow-300 border border-yellow-700"
                }`}
              >
                {s.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
