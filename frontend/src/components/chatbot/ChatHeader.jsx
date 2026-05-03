import { IoClose } from "react-icons/io5";

export default function ChatHeader({ lang, setLang, onClose }) {
  return (
    <div className="
      bg-gradient-to-r from-[#005f83] to-[#007ba1]
      text-white px-6 py-5 flex items-center justify-between shadow-lg relative overflow-hidden
    ">
      {/* Decorative background element */}
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />

      <div className="relative z-10">
        <h3 className="font-bold text-lg tracking-tight">Champa AI</h3>
        <p className="text-[11px] opacity-90 uppercase tracking-widest font-medium">Jharkhand Travel Partner</p>
      </div>

      <div className="flex items-center gap-3 relative z-10">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="
            text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white/90
            backdrop-blur-sm shadow-sm outline-none border-none
            appearance-none cursor-pointer hover:bg-white transition-colors
          "
        >
          {["English","Hindi","Nagpuri","Santhali","Khortha","Bhojpuri","Magahi"]
            .map((l) => <option key={l} className="bg-white">{l}</option>)}
        </select>

        <button 
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors active:scale-90"
        >
          <IoClose size={20} />
        </button>
      </div>
    </div>
  );
}
