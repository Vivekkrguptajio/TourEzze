// componentsEvents/EventsCalendar.jsx
export default function EventsCalendar({ events }) {
  const daysWithEvents = events.map((e) => e.startDay);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-2xl shadow-md border p-4 text-sm">
      <h3 className="font-semibold mb-3">Upcoming Events Calendar</h3>
      <p className="text-xs text-gray-500 mb-2">November 2025</p>

      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-500">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((day) => {
          const hasEvent = daysWithEvents.includes(day);
          return (
            <div
              key={day}
              className={`h-7 w-7 flex items-center justify-center rounded-full mx-auto ${
                hasEvent
                  ? "bg-orange-100 text-orange-700 border border-orange-400"
                  : "text-gray-700"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex flex-col gap-1 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-orange-400" />
          <span>Event Day</span>
        </div>
      </div>
    </div>
  );
}
