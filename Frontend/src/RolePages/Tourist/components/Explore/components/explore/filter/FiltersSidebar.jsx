import React from "react";

export default function FiltersSidebar() {
  return (
    <div className="w-64 bg-white p-4 rounded-xl shadow border h-fit sticky top-24">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Sort By */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Sort By</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2"><input type="radio" /> Most Popular</label>
          <label className="flex items-center gap-2"><input type="radio" /> Highest Rated</label>
          <label className="flex items-center gap-2"><input type="radio" /> Nearby First</label>
          <label className="flex items-center gap-2"><input type="radio" /> Budget Friendly</label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Price Range (₹0 – ₹1000)</p>
        <input type="range" className="w-full accent-green-700" />
      </div>

      {/* Accessibility */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Accessibility</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" /> Family Friendly</label>
          <label className="flex items-center gap-2"><input type="checkbox" /> Senior Friendly</label>
          <label className="flex items-center gap-2"><input type="checkbox" /> Wheelchair Accessible</label>
        </div>
      </div>

      {/* Best Season */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Best Season</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2"><input type="radio" /> Summer</label>
          <label className="flex items-center gap-2"><input type="radio" /> Monsoon</label>
          <label className="flex items-center gap-2"><input type="radio" /> Winter</label>
        </div>
      </div>

      <button className="w-full px-3 py-2 mt-2 text-sm border rounded-xl hover:bg-gray-50">
        Clear All Filters
      </button>
    </div>
  );
}
