          import React from "react";
import { MapPin, Calendar, Users, X } from "lucide-react";

/**
 * Responsive HotelsSearchBar
 * Props:
 * - location, setLocation
 * - checkIn, setCheckIn
 * - checkOut, setCheckOut
 * - guests, setGuests
 *
 * Behavior:
 * - Stacked layout on small screens
 * - Compact 5-column layout on desktop
 * - Clear buttons for location
 * - Accessible labels & aria attributes
 */

export default function HotelsSearchBar({
  location,
  setLocation,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
}) {
  return (
    <div className="relative bg-gradient-to-r from-[#f0824a] to-[#e44b20] text-white py-8 rounded-b-3xl shadow-xl overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-10 -left-10 w-44 h-44 bg-white/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-6 w-56 h-56 bg-white/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Find the perfect stay
          </h2>
          <p className="text-white/90 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Search homestays & hotels across Jharkhand — authentic stays, local hosts and great value.
          </p>
        </div>

        {/* Responsive search card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 sm:p-4 md:p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // parent handles search; form submit kept for accessibility
            }}
            className="
              grid gap-3
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-5
              items-end
            "
          >
            {/* Location */}
            <div className="col-span-1">
              <label htmlFor="hsb-location" className="block text-xs text-gray-600 mb-1">
                Location
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none">
                  <MapPin size={18} />
                </span>

                <input
                  id="hsb-location"
                  aria-label="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ranchi, Netarhat..."
                  className="w-full pl-11 pr-10 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-amber-200 transition"
                />

                {/* clear button */}
                {location ? (
                  <button
                    type="button"
                    onClick={() => setLocation("")}
                    aria-label="Clear location"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                ) : null}
              </div>
            </div>

            {/* Check-in */}
            <div className="col-span-1">
              <label htmlFor="hsb-checkin" className="block text-xs text-gray-600 mb-1">
                Check-in
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none">
                  <Calendar size={18} />
                </span>
                <input
                  id="hsb-checkin"
                  aria-label="Check-in date"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-11 pr-3 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-amber-200 transition"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="col-span-1">
              <label htmlFor="hsb-checkout" className="block text-xs text-gray-600 mb-1">
                Check-out
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none">
                  <Calendar size={18} />
                </span>
                <input
                  id="hsb-checkout"
                  aria-label="Check-out date"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-11 pr-3 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-amber-200 transition"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="col-span-1">
              <label htmlFor="hsb-guests" className="block text-xs text-gray-600 mb-1">
                Guests
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none">
                  <Users size={18} />
                </span>
                <select
                  id="hsb-guests"
                  aria-label="Number of guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-11 pr-3 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-amber-200 transition"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            </div>

            {/* CTA - full width on mobile (spans grid), normal on larger screens */}
            <div className="col-span-1 md:col-span-1">
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-lg
                  text-white
                  font-semibold
                  bg-gradient-to-r from-[#ff7a3b] to-[#e8461f]
                  shadow-md
                  hover:scale-[1.01]
                  transition
                  active:translate-y-0.5
                "
                onClick={() => {
                  // optional: you may call parent search handler here
                }}
              >
                Search Hotels
              </button>
            </div>
          </form>

          {/* small helper row visible on wider screens */}
          <div className="mt-3 text-xs text-gray-500 flex flex-col sm:flex-row sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">Flexible dates</span>
              <span className="text-sm">Try ±1 day for better prices</span>
            </div>
            <div className="text-sm text-gray-500">Secure booking • Local hosts • Easy cancellation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
