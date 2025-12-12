import { useState, useRef, useEffect } from "react";
import FloatingButton from "./FloatingButton";
import ChatWindow from "./ChatWindow";
<<<<<<< HEAD
import { API_URL } from "../../api.js";
=======
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("English");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  // Auto scroll
  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 150);
  };

  // ----------------------------
  // MAIN SEND FUNCTION
  // ----------------------------
  const handleSend = async (customText) => {
    const text = customText || input;
    if (!text.trim()) return;

    // Add user message
    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    scrollToBottom();

    const lower = text.toLowerCase();
    const greetings = ["hi", "hii", "hello", "hey", "hlo", "namaste", "hola", "champa"];

    // ----------------------------
    // GREETING MESSAGE (Restriction Removed)
    // → Greeting dikhega + API bhi chalega
    // ----------------------------
    if (greetings.some((g) => lower.includes(g))) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Hi! 👋 I'm Champa, your Jharkhand travel assistant. How can I help you today?",
        },
      ]);
      scrollToBottom();
      // **NO RETURN HERE → API WILL ALSO RUN**
    }

    // ----------------------------
    // NORMAL API CALL
    // ----------------------------
    setLoading(true);

    try {
<<<<<<< HEAD
      const res = await fetch(`${API_URL}/api/chat`, {
=======
      const res = await fetch("http://localhost:5000/api/chat", {
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, lang }),
      });

      const data = await res.json();

      const botMsg = { from: "bot", text: data.reply || "No response from server" };
      setMessages((prev) => [...prev, botMsg]);

      scrollToBottom();
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server not responding" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {!open && <FloatingButton onClick={() => setOpen(true)} />}

      {open && (
        <div ref={chatRef} style={{ height: "100%", overflowY: "auto" }}>
          <ChatWindow
            lang={lang}
            setLang={setLang}
            messages={messages}
            input={input}
            setInput={setInput}
            onSend={() => handleSend()}
            loading={loading}
            onQuick={(text) => handleSend(text)}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}
