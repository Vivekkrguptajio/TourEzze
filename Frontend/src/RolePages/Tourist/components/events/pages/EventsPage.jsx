import { useState } from "react";
import EventsHero from "../components/events/EventsHero";
import EventsCategoryTabs from "../components/events/EventsCategoryTabs";
import EventLargeCard from "../components/events/EventLargeCard";
import EventsGrid from "../components/events/EventsGrid";
import EventsCalendar from "../components/events/EventsCalendar";
import useEventFilters from "../hooks/useEventFilters";
import events from "../data/events.js";

export default function EventsPage() {
  const { filtered, category, setCategory, search, setSearch } =
    useEventFilters(events);

  return (
    <div className="pb-10 bg-[#f5f4ef]">
      {/* Hero */}
      <EventsHero search={search} setSearch={setSearch} />

      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* Category Tabs */}
        <EventsCategoryTabs category={category} setCategory={setCategory} />

        {/* Highlight Section */}
        <h2 className="mt-6 text-xl font-bold text-orange-700">
          🔥 Happening This Week
        </h2>

        <EventLargeCard event={events[0]} />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">All Events</h3>
            <p className="text-sm text-gray-600 mb-4">
              {filtered.length} events found
            </p>

            <EventsGrid events={filtered} />
          </div>

          <EventsCalendar />
        </div>
      </div>
    </div>
  );
}
