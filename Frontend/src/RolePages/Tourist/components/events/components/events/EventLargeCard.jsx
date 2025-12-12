import { MapPin, CalendarDays, Star, Users, ArrowRight, Sparkles, Rotate3D } from "lucide-react";

export default function EventLargeCard({ event, onARVR }) {
  const defaultEvent = {
    name: "Sarhul Festival",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
    dates: "March 15-18, 2025",
    district: "Ranchi",
    description:
      "A vibrant tribal spring festival celebrating nature worship with traditional dances, songs, and rituals. Experience the rich cultural heritage of Jharkhand's indigenous communities.",
    category: "Cultural",
    rating: 4.9,
    attendees: "5k+",
    featured: true,
  };

  const eventData = event || defaultEvent;

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 
      rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl 
      border-2 border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">

        {/* Image Section */}
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img
            src={eventData.image}
            alt={eventData.name}
            className="h-full w-full object-cover transition-all duration-700 
            group-hover:scale-110 group-hover:brightness-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Featured Badge */}
          {eventData.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-400 to-teal-500 
            text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5">
              <Sparkles size={12} fill="currentColor" />
              Featured
            </div>
          )}

          {/* Category */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs 
          font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {eventData.category}
          </div>

          {/* Rating */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 
          backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <Star size={14} fill="#f59e0b" className="text-amber-500" />
            <span className="text-sm font-bold text-gray-900">{eventData.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/50">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight 
            group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r 
            group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
              {eventData.name}
            </h2>

            {/* Info */}
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-blue-100/50 
              rounded-xl p-3 border border-blue-200">
                <div className="bg-blue-500 p-2 rounded-lg shrink-0">
                  <CalendarDays size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-blue-900/60 font-medium">Event Date</p>
                  <p className="text-sm font-bold text-blue-900">{eventData.dates}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gradient-to-br from-teal-50 to-teal-100/50 
              rounded-xl p-3 border border-teal-200">
                <div className="bg-teal-500 p-2 rounded-lg shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-teal-900/60 font-medium">Location</p>
                  <p className="text-sm font-bold text-teal-900">{eventData.district} District</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 flex items-center gap-4 py-3 px-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-100 p-1.5 rounded-lg">
                  <Users size={16} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Expected</p>
                  <p className="text-sm font-bold text-gray-900">{eventData.attendees}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-5 text-sm md:text-base leading-relaxed">
              {eventData.description}
            </p>
          </div>

          {/* ⭐ 360° VIEW BUTTON */}
          <button
            onClick={() => onARVR(eventData.arvrLink)}
            className="mt-5 w-full py-3 flex items-center justify-center gap-2 
            bg-gray-900 text-white rounded-xl font-semibold shadow-md 
            hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
          >
            <Rotate3D size={18} />
            360° Virtual View
          </button>

          {/* Original CTA */}
          <button className="group/btn relative mt-4 w-full py-3.5 bg-gradient-to-r from-blue-600 
          via-teal-600 to-emerald-600 text-white rounded-xl font-bold shadow-lg 
          overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2 text-base">
              View Full Details
              <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 
            opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
        from-blue-500 via-teal-500 to-emerald-500" />
      </div>
    </div>
  );
}
