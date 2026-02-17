import { LuMessagesSquare } from "react-icons/lu";

export default function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-46 right-7 p-4 rounded-full shadow-xl 
        bg-gradient-to-br from-teal-500 to-teal-600 
        text-white hover:scale-110 transition-all 
        animate-pulse hover:animate-none z-[99999]
      "
    >
      <LuMessagesSquare size={28} />
    </button>
  );
}
