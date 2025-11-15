import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import "../styles/chatbot.css";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-float-btn"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window animate-chatbot-popup">
          
          {/* Header */}
          <div className="chatbot-header">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <MessageCircle className="h-5 w-5" />
              Chat with Champa
            </div>
            <p className="text-xs opacity-80">Your AI travel assistant</p>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">

            {/* Greeting message */}
            <div className="chatbot-msg-box">
              <p>Namaste! 🙏 I'm Champa, your AI travel assistant. I can help you:</p>

              <ul className="mt-2 space-y-1">
                <li>✨ Plan your perfect itinerary</li>
                <li>🏨 Book hotels and transport</li>
                <li>🗺️ Get destination recommendations</li>
                <li>🛍️ Find local artisans and products</li>
              </ul>
            </div>

            {/* Quick buttons */}
            <div className="flex gap-2 flex-wrap">
              <button className="chatbot-chip">Plan 3-day trip</button>

              <button className="chatbot-chip">Wildlife tours</button>

              <button className="chatbot-chip">Local cuisine</button>
            </div>

            <div className="pt-2 text-center text-xs text-gray-500">
              Chat in: English • Hindi • Nagpuri • Santhali
            </div>
          </div>
        </div>
      )}
    </>
  );
}
