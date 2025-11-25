import { Search } from "lucide-react";
import Input from "./ui/Input.jsx";

export default function ExploreHeader({ searchQuery, onSearchChange }) {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold text-green-900">
            Explore Jharkhand
          </h1>

          <p className="text-lg md:text-xl text-green-800">
            Discover nature, culture, waterfalls, wildlife and more.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-700" />
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="
                pl-12 h-14 text-lg
                bg-white
                border border-green-300
                focus:border-green-500
                focus:ring-2 focus:ring-green-500/40
                rounded-xl
                shadow-md
                text-green-900
                placeholder:text-green-600
              "
            />
          </div>

        </div>
      </div>
    </header>
  );
}
