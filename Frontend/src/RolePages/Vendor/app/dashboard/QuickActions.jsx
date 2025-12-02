import React from "react";
import { Plus, Eye, DollarSign, MessageSquare } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Add Product",
      desc: "List a new product for tourists",
      icon: Plus,
      color: "bg-green-700",
    },
    {
      title: "View Orders",
      desc: "Check new customer orders",
      icon: Eye,
      color: "bg-orange-500",
    },
    {
      title: "Check Earnings",
      desc: "View your revenue details",
      icon: DollarSign,
      color: "bg-yellow-500",
    },
    {
      title: "Messages",
      desc: "Respond to customer queries",
      icon: MessageSquare,
      color: "bg-green-600",
    },
  ];

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h2 className="font-semibold text-gray-800 mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {actions.map((a, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl text-white ${a.color} cursor-pointer hover:opacity-95`}
          >
            <a.icon size={28} />
            <h3 className="font-semibold mt-2">{a.title}</h3>
            <p className="text-sm opacity-90">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
