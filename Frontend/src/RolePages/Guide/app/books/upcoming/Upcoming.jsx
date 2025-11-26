import React from "react";
import { Users, MessageCircle, CalendarDays, MapPin, CheckCircle } from "lucide-react";

export default function Upcoming() {
  const bookings = [
    {
      tour: "Jonha Waterfall Trek",
      name: "Rohit Sinha",
      date: "Dec 18, 2024",
      phone: "+91 9876543321",
      tourists: 3,
      status: "confirmed"
    },
    {
      tour: "Netarhat Sunset Tour",
      name: "Kavita Gupta",
      date: "Dec 22, 2024",
      phone: "+91 9123459821",
      tourists: 5,
      status: "confirmed"
    }
  ];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-green-900">Upcoming Bookings</h1>
      <p className="text-gray-600 text-sm">View and manage your upcoming tours</p>

      <div className="mt-6 space-y-4">
        {bookings.map((b, i) => (
          <div key={i} className="border rounded-xl bg-white p-5 shadow-sm">

            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-green-800">{b.tour}</h2>
                <p className="text-sm text-gray-600">Booked by {b.name}</p>

                <div className="flex items-center gap-4 text-sm text-gray-700 mt-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} /> {b.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {b.phone}
                  </span>
                </div>
              </div>

              <span className="flex items-center gap-1 text-green-700 font-medium">
                <Users size={16} /> {b.tourists} tourists
              </span>
            </div>

            {/* Status */}
            <p className="inline-block px-3 py-1 mt-3 text-xs bg-green-100 text-green-700 rounded-full">
              <CheckCircle size={14} className="inline mr-1" /> Confirmed
            </p>

            {/* Message Button */}
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
