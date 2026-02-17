const tabs = [
  "All",
  "Cultural Festivals",
  "Tribal Dance & Art",
  "Seasonal Events",
  "Local Fairs",
  "Religious Events",
  "Music & Performances",
];

export default function EventsCategoryTabs({ category, setCategory }) {
  return (
    <div className="flex gap-2 flex-wrap mt-4">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setCategory(t)}
          className={`px-4 py-2 text-sm rounded-full border ${
            category === t
              ? "bg-orange-600 text-white border-orange-600"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
