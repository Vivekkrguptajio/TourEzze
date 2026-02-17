import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  PlusCircle,
  HelpCircle,
  BedDouble,
  Car,
} from "lucide-react";

export default function Support() {
  const [ticketType, setTicketType] = useState("general");

  const [tickets] = useState([
    {
      id: 1,
      subject: "Room booking not syncing",
      type: "hotel",
      status: "open",
      date: "Dec 15, 2024",
    },
    {
      id: 2,
      subject: "Vehicle pricing not updating",
      type: "vehicle",
      status: "pending",
      date: "Dec 14, 2024",
    },
    {
      id: 3,
      subject: "Weekly payout delay",
      type: "general",
      status: "closed",
      date: "Dec 10, 2024",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#020403] text-white px-6 pb-20">
      {/* HEADER */}
      <h1 className="text-3xl font-bold">Support</h1>
      <p className="text-gray-400 text-sm">
        Get help regarding your hotel rooms, transport fleet, and payouts
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        {/* LEFT — QUICK SUPPORT + FAQs */}
        <div className="space-y-6 lg:col-span-1">

          {/* QUICK SUPPORT */}
          <div className="border border-green-900 bg-black/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <HelpCircle size={18} /> Quick Support
            </h2>

            <div className="space-y-4 text-sm">
              {/* Email */}
              <div className="flex items-center gap-3 p-3 bg-[#0a150f] border border-green-900 rounded-lg hover:bg-green-900/20 cursor-pointer">
                <Mail size={18} className="text-green-400" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-gray-400 text-xs">support@tour-ezze.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 bg-[#0a150f] border border-green-900 rounded-lg hover:bg-green-900/20 cursor-pointer">
                <Phone size={18} className="text-green-400" />
                <div>
                  <p className="font-medium">Call Support</p>
                  <p className="text-gray-400 text-xs">+91 98765 43210</p>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex items-center gap-3 p-3 bg-[#0a150f] border border-green-900 rounded-lg hover:bg-green-900/20 cursor-pointer">
                <MessageSquare size={18} className="text-green-400" />
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-gray-400 text-xs">Chat with a support agent</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="border border-green-900 bg-black/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">FAQs</h2>

            {/* HOTEL FAQ */}
            <details className="bg-[#0a150f] border border-green-900 rounded-lg p-3 mb-2 text-sm cursor-pointer">
              <summary className="font-medium flex gap-2 items-center">
                <BedDouble size={16} className="text-green-400" />
                How do I update room prices?
              </summary>
              <p className="text-gray-300 mt-2 text-xs">
                Go to Listings → My Rooms → Edit → Update pricing.
              </p>
            </details>

            {/* VEHICLE FAQ */}
            <details className="bg-[#0a150f] border border-green-900 rounded-lg p-3 mb-2 text-sm cursor-pointer">
              <summary className="font-medium flex gap-2 items-center">
                <Car size={16} className="text-green-400" />
                Why is vehicle availability not showing?
              </summary>
              <p className="text-gray-300 mt-2 text-xs">
                Ensure the vehicle status is marked as “Available” in My Vehicles.
              </p>
            </details>

            {/* PAYOUT FAQ */}
            <details className="bg-[#0a150f] border border-green-900 rounded-lg p-3 text-sm cursor-pointer">
              <summary className="font-medium">Why is payout delayed?</summary>
              <p className="text-gray-300 mt-2 text-xs">
                Weekly payouts happen every Friday. Check Earnings → Settlement.
              </p>
            </details>
          </div>
        </div>

        {/* RIGHT — TICKET FORM + HISTORY */}
        <div className="lg:col-span-2 space-y-6">

          {/* RAISE TICKET */}
          <div className="border border-green-900 bg-black/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <PlusCircle size={18} /> Create Support Ticket
            </h2>

            {/* Ticket Type */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setTicketType("hotel")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  ticketType === "hotel"
                    ? "bg-green-700 border border-green-400"
                    : "bg-[#0a150f] border border-green-900"
                }`}
              >
                🛏 Hotel
              </button>

              <button
                onClick={() => setTicketType("vehicle")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  ticketType === "vehicle"
                    ? "bg-green-700 border border-green-400"
                    : "bg-[#0a150f] border border-green-900"
                }`}
              >
                🚗 Vehicle
              </button>

              <button
                onClick={() => setTicketType("general")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  ticketType === "general"
                    ? "bg-green-700 border border-green-400"
                    : "bg-[#0a150f] border border-green-900"
                }`}
              >
                📌 General
              </button>
            </div>

            <input
              className="p-3 w-full bg-[#0a150f] border border-green-900 rounded-lg outline-none text-sm"
              placeholder="Subject"
            />

            <textarea
              className="p-3 w-full h-28 mt-4 bg-[#0a150f] border border-green-900 rounded-lg outline-none text-sm"
              placeholder="Describe the issue..."
            />

            <button className="mt-4 bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500">
              Submit Ticket
            </button>
          </div>

          {/* TICKET HISTORY */}
          <div className="border border-green-900 bg-black/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Your Tickets</h2>

            <div className="space-y-4">
              {tickets.map((t) => (
                <div
                  key={t.id}
                  className="p-4 bg-[#0a150f] border border-green-900 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{t.subject}</p>
                    <p className="text-xs text-gray-400">
                      {t.date} • {t.type.toUpperCase()}
                    </p>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`px-3 py-1 text-xs rounded-lg ${
                      t.status === "open"
                        ? "bg-green-700 text-green-300"
                        : t.status === "pending"
                        ? "bg-yellow-700 text-yellow-300"
                        : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
