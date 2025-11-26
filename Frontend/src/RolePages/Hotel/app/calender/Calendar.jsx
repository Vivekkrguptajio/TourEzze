import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const bookings = {
    "2024-12-15": [
      { type: "room", title: "Deluxe", status: "confirmed" },
    ],
    "2024-12-16": [
      { type: "room", title: "Deluxe", status: "confirmed" },
      { type: "vehicle", title: "Toyota", status: "confirmed" },
    ],
    "2024-12-17": [
      { type: "room", title: "Deluxe", status: "confirmed" },
      { type: "vehicle", title: "Maruti", status: "pending" },
    ],
    "2024-12-18": [
      { type: "room", title: "Family", status: "confirmed" },
    ],
    "2024-12-20": [
      { type: "vehicle", title: "Mahindra", status: "confirmed" },
    ],
    "2024-12-22": [
      { type: "room", title: "Premium", status: "pending" },
    ],
    "2024-12-25": [
      { type: "room", title: "Honeymoon", status: "confirmed" },
      { type: "room", title: "Deluxe", status: "confirmed" },
      { type: "room", title: "Extra Room", status: "confirmed" },
    ],
  };

  const month = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  const firstDay = new Date(year, currentMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, currentMonth.getMonth() + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() + 1, 1));
  };

  const weeks = [];
  let day = 1 - firstDay;

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push(day);
      day++;
    }
    weeks.push(week);
  }

  return (
    <div className="min-h-screen bg-[#020403] text-white px-6 pb-10">

      {/* HEADER */}
      <h1 className="text-2xl font-bold">Availability Calendar</h1>
      <p className="text-gray-400 text-sm">View and manage your bookings across all listings</p>

      {/* Calendar Box */}
      <div className="mt-6 border border-green-900 rounded-lg p-6 bg-black/20">

        {/* MONTH + NAVIGATION */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{month} {year}</h2>

          <div className="flex items-center gap-3">
            <button onClick={prevMonth} className="p-2 bg-black border border-green-900 rounded hover:bg-green-900/30">
              <ChevronLeft size={18} />
            </button>
            <button onClick={nextMonth} className="p-2 bg-black border border-green-900 rounded hover:bg-green-900/30">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* WEEK DAYS */}
        <div className="grid grid-cols-7 text-center text-gray-400 text-sm mb-2">
          <div>Sun</div> <div>Mon</div> <div>Tue</div> <div>Wed</div>
          <div>Thu</div> <div>Fri</div> <div>Sat</div>
        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-7 gap-3">

          {weeks.map((week, wi) =>
            week.map((day, di) => {
              const valid = day > 0 && day <= daysInMonth;
              const dateKey = `${year}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

              return (
                <div
                  key={`${wi}-${di}`}
                  className={`h-36 border border-green-900 rounded-lg p-2 text-xs relative ${
                    valid ? "bg-[#050c08]" : "opacity-30"
                  }`}
                >
                  {/* DAY NUMBER */}
                  {valid && (
                    <p className="text-gray-400 font-medium">{day}</p>
                  )}

                  {/* BOOKINGS — EXACT SCREENSHOT STYLE */}
                  <div className="mt-2 space-y-1 overflow-hidden">
                    {valid &&
                      bookings[dateKey]?.slice(0, 3).map((b, i) => (
                        <div
                          key={i}
                          className={`w-full rounded px-2 py-[3px] flex items-center gap-2 border 
                            ${
                              b.status === "confirmed"
                                ? "bg-[#002b11] text-green-300 border-green-900"
                                : "bg-[#3a2e00] text-yellow-300 border-yellow-800"
                            }
                          `}
                        >
                          {/* ICONS MATCHING SCREENSHOT */}
                          <span className="text-sm">{b.type === "room" ? "🛏" : "🚗"}</span>
                          <span className="truncate">{b.title}</span>
                        </div>
                      ))}

                    {/* + more indicator */}
                    {valid && bookings[dateKey]?.length > 3 && (
                      <p className="text-[10px] text-gray-500">
                        +{bookings[dateKey].length - 3} more
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          )}

        </div>

        {/* LEGENDS */}
        <div className="flex items-center gap-6 mt-6 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-green-500"></span> Confirmed
          </span>

          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-yellow-600"></span> Pending
          </span>

          <span className="flex items-center gap-2">🛏 Room Booking</span>
          <span className="flex items-center gap-2">🚗 Vehicle Booking</span>
        </div>
      </div>
    </div>
  );
}
