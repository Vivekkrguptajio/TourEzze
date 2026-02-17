export default function QuickActions({ onSelect }) {
  const buttons = [
    "Best places in Jharkhand",
    "Ranchi me kya famous hai?",
    "Waterfalls near Ranchi",
    "Hill station Netarhat info",
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-4 px-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onSelect(btn)}
          className="
            px-4 py-2 text-sm font-medium
            rounded-full  
            bg-white 
            text-teal-700
            border border-teal-300
            shadow-sm
            hover:bg-teal-600 hover:text-white
            hover:shadow-md
            active:scale-95
            transition-all duration-200
          "
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
