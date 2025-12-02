

import React, { useState } from "react";
import CategoryTabs from "../components/explore/CategoryTabs";
import FiltersSidebar from "../components/explore/filter/FiltersSidebar";
import Hero from "../components/explore/Hero";

// IMPORT external data
import destinations from "../data/data.js";

// PREMIUM CARD
import DestinationCard from "../components/explore/DestinationCard";

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter logic
  const filtered = query
    ? destinations.filter((d) =>
        d.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : destinations;

  return (
    <div className="px-6 py-6 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      
      {/* Hero Section */}
      <Hero query={query} setQuery={setQuery} />

      {/* Top Options Row */}
      <div className="flex justify-between items-center mt-6 mb-5">
        <CategoryTabs />

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition text-sm"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex gap-6">

        {/* Sidebar */}
        {showFilters && (
          <div className="w-64">
            <FiltersSidebar />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">

          <h2 className="text-2xl font-bold mb-1">All Destinations</h2>
          <p className="text-sm text-gray-600 mb-4">
            {filtered.length} places found
          </p>

          {/* Dynamic Grid */}
          <div className="max-w-7xl mx-auto px-2">
            <div
              className={`
                grid gap-5
                ${
                  showFilters
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }
              `}
            >
              {filtered.map((p) => (
                <DestinationCard key={p.id} item={p} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

