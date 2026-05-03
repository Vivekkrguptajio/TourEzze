import { useEffect, useRef } from "react";

export default function MessageList({ messages }) {
  const bottomRef = useRef(null);

  // AUTO SCROLL TO BOTTOM
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5 bg-gray-50/10">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
        >
          <div
            className={`
              px-4 py-2.5 max-w-[85%] 
              text-[14px] whitespace-pre-wrap leading-relaxed shadow-sm
              ${msg.from === "user" 
                ? "bg-[#005f83] text-white rounded-[22px] rounded-tr-none"
                : "bg-white text-slate-800 border border-gray-100 rounded-[22px] rounded-tl-none"
              }
            `}
            style={{ lineHeight: "1.55" }}
          >
            <div className="space-y-1">
              {msg.text.split("\n").map((line, index) => {
                line = line.trim();
                if (/^-{2,}/.test(line)) return null;

                if (line.startsWith("Title:")) {
                  return (
                    <div key={index} className="font-bold text-[15px] text-[#005f83] mb-1">
                      {line.replace("Title:", "").trim()}
                    </div>
                  );
                }

                if (line.startsWith("-")) {
                  return (
                    <div key={index} className="pl-4 relative">
                      <span className="absolute left-0 top-0 text-[#005f83] font-bold">●</span>
                      <span className="text-slate-600">{line.replace("- ", "")}</span>
                    </div>
                  );
                }

                return (
                  <div key={index} className={msg.from === 'bot' ? 'text-slate-600' : 'text-white'}>
                    {line}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
      <div ref={bottomRef} className="h-4" />
    </div>
  );
}
