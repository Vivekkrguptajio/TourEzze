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
        fixed bottom-10 right-10
        w-[500px] h-[700px]
        backdrop-blur-3xl bg-white/85
        rounded-[32px]
        shadow-[0_15px_55px_rgba(0,0,0,0.35)]
        border border-white/40
        flex flex-col overflow-hidden
        animate-fadeIn
        z-[99999]
      "
      style={{ WebkitBackdropFilter: "blur(18px)" }}
    >

      <ChatHeader lang={lang} setLang={setLang} onClose={onClose} />

      <div className="flex-1 overflow-y-auto p-5 bg-gray-100/60">

        {/* QUICK ACTIONS FIXED */}
        <QuickActions onSelect={handleQuickAction} />

        <MessageList messages={messages} />

        {loading && (
          <p className="text-xs text-gray-500 mt-2">Champa is thinking...</p>
        )}
      </div>

      <InputBar input={input} setInput={setInput} onSend={onSend} />
    </div>
  );
}
