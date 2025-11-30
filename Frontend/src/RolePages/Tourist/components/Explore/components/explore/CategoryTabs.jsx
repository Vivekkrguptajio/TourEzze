import React from "react";
import { TreePine, Landmark, Droplet, PawPrint, Mountain, Sun, Ticket } from "lucide-react";

const categories = [
  { name: "Nature", icon: TreePine },
  { name: "Culture & Heritage", icon: Landmark },
  { name: "Waterfalls", icon: Droplet },
  { name: "Wildlife & Parks", icon: PawPrint },
  { name: "Adventure", icon: Mountain },
  { name: "Religious Places", icon: Sun },
  { name: "Events & Festivals", icon: Ticket },
];

export default function CategoryTabs() {
  return (
    <div className="flex gap-3 overflow-x-auto py-4 px-2">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="flex items-center gap-2 px-4 py-2 border rounded-xl bg-white hover:bg-gray-50 shadow-sm"
        >
          <cat.icon size={18} className="text-green-700" />
          <span className="text-sm font-medium">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
