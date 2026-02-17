import React from "react";
import { MapPin } from "lucide-react";

export default function UpcomingTourItem({ name, date, tourists, status }) {
  return (
    <div className="bg-white p-4 border rounded-xl shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-3">
        <MapPin className="text-green-700" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500">{tourists} tourists</span>
        <span
          className={`px-3 py-1 text-xs rounded ${
            status === "confirmed"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>
        <button className="text-xs px-3 py-1 border rounded hover:bg-gray-100">
          View Details
        </button>
      </div>
    </div>
  );
}
