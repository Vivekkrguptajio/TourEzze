import React from "react";
import { Users, CalendarDays, MapPin, XCircle, MessageCircle } from "lucide-react";

export default function Cancelled() {
  const cancelled = [
    {
      tour: "Dassam Falls Day Trip",
      name: "Sneha Verma",
      date: "Nov 28, 2024",
      phone: "+91 9998877665",
      tourists: 3,
      reason: "Tourist cancelled due to weather"
    },
    {
      tour: "Ranchi Heritage Walk",
      name: "Ankit Singh",
      date: "Nov 30, 2024",
      phone: "+91 8887766554",
      tourists: 2,
      reason: "Payment not completed"
    }
  ];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-green-900">Cancelled Bookings</h1>
      <p className="text-gray-600 text-sm">Tours cancelled by tourists or system</p>

      <div className="mt-6 space-y-4">
        {cancelled.map((c, i) => (
          <div key={i} className="border rounded-xl bg-white p-5 shadow-sm">

            {/* Top Row */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-red-700">{c.tour}</h2>
                <p className="text-sm text-gray-600">Cancelled by {c.name}</p>

                <div className="flex items-center gap-4 text-sm text-gray-700 mt-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} /> {c.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {c.phone}
                  </span>
                </div>
              </div>

              <span className="flex items-center gap-1 text-red-700 font-medium">
                <Users size={16} /> {c.tourists} tourists
              </span>
            </div>

            {/* Reason */}
            <p className="mt-3 text-sm bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md">
              <XCircle size={14} className="inline mr-1" />
              {c.reason}
            </p>

            {/* Message */}
            <div className="flex justify-end mt-4">
              <button className="flex items-center gap-1 px-4 py-1.5 rounded-lg border border-gray-400 text-gray-600 text-sm hover:bg-gray-100">
                <MessageCircle size={16} /> Message Tourist
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
