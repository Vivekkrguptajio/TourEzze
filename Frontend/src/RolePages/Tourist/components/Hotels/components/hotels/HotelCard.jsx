import { MapPin } from "lucide-react";

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border shadow-sm">

      {/* Image Placeholder */}
      <div className="h-36 bg-gray-100 flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-gray-300 rounded-full"></div>
      </div>

      <div className="p-4">

        {/* Badges */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            {hotel.tags.includes("Best Seller") && (
              <span className="text-[11px] bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                Best Seller
              </span>
            )}
          </div>

          {hotel.tags.includes("Verified") && (
            <span className="text-[11px] bg-blue-100 text-blue-700 px-2 py-1 rounded">
              Verified
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold mt-2">{hotel.name}</h3>

        {/* Location */}
        <p className="flex items-center text-[13px] text-gray-600">
          <MapPin size={13} className="mr-1" />
          {hotel.location}
        </p>
        <p className="text-[11px] text-gray-500">{hotel.distance}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            ★ {hotel.rating}
          </span>
          <span className="text-xs text-gray-500">({hotel.reviews} reviews)</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mt-2">
          {hotel.amenities.map((a) => (
            <span
              key={a}
              className="text-[11px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {a}
            </span>
          ))}
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-xl font-bold text-[#e55526]">
              ₹{hotel.pricePerNight}
            </p>
            <p className="text-[11px] text-gray-500">per night</p>
          </div>

          <button className="bg-[#e55526] text-white px-4 py-2 rounded-lg text-sm">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}
