import React, { useState } from "react";
import {
  Phone,
  Video,
  MoreVertical,
  SendHorizonal,
  Search,
} from "lucide-react";

export default function Message() {
  const conversations = [
    {
      id: 1,
      name: "Priya Sharma",
      time: "2 min ago",
      unread: 2,
      room: "Deluxe Suite #101",
      messages: [
        { sender: "guest", text: "Hello! I have a booking for Dec 15–18. Is early check-in available?", time: "10:30 AM" },
        { sender: "you", text: "Hello Priya! Welcome! Yes, we can arrange early check-in at 11 AM instead of 2 PM. Would that work for you?", time: "10:32 AM" },
        { sender: "guest", text: "That would be perfect! Also, is breakfast included?", time: "10:35 AM" },
        { sender: "you", text: "Yes, complimentary breakfast is included from 7 AM to 10 AM. We serve both North Indian and South Indian options.", time: "10:38 AM" },
        { sender: "guest", text: "Wonderful! One more question – do you have parking available?", time: "10:40 AM" },
        { sender: "you", text: "Yes, we have free parking space for all our guests. I'll reserve a spot for you.", time: "10:42 AM" },
        { sender: "guest", text: "Thank you! Looking forward to my stay.", time: "10:45 AM" },
      ],
    },
    {
      id: 2,
      name: "Amit Verma",
      time: "15 min ago",
      unread: 1,
      room: "Toyota Innova",
      messages: [],
    },
    {
      id: 3,
      name: "Sunita Devi",
      time: "1 hour ago",
      unread: 0,
      room: "Family Room #205",
      messages: [],
    },
    {
      id: 4,
      name: "Ravi Prasad",
      time: "3 hours ago",
      unread: 0,
      room: "Maruti Dzire",
      messages: [],
    },
    {
      id: 5,
      name: "Kavita Mishra",
      time: "Yesterday",
      unread: 0,
      room: "Honeymoon Suite",
      messages: [],
    },
  ];

  const [active, setActive] = useState(conversations[0]);

  return (
    <div className="min-h-screen bg-[#020403] text-white flex">

      {/* ================= LEFT SIDEBAR ================= */}
      <div className="w-80 border-r border-green-900 p-4">
        <h1 className="text-2xl font-bold mb-1">Messages</h1>
        <p className="text-gray-400 text-sm">Chat with tourists about their bookings</p>

        {/* Search */}
        <div className="flex items-center gap-2 mt-4 bg-[#0a150f] border border-green-900 rounded-lg px-3 py-2">
          <Search size={16} className="text-gray-400" />
          <input
            className="w-full bg-transparent outline-none text-sm"
            placeholder="Search conversations..."
          />
        </div>

        {/* Conversation List */}
        <div className="mt-4 space-y-3">
          {conversations.map((c) => (
            <div
              key={c.id}
              onClick={() => setActive(c)}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition ${
                active.id === c.id
                  ? "bg-green-900/30 border border-green-900"
                  : "hover:bg-[#0a150f]"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gray-700" />

              <div className="flex-1">
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-gray-400">{c.room}</p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">{c.time}</p>
                {c.unread > 0 && (
                  <span className="inline-block text-xs bg-green-600 px-2 py-0.5 rounded-full">
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT CHAT AREA ================= */}
      <div className="flex-1 p-6">

        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-green-900 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-700 rounded-full" />

            <div>
              <p className="font-semibold">{active.name}</p>
              <p className="text-xs text-gray-400">{active.room}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <Phone size={18} className="cursor-pointer" />
            <Video size={18} className="cursor-pointer" />
            <MoreVertical size={18} className="cursor-pointer" />
          </div>
        </div>

        {/* CHAT MESSAGES */}
        <div className="mt-4 h-[70vh] overflow-y-auto pr-2 space-y-4">

          {active.messages.map((m, i) => (
            <div key={i} className={`max-w-lg ${m.sender === "you" ? "ml-auto" : ""}`}>
              <div
                className={`px-4 py-2 text-sm rounded-xl ${
                  m.sender === "you"
                    ? "bg-green-600 text-white"
                    : "bg-[#0a150f] text-gray-200"
                }`}
              >
                {m.text}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {m.time}
              </p>
            </div>
          ))}

        </div>

        {/* QUICK REPLIES */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="px-3 py-1 text-xs bg-black border border-green-900 rounded-lg hover:bg-green-900/20">
            Yes, that's available!
          </button>
          <button className="px-3 py-1 text-xs bg-black border border-green-900 rounded-lg hover:bg-green-900/20">
            Let me check and get back to you.
          </button>
          <button className="px-3 py-1 text-xs bg-black border border-green-900 rounded-lg hover:bg-green-900/20">
            Check-in is at 2 PM, check-out at 11 AM.
          </button>
          <button className="px-3 py-1 text-xs bg-black border border-green-900 rounded-lg hover:bg-green-900/20">
            Thank you for choosing us!
          </button>
        </div>

        {/* INPUT BOX */}
        <div className="flex items-center gap-3 mt-4 bg-[#0a150f] border border-green-900 rounded-lg px-4 py-3">
          <input
            className="flex-1 bg-transparent outline-none"
            placeholder="Type a message..."
          />
          <button className="bg-green-600 hover:bg-green-500 p-2 rounded-lg">
            <SendHorizonal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
