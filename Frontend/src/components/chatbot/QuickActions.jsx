export default function QuickActions({ onQuickSend }) {
  const quickButtons = [
    "Best places in Jharkhand",
    "Ranchi me kya famous hai?",
    "Waterfalls near Ranchi",
    "Netarhat hill station full info"
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {quickButtons.map((btn) => (
        <button
          key={btn}
          onClick={() => onQuickSend(btn)}
          className="bg-white border border-teal-300 text-teal-700 
          px-3 py-1 text-xs rounded-full shadow-sm hover:bg-teal-50"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
