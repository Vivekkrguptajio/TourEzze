import React from "react";
import { Search, Phone, Calendar, Clock } from "lucide-react";

export default function Completed() {
  const completed = [
    {
      name: "Rahul Khanna",
      phone: "+91 98765 55555",
      type: "room",
      listing: "Deluxe Suite #101",
      checkin: "Dec 01, 2024",
      checkout: "Dec 04, 2024",
      amount: 13500,
    },
    {
      name: "Neha Agarwal",
      phone: "+91 98765 66666",
      type: "vehicle",
      listing: "Toyota Innova Crysta",
      tripDate: "Dec 05, 2024",
      time: "Full Day",
      amount: 4500,
    },
    {
      name: "Pankaj Tripathi",
      phone: "+91 98765 77777",
      type: "room",
      listing: "Family Room #205",
      checkin: "Nov 28, 2024",
      checkout: "Dec 02, 2024",
      amount: 10000,
    },
  ];

  // Total completed + revenue
  const total = completed.length;
  const revenue = completed.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="text-white px-6 pb-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Completed Bookings</h1>
          <p className="text-gray-400 text-sm">
            View your completed reservations history
          </p>
        </div>

        {/* STATUS + REVENUE */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-1 text-sm bg-green-900/40 border border-green-700 text-green-300 rounded-lg">
            {total} Completed
          </button>

          <div className="text-right">
            <p className="text-gray-400 text-xs">Total Revenue</p>
            <p className="text-green-400 font-semibold text-lg">
              ₹{revenue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center w-full bg-[#0a150f] border border-green-900 rounded-xl px-4 py-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search completed bookings..."
            className="bg-transparent outline-none ml-3 w-full text-sm placeholder-gray-500"
          />
        </div>
      </div>

      {/* BOOKINGS LIST */}
      <div className="mt-6 space-y-6">

        {completed.map((b, i) => (
          <div
            key={i}
            className="border border-green-900 rounded-xl p-6 bg-[#050c08]"
          >
            {/* TOP ROW */}
            <div className="flex items-start justify-between">

              <div className="flex items-start gap-4">
                {/* Profile placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-700" />

                <div>
                  <h2 className="text-lg font-semibold">{b.name}</h2>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Phone size={14} /> {b.phone}
                  </div>

                  <div className="flex items-center gap-2 mt-1 text-sm text-green-400">
                    {b.type === "room" ? "🛏" : "🚗"} {b.listing}
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div className="flex flex-col gap-2 items-end">
                <span className="px-3 py-1 text-sm rounded-lg bg-green-900 text-green-300 border border-green-700">
                  Completed
                </span>

                <span className="px-3 py-1 text-xs rounded-lg bg-green-900 text-green-300 border border-green-700">
                  Paid
                </span>
              </div>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-3 gap-6 mt-6 text-sm">

              {/* Room Completed */}
              {b.type === "room" && (
                <>
                  <div>
                    <p className="text-gray-400">Check-in</p>
                    <p className="mt-1 flex items-center gap-2">
                      <Calendar size={14} /> {b.checkin}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Check-out</p>
                    <p className="mt-1 flex items-center gap-2">
                      <Calendar size={14} /> {b.checkout}
                    </p>
                  </div>
                </>
              )}

              {/* Vehicle Completed */}
              {b.type === "vehicle" && (
                <>
                  <div>
                    <p className="text-gray-400">Trip Date</p>
                    <p className="mt-1 flex items-center gap-2">
                      <Calendar size={14} /> {b.tripDate}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Time</p>
                    <p className="mt-1 flex items-center gap-2">
                      <Clock size={14} /> {b.time}
                    </p>
                  </div>
                </>
              )}

              {/* Amount */}
              <div>
                <p className="text-gray-400">Amount</p>
                <p className="mt-1 text-green-400 font-medium">
                  ₹ {b.amount.toLocaleString()}
                </p>
              </div>

            </div>

            <button className="mt-6 px-4 py-2 text-sm border border-green-700 rounded-lg hover:bg-green-900/20 transition">
              💬 Chat with Tourist
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
