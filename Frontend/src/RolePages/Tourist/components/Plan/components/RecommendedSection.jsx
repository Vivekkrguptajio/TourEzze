import React from "react";

export default function RecommendedSection({ recommended }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5">
      <h3 className="text-sm font-semibold mb-3">Recommended For You</h3>

      <div className="space-y-2 text-sm">
        {recommended.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-gray-50 rounded-xl border px-3 py-2"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-[11px] text-gray-500">
                {item.type} • {item.description}
              </p>
              <p className="text-[11px] text-gray-600">
                {item.price} • ⭐ {item.rating}
              </p>
            </div>

            <button className="px-3 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-700 text-xs">
              Add
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
