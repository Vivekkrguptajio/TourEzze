import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import QuickActions from "./QuickActions";
import InputBar from "./InputBar";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [lang, setLang] = useState("English");
  const [loading, setLoading] = useState(false);

  const sendToServer = async (text) => {
    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, lang }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.reply || "No response" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server not responding" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="
      fixed bottom-6 right-6 w-[420px] h-[620px] bg-white rounded-3xl 
      shadow-2xl flex flex-col overflow-hidden border border-gray-200 
      animate-fadeIn z-[999999]
    ">
      <ChatHeader lang={lang} setLang={setLang} onClose={onClose} />

      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-3">
          <QuickActions onQuickSend={sendToServer} />
        </div>

        <MessageList messages={messages} loading={loading} />
      </div>

      <InputBar onSend={sendToServer} />
    </div>
  );
}
