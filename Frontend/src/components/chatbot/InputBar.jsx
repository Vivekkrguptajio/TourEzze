import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";

export default function InputBar({ input, setInput, onSend }) {
  return (
    <div className="p-3 bg-white border-t flex items-center gap-2">
      <IoMdMic size={22} className="text-teal-600" />

      <input
        className="
          flex-1 px-4 py-2 border rounded-full text-sm 
          focus:ring-2 focus:ring-teal-500 outline-none
        "
        placeholder="Ask Champa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />

      <button
        onClick={onSend}
        className="
          bg-teal-600 text-white p-2 rounded-full 
          hover:bg-teal-700 transition shadow
        "
      >
        <FiSend size={20} />
      </button>
    </div>
  );
}
