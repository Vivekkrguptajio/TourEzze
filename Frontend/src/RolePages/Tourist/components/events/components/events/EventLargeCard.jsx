import { MapPin, CalendarDays } from "lucide-react";

export default function EventLargeCard({ event }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-md border overflow-hidden">
      
      <img src={event.image} className="h-64 w-full object-cover" />

      <div className="p-5 flex flex-col justify-between">
        
        <div>
          <span className="px-3 py-1 text-xs bg-green-200 rounded-full text-green-800">
            {event.category}
          </span>

          <h2 className="text-xl font-semibold mt-3">{event.name}</h2>

          <div className="flex items-center text-gray-600 text-sm mt-2">
            <CalendarDays size={16} className="mr-2" /> {event.dates}
          </div>

          <div className="flex items-center text-gray-600 text-sm mt-1">
            <MapPin size={16} className="mr-2" /> {event.district} District
          </div>

          <p className="text-gray-700 mt-3 text-sm">{event.description}</p>
        </div>

        <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
}
