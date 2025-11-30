import React, { useState } from "react";
import CategoryTabs from "../components/explore/CategoryTabs";
import FiltersSidebar from "../components/explore/filter/FiltersSidebar";
import DestinationGrid from "../components/explore/DestinationGrid";
import Hero from "../components/explore/Hero";

// IMPORT external data
import destinations from "../data/data.js";

export default function ExplorePage() {
  const [query, setQuery] = useState("");

  return (
    <div className="px-6 py-6">
      
      <Hero query={query} setQuery={setQuery} />

      {/* Categories */}
      <CategoryTabs />

      <div className="mt-5 flex gap-6">

        {/* Filters */}
        <FiltersSidebar />

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">All Destinations</h2>
          <p className="text-sm text-gray-600 mb-4">
            {destinations.length} places found
          </p>

          {/* Pass data to grid */}
          <DestinationGrid data={destinations} />
        </div>

      </div>
    </div>
  );
}
