// componentsEvents/EventsHeader.jsx
import { Search } from "lucide-react";
import heroBanner from "./assets/hero-banner.jpg";

export default function EventsHeader({ onSearch }) {
  return (
    <header className="relative w-full h-[400px] md:h-[480px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Cultural festivals of Jharkhand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#FAF7F1]" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Events & Cultural Festivals of Jharkhand
        </h1>
        <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl drop-shadow">
          Explore vibrant tribal celebrations, cultural performances, local
          fairs, and tourist events happening across the state.
        </p>

        {/* Search */}
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events..."
            onChange={(e) => onSearch(e.target.value)}
            className="pl-12 h-14 w-full bg-white border rounded-2xl px-4 shadow"
          />
        </div>
      </div>
    </header>
  );
}
