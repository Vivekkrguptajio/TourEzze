import EventCard from "./EventCard";

export default function EventsGrid({ events }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}
