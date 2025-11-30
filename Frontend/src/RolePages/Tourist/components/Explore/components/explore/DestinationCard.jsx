import React from "react";
import { MapPin } from "lucide-react";

export default function DestinationCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden w-[300px] hover:shadow-md transition">
      
      {/* Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">
          {item.name}
        </h3>

        {/* District */}
        <p className="flex items-center text-sm text-gray-500 mt-1 mb-3">
          <MapPin size={15} className="mr-1" />
          {item.district} District
        </p>

        {/* Short Description */}
        <p className="text-sm text-gray-600 leading-snug mb-5">
          {item.shortDescription}
        </p>

        {/* Buttons Row */}
        <div className="flex gap-3 mb-4">
          <button
            className="flex-1 bg-green-700 hover:bg-green-800 text-white text-sm py-2 rounded-md font-medium"
          >
            View Details
          </button>

          {item.hasVR && (
            <button
              className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-2 rounded-md font-medium"
            >
              AR/VR Preview
            </button>
          )}
        </div>

        {/* Add to Itinerary */}
        <button
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium"
        >
          Add to Itinerary
        </button>
      </div>
    </div>
  );
}
