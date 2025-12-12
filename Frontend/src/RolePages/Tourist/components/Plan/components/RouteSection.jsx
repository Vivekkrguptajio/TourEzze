import React from "react";
import { Route } from "lucide-react";

export default function RouteSection({ route }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5">
      <div className="flex items-center gap-2 mb-3">
        <Route size={18} className="text-emerald-600" />
        <h3 className="text-sm font-semibold">Your Journey Route</h3>
      </div>

      <div className="flex flex-wrap gap-3 items-center text-xs text-gray-700">
        {route.locations.map((loc, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[11px] font-semibold text-emerald-700">
                {i + 1}
              </div>
              <span className="mt-1">{loc}</span>
            </div>
            {i < route.locations.length - 1 && (
              <span className="text-gray-400">➜</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4 text-xs text-gray-700">
        <div className="bg-gray-50 rounded-xl border px-3 py-2">
          <p className="font-semibold">Stops</p>
          <p className="text-lg">{route.locations.length}</p>
        </div>

        <div className="bg-gray-50 rounded-xl border px-3 py-2">
          <p className="font-semibold">Total Time</p>
          <p className="text-lg">{route.totalTime}</p>
        </div>

        <div className="bg-gray-50 rounded-xl border px-3 py-2">
          <p className="font-semibold">Distance</p>
          <p className="text-lg">{route.totalDistance}</p>
        </div>
      </div>
    </div>
  );
}
