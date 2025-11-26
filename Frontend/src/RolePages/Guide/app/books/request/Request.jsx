import React from "react";
import { Users, MessageCircle, XCircle, CheckCircle, CalendarDays, MapPin } from "lucide-react";

export default function Requests() {
  const requests = [
    {
      tour: "Hundru Falls Adventure",
      name: "Priya Sharma",
      date: "June 20, 2024",
      phone: "+91 9876543210",
      tourists: 4,
      message: "We’re a family of 4 coming from Delhi. Can we do the tour early morning?"
    },
    {
      tour: "Betla Wildlife Safari",
      name: "Amit Patel",
      date: "June 22, 2024",
      phone: "+91 9123456789",
      tourists: 2,
      message: "First time visiting Jharkhand. Very excited!"
    }
  ];

  return (
    <div className="p-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold text-green-900">Bookings Management</h1>
      <p className="text-gray-600 text-sm">Manage all your tour bookings and requests</p>

      {/* TOP FILTER TABS */}
      <div className="flex gap-4 mt-5">
        {["New (2)", "Upcoming", "Completed", "Cancelled"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 rounded-full text-sm border ${
              i === 0
                ? "bg-green-600 text-white border-green-700"
                : "bg-white text-green-700 border-green-600 hover:bg-green-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* REQUEST LISTS */}
      <div className="mt-6 space-y-4">
        {requests.map((req, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-white p-5 flex flex-col gap-3"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-green-800">{req.tour}</h2>
                <p className="text-sm text-gray-600">Booking request from {req.name}</p>

                {/* Date + Phone */}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-700">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} /> {req.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {req.phone}
                  </span>
                </div>
              </div>

              {/* Tourists count */}
              <span className="flex items-center gap-1 text-green-700 font-medium text-sm">
                <Users size={16} /> {req.tourists} tourists
              </span>
            </div>

            {/* Message Box */}
            <div className="bg-gray-100 p-3 rounded-md text-sm text-gray-700">
              “{req.message}”
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-end mt-2">
              <button className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700">
                <CheckCircle size={16} /> Accept
              </button>

              <button className="flex items-center gap-1 px-4 py-1.5 rounded-lg border border-red-400 text-red-500 text-sm hover:bg-red-50">
                <XCircle size={16} /> Decline
              </button>

              <button className="flex items-center gap-1 px-4 py-1.5 rounded-lg border border-gray-400 text-gray-600 text-sm hover:bg-gray-100">
                <MessageCircle size={16} /> Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
