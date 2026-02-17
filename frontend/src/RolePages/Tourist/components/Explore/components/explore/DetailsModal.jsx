import React from "react";
import { X, MapPin, PlayCircle, Link as LinkIcon } from "lucide-react";

export default function DetailsModal({ isOpen, onClose, data, onARVR }) {
  if (!isOpen || !data) return null;

  const image =
    data.imageLinks?.length > 0
      ? data.imageLinks[0]
      : "https://placehold.co/800x500?text=No+Image";

  const hiddenFields = ["imageLinks", "_id", "__v", "createdAt", "updatedAt", "arvr", "arvrLink", "mapUrl", "map", "locationLink"];

  const cleanData = Object.entries(data).filter(
    ([key, value]) =>
      !hiddenFields.includes(key) &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const mapUrl = data.mapUrl || data.map || data.locationLink;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white/90 hover:bg-white backdrop-blur-sm p-2.5 rounded-full z-10 shadow-lg transition-all hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* IMAGE SECTION */}
        <div className="relative">
          <img
            src={image}
            alt={data.name}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="overflow-y-auto p-6 space-y-5">
          {/* TITLE & LOCATION */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{data.name}</h2>
            
            {data.location && (
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-base">{data.location}</span>
              </div>
            )}

            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
              >
                <LinkIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                View on Map
              </a>
            )}
          </div>

          {/* DIVIDER */}
          {cleanData.length > 0 && <div className="border-t border-gray-200"></div>}

          {/* DYNAMIC DATA GRID */}
          {cleanData.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {cleanData.map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200 p-3 rounded-xl hover:shadow-md transition-shadow"
                >
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wide mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-gray-900 text-sm font-medium leading-snug">
                    {String(value)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* AR/VR BUTTON */}
          {data.arvr === "yes" && (
            <button
              onClick={onARVR}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
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