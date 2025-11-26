import React from "react";

export default function StatsCard({ icon, label, value, sub }) {
  return (
    <div className="p-5 bg-white rounded-xl border flex items-center gap-4 shadow-sm">
      <div className="text-green-700 text-2xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h2 className="text-xl font-bold text-green-700">{value}</h2>
        <p className="text-xs text-gray-400">{sub}</p>
      </div>
    </div>
  );
}
