import { Search } from "lucide-react";

export default function MarketplaceHeader({ onSearch }) {
  return (
    <div className="text-center py-10 bg-[#FAF7F1]">
      <h1 className="text-4xl font-bold text-[#8B3A1A]">Jharkhand Marketplace</h1>
      <p className="text-gray-700 mt-2">
        Shop authentic tribal handicrafts, homestays, souvenirs and cultural products
      </p>

      {/* Search Bar */}
      <div className="mt-6 max-w-xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full h-12 bg-white border rounded-xl pl-12 pr-4 shadow"
        />
      </div>
    </div>
  );
}
