import EventList from "../../../MainLanding/components/uiEvents/EventList";

export default function EventsSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-extrabold text-center mb-6">
        Upcoming Events in Jharkhand
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Discover cultural festivals, fairs, exhibitions and special celebrations
        happening across Jharkhand.
      </p>

      <div className="max-w-7xl mx-auto px-6">
        <EventList />
      </div>
    </section>
  );
}
