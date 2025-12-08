import { useRef } from "react";
import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";

export default function InputBar({ input, setInput, onSend }) {
  const recognitionRef = useRef(null);

  if (!recognitionRef.current) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = "hi-IN";
      recog.interimResults = false;
      recog.continuous = false;
      recognitionRef.current = recog;
    }
  }

  const handleVoiceInput = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      alert("Voice recognition is not supported in this browser!");
      return;
    }

    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };

    recognition.onerror = (err) => {
      console.log("Speech error:", err);
    };
  };

  return (
    <div className="p-3 bg-white border-t flex items-center gap-2">

      {/* 🎤 Mic Button with Hover Effect */}
      <button
        onClick={handleVoiceInput}
        className="
          p-2 rounded-full cursor-pointer 
          hover:bg-teal-100 transition 
          active:scale-95
        "
      >
        <IoMdMic
          size={22}
          className="
            text-teal-600 
            hover:text-teal-700 
            transition
          "
        />
      </button>

      <input
        className="
          flex-1 px-4 py-2 border rounded-full text-sm 
          focus:ring-2 focus:ring-teal-500 outline-none
        "
        placeholder="Ask Champa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
      />

      <button
        onClick={onSend}
        className="
          bg-teal-600 text-white p-2 rounded-full 
          hover:bg-teal-700 transition active:scale-95 shadow
        "
      >
        <FiSend size={20} />
      </button>
    </div>
  );
}
