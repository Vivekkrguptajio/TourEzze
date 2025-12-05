export default function MessageList({ messages, loading }) {
  return (
    <div className="p-4 space-y-3">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${
            msg.from === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`px-4 py-2 max-w-[75%] rounded-2xl text-sm shadow 
            ${msg.from === "user"
              ? "bg-teal-600 text-white rounded-br-none"
              : "bg-white text-gray-800 border rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {loading && (
        <p className="text-xs text-gray-500">Champa is typing...</p>
      )}
    </div>
  );
}
