import { CalendarDays, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border w-72 overflow-hidden hover:shadow-md transition">
      
      <img src={event.image} className="h-40 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold">{event.name}</h3>

        <div className="text-sm text-gray-500 flex items-center mt-2">
          <CalendarDays size={15} className="mr-1" /> {event.dates}
        </div>

        <div className="text-sm text-gray-500 flex items-center mt-1">
          <MapPin size={15} className="mr-1" /> {event.district}
        </div>

        <p className="text-sm text-gray-600 mt-3">{event.description}</p>

        <button className="mt-4 w-full py-2 bg-orange-600 text-white rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
}
