import React from "react";
import { Search, Filter, Calendar, Phone, Clock, CheckCircle } from "lucide-react";

export default function Upcoming() {
  const bookings = [
    {
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      type: "room",
      listing: "Deluxe Suite #101",
      checkin: "Dec 15, 2024",
      checkout: "Dec 18, 2024",
      amount: 12000,
      status: "Confirmed",
      payment: "Paid",
    },
    {
      name: "Amit Verma",
      phone: "+91 87654 32109",
      type: "vehicle",
      listing: "Toyota Innova Crysta",
      tripDate: "Dec 16, 2024",
      time: "09:00 AM",
      amount: 3500,
      status: "Confirmed",
      payment: "Payment Pending",
    },
    {
      name: "Sunita Devi",
      phone: "+91 76543 21098",
      type: "room",
      listing: "Family Room #205",
      checkin: "Dec 18, 2024",
      checkout: "Dec 22, 2024",
      amount: 8000,
      status: "Confirmed",
      payment: "Partial Payment",
    },
  ];

  return (
    <div className="text-white px-6 pb-10">

      {/* HEADER */}
      <h1 className="text-2xl font-bold">Upcoming Bookings</h1>
      <p className="text-gray-400 text-sm">
        View and manage your upcoming reservations
      </p>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center w-full bg-[#0a150f] border border-green-900 rounded-xl px-4 py-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by guest name or listing..."
            className="bg-transparent outline-none ml-3 w-full text-sm placeholder-gray-500"
          />
        </div>

        <button className="flex items-center gap-2 bg-[#0a150f] border border-green-900 px-4 py-3 rounded-xl text-sm hover:border-green-500 transition">
          All Bookings
          <Filter className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* BOOKINGS LIST */}
      <div className="mt-6 space-y-6">

        {bookings.map((b, i) => (
          <div
            key={i}
            className="border border-green-900 rounded-xl p-6 bg-[#050c08]"
          >
            {/* TOP ROW */}
            <div className="flex items-start justify-between">

              <div className="flex items-start gap-4">
                {/* PROFILE CIRCLE */}
                <div className="w-12 h-12 rounded-full bg-gray-700" />

                <div>
                  <h2 className="text-lg font-semibold">{b.name}</h2>

                  {/* PHONE */}
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Phone size={14} />
                    {b.phone}
                  </div>

                  {/* LISTING */}
                  <div className="flex items-center gap-2 mt-1 text-sm text-green-400">
                    {b.type === "room" ? "🛏" : "🚗"} {b.listing}
                  </div>
                </div>
              </div>

              {/* STATUS BADGES */}
              <div className="flex flex-col items-end gap-2 text-sm">

                <span className="px-3 py-1 rounded-lg bg-green-900 text-green-300 border border-green-700">
                  {b.status}
                </span>

                {b.payment === "Paid" && (
                  <span className="px-3 py-1 rounded-lg bg-green-900 text-green-300 border border-green-700">
                    Paid
                  </span>
                )}

                {b.payment === "Payment Pending" && (
                  <span className="px-3 py-1 rounded-lg bg-yellow-900 text-yellow-300 border border-yellow-700">
                    Payment Pending
                  </span>
                )}

                {b.payment === "Partial Payment" && (
                  <span className="px-3 py-1 rounded-lg bg-yellow-900 text-yellow-300 border border-yellow-700">
                    Partial Payment
                  </span>
                )}

              </div>
            </div>

            {/* BOOKING DETAILS */}
            <div className="grid grid-cols-3 gap-6 mt-6 text-sm">
              {/* Room bookings */}
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

              {/* Vehicle bookings */}
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

              {/* AMOUNT */}
              <div>
                <p className="text-gray-400">Amount</p>
                <p className="mt-1 text-green-400 font-medium">
                  ₹ {b.amount.toLocaleString()}
                </p>
              </div>
            </div>

            {/* CHAT BUTTON */}
            <button className="mt-6 px-4 py-2 text-sm border border-green-700 rounded-lg hover:bg-green-900/20 transition">
              💬 Chat with Tourist
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
