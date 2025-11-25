import "../../styles/Explore.css";

export default function EventCard({ event }) {
  return (
    <div
      className="
        group
        bg-white 
        rounded-2xl 
        shadow-md 
        hover:shadow-xl
        border border-gray-200 
        overflow-hidden 
        transition-all
        duration-300 
        hover:-translate-y-2 
        w-[280px]
        h-[380px]
        flex flex-col
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[160px] overflow-hidden">
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
            absolute top-3 right-3 
            bg-gradient-to-r from-blue-600 to-blue-500
            text-white 
            text-[11px] 
            font-semibold 
            px-3 py-[3px] 
            rounded-full 
            shadow-lg
          "
        >
          {event.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-5 py-4 flex flex-col justify-between">

        {/* TITLE + DATE */}
        <div>
          <h2 className="text-[17px] font-semibold text-gray-900 leading-tight mb-1">
            {event.title}
          </h2>

          {/* DATE */}
          <p className="text-gray-500 text-[13px] mb-2 flex items-center gap-1">
            📅 {new Date(event.date).toLocaleDateString("en-GB")}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-[14px] leading-snug line-clamp-2">
            {event.description}
          </p>
        </div>

        {/* LOCATION + CTA */}
        <div className="flex items-center justify-between mt-4 text-[14px]">
          <span className="text-gray-500 flex items-center gap-1">
            📍 {event.location}
          </span>

          <button
            className="
              text-blue-600 
              hover:text-blue-700 
              font-semibold 
              transition-colors
            "
          >
            View →
          </button>
        </div>
      </div>
    </div>
  );
}
