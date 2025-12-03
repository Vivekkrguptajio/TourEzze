import React from "react";
import { Search } from "lucide-react";

export default function MarketHero({ search, setSearch }) {
  return (
    <div className="relative overflow-hidden rounded-b-3xl">
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-12 px-6 shadow-lg relative">
        
        {/* Blur Decoration Circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Jharkhand Marketplace
          </h1>

          <p className="text-white/90 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Shop authentic tribal handicrafts, homestays, souvenirs & cultural products.
          </p>

          {/* Search Box */}
          <div className="mt-8">
            <div
              className="
                bg-white/15 backdrop-blur-xl 
                border border-white/30 
                shadow-2xl 
                rounded-2xl 
                px-4 py-3 
                flex items-center gap-3 
                max-w-lg mx-auto
                transition-all
                hover:bg-white/25 hover:border-white/40 cursor-text
              "
            >
              <Search className="text-white w-5 h-5" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products, crafts, homestays..."
                className="
                  flex-1 bg-transparent outline-none 
                  text-white placeholder-white/60 text-sm
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
