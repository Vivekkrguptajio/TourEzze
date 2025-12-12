import React from "react";
import { useParams, Link } from "react-router-dom";
import { eventsData } from "../uiEvents/eventsData"; 
import { Calendar, MapPin, Clock, ArrowLeft, Tag, Users, Globe, Info, Star, Ticket } from "lucide-react";

const fallbackImg = "https://images.unsplash.com/photo-1509223197845-458d87318791?w=1600&auto=format&fit=crop&q=80";

export default function EventDetails() {
  const { id } = useParams();

  // Resolve selected event id: use URL id if present, otherwise default to first event
  const selectedId = id ? (isNaN(Number(id)) ? String(id) : Number(id)) : (eventsData[0] && eventsData[0].id);
  const event = eventsData.find((e) => String(e.id) === String(selectedId)) ?? eventsData[0];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-orange-50">
        <div className="text-center bg-white shadow-2xl rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the event you're looking for.</p>
          <Link to="/events" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* PREMIUM HERO SECTION */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={event.image || fallbackImg}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Back Button */}
        <Link
          to="/events"
          className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Events</span>
        </Link>

        {/* Event Badge */}
        {event.tag && (
          <div className="absolute top-8 right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4" />
            {event.tag}
          </div>
        )}

        {/* Title and Basic Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium border border-white/30">
                {event.label || event.category || "Event"}
              </span>
              <span className={`${event.isFree ? 'bg-green-500' : 'bg-orange-500'} px-4 py-2 rounded-lg text-sm font-bold shadow-lg`}>
                {event.priceLabel ?? (event.isFree ? 'Free' : event.badge ?? 'Paid')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-3 drop-shadow-2xl">
              {event.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl drop-shadow-lg">
              {event.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">

        {/* PREMIUM INFO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Date Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-green-500 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Date</p>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">{event.date ?? event.dateRange}</p>
            <p className="text-sm text-gray-600 mt-1">{event.dateRange?.split('•')[1]?.trim() ?? ""}</p>
          </div>

          {/* Location Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-red-500 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-100 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Location</p>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">{event.location}</p>
          </div>

          {/* Category Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-orange-500 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Tag className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Category</p>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">{event.category}</p>
          </div>

          {/* Timing Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-blue-500 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Timings</p>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-900">{event.timings ?? event.dateRange}</p>
          </div>

        </div>

        {/* DESCRIPTION SECTION - Premium Design */}
        <div className="bg-gradient-to-br from-white to-green-50 shadow-2xl rounded-3xl p-8 border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg">
              <Info className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">About This Event</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {event.description}
          </p>
        </div>

        {/* ADDITIONAL INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Organizer */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Organizer</p>
            </div>
            <p className="text-base font-semibold text-gray-900">{event.organizer}</p>
          </div>

          {/* Languages */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Languages</p>
            </div>
            <p className="text-base font-semibold text-gray-900">{event.languages ?? "Not specified"}</p>
          </div>

          {/* Age Restriction */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Ticket className="w-5 h-5 text-pink-600" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Entry</p>
            </div>
            <p className="text-base font-semibold text-gray-900">{event.ageRestriction ?? "All ages"}</p>
          </div>

        </div>

        {/* HIGHLIGHTS SECTION - Premium Premium Design */}
        {event.highlights && (
          <div className="bg-gradient-to-br from-orange-50 to-white shadow-2xl rounded-3xl p-8 border border-orange-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Event Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA BUTTON */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 shadow-2xl rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Experience This Event?</h3>
          <p className="text-green-100 mb-6">Book your spot now and immerse yourself in Jharkhand's rich cultural heritage!</p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            Book Tickets - {event.priceLabel ?? (event.isFree ? "Free" : "Paid")}
          </button>
        </div>

      </div>
    </div>
  );
}
