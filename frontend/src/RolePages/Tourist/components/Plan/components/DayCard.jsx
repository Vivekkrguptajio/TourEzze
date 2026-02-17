import React from "react";
import { Sun, Clock, MapPin, IndianRupee } from "lucide-react";

// Helper → object aaye to string banado
const safeText = (value) => {
  if (!value) return "N/A";
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();
  if (typeof value === "object") {
    return value.name || value.description || JSON.stringify(value);
  }
  return String(value);
};

export default function DayCard({ day, index }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">
      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs text-gray-500">Day {day.day || index + 1}</p>
          <h3 className="text-lg font-semibold text-gray-800">{safeText(day.title)}</h3>
        </div>

        <div className="text-right text-[11px] text-gray-600 space-y-1">
          <div className="flex justify-end items-center gap-1">
            <Clock size={14} /> {safeText(day.startTime)}
          </div>
          <div className="flex justify-end items-center gap-1">
            <Sun size={14} /> {safeText(day.bestTime)}
          </div>
          <div className="flex justify-end items-center gap-1">
            <MapPin size={14} /> {safeText(day.travelTime)}
          </div>
          <div className="flex justify-end items-center gap-1">
            <IndianRupee size={14} /> {safeText(day.fee)}
          </div>
        </div>

      </div>

      {day.weather && (
        <p className="text-xs mt-1 text-gray-500">Weather: {safeText(day.weather)}</p>
      )}

      <p className="text-xs font-semibold mt-3 text-gray-700">Activities</p>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {day.activities?.map((a, i) => (
          <li key={i}>{safeText(a)}</li>
        ))}
      </ul>

      <div className="mt-4 flex gap-3">
        <button className="px-4 py-2 rounded-full bg-emerald-600 text-white text-xs">
          View Details
        </button>
        <button className="px-4 py-2 rounded-full border text-xs">
          AR/VR Preview
        </button>
      </div>

    </div>
  );
}
