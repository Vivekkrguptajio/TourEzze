import { CalendarDays, MapPin, Star, Users, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function EventCard({ event }) {
  const defaultEvent = {
    name: "Cultural Heritage Festival",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop",
    dates: "Dec 15-17, 2025",
    district: "Patna, Bihar",
    description: "Experience the rich cultural heritage with traditional music, dance, and authentic local cuisine.",
    category: "Cultural",
    attendees: "2.5k+",
    duration: "3 days",
    rating: 4.8,
    featured: true,
    price: "₹499"
  };

  const eventData = event || defaultEvent;

  return (
    <div className="group relative w-80 h-auto">
      {/* Glow effect background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 text-white rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
      
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
        
        {/* Image Section with Enhanced Overlay */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={eventData.image} 
            alt={eventData.name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
          
          {/* Featured Badge - Top Left */}
          {eventData.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 animate-pulse">
              <Sparkles size={12} fill="currentColor" />
              Premium
            </div>
          )}

          {/* Category Badge - Top Right */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {eventData.category}
          </div>

          {/* Title Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-bold text-xl text-white leading-tight mb-2 drop-shadow-lg">
              {eventData.name}
            </h3>
            
            {/* Rating & Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <Star size={14} fill="#fbbf24" className="text-yellow-400" />
                <span className="text-sm font-bold text-white">{eventData.rating}</span>
              </div>
              <div className="text-white font-bold text-lg">
                {eventData.price}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-3 flex items-start gap-2 border border-orange-200">
              <CalendarDays size={18} className="text-orange-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-orange-900/60 font-medium">Date</p>
                <p className="text-sm font-bold text-orange-900">{eventData.dates}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-3 flex items-start gap-2 border border-purple-200">
              <MapPin size={18} className="text-purple-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-purple-900/60 font-medium">Location</p>
                <p className="text-sm font-bold text-purple-900">{eventData.district}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 py-3 px-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-lg">
                <Users size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Attendees</p>
                <p className="text-sm font-bold text-gray-900">{eventData.attendees}</p>
              </div>
            </div>
            
            <div className="w-px h-8 bg-gray-300" />
            
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1.5 rounded-lg">
                <Clock size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="text-sm font-bold text-gray-900">{eventData.duration}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {eventData.description}
          </p>

          {/* CTA Button */}
          <button className="group/btn relative w-full py-3.5 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 text-white text-white rounded-xl font-bold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2 text-base">
              Book Now
              <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Bottom accent line */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />
      </div>
    </div>
  );
}