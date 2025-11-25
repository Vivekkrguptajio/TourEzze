import { useState, useMemo } from "react";
import NavCategory from "./ui/NavCategory.jsx";
import ExploreCard from "./ui/ExploreCard.jsx";
import ExploreHeader from "./ExploreHeader.jsx";
import { exploreDestinations } from "../utils/exploreData.js";

export default function ExploreCategory() {
  // STATES
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // FINAL FILTER LOGIC
  const filteredData = useMemo(() => {
    return exploreDestinations.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.district.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-[#FAF7F1] min-h-screen">
      {/* 🔍 SEARCH HEADER */}
      <ExploreHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* CATEGORY BAR */}
      <div className="sticky top-[56px] z-50 bg-[#FAF7F1] py-3">
        <NavCategory
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {/* COUNT */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <p className="text-gray-600 text-sm">
          {filteredData.length} destinations found
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-6xl mx-auto px-4 mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-20">
        {filteredData.map((place) => (
          <ExploreCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
