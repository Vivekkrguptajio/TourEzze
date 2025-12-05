export default function QuickActions({ onSelect }) {
  const buttons = [
    "Best places in Jharkhand",
    "Ranchi me kya famous hai?",
    "Waterfalls near Ranchi",
    "Hill station Netarhat info",
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onSelect(btn)}
          className="
            bg-teal-100 border border-teal-200 text-teal-800 
            px-3 py-1 text-xs rounded-full hover:bg-teal-200
            transition
          "
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
