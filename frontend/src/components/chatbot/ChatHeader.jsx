import { IoClose } from "react-icons/io5";

export default function ChatHeader({ lang, setLang, onClose }) {
  return (
    <div className="
      bg-gradient-to-r from-teal-600 to-teal-500
      text-white px-4 py-3 flex items-center justify-between shadow
    ">
      <div>
        <h3 className="font-semibold text-lg">Champa – Travel Assistant</h3>
        <p className="text-xs opacity-80 -mt-1">Jharkhand Tourism Guide</p>
      </div>

      <div className="flex items-center gap-2">
        
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="
            text-black text-xs px-2 py-1 rounded bg-white 
            shadow-sm outline-none
          "
        >
          {["English","Hindi","Nagpuri","Santhali","Khortha","Bhojpuri","Magahi"]
            .map((l) => <option key={l}>{l}</option>)}
        </select>

        <IoClose
          size={26}
          className="cursor-pointer hover:scale-110 transition"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
