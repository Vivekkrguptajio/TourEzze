import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import "../../styles/Explore.css";

export default function PopularPlaceCard({ place }) {
  return (
    <Link
      to={`/place/${place.id}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 w-48"
    >
      {/* IMAGE */}
      <div className="relative w-full h-32 overflow-hidden bg-gray-100 pointer-events-none">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Left badge (category/type) */}
        {place.category && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
            {place.category}
          </span>
        )}

        {/* Right badge (featured/new) */}
        {place.featured && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
            Featured
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3">
        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
          {place.subCategory ?? "Destination"}
        </p>

        <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-1 group-hover:text-green-600 transition-colors duration-300">
          {place.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
          <Star className="w-3 h-3 text-yellow-500" />
          <span className="text-xs font-medium">{place.rating}</span>
          <span className="text-gray-400">•</span>
          <MapPin className="w-3 h-3 text-gray-400" />
          <span className="truncate">{place.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {place.description}
        </p>

        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
          <p className="text-sm font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            {place.price ?? "Free"}
          </p>

          <span className="px-2 py-1 rounded-md font-semibold text-xs transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-sm hover:scale-105">
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
}
