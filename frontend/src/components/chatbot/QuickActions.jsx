export default function QuickActions({ onSelect }) {
  const buttons = [
    "Best places in Jharkhand",
    "Ranchi me kya famous hai?",
    "Waterfalls near Ranchi",
    "Hill station Netarhat info",
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6 px-4 py-2">
      <p className="w-full text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1 ml-1 text-center">Quick Suggestions</p>
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onSelect(btn)}
          className="
            px-4 py-2 text-[12px] font-semibold
            rounded-xl
            bg-white 
            text-[#005f83]
            border border-gray-100
            shadow-sm
            hover:bg-[#005f83] hover:text-white hover:border-[#005f83]
            hover:shadow-md
            active:scale-95
            transition-all duration-300
          "
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
