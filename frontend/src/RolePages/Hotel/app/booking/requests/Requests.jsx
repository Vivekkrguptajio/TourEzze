import React from "react";
import { Phone, Calendar, Clock } from "lucide-react";

export default function Requests() {
  const requests = [
    {
      name: "Vikram Yadav",
      phone: "+91 98765 11111",
      type: "room",
      listing: "Deluxe Suite #101",
      checkin: "Dec 25, 2024",
      checkout: "Dec 28, 2024",
      amount: 13500,
      payment: "Payment Pending",
    },
    {
      name: "Anita Roy",
      phone: "+91 98765 22222",
      type: "vehicle",
      listing: "Mahindra Scorpio N",
      tripDate: "Dec 22, 2024",
      time: "06:00 AM",
      amount: 5000,
      payment: "Payment Pending",
    },
    {
      name: "Sanjay Gupta",
      phone: "+91 98765 33333",
      type: "room",
      listing: "Honeymoon Suite #401",
      checkin: "Dec 30, 2024",
      checkout: "Jan 02, 2025",
      amount: 24000,
      payment: "Partial Payment",
    },
  ];

  return (
    <div className="text-white px-6 pb-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">New Booking Requests</h1>
          <p className="text-gray-400 text-sm">
            Review and respond to incoming booking requests
          </p>
        </div>

        <button className="px-4 py-1 text-sm bg-yellow-900/40 border border-yellow-700 text-yellow-300 rounded-lg">
          4 Pending
        </button>
      </div>

      {/* REQUEST LIST */}
      <div className="mt-6 space-y-6">

        {requests.map((b, i) => (
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

              {/* STATUS TAGS */}
              <div className="flex flex-col gap-2 items-end">
                <span className="px-3 py-1 text-sm rounded-lg bg-yellow-900 text-yellow-300 border border-yellow-700">
                  Pending
                </span>

                <span className="px-3 py-1 text-xs rounded-lg bg-yellow-900 text-yellow-300 border border-yellow-700">
                  {b.payment}
                </span>
              </div>
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-3 gap-6 mt-6 text-sm">

              {/* Room Request */}
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

              {/* Vehicle Request */}
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

              <div>
                <p className="text-gray-400">Amount</p>
                <p className="mt-1 text-green-400 font-medium">
                  ₹ {b.amount.toLocaleString()}
                </p>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-4 mt-6">

              <button className="px-5 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-sm flex items-center gap-2">
                ✓ Accept
              </button>

              <button className="px-5 py-2 bg-red-800 hover:bg-red-700 rounded-lg text-sm flex items-center gap-2">
                ✕ Reject
              </button>

              <button className="px-5 py-2 bg-black border border-green-700 rounded-lg hover:bg-green-900/20 text-sm">
                💬 Chat with Tourist
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
