// componentsEvents/EventsGrid.jsx
import EventCard from "./EventCard.jsx";
import EventsCalendar from "./EventsCalendar.jsx";

export default function EventsGrid({ events }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-[2fr,1fr]">
      <div>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">All Events</h2>
          <p className="text-sm text-gray-600">
            {events.length} events found
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="md:pl-2">
        <EventsCalendar events={events} />
      </div>
    </section>
  );
}
