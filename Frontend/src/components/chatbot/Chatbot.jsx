import { useState, useRef, useEffect } from "react";
import FloatingButton from "./FloatingButton";
import ChatWindow from "./ChatWindow";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("English");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 150);
  };

  // Main Send Function
  const handleSend = async (customText) => {
    const text = customText || input;

    if (!text.trim()) return;

    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);
    scrollToBottom();

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, lang }),
      });

      const data = await res.json();

      const botMsg = {
        from: "bot",
        text: data.reply || "No response from server",
      };

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
      {/* Floating Button */}
      {!open && <FloatingButton onClick={() => setOpen(true)} />}

      {/* Chat Window */}
      {open && (
        <div ref={chatRef}>
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
