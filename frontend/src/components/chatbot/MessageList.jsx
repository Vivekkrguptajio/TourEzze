import { useEffect, useRef } from "react";

export default function MessageList({ messages }) {
  const bottomRef = useRef(null);

  // AUTO SCROLL TO BOTTOM
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`
              px-4 py-3 max-w-[78%] 
              text-sm whitespace-pre-wrap leading-relaxed
              ${msg.from === "user" 
                ? "bg-teal-600 text-white rounded-2xl rounded-br-none shadow-md"
                : "bg-white text-gray-900 border border-gray-200 rounded-2xl rounded-bl-none shadow"
              }
            `}
            style={{
              lineHeight: "1.45",
              paddingLeft: msg?.from !== "user" ? "16px" : "12px",
            }}
          >
            <div className="space-y-1">
              {msg.text.split("\n").map((line, index) => {
                line = line.trim();

                if (/^-{2,}/.test(line)) {
                  return null;
                }

                if (line.startsWith("Title:")) {
                  return (
                    <div key={index} className="font-semibold text-lg text-teal-700">
                      {line.replace("Title:", "").trim()}
                    </div>
                  );
                }

                if (line.startsWith("-")) {
                  return (
                    <div key={index} className="pl-3 relative">
                      <span className="absolute left-0 top-0 text-teal-600">•</span>
                      <span>{line.replace("- ", "")}</span>
                    </div>
                  );
                }

                return <div key={index}>{line}</div>;
              })}
            </div>
          </div>
        </div>
      ))}

      {/* AUTO SCROLL TARGET */}
      <div ref={bottomRef}></div>
    </div>
  );
}
