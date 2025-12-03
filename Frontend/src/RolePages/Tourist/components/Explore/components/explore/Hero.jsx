import { Search, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Hero({ query, setQuery }) {
  const [searchValue, setSearchValue] = useState("");
  const [district, setDistrict] = useState("All Districts");
  
  // Use props if provided, otherwise use local state
  const searchText = query !== undefined ? query : searchValue;
  const setSearchText = setQuery !== undefined ? setQuery : setSearchValue;
  
  return (
    <div className="relative w-full py-20 md:py-28 px-4 text-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://s7ap1.scene7.com/is/image/incredibleindia/jonha-falls-ranchi-jharkhand-new?qlt=82&ts=1727010871094" 
          alt="Jharkhand Nature"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-emerald-800/50 to-teal-900/60"></div>
        {/* Additional subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
          <Sparkles size={16} className="text-yellow-300" fill="currentColor" />
          <span className="text-white/90 text-sm font-semibold tracking-wide">DISCOVER NATURE'S PARADISE</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">Jharkhand</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/95 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-lg font-light leading-relaxed">
          Find waterfalls, forests, temples, wildlife and hidden gems in the land of nature
        </p>

        {/* Search Box */}
        <div className="flex justify-center">
          <div className="
              flex flex-col md:flex-row items-stretch gap-3
              bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border-2 border-white/50
              p-3 w-full max-w-4xl
              transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
          ">
            
            {/* Search Input */}
            <div className="flex items-center flex-1 bg-gray-50 rounded-xl px-4 py-3.5 border-2 border-gray-200 focus-within:border-green-500 focus-within:bg-white transition-all duration-300 group">
              <Search size={20} className="text-gray-400 group-focus-within:text-green-600 transition-colors" />
              <input
                type="text"
                placeholder="Search destinations, waterfalls, parks..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-transparent outline-none px-3 text-gray-700 placeholder:text-gray-400 font-medium"
              />
            </div>

            {/* District Dropdown */}
            <div className="flex items-center bg-gray-50 px-4 py-3.5 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-white transition-all duration-300 cursor-pointer min-w-[200px]">
              <MapPin size={20} className="text-green-600" />
              <select 
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="bg-transparent outline-none ml-2 text-gray-800 font-medium cursor-pointer w-full"
              >
                <option>All Districts</option>
                <option>Ranchi</option>
                <option>Latehar</option>
                <option>Deoghar</option>
                <option>Giridih</option>
                <option>Jamshedpur</option>
                <option>Dhanbad</option>
              </select>
            </div>

            {/* Button */}
            <button
              className="
                bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700
                text-white font-bold
                px-8 py-3.5 rounded-xl shadow-lg
                transition-all duration-300 active:scale-95
                hover:shadow-xl hover:scale-105
                flex items-center justify-center gap-2
              "
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </div>

        {/* Quick Stats or Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <span className="text-white/90 text-sm font-semibold">🏞️ 50+ Destinations</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <span className="text-white/90 text-sm font-semibold">💧 20+ Waterfalls</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <span className="text-white/90 text-sm font-semibold">🌲 15+ National Parks</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 40C840 50 960 70 1080 80C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>
    </div>
  );
}