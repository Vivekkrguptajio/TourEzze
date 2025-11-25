// componentsEvents/FeaturedFestivals.jsx
import { CalendarDays, MapPin } from "lucide-react";

export default function FeaturedFestivals({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          ⭐ Featured Cultural Festivals ⭐
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-1">
          Experience the most celebrated and culturally significant festivals of Jharkhand.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative bg-black rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white space-y-2">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500">
                  Featured
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60">
                  {event.isFree ? "Free Entry" : event.priceLabel}
                </span>
              </div>

              <h3 className="font-semibold text-lg">{event.title}</h3>

              <div className="flex flex-wrap gap-3 text-xs text-gray-200">
                <div className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  <span>{event.dateRange}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-sm text-gray-200 line-clamp-2">
                {event.shortDescription}
              </p>

              <button className="mt-2 inline-flex px-5 py-2 rounded-lg bg-orange-500 text-sm font-semibold">
                Explore Festival
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
