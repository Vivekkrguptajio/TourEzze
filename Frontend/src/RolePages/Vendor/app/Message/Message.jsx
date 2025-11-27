import React, { useState } from "react";
import {
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  Smile,
  Paperclip,
  MessageCircle,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Riya Sharma",
    lastMessage: "Thank you for quick response!",
    time: "10:32 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Amit Kumar",
    lastMessage: "Can you confirm delivery date?",
    time: "09:15 AM",
    unread: 0,
  },
  {
    id: 3,
    name: "Neha Verma",
    lastMessage: "Loved the product, thanks!",
    time: "Yesterday",
    unread: 0,
  },
];

const dummyMessages = [
  {
    from: "customer",
    text: "Hello! I wanted to ask about the product delivery time.",
    time: "10:10 AM",
  },
  {
    from: "you",
    text: "Hi! Your order will be delivered within 4–5 working days.",
    time: "10:12 AM",
  },
  {
    from: "customer",
    text: "Great! Also is COD available?",
    time: "10:15 AM",
  },
  {
    from: "you",
    text: "Yes, Cash on Delivery is available on your pincode. 😊",
    time: "10:18 AM",
  },
];

export default function Message() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // yaha baad me API / state add kar sakte ho
    console.log("Send message:", message);
    setMessage("");
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] p-6">
      <div className="bg-white border rounded-2xl shadow-sm h-full flex overflow-hidden">
        {/* Left: Conversation List */}
        <div className="w-full md:w-1/3 border-r flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <MessageCircle className="text-green-600" />
              <h2 className="font-semibold text-lg">Messages</h2>
            </div>
            <MoreVertical size={18} className="text-gray-500" />
          </div>

          {/* Search */}
          <div className="p-3 border-b">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
              <Search size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Chats List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedChat(c)}
                className={`w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-gray-50 ${
                  selectedChat.id === c.id ? "bg-green-50" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-700">
                  {c.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium text-sm">{c.name}</p>
                    <span className="text-xs text-gray-500">{c.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {c.lastMessage}
                  </p>
                  {c.unread > 0 && (
                    <span className="inline-flex mt-1 text-[10px] px-2 py-0.5 rounded-full bg-green-500 text-white">
                      {c.unread} new
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Chat Area */}
        <div className="hidden md:flex flex-1 flex-col bg-gray-50">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-white border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-700">
                {selectedChat.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-sm">{selectedChat.name}</p>
                <p className="text-xs text-gray-500">Active now</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <Phone size={18} className="cursor-pointer hover:text-green-600" />
              <Video size={18} className="cursor-pointer hover:text-green-600" />
              <MoreVertical
                size={18}
                className="cursor-pointer hover:text-green-600"
              />
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            <div className="text-center text-xs text-gray-400 mb-3">
              Today • 10 November 2025
            </div>

            {dummyMessages.map((m, idx) => {
              const isYou = m.from === "you";
              return (
                <div
                  key={idx}
                  className={`flex ${
                    isYou ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                      isYou
                        ? "bg-green-600 text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    <p>{m.text}</p>
                    <span
                      className={`mt-1 block text-[10px] ${
                        isYou ? "text-green-100" : "text-gray-400"
                      }`}
                    >
                      {m.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message Input */}
          <form
            onSubmit={handleSend}
            className="px-4 py-3 bg-white border-t flex items-center gap-2"
          >
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Smile size={18} className="text-gray-500" />
            </button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Paperclip size={18} className="text-gray-500" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm"
            >
              <Send size={16} />
              Send
            </button>
          </form>
        </div>

        {/* Mobile view message placeholder */}
        <div className="md:hidden flex-1 flex items-center justify-center text-gray-400 text-sm">
          Select a chat from the left to start messaging.
        </div>
      </div>
    </div>
  );
}
