import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Dummy bookings data
  const bookings = {
    "2024-12-15": [
      { title: "Hundru Falls Adventure", tourists: 4, status: "confirmed" },
    ],
    "2024-12-18": [
      { title: "Netarhat Sunset Tour", tourists: 6, status: "pending" },
    ],
    "2024-12-22": [
      { title: "Betla Wildlife Safari", tourists: 3, status: "confirmed" },
      { title: "Ranchi Heritage Walk", tourists: 2, status: "confirmed" },
    ],
  };

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const goPrev = () => setCurrentMonth(new Date(year, month - 1, 1));
  const goNext = () => setCurrentMonth(new Date(year, month + 1, 1));

  // Build 6 rows × 7 columns grid
  const weeks = [];
  let day = 1 - firstDayOfMonth;

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push(day);
      day++;
    }
    weeks.push(week);
  }

  const getBadgeClasses = (status) => {
    if (status === "confirmed")
      return "bg-green-100 text-green-700 border-green-300";
    if (status === "pending")
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    return "bg-gray-100 text-gray-700 border-gray-300";
  };

  return (
    <div className="p-6 text-gray-900">
      {/* HEADER */}
      <h1 className="text-2xl font-bold text-green-900">Availability Calendar</h1>
      <p className="text-sm text-gray-600">
        View and manage your bookings across all tours
      </p>

      <div className="mt-6 bg-white border rounded-xl shadow-sm p-5">
        {/* Month + controls */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-green-800">
            {monthName} {year}
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Week days */}
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 text-xs">
          {weeks.map((week, wi) =>
            week.map((d, di) => {
              const isValid = d > 0 && d <= daysInMonth;
              const dateKey = `${year}-${String(month + 1).padStart(
                2,
                "0"
              )}-${String(d).padStart(2, "0")}`;

              const dayBookings = isValid ? bookings[dateKey] || [] : [];

              return (
                <div
                  key={`${wi}-${di}`}
                  className={`h-28 border rounded-lg p-1.5 flex flex-col ${
                    isValid ? "bg-gray-50" : "bg-gray-100 opacity-40"
                  }`}
                >
                  {/* Date */}
                  {isValid && (
                    <div className="text-right text-[11px] text-gray-600">
                      {d}
                    </div>
                  )}

                  {/* Events */}
                  <div className="mt-1 space-y-1 overflow-hidden">
                    {dayBookings.slice(0, 2).map((b, i) => (
                      <div
                        key={i}
                        className={`border rounded px-1.5 py-0.5 text-[10px] flex flex-col ${getBadgeClasses(
                          b.status
                        )}`}
                      >
                        <span className="font-medium truncate">{b.title}</span>
                        <span className="flex items-center gap-1">
                          <Users size={10} /> {b.tourists} tourists
                        </span>
                      </div>
                    ))}

                    {dayBookings.length > 2 && (
                      <p className="text-[10px] text-gray-500">
                        +{dayBookings.length - 2} more
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-green-500" /> Confirmed Booking
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-yellow-500" /> Pending Booking
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> Tour location & details shown in tooltip later
          </span>
        </div>
      </div>
    </div>
  );
}
