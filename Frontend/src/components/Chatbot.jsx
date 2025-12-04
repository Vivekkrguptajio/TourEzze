import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Sparkles, Send } from "lucide-react";
import "./chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message to backend
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const userInput = input;
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();
      const botText = data?.reply || "Sorry, response nahi aaya 😅";

      setMessages((prev) => [...prev, { from: "bot", text: botText }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Server error, please try later 🚨" },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-16 right-6 z-[9999]
          h-16 w-16 rounded-full
          bg-gradient-to-br from-green-600 to-green-700
          text-white shadow-xl shadow-green-400/40
          flex items-center justify-center
          hover:scale-110 hover:shadow-green-500/50
          transition-all duration-300
        "
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </button>

      {/* POPUP WINDOW */}
      {isOpen && (
        <div
          className="
            fixed bottom-44 right-6 z-[9999]
            w-[350px] max-h-[75vh]
            bg-white/95 backdrop-blur-xl
            rounded-3xl shadow-2xl border border-green-200
            flex flex-col animate-chatbot-popup
          "
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <h2 className="font-bold text-lg tracking-wide">Champa (AI)</h2>
            </div>
            <p className="text-xs opacity-90">Your Travel Guide</p>
          </div>

          {/* BODY */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-white to-green-50 space-y-4">
            {/* Intro Message */}
            <div className="bg-green-100 text-green-900 p-4 rounded-xl border border-green-200 shadow-sm leading-relaxed">
              <p className="font-semibold text-lg">Namaste! 🙏</p>
              <p className="mt-1">I'm Champa, your AI travel assistant.</p>

              <ul className="mt-3 space-y-1 text-sm">
                <li>🌄 Best itinerary planning</li>
                <li>🏨 Hotels & travel help</li>
                <li>🗺️ Explore Jharkhand</li>
                <li>🛍️ Local shops & artisans</li>
              </ul>
            </div>

            {/* Quick Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="chatbot-chip bg-yellow-100 border-yellow-300 text-yellow-700">
                3-Day Trip Plan
              </button>

              <button className="chatbot-chip bg-blue-100 border-blue-300 text-blue-700">
                Wildlife Tours
              </button>

              <button className="chatbot-chip bg-green-100 border-green-300 text-green-700">
                Local Cuisine
              </button>

              <button className="chatbot-chip bg-orange-100 border-orange-300 text-orange-700">
                Culture Spots
              </button>
            </div>

            {/* Chat Messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow ${
                    msg.from === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-green-100 text-green-900 border border-green-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={chatEndRef}></div>

            {/* Language Note */}
            <div className="pt-2 text-center text-xs text-gray-500">
              Chat in: English • Hindi • Nagpuri • Santhali
            </div>
          </div>

          {/* INPUT BOX */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-4 py-2 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500/40 focus:outline-none text-sm"
            />

            <button
              onClick={handleSend}
              className="h-11 w-11 rounded-xl bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-all shadow-md hover:scale-105"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
