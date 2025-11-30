import { MapPin, Calendar, Users } from "lucide-react";

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
    <div className="bg-[#e55526] text-white p-6 pb-10 shadow-md rounded-b-3xl">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-xl p-4 shadow grid grid-cols-1 md:grid-cols-5 gap-4">

          {/* Location */}
          <div>
            <label className="text-xs text-gray-600 font-semibold">Location</label>
            <div className="border rounded-lg px-3 py-2 flex items-center gap-2">
              <MapPin size={16} className="text-orange-500" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full outline-none text-sm"
                placeholder="Ranchi"
              />
            </div>
          </div>

          {/* Check-in */}
          <div>
            <label className="text-xs text-gray-600 font-semibold">Check-in</label>
            <div className="border rounded-lg px-3 py-2 flex items-center gap-2">
              <Calendar size={16} className="text-orange-500" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label className="text-xs text-gray-600 font-semibold">Check-out</label>
            <div className="border rounded-lg px-3 py-2 flex items-center gap-2">
              <Calendar size={16} className="text-orange-500" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="text-xs text-gray-600 font-semibold">Guests</label>
            <div className="border rounded-lg px-3 py-2 flex items-center gap-2">
              <Users size={16} className="text-orange-500" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full outline-none text-sm"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="bg-[#e55526] text-white w-full py-2 rounded-lg font-semibold">
              Search Hotels
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
