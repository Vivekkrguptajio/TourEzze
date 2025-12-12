import React from "react";

export default function EarningsTrendChart() {
  const data = [22000, 33000, 45000, 39000, 52000, 60000];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm">
      <h3 className="font-semibold mb-4 flex items-center gap-1">
        💰 Earnings Trend
      </h3>

      <svg width="100%" height="180">
        {data.map((value, index) => {
          const nextValue = data[index + 1];
          if (nextValue === undefined) return null;

          return (
            <line
              key={index}
              x1={index * 60}
              y1={160 - value / 500}
              x2={(index + 1) * 60}
              y2={160 - nextValue / 500}
              stroke="#f97316"
              strokeWidth="3"
            />
          );
        })}
      </svg>

      <div className="flex justify-between text-xs text-gray-500 mt-2">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}
