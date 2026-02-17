// src/components/hotels/CompactHotelCard.jsx
import React from "react";
import { MapPin, Heart } from "lucide-react";

/**
 * CompactHotelCard (gap-friendly)
 * - Use inside a grid where grid controls spacing (w-full)
 * - Props:
 *    hotel: { id, name, image, location, priceLine, rating }
 *    onView (optional): (hotel) => {}
 */
export default function CompactHotelCard({ hotel = {}, onView }) {
  const handleView = () => {
    if (onView) return onView(hotel);
    // fallback navigation
    window.location.href = `/hotel/${hotel.id}`;
  };

  return (
    <div
      className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={handleView}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleView()}
      aria-label={`View ${hotel.name}`}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={
            hotel.image ??
            `https://picsum.photos/seed/compact-${hotel.id ?? "na"}/800/600`
          }
          alt={hotel.name}
          className="w-full h-44 sm:h-48 object-cover rounded-t-2xl"
          loading="lazy"
        />

        {/* Pill badge top-left */}
        <div className="absolute left-3 top-3 bg-white/95 px-3 py-1 rounded-full text-xs font-medium text-gray-800 shadow-sm">
          Guest favourite
        </div>

        {/* Heart top-right */}
        <button
          className="absolute right-3 top-3 bg-white/90 p-1.5 rounded-full shadow-sm hover:scale-105 transition"
          onClick={(e) => {
            e.stopPropagation();
            // placeholder: toggle save (implement callback if needed)
            console.log("toggle save", hotel.id);
          }}
          aria-label="Save listing"
          title="Save"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        <h4 className="text-sm sm:text-base font-medium text-gray-900 leading-tight truncate">
          {hotel.name ?? "Untitled place"}
        </h4>

        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          <MapPin className="w-3 h-3" />
          <span className="truncate">{hotel.location ?? "Unknown"}</span>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
          <div className="truncate">{hotel.priceLine ?? "₹2,000 for 2 nights"}</div>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="font-medium text-gray-800">{hotel.rating ?? "4.93"}</span>
            <span className="text-gray-400">★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
