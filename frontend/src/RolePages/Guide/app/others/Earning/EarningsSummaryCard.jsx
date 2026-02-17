import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function EarningsSummaryCard({ title, amount, subtitle, icon }) {
  return (
    <div className="bg-white border p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h2 className="text-2xl font-bold text-green-700 mt-1">{amount}</h2>
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className="p-2 bg-green-100 rounded-md text-green-700">
          {icon ?? <ArrowUpRight size={18} />}
        </div>
      </div>
    </div>
  );
}
