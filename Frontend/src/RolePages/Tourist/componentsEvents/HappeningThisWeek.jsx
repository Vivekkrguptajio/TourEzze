// componentsEvents/HappeningThisWeek.jsx
import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";

export default function HappeningThisWeek({ events }) {
  const [index, setIndex] = useState(0);

  if (!events || events.length === 0) return null;
  const active = events[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? events.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === events.length - 1 ? 0 : i + 1));

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span role="img" aria-label="fire">
            🔥
          </span>
          Happening This Week
        </h2>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="h-8 w-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-50"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="h-8 w-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-50"
          >
            ›
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-80">
          <img
            src={active.image}
            alt={active.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 space-y-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
            {active.label}
          </span>

          <h3 className="text-xl font-bold text-gray-900">
            {active.title}
          </h3>

          <div className="flex flex-col gap-1 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{active.dateRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{active.location}</span>
            </div>
          </div>

          <p className="text-sm text-gray-700">
            {active.shortDescription}
          </p>

          <button className="mt-4 inline-flex px-6 py-2 rounded-lg bg-orange-500 text-white text-sm font-semibold">
            View Details
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
