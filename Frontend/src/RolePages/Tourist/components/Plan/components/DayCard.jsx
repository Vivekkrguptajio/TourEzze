import React from "react";
import { Sun, Clock, MapPin, IndianRupee } from "lucide-react";

export default function DayCard({ day, index }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">
      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs text-gray-500">Day {day.day || index + 1}</p>
          <h3 className="text-lg font-semibold text-gray-800">{day.title}</h3>
        </div>

        <div className="text-right text-[11px] text-gray-600 space-y-1">
          <div className="flex justify-end items-center gap-1">
            <Clock size={14} /> {day.startTime}
          </div>
          <div className="flex justify-end items-center gap-1">
            <Sun size={14} /> {day.bestTime}
          </div>
          <div className="flex justify-end items-center gap-1">
            <MapPin size={14} /> {day.travelTime}
          </div>
          <div className="flex justify-end items-center gap-1">
            <IndianRupee size={14} /> {day.fee}
          </div>
        </div>

      </div>

      {day.weather && (
        <p className="text-xs mt-1 text-gray-500">Weather: {day.weather}</p>
      )}

      <p className="text-xs font-semibold mt-3 text-gray-700">Activities</p>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {day.activities?.map((a, i) => (
          <li key={i}>{a}</li>
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
