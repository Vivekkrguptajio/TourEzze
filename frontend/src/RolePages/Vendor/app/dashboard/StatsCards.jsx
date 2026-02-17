import React from "react";
import { Box, ShoppingBasket, CheckCircle2, DollarSign, AlertTriangle, ShieldCheck } from "lucide-react";

const stats = [
  { title: "Total Products", value: 47, icon: Box },
  { title: "New Orders Today", value: 12, icon: ShoppingBasket },
  { title: "Completed Orders", value: 234, icon: CheckCircle2 },
  { title: "Monthly Revenue", value: "₹1,26,500", icon: DollarSign },
  { title: "Low Stock Alerts", value: 5, icon: AlertTriangle },
  { title: "Verification Status", value: "Verified", icon: ShieldCheck },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {stats.map((s, i) => (
        <div key={i} className="bg-white border rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
              <s.icon size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">{s.title}</p>
              <p className="font-bold text-lg">{s.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
