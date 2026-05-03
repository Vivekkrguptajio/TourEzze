import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";

export default function InputBar({ input, setInput, onSend }) {
  const recognitionRef = useRef(null);
  const silenceTimerRef = useRef(null);

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

    // Reset old timer
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

    // Auto stop after 3 sec silence
    silenceTimerRef.current = setTimeout(() => {
      recognition.stop();
      if (input.trim() !== "") {
        onSend(); // auto send
      }
    }, 3000);

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

      // Auto send when speech ends
      if (input.trim() !== "") {
        onSend();
      }
    };

    recognition.onerror = (err) => {
      console.log("Speech error:", err);
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    };
  };

  return (
    <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
      <button
        onClick={handleVoiceInput}
        className="p-3 rounded-xl cursor-pointer hover:bg-slate-100 transition-all active:scale-90 group"
      >
        <IoMdMic
          size={22}
          className="text-slate-400 group-hover:text-[#005f83] transition-colors"
        />
      </button>

      <div className="flex-1 relative">
        <input
          className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-[14px] placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#005f83]/10 focus:border-[#005f83] outline-none transition-all"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSend()}
        />
      </div>

      <button
        onClick={onSend}
        className="bg-[#005f83] text-white p-3.5 rounded-2xl hover:bg-[#007ba1] transition-all active:scale-95 shadow-lg shadow-blue-900/20"
      >
        <FiSend size={18} />
      </button>
    </div>
  );
}
