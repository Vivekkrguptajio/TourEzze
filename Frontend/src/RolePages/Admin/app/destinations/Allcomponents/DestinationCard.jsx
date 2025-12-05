import React from "react";
import { MapPin, Edit, Trash2, Video } from "lucide-react";

export default function DestinationCard({ data, onEdit, onDelete }) {
  const imageUrl =
    data.imageLinks && data.imageLinks.length > 0
      ? data.imageLinks[0]
      : "https://via.placeholder.com/400";

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* IMAGE */}
      <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img
          src={imageUrl}
          alt={data.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {/* Category Badge */}
          <div className="bg-white/95 backdrop-blur-md text-gray-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            {data.category}
          </div>
          
          {/* AR/VR Badge */}
          {data.arvr === "yes" && (
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
              <Video className="w-3.5 h-3.5" />
              AR/VR
            </div>
          )}
        </div>

        {/* Content Overlay on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {/* Name */}
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
            {data.name}
          </h3>
          
          {/* Location */}
          <div className="flex items-center mb-3 text-sm">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="line-clamp-1 drop-shadow">{data.location}</span>
          </div>
          
          {/* Description */}
          <p className="text-white/90 text-sm leading-relaxed line-clamp-2 mb-4 drop-shadow">
            {data.description?.length > 100
              ? data.description.substring(0, 100) + "..."
              : data.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onEdit}
              className="flex-1 bg-white/95 backdrop-blur-md hover:bg-blue-500 text-gray-800 hover:text-white px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
            <button
              onClick={onDelete}
              className="flex-1 bg-white/95 backdrop-blur-md hover:bg-red-500 text-gray-800 hover:text-white px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}