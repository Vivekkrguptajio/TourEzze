import { LuMessagesSquare } from "react-icons/lu";

export default function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600
      p-5 rounded-full shadow-xl text-white transition-all duration-200
      hover:scale-110 z-[999999]"
    >
      <LuMessagesSquare size={30} />
    </button>
  );
}
