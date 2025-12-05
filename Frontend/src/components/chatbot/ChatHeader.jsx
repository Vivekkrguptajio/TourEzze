import { IoClose } from "react-icons/io5";

export default function ChatHeader({ lang, setLang, onClose }) {
  const languages = [
    "English", "Hindi", "Nagpuri",
    "Santhali", "Khortha", "Bhojpuri", "Magahi"
  ];

  return (
    <div className="bg-teal-500 px-5 py-4 flex items-center justify-between text-white shadow">
      <div>
        <h2 className="font-bold text-lg">Champa – Travel Assistant</h2>
        <p className="text-xs opacity-90">Ask anything about Jharkhand</p>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-white text-black rounded px-2 py-1 text-sm outline-none"
        >
          {languages.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        <IoClose
          size={26}
          className="cursor-pointer hover:text-gray-200"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
