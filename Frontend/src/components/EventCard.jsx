import "../styles/FeatureDestinations.css";

export default function EventCard({ event }) {
  return (
    <div
      className="
      group
      bg-white 
      rounded-xl 
      shadow-lg 
      border border-gray-200 
      overflow-hidden 
      transition-all
      duration-300 
      hover:-translate-y-2 
      hover:shadow-2xl
      w-[260px]
      h-[360px]
      flex flex-col
    "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[150px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="
            w-full 
            h-full 
            object-cover 
            transition-transform duration-500 
            group-hover:scale-110
          "
        />

        {/* CATEGORY BADGE */}
        <span
          className="
          absolute top-2 right-2 
          bg-blue-500 
          text-white 
          text-[10px] 
          font-semibold 
          px-2 py-[2px] 
          rounded-full 
          shadow-md
        "
        >
          {event.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 py-3 flex flex-col justify-between">

        {/* TITLE + DATE */}
        <div>
          <h2 className="text-[16px] font-semibold text-gray-900 mb-1">
            {event.title}
          </h2>

          {/* DATE */}
          <p className="text-gray-500 text-[12px] mb-2">
            📅 {new Date(event.date).toLocaleDateString("en-GB")}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-[13px] leading-snug line-clamp-2">
            {event.description}
          </p>
        </div>

        {/* LOCATION + CTA */}
        <div className="flex items-center justify-between mt-3 text-[13px]">
          <span className="text-gray-500">📍 {event.location}</span>

          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
