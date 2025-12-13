import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, Mic, MapPin, Sparkles } from "lucide-react";
import { API_URL } from "../api.js";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("English");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

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
    { icon: "🏔️", text: "Best places in Jharkhand" },
    { icon: "🌟", text: "Ranchi me kya famous hai?" },
    { icon: "💧", text: "Waterfalls near Ranchi" },
    { icon: "⛰️", text: "Hill station Netarhat info" },
  ];

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to format bot responses into points
  const formatResponse = (text) => {
    // Check if text contains numbered points (1., 2., etc.)
    if (/\d+\.\s/.test(text)) {
      const points = text.split(/\d+\.\s/).filter(item => item.trim());
      return points.map((point, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-semibold">
            {idx + 1}
          </span>
          <p className="flex-1">{point.trim()}</p>
        </div>
      ));
    }
    
    // Check for bullet points or line breaks
    if (text.includes('\n') || text.includes('•') || text.includes('-')) {
      const lines = text.split(/\n|•|-/).filter(item => item.trim());
      if (lines.length > 1) {
        return lines.map((line, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <span className="text-teal-600 mt-1">•</span>
            <p className="flex-1">{line.trim()}</p>
          </div>
        ));
      }
    }

    // If no special formatting detected, return as is
    return <p>{text}</p>;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, lang }),
      });

      const data = await res.json();
      const botMsg = { from: "bot", text: data.reply || "No response." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server se connection nahi ho paya. Kripya thodi der baad try karein." },
      ]);
    }

    setLoading(false);
  };

  const handleQuick = async (text) => {
    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, lang }),
      });

      const data = await res.json();
      const botMsg = { from: "bot", text: data.reply || "No response." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server se connection nahi ho paya. Kripya thodi der baad try karein." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-teal-500 to-emerald-600 p-5 rounded-full shadow-2xl text-white hover:scale-110 hover:shadow-teal-500/50 transition-all duration-300 z-[99999] group"
        >
          <MessageCircle size={28} className="group-hover:animate-bounce" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
        </button>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-8 right-8 w-[420px] h-[650px] rounded-3xl shadow-2xl border border-gray-200 backdrop-blur-xl bg-white overflow-hidden flex flex-col z-[99999] animate-in slide-in-from-bottom-4 duration-300">
          
          {/* HEADER with Gradient */}
          <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 text-white px-6 py-4 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Champa
                    <MapPin size={16} />
                  </h3>
                  <p className="text-xs opacity-90">
                    Jharkhand Travel Expert
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg border border-white/30 cursor-pointer hover:bg-white/30 transition"
                >
                  {languages.map((l) => (
                    <option key={l} value={l} className="text-gray-800">{l}</option>
                  ))}
                </select>

                <button
                  onClick={() => setOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-lg transition-all hover:rotate-90 duration-300"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* MESSAGES AREA */}
          <div
            className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-gray-50 to-white space-y-4"
            ref={chatRef}
          >
            {/* WELCOME MESSAGE */}
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <MapPin size={36} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Namaste! 🙏
                </h4>
                <p className="text-sm text-gray-600 mb-4 px-4">
                  Main Champa hoon, aapki Jharkhand travel guide. Aap mujhse kuch bhi pooch sakte hain!
                </p>
              </div>
            )}

            {/* QUICK BUTTONS */}
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 mb-3">Quick Questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickButtons.map((btn) => (
                    <button
                      key={btn.text}
                      onClick={() => handleQuick(btn.text)}
                      className="bg-white border-2 border-teal-100 hover:border-teal-300 text-gray-700 px-3 py-2.5 text-xs rounded-xl hover:shadow-md transition-all duration-200 text-left flex items-center gap-2 group"
                    >
                      <span className="text-base">{btn.icon}</span>
                      <span className="group-hover:text-teal-700 font-medium">{btn.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CHAT MESSAGES */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                } animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`px-4 py-3 max-w-[85%] rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-br-none shadow-lg shadow-teal-600/20"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-md"
                  }`}
                >
                  {msg.from === "bot" ? formatResponse(msg.text) : msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-500">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
                <span className="text-xs">Champa soch rahi hai...</span>
              </div>
            )}
          </div>

          {/* INPUT SECTION */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center gap-2 bg-gray-50 rounded-2xl px-4 py-2 border-2 border-gray-200 focus-within:border-teal-400 transition-all">
              <button className="text-teal-600 hover:text-teal-700 hover:scale-110 transition-transform">
                <Mic size={20} />
              </button>

              <input
                className="flex-1 bg-transparent px-2 py-1 text-sm outline-none placeholder:text-gray-400"
                placeholder="Apna sawal likhein..."
                value={input}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-teal-600 to-emerald-600 p-2 rounded-xl text-white hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-center text-gray-400 mt-2">
              Powered by Champa AI ✨
            </p>
          </div>
        </div>
      )}
    </>
  );
}