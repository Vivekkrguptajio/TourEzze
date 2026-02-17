import React, { useState } from "react";
import { Send, User, Search } from "lucide-react";

export default function Message() {
  const [selectedChat, setSelectedChat] = useState(0);

  const chats = [
    {
      name: "Rahul Verma",
      lastMessage: "Guide bhai, kal ka timing confirm hai na?",
      time: "2:45 PM",
      unread: 2,
      messages: [
        { from: "user", text: "Hello bhai!", time: "2:30 PM" },
        { from: "them", text: "Guide bhai, kal ka timing confirm hai na?", time: "2:45 PM" },
        { from: "user", text: "Haan bhai, 6AM sharp start karenge.", time: "2:50 PM" },
      ],
    },
    {
      name: "Neha Singh",
      lastMessage: "Thank you for the tour 😊",
      time: "Yesterday",
      unread: 0,
      messages: [
        { from: "them", text: "Tour amazing tha! Thanks 👍", time: "5:20 PM" },
        { from: "user", text: "Glad you liked it 😊", time: "5:25 PM" },
      ],
    },
    {
      name: "Amit & Family",
      lastMessage: "Safari ka pura plan bata dijiye",
      time: "Mon",
      unread: 1,
      messages: [
        { from: "them", text: "Safari ka pura plan bata dijiye", time: "7:40 AM" },
      ],
    },
  ];

  const activeChat = chats[selectedChat];

  return (
    <div className="p-6 flex gap-4 h-[85vh]">
      {/* LEFT SIDE — Chat List */}
      <div className="w-1/3 bg-white border rounded-xl shadow-sm flex flex-col">
        <div className="p-4 border-b flex items-center gap-3">
          <Search size={18} className="text-gray-500" />
          <input
            placeholder="Search messages..."
            className="w-full outline-none text-sm"
          />
        </div>

        <div className="overflow-y-auto">
          {chats.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedChat(i)}
              className={`p-4 cursor-pointer flex justify-between items-center border-b ${
                selectedChat === i ? "bg-green-50" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <User size={20} className="text-green-700" />
                </div>
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500 truncate w-32">
                    {c.lastMessage}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400">{c.time}</p>
                {c.unread > 0 && (
                  <span className="bg-green-600 text-white text-[10px] py-0.5 px-2 rounded-full">
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — Chat Window */}
      <div className="w-2/3 bg-white border rounded-xl shadow-sm flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <User size={20} className="text-green-700" />
          </div>
          <div>
            <p className="font-semibold">{activeChat.name}</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {activeChat.messages.map((m, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                m.from === "user"
                  ? "ml-auto bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {m.text}
              <div className="text-[9px] text-right opacity-70 mt-1">
                {m.time}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t flex items-center gap-3">
          <input
            placeholder="Type a message..."
            className="w-full bg-gray-100 px-3 py-2 rounded-lg outline-none text-sm"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
