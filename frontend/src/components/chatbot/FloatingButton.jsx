import { LuMessagesSquare } from "react-icons/lu";

export default function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-44 right-6 p-5 rounded-[24px] shadow-[0_15px_30px_rgba(0,95,131,0.3)]
        bg-gradient-to-br from-[#005f83] to-[#007ba1]
        text-white hover:scale-110 active:scale-95 transition-all duration-300
        z-[1000] border-2 border-white/20 group
      "
    >
      <div className="absolute inset-0 rounded-[24px] bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <LuMessagesSquare size={26} className="group-hover:rotate-6 transition-transform" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
      </span>
    </button>
  );
}
