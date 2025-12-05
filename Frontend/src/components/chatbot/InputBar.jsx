import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";

export default function InputBar({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="p-4 border-t bg-white flex items-center gap-3">
      <IoMdMic size={23} className="text-teal-600" />

      <input
        className="flex-1 px-4 py-2 border rounded-full text-sm
        focus:ring-2 focus:ring-teal-500 outline-none"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />

      <button
        onClick={send}
        className="bg-teal-600 p-2 rounded-full text-white hover:bg-teal-700"
      >
        <FiSend size={20} />
      </button>
    </div>
  );
}
