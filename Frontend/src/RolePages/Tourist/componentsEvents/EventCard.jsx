// componentsEvents/EventCard.jsx
import { CalendarDays, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition">
      <div className="relative h-40">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {/* Badge top-right */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-white">
            {event.isFree ? "Free Entry" : event.priceLabel}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-base text-gray-900 line-clamp-2">
          {event.title}
        </h3>

        <div className="flex flex-col gap-1 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={14} />
            <span>{event.dateRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 line-clamp-2">
          {event.shortDescription}
        </p>

        <button className="mt-2 w-full bg-orange-500 text-white text-sm font-medium py-2 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
}
