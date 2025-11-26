import React from "react";
import { Users, MessageCircle, CalendarDays, MapPin, CheckCircle } from "lucide-react";

export default function Completed() {
  const completed = [
    {
      tour: "Hundru Falls Tour",
      name: "Rahul Khanna",
      date: "Dec 04, 2024",
      phone: "+91 9876555555",
      tourists: 4,
      amount: "₹13,500"
    },
    {
      tour: "Betla Wildlife Safari",
      name: "Neha Agarwal",
      date: "Dec 05, 2024",
      phone: "+91 9876566666",
      tourists: 6,
      amount: "₹4,500"
    }
  ];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-green-900">Completed Bookings</h1>
      <p className="text-gray-600 text-sm">Your completed tour history</p>

      <div className="mt-6 space-y-4">
        {completed.map((c, i) => (
          <div key={i} className="border rounded-xl bg-white p-5 shadow-sm">

            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-green-800">{c.tour}</h2>
                <p className="text-sm text-gray-600">Booked by {c.name}</p>

                <div className="flex items-center gap-4 text-sm text-gray-700 mt-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} /> {c.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {c.phone}
                  </span>
                </div>
              </div>

              <span className="flex items-center gap-1 text-green-700 font-medium">
                <Users size={16} /> {c.tourists} tourists
              </span>
            </div>

            {/* Amount + Status */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-green-700 font-semibold">{c.amount}</p>

              <p className="inline-block px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                <CheckCircle size={14} className="inline mr-1" /> Completed
              </p>
            </div>

            {/* Chat */}
            <div className="flex justify-end mt-4">
              <button className="flex items-center gap-1 px-4 py-1.5 rounded-lg border border-gray-400 text-gray-600 text-sm hover:bg-gray-100">
                <MessageCircle size={16} /> Chat with Tourist
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
