import { Clock, MapPin, Ticket, Cloud } from "lucide-react";

export default function DayItineraryCard({
  day,
  title,
  bestTime,
  travelTime,
  entryFee,
  weather,
  activities = [],
  foods = []
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-8 border border-gray-200">
      {/* Title */}
      <h2 className="text-xl font-bold text-green-900">
        Day {day} – {title}
      </h2>

      {/* Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
        <div className="flex gap-2 items-start">
          <Clock className="text-green-700" size={18} />
          <div>
            <p className="font-medium">Best Time</p>
            <p className="text-gray-700">{bestTime}</p>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <MapPin className="text-green-700" size={18} />
          <div>
            <p className="font-medium">Travel Time</p>
            <p className="text-gray-700">{travelTime}</p>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <Ticket className="text-green-700" size={18} />
          <div>
            <p className="font-medium">Entry Fee</p>
            <p className="text-gray-700">{entryFee}</p>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <Cloud className="text-green-700" size={18} />
          <div>
            <p className="font-medium">Weather</p>
            <p className="text-gray-700">{weather}</p>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="mt-6">
        <p className="font-medium mb-2">Activities</p>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          {activities.map((act, idx) => (
            <li key={idx}>{act}</li>
          ))}
        </ul>
      </div>

      {/* Food Recommendations */}
      {foods.length > 0 && (
        <div className="mt-6">
          <p className="font-medium mb-2">Food Recommendations</p>
          <div className="flex gap-2 flex-wrap">
            {foods.map((f, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-green-700 text-white px-5 py-2 rounded-lg shadow-sm">
          View Details
        </button>
        <button className="bg-gray-100 border px-5 py-2 rounded-lg">
          AR/VR Preview
        </button>
      </div>
    </div>
  );
}
