// ProductCard.jsx
import { Link } from "react-router-dom";
import { MapPin, Star, ShoppingBag } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <Link
      to={`/product/${item.id}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 block"
    >
      {/* IMAGE */}
      <div className="relative w-full h-44 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* TAG */}
        <span className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg">
          {item.tag}
        </span>
        
        {/* OUT OF STOCK BADGE */}
        {!item.available && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg">
            Out of Stock
          </span>
        )}

        {/* Quick View Button */}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <ShoppingBag className="w-4 h-4 text-orange-600" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* CATEGORY */}
        <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">
          {item.category}
        </p>
        
        {/* TITLE */}
        <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
          {item.title}
        </h3>
        
        {/* LOCATION */}
        <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <span>{item.location}</span>
        </div>
        
        {/* RATING */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded">
            <Star className="w-3.5 h-3.5 fill-green-600 text-green-600" />
            <span className="text-xs font-semibold text-green-700">{item.rating}</span>
          </div>
          <span className="text-xs text-gray-500">({item.reviews})</span>
        </div>
        
        {/* PRICE & BUTTON */}
        <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
          <p className="text-xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            {item.price}
          </p>
          <button 
            className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-all duration-300 ${
              item.available 
                ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:shadow-lg hover:scale-105' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!item.available}
          >
            {item.available ? 'View' : 'Sold Out'}
          </button>
        </div>
      </div>
    </Link>
  );
}