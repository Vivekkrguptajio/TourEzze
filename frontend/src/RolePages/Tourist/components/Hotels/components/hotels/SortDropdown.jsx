import { ChevronDown } from "lucide-react";

export default function SortDropdown({ sortBy, setSortBy }) {
  const options = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
  ];

  return (
    <div className="flex items-center gap-2 text-sm">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded-lg px-3 py-1 text-sm appearance-none bg-white pr-8"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown size={18} className="text-gray-500 -ml-6 pointer-events-none" />
    </div>
  );
}
