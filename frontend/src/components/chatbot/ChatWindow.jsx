import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import QuickActions from "./QuickActions";
import InputBar from "./InputBar";

export default function ChatWindow({
  lang, setLang,
  messages, input, setInput, onSend,
  loading, onClose
}) {

  // 100% Working FIX: Auto Search
  const handleQuickAction = (text) => {
    setInput(text);

    // Give React state time to update
    setTimeout(() => {
      onSend();  // auto search / auto send
    }, 10);
  };

  return (
    <div
      className="
        fixed bottom-24 right-6
        w-[420px] h-[600px]
        backdrop-blur-2xl bg-white/95
        rounded-[32px]
        shadow-[0_20px_50px_rgba(0,0,0,0.2)]
        border border-white
        flex flex-col overflow-hidden
        animate-slideUp
        z-[1000]
      "
      style={{ WebkitBackdropFilter: "blur(20px)" }}
    >
      <ChatHeader lang={lang} setLang={setLang} onClose={onClose} />

      <div className="flex-1 overflow-hidden flex flex-col relative bg-gray-50/30">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <QuickActions onSelect={handleQuickAction} />
          <MessageList messages={messages} />
          
          {loading && (
            <div className="px-6 py-2 flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-[#005f83] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 bg-[#005f83] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-[#005f83] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Champa is typing</p>
            </div>
          )}
        </div>
      </div>

      <InputBar input={input} setInput={setInput} onSend={onSend} />
    </div>
  );
}
