import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <Link
      to={`/product/${item.id}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 w-48"
    >
      {/* BIG IMAGE (EventCard style) */}
      <div className="relative w-full h-32 overflow-hidden bg-gray-100">
        <img
          src={item.images?.[0]}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Left Badge (Category / Tag) */}
        {item.tag && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
            {item.tag}
          </span>
        )}

        {/* Right Badge (Out of Stock) */}
        {!item.available && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
            Out of Stock
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3">
        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
          {item.category}
        </p>

        <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-1 group-hover:text-green-600 transition-colors duration-300">
          {item.title}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
          <MapPin className="w-3 h-3 text-gray-400" />
          <span>{item.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 text-xs">
          <div className="flex items-center gap-1 bg-orange-50 px-1 py-0.5 rounded">
            <Star className="w-3 h-3 fill-orange-600 text-orange-600" />
            <span className="text-orange-700 font-semibold">{item.rating}</span>
          </div>
          <span className="text-gray-500">({item.reviews})</span>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
          <p className="text-sm font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            {item.price}
          </p>

          <button
            className={`px-2 py-1 rounded-md font-semibold text-xs transition-all duration-300 ${
              item.available
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-sm hover:scale-105"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!item.available}
          >
            {item.available ? "View" : "Sold Out"}
          </button>
        </div>
      </div>
    </Link>
  );
}


