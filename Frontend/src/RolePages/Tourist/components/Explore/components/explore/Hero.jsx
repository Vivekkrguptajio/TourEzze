import { Search, MapPin } from "lucide-react";

export default function Hero({ query, setQuery }) {
  return (
    <div className="w-full bg-gradient-to-b from-[#1d8f6d] to-[#2ea67a] py-16 px-4 text-center relative">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
        Explore Jharkhand
      </h1>

      {/* Subtitle */}
      <p className="text-white/90 text-lg md:text-xl mb-10">
        Discover the land of forests, waterfalls, and rich tribal heritage
      </p>

      {/* Search Container */}
      <div className="flex justify-center">
        <div
          className="
            flex items-center gap-3
            bg-white shadow-lg rounded-xl
            px-3 py-3
            w-full max-w-3xl
          "
        >

          {/* Search Bar */}
          <div className="flex items-center flex-1 bg-[#f5f5f5] rounded-lg px-3">
            <Search className="text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search destinations, attractions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                w-full bg-transparent outline-none px-2 py-2
                placeholder-gray-500 text-gray-700
              "
            />
          </div>

          {/* District Dropdown */}
          <div className="flex items-center bg-[#f5f5f5] px-3 py-2 rounded-lg text-gray-700">
            <MapPin className="text-gray-600 mr-2" size={18} />

            <select className="bg-transparent outline-none cursor-pointer text-gray-700">
              <option>All Districts</option>
              <option>Ranchi</option>
              <option>Latehar</option>
              <option>Deoghar</option>
              <option>Giridih</option>
              <option>Jamshedpur</option>
              <option>Dhanbad</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            className="
              bg-green-700 hover:bg-green-800
              text-white font-semibold
              px-6 py-2 rounded-lg
              transition
            "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
