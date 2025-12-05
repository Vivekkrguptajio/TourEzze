import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("English");
  const [loading, setLoading] = useState(false);

  const languages = [
    "English",
    "Hindi",
    "Nagpuri",
    "Santhali",
    "Khortha",
    "Bhojpuri",
    "Magahi",
  ];

  const quickButtons = [
    "Best places in Jharkhand",
    "Ranchi me kya famous hai?",
    "Waterfalls near Ranchi",
    "Hill station Netarhat info",
  ];

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, lang }),
      });

      const data = await res.json();
      const botMsg = { from: "bot", text: data.reply || "No response." };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server not responding" },
      ]);
    }

    setLoading(false);
  };

  const handleQuick = async (text) => {
    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, lang }),
      });

      const data = await res.json();
      const botMsg = { from: "bot", text: data.reply || "No response." };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server not responding" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Icon */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-teal-400 p-4 rounded-full shadow-lg text-white hover:scale-110 transition z-[999999]"
        >
          <LuMessagesSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fadeIn z-[999999]">
          {/* Header */}
          <div className="bg-teal-50 px-4 py-3 border-b border-teal-100 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">Champa – Travel Assistant</h3>
              <p className="text-xs text-gray-500 -mt-1">
                Ask me anything about Jharkhand trips!
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm outline-none"
              >
                {languages.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>

              <IoClose
                size={24}
                className="cursor-pointer text-gray-600 hover:text-gray-800"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 bg-teal-50/50">
            {/* Quick Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {quickButtons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleQuick(btn)}
                  className="bg-teal-100 border border-teal-200 text-teal-700 px-3 py-1 text-xs rounded-full"
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex mb-3 ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 max-w-[75%] rounded-2xl text-sm whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-teal-600 text-white rounded-br-none"
                      : "bg-white border border-teal-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <p className="text-xs text-gray-500 mt-1">Champa is thinking...</p>
            )}
          </div>

          {/* Input Section */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <IoMdMic size={22} className="text-teal-600" />

            <input
              className="flex-1 px-4 py-2 border rounded-full text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="Type your travel question..."
              value={input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              onClick={sendMessage}
              className="bg-teal-600 p-2 rounded-full text-white hover:bg-teal-700"
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
