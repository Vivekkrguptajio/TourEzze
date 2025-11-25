// componentsEvents/EventsPage.jsx
import { useMemo, useState } from "react";
import EventsHeader from "../componentsEvents/EventsHeader.jsx";
import EventsCategoryBar from "../componentsEvents/EventsCategoryBar.jsx";
import HappeningThisWeek from "../componentsEvents/HappeningThisWeek.jsx";
import FeaturedFestivals from "../componentsEvents/FeaturedFestivals.jsx";
import EventsGrid from "../componentsEvents/EventsGrid.jsx";
import { eventsData } from "../utils/eventsData.js";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return eventsData.filter((event) => {
      const matchCategory =
        selectedCategory === "All" ||
        event.categoryKey === selectedCategory;

      const matchSearch =
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.location.toLowerCase().includes(q) ||
        (event.shortDescription &&
          event.shortDescription.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const thisWeekEvents = filteredEvents.filter((e) => e.isThisWeek);
  const featuredEvents = filteredEvents.filter((e) => e.isFeatured);

  return (
    <div className="bg-[#FAF7F1] min-h-screen">
      {/* Top hero + search */}
      <EventsHeader onSearch={setSearchQuery} />

      {/* Category bar */}
      <EventsCategoryBar
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Sections */}
      <HappeningThisWeek events={thisWeekEvents} />
      <FeaturedFestivals events={featuredEvents} />
      <EventsGrid events={filteredEvents} />
    </div>
  );
}
