export default function ExploreCard({ place }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />

        {/* Category Badge */}
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {place.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          {place.name}
        </h2>

        {/* District */}
        <p className="text-sm text-gray-500 mt-1">
          📍 {place.district}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {place.description}
        </p>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-2 mt-3 text-sm font-medium text-yellow-600">
          ⭐ {place.rating}
          <span className="text-gray-400 text-xs">
            ({place.reviews} reviews)
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-green-700 text-white py-2 rounded-full text-sm font-medium hover:bg-green-800 transition">
            View Details
          </button>

          <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            AR/VR Preview
          </button>
        </div>

        <button className="w-full bg-amber-700 text-white py-2 rounded-full mt-3 text-sm font-medium hover:bg-amber-800 transition">
          Add to Itinerary
        </button>
      </div>
    </div>
  );
}
