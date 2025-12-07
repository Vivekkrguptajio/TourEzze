import React from "react";
import { X, MapPin, PlayCircle, Link as LinkIcon, Ticket } from "lucide-react";

export default function DetailsModal({ isOpen, onClose, data, onARVR }) {
  if (!isOpen || !data) return null;

  const image =
    data.bannerImage ||
    data.imageLinks?.[0] ||
    "https://placehold.co/800x500?text=No+Image";

  const hiddenFields = [
    "_id",
    "__v",
    "createdAt",
    "updatedAt",
    "arvr",
    "arvrLink",
    "mapUrl",
    "map",
    "locationLink",
    "bannerImage",
    "imageLinks",
  ];

  const cleanData = Object.entries(data).filter(
    ([key, value]) =>
      !hiddenFields.includes(key) &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const mapUrl = data.mapUrl || data.map || data.locationLink;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-gray-200">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white/90 p-2.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all z-10"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* IMAGE */}
        <div className="relative">
          <img
            src={image}
            alt={data.eventName}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Header Title */}
          <h1 className="absolute bottom-4 left-6 text-3xl font-bold text-white drop-shadow-lg">
            {data.eventName}
          </h1>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* Location + Map */}
          <div className="space-y-2">
            {data.location && (
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-base font-medium">{data.location}</span>
              </div>
            )}

            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition group"
              >
                <LinkIcon className="w-4 h-4 group-hover:translate-x-1 transition" />
                View on Map
              </a>
            )}
          </div>

          {/* Divider */}
          {cleanData.length > 0 && <div className="border-t border-gray-200"></div>}

          {/* Dynamic Data */}
          <div className="grid grid-cols-2 gap-4">
            {cleanData.map(([key, value]) => (
              <div
                key={key}
                className="bg-gradient-to-br from-gray-50 to-gray-100/60 border border-gray-200 p-3 rounded-xl hover:shadow-md transition-all"
              >
                <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <p className="text-gray-800 font-medium text-sm break-words">
                  {String(value)}
                </p>
              </div>
            ))}
          </div>

          {/* ⭐ BOOK NOW + LIMITED TAG */}
          <div className="space-y-3 mt-4">

            <div className="w-full py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 
              text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-3 
              hover:scale-105 transition-all cursor-pointer">
              <Ticket className="w-5 h-5" />
              Book Now
            </div>

            <p className="text-red-600 text-center font-semibold text-sm animate-pulse">
              ⚠️ Only Limited Tickets Available!
            </p>
          </div>

          {/* ARVR Button */}
          {data.arvr === "yes" && (
            <button
              onClick={onARVR}
              className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3 font-semibold text-lg transition-all hover:scale-105 active:scale-95"
            >
              <PlayCircle className="w-6 h-6" />
              Open 360° View
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
