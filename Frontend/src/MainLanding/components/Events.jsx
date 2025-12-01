// Events.jsx
import EventList from "./uiEvents/EventList";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-orange-100 rounded-full mb-4 border border-green-200/50">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-gray-700">Experience Jharkhand</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 via-orange-600 to-green-600 bg-clip-text text-transparent">
            Upcoming Events in Jharkhand
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover cultural festivals, fairs, exhibitions and special celebrations happening across Jharkhand
          </p>
        </div>

        {/* Event List */}
        <EventList />

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/role/tourist/events"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View All Events</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
