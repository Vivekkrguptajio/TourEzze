import { useState } from "react";

export default function EventsHero({ search, setSearch }) {
  const [searchValue, setSearchValue] = useState("");
  
  // Use props if provided, otherwise use local state
  const searchText = search !== undefined ? search : searchValue;
  const setSearchText = setSearch !== undefined ? setSearch : setSearchValue;
  
  return (
    <div className="relative h-72 text-white flex flex-col items-center justify-center rounded-b-[2.5rem] shadow-2xl overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/07080859/Sarhul-Festival-04-1.jpg" 
          alt="Cultural Festival"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/70 via-pink-900/60 to-purple-900/70"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight drop-shadow-2xl">
          Events & Cultural Festivals
        </h1>
        <p className="text-white/95 text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg">
          Explore vibrant tribal celebrations, cultural performances, fairs & more
        </p>
      </div>

      {/* Search bar */}
      <div className="relative z-10 mt-6 w-full max-w-2xl px-4">
        <div className="relative">
          <svg 
            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search events, festivals, celebrations..."
            className="w-full pl-14 pr-6 py-4 rounded-2xl text-gray-700 outline-none shadow-2xl border-2 border-transparent focus:border-white/60 bg-white/98 backdrop-blur-md placeholder:text-gray-400 transition-all duration-300 focus:scale-[1.01] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
          />
        </div>
      </div>
    </div>
  );
}