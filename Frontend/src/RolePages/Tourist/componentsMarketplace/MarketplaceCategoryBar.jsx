import { Tags } from "lucide-react";

export default function MarketplaceCategoryBar({ selected, onSelect }) {
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

  return (
    <div className="bg-white py-3 shadow-sm sticky top-[72px] z-20">
      <div className="max-w-6xl mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className={`px-4 py-2 rounded-full border whitespace-nowrap transition-all
			  ${
				selected === c
				  ? "bg-orange-500 border-orange-500 text-white"
				  : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
			  }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
