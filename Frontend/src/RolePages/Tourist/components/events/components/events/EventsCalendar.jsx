export default function EventsCalendar() {
  return (
    <div className="bg-white border shadow-sm rounded-xl p-5 h-fit">
      <h3 className="font-semibold mb-3">Upcoming Events Calendar</h3>

      <div className="text-center text-sm text-gray-700">
        <p>November 2025</p>

        {/* Dummy static calendar */}
        <div className="grid grid-cols-7 gap-2 mt-3 text-xs">
          {[...Array(30).keys()].map((d) => (
            <div
              key={d}
              className={`p-2 rounded ${
                d + 1 === 14 || d + 1 === 20
                  ? "bg-orange-200 text-orange-800 font-semibold"
                  : "bg-gray-50"
              }`}
            >
              {d + 1}
            </div>
          ))}
        </div>

        <button className="mt-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs">
          4 Upcoming
        </button>
      </div>
    </div>
  );
}
