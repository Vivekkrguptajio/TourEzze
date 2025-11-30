export default function SortDropdown({ sortBy, setSortBy }) {
  const options = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
  ];

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-600">Sort by</span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded-lg px-3 py-1 text-sm"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
