import { useState, useMemo } from "react";
import NavCategory from "../componentsExplorePage/ui/NavCategory.jsx";
import ExploreCard from "../componentsExplorePage/ui/ExploreCard.jsx";
import { exploreDestinations } from "../utils/exploreData.js";

export default function ExploreCategory() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return exploreDestinations;
    return exploreDestinations.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div className="bg-[#FAF7F1] min-h-screen">
      
      {/* FIXED CATEGORY BAR */}
      <div className="sticky top-[56px] z-50 bg-[#FAF7F1] py-3">
        <NavCategory
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {/* Count */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <p className="text-gray-600 text-sm">
          {filteredData.length} destinations found
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-20">
        {filteredData.map((place) => (
          <ExploreCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
