


import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Bookmark, Star } from "lucide-react";

export default function DestinationCard({ item }) {
  const hasVR = !!item.hasVR;
  const featured = !!item.featured;

  return (
    <div className="rounded-3xl p-[1.5px] bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-lg w-full max-w-[240px] mx-auto">
      
      {/* INNER CARD (bg fixed here) */}
      <div
        className="group bg-white bg-white rounded-3xl overflow-hidden relative
                   w-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        aria-labelledby={`dest-${item.id}-title`}
      >
        
        {/* IMAGE */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-70 mix-blend-multiply"></div>

          {featured && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold
                             bg-white/10 text-white backdrop-blur-sm border border-white/20">
              🔥 Featured
            </span>
          )}

          <button
            className="absolute top-3 right-3 p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/10 text-white hover:bg-white/30 transition"
            onClick={(e) => e.preventDefault()}
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <div className="absolute left-3 right-3 bottom-3 bg-black/45 backdrop-blur-md rounded-xl px-3 py-2 text-white">
            <h4 className="font-bold text-sm truncate">
              {item.name}
            </h4>
            <p className="text-xs text-white/90 truncate">{item.district} District</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-3 flex flex-col gap-2">

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="font-medium">{item.rating ?? "4.6"}</span>
              <span className="text-xs text-gray-400">({item.reviews ?? 120})</span>
            </div>

            <div className="text-right">
              <span className="text-sm font-semibold text-green-700">
                {item.price ?? "Free"}
              </span>
              <div className="text-xs text-gray-400">per visit</div>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-snug line-clamp-3">
            {item.shortDescription}
          </p>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-2 items-center justify-center">
              <Link
                to={`/place/${item.id}`}
                className="px-3 py-1.5 rounded-md text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-sm hover:scale-105 transition"
              >
                View
              </Link>

              {hasVR && (
                <Link
                  to={`/place/${item.id}/vr`}
                  className="px-2.5 py-1.5 rounded-md text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
                >
                  AR/VR
                </Link>
              )}
            </div>

            <Link
              to={`/itinerary/add/${item.id}`}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-orange-600 border border-orange-100 hover:bg-white transition-shadow"
            >
              Add
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
