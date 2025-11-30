const categories = [
  "All",
  "Tribal Handicrafts",
  "Bamboo & Woodwork",
  "Handloom & Textiles",
  "Dokra Metal Craft",
  "Paintings",
  "Local Foods & Spices",
  "Cultural Souvenirs",
  "Homestay Rooms",
  "Eco-Tourism Packages",
];

export default function MarketCategoryTabs({ category, setCategory }) {
  return (
    <div className="flex gap-2 flex-wrap mt-4">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setCategory(c)}
          className={`px-4 py-2 text-sm rounded-full border ${
            category === c
              ? "bg-orange-600 text-white border-orange-600"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
