import { MapPin } from "lucide-react";

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col justify-between min-h-[190px]">
      {/* Top badges */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2">
          {hotel.tags?.includes("Best Seller") && (
            <span className="text-[11px] px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              Best Seller
            </span>
          )}
        </div>
        {hotel.tags?.includes("Verified") && (
          <span className="text-[11px] px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
            Verified
          </span>
        )}
      </div>

      {/* Name + location */}
      <div>
        <h3 className="font-semibold text-[15px]">{hotel.name}</h3>
        <p className="flex items-center text-xs text-gray-600 mt-1">
          <MapPin size={13} className="mr-1" />
          {hotel.location}
        </p>
        <p className="text-[11px] text-gray-500 mt-1">{hotel.distance}</p>

        {/* Rating */}
        <div className="flex items-center text-xs mt-2">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[11px] mr-2">
            ★ {hotel.rating}
          </span>
          <span className="text-gray-500">({hotel.reviews} reviews)</span>
        </div>

        {/* Amenities tags (just first 3) */}
        <div className="flex flex-wrap gap-1 mt-2">
          {hotel.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="text-[11px] px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Price + button */}
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-sm text-gray-500">From</p>
          <p className="text-lg font-bold text-[#e55526]">
            ₹{hotel.pricePerNight.toLocaleString("en-IN")}
          </p>
          <p className="text-[11px] text-gray-500">per night</p>
        </div>
        <button className="px-4 py-2 text-sm bg-[#e55526] text-white rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
}
