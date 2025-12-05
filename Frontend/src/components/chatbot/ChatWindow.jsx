import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import QuickActions from "./QuickActions";
import InputBar from "./InputBar";

export default function ChatWindow({
  lang, setLang,
  messages, input, setInput, onSend,
  loading, onClose
}) {
  return (
    <div
      className="
        fixed bottom-10 right-10
        w-[500px] h-[700px]        /* Bigger Size */
        backdrop-blur-3xl bg-white/85
        rounded-[32px]
        shadow-[0_15px_55px_rgba(0,0,0,0.35)]
        border border-white/40
        flex flex-col overflow-hidden
        animate-fadeIn
        z-[99999]
      "
      style={{
        WebkitBackdropFilter: "blur(18px)", /* Enhanced blur */
      }}
    >

      {/* Header */}
      <ChatHeader lang={lang} setLang={setLang} onClose={onClose} />

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100/60">

        {/* Quick Buttons */}
        <QuickActions onSelect={onSend} />

        {/* Messages */}
        <MessageList messages={messages} />

        {/* Loading */}
        {loading && (
          <p className="text-xs text-gray-500 mt-2">Champa is thinking...</p>
        )}
      </div>

      {/* Input */}
      <InputBar input={input} setInput={setInput} onSend={onSend} />
    </div>
  );
}
