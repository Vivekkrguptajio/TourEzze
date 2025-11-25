// componentsEvents/EventsCategoryBar.jsx
import React from "react";
import {
  Calendar,
  Palette,
  Globe2,
  Sun,
  Store,
  Church,
  Music,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

export default function EventsCategoryBar({ selected, onSelect }) {
  const categories = [
    { id: "All", label: "All", icon: Calendar },
    { id: "Cultural", label: "Cultural Festivals", icon: Palette },
    { id: "Tribal", label: "Tribal Dance & Art", icon: Globe2 },
    { id: "Seasonal", label: "Seasonal Events", icon: Sun },
    { id: "Fairs", label: "Local Fairs", icon: Store },
    { id: "Religious", label: "Religious Events", icon: Church },
    { id: "Music", label: "Music & Performances", icon: Music },
    { id: "Food", label: "Food Festivals", icon: UtensilsCrossed },
    { id: "Workshops", label: "Workshops & Exhibitions", icon: Sparkles },
  ];

  return (
    <div className="w-full bg-white py-3 sticky top-[72px] z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {categories.map(({ id, label, icon: Icon }) => {
            const active = selected === id;
            return (
              <button
                key={id}
                onClick={() => onSelect(id)}
                className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap rounded-full border text-sm font-medium transition-all
                  ${
                    active
                      ? "bg-orange-500 text-white border-orange-500 shadow-md"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
