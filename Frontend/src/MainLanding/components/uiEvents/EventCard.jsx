import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 w-48"
    >
      {/* IMAGE */}
      <div className="relative w-full h-32 overflow-hidden bg-gray-100 pointer-events-none">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
          {event.type || "Festival"}
        </span>

        {event.featured && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
            Featured
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3">
        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
          {event.category || "Cultural Event"}
        </p>

        <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-1 group-hover:text-green-600 transition-colors duration-300">
          {event.title}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
          <Calendar className="w-3 h-3 text-gray-400" />
          <span>{event.date}</span>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-1 bg-orange-50 px-1 py-0.5 rounded">
            <MapPin className="w-3 h-3 text-orange-600" />
            <span className="text-xs font-semibold text-orange-700">{event.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
          <p className="text-sm font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            {event.price || "Free"}
          </p>

          <Link
            to={`/event/${event.id}`}
            className="px-2 py-1 rounded-md font-semibold text-xs transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-sm hover:scale-105"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
