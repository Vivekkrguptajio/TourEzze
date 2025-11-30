import { MapPin } from "lucide-react";

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
    <div className="bg-[#e55526] text-white py-6 px-6 rounded-b-3xl shadow">
      <h1 className="text-2xl font-bold mb-4">Discover Jharkhand</h1>

      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-3 p-4 items-center">
        {/* Location */}
        <div>
          <label className="text-xs text-gray-600 font-semibold mb-1 block">
            Location
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 text-sm">
            <MapPin size={16} className="text-orange-500 mr-2" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 outline-none"
              placeholder="Ranchi"
            />
          </div>
        </div>

        {/* Check-in */}
        <div>
          <label className="text-xs text-gray-600 font-semibold mb-1 block">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Check-out */}
        <div>
          <label className="text-xs text-gray-600 font-semibold mb-1 block">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Guests + Button */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="text-xs text-gray-600 font-semibold mb-1 block">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
          <button className="w-full bg-[#e55526] text-white rounded-lg text-sm py-2 font-semibold">
            Search Hotels
          </button>
        </div>
      </div>
    </div>
  );
}
