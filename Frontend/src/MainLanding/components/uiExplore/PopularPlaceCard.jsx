import "../../styles/Explore.css";

export default function PopularPlaceCard({ place }) {
  return (
    <div
      className="
      bg-white 
      rounded-xl 
      shadow-lg 
      border border-gray-200 
      overflow-hidden 
      transition-all duration-300 
      hover:-translate-y-2 
      w-[280px]
      h-[360px]
      flex flex-col
      hover:shadow-2xl
    "
    >
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[180px] overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="
            w-full 
            h-full 
            object-cover 
            transition-transform duration-500 
            ease-out 
            group-hover:scale-110
          "
        />

        {/* CATEGORY BADGE */}
        <span
          className="
          absolute top-3 right-3 
          bg-green-400 
          text-black text-[10px] 
          font-semibold 
          px-2 py-[2px] 
          rounded-full shadow
        "
        >
          {place.category}
        </span>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex-1 px-4 py-3 flex flex-col justify-between">

        {/* TITLE + RATING */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[16px] font-semibold text-gray-900">
              {place.name}
            </h2>

            <div className="flex items-center gap-[2px] text-yellow-500 text-sm">
              ⭐ <span className="font-medium">{place.rating}</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-[13px] leading-snug line-clamp-2">
            {place.description}
          </p>
        </div>

        {/* BOTTOM INFO */}
        <div className="flex items-center justify-between mt-3 text-[13px]">
          <span className="text-gray-500">📍 {place.reviews} reviews</span>

          <button className="text-green-600 hover:text-green-700 font-semibold">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
