import React from "react";

export default function MonthlyBookingsChart() {
  const data = [12, 18, 26, 20, 28, 32];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm">
      <h3 className="font-semibold mb-4">📅 Monthly Bookings</h3>

      <div className="flex items-end gap-4 h-40">
        {data.map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className="w-8 bg-green-600 rounded"
              style={{ height: `${v * 3}px` }}
            ></div>
            <p className="text-xs text-gray-500">{labels[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
