import {
  CalendarDays,
  MapPin,
  Star,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  PlayCircle,
  FileText,
  Tag,
} from "lucide-react";
<<<<<<< HEAD
import { API_URL } from "../../../../../../../src/api.js";
=======
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function EventCard({ event, onARVR, onDetails }) {
  if (!event) return null;

  const img = event.bannerImage
<<<<<<< HEAD
    ? `${API_URL}/image-proxy?url=${encodeURIComponent(event.bannerImage)}`
=======
    ? `http://localhost:5000/image-proxy?url=${encodeURIComponent(event.bannerImage)}`
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
    : "https://placehold.co/600x400";

  return (
    <div className="group relative w-full max-w-[420px] mx-auto">
<<<<<<< HEAD
      {/* Outer Glow */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 
        rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
      />

      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
        {/* IMAGE */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={img}
            alt={event.eventName}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
=======
      
      {/* Outer Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 
        rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />

      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
        
        {/* IMAGE */}
        <div className="relative h-60 overflow-hidden">
          <img 
            src={img} 
            alt={event.eventName}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Featured Badge */}
          {event.featured === "yes" && (
<<<<<<< HEAD
            <div
              className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 
              text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 animate-pulse"
            >
=======
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 
              text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
              <Sparkles size={12} />
              Premium
            </div>
          )}

          {/* Category Badge */}
          {event.category && (
<<<<<<< HEAD
            <div
              className="absolute top-4 right-4 bg-black/40 text-white backdrop-blur-md px-3 py-1.5 
              rounded-full border border-white/20 text-xs font-semibold shadow-md"
            >
=======
            <div className="absolute top-4 right-4 bg-black/40 text-white backdrop-blur-md px-3 py-1.5 
              rounded-full border border-white/20 text-xs font-semibold shadow-md">
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
              {event.category}
            </div>
          )}

          {/* Event Title */}
          <div className="absolute bottom-0 p-5 text-white w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent">
<<<<<<< HEAD
            <h3 className="text-2xl font-bold drop-shadow">
              {event.eventName}
            </h3>
=======
            <h3 className="text-2xl font-bold drop-shadow">{event.eventName}</h3>
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

            <p className="text-gray-300 text-xs mt-1 flex items-center gap-1">
              <FileText size={14} /> {event.organizer || "Unknown Organizer"}
            </p>

            {/* Rating + Price */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Star size={14} className="text-yellow-400" fill="#fbbf24" />
<<<<<<< HEAD
                <span className="text-sm font-bold">
                  {event.rating || "4.5"}
                </span>
=======
                <span className="text-sm font-bold">{event.rating || "4.5"}</span>
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
              </div>
              <div className="font-bold text-lg">{event.price || "₹399"}</div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-5">
<<<<<<< HEAD
          {/* Date + Location */}
          <div className="grid grid-cols-2 gap-3">
=======

          {/* Date + Location */}
          <div className="grid grid-cols-2 gap-3">
            
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
            <div className="bg-orange-50 border border-orange-200 p-3 rounded-xl flex gap-2">
              <CalendarDays size={18} className="text-orange-600" />
              <div>
                <p className="text-xs text-orange-700">Date</p>
                <p className="text-sm font-bold">{event.eventDate}</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-3 rounded-xl flex gap-2">
              <MapPin size={18} className="text-purple-600" />
              <div>
                <p className="text-xs text-purple-700">Location</p>
                <p className="text-sm font-bold">{event.location}</p>
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          </div>

          {/* Attendees + Duration */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
<<<<<<< HEAD
=======
            
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Attendees</p>
                <p className="text-sm font-bold">{event.attendees || "0"}</p>
              </div>
            </div>

            <div className="h-10 w-px bg-gray-300" />

            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Clock size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="text-sm font-bold">{event.duration || "N/A"}</p>
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          </div>

          {/* Tags */}
          {event.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {event.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-teal-100 rounded-full text-xs text-teal-800 flex items-center gap-1"
                >
                  <Tag size={12} />
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="font-semibold text-gray-900">About Event:</h4>
            <p className="text-sm text-gray-600 leading-relaxed mt-1">
              {event.description}
            </p>
          </div>

          {/* ALL BUTTONS */}
          <div className="space-y-3">
<<<<<<< HEAD
            {/* ⭐ VIEW DETAILS BUTTON (Modal Open Karega) */}
            <button
=======

            {/* ⭐ VIEW DETAILS BUTTON (Modal Open Karega) */}
            <button 
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
              onClick={() => onDetails(event)}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 
                text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 
                hover:scale-105 transition-transform"
            >
              View Details
              <ArrowRight size={18} />
            </button>

            {/* ARVR BUTTON */}
            {event.arvr === "yes" && (
              <button
                onClick={() => onARVR(event.arvrLink)}
                className="w-full py-3 border border-teal-600 text-teal-700 font-semibold 
                rounded-xl flex items-center justify-center gap-2 bg-white hover:bg-teal-600 
                hover:text-white transition-all"
              >
                <PlayCircle size={18} />
                360° Virtual Tour
                <ArrowRight size={16} />
              </button>
            )}

            {/* DOCUMENT BUTTON */}
            {event.documentLink && (
              <a
                href={event.documentLink}
                target="_blank"
                className="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-black"
              >
                <FileText size={18} />
                Open Document
                <ArrowRight size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />
      </div>
    </div>
  );
}
