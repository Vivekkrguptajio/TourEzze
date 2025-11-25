import { MapPin } from "lucide-react";

export default function JourneyRoute({ route = [] }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-green-900 mb-4">
        Your Journey Route
      </h2>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-6">
          {route.map((stop, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Step Node */}
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center bg-green-700 text-white h-10 w-10 rounded-full font-semibold">
                  {index + 1}
                </div>
                <p className="text-sm mt-1 font-medium">{stop.name}</p>
                {stop.time && (
                  <p className="text-xs text-gray-600 mt-1">{stop.time}</p>
                )}
              </div>

              {/* Arrow (skip last item) */}
              {index !== route.length - 1 && (
                <p className="text-gray-600 font-semibold">→</p>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="flex gap-12 mt-6 text-sm">
          <div className="text-center">
            <p className="text-green-700 text-xl font-bold">
              {route.length}
            </p>
            <p className="text-gray-600">Destinations</p>
          </div>

          <div className="text-center">
            <p className="text-green-700 text-xl font-bold">~6h</p>
            <p className="text-gray-600">Total Travel</p>
          </div>

          <div className="text-center">
            <p className="text-green-700 text-xl font-bold">~255km</p>
            <p className="text-gray-600">Distance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
