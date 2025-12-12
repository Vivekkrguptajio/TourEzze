// import React from "react";

// export default function FiltersSidebar() {
//   return (
//     <div className="w-64 bg-white p-4 rounded-xl shadow border h-fit sticky top-24">
//       <h2 className="text-lg font-semibold mb-4">Filters</h2>

//       {/* Sort By */}
//       <div className="mb-4">
//         <p className="text-sm font-medium mb-2">Sort By</p>
//         <div className="space-y-2 text-sm">
//           <label className="flex items-center gap-2"><input type="radio" /> Most Popular</label>
//           <label className="flex items-center gap-2"><input type="radio" /> Highest Rated</label>
//           <label className="flex items-center gap-2"><input type="radio" /> Nearby First</label>
//           <label className="flex items-center gap-2"><input type="radio" /> Budget Friendly</label>
//         </div>
//       </div>

//       {/* Price Range */}
//       <div className="mb-4">
//         <p className="text-sm font-medium mb-2">Price Range (₹0 – ₹1000)</p>
//         <input type="range" className="w-full accent-green-700" />
//       </div>

//       {/* Accessibility */}
//       <div className="mb-4">
//         <p className="text-sm font-medium mb-2">Accessibility</p>
//         <div className="space-y-2 text-sm">
//           <label className="flex items-center gap-2"><input type="checkbox" /> Family Friendly</label>
//           <label className="flex items-center gap-2"><input type="checkbox" /> Senior Friendly</label>
//           <label className="flex items-center gap-2"><input type="checkbox" /> Wheelchair Accessible</label>
//         </div>
//       </div>

//       {/* Best Season */}
//       <div className="mb-4">
//         <p className="text-sm font-medium mb-2">Best Season</p>
//         <div className="space-y-2 text-sm">
//           <label className="flex items-center gap-2"><input type="radio" /> Summer</label>
//           <label className="flex items-center gap-2"><input type="radio" /> Monsoon</label>
//           <label className="flex items-center gap-2"><input type="radio" /> Winter</label>
//         </div>
//       </div>

//       <button className="w-full px-3 py-2 mt-2 text-sm border rounded-xl hover:bg-gray-50">
//         Clear All Filters
//       </button>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function FiltersSidebar() {
  const [priceRange, setPriceRange] = useState(500);

  return (
    <div className="w-64 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-xl border border-gray-100 h-fit sticky top-24 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
      </div>

      {/* Sort By */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <p className="text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          Sort By
        </p>
        <div className="space-y-2.5 text-sm">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="sort" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">Most Popular</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="sort" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">Highest Rated</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="sort" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">Nearby First</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="sort" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">Budget Friendly</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <p className="text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          Price Range
        </p>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex justify-between text-xs font-medium text-gray-600 mb-2">
            <span>₹0</span>
            <span className="text-green-600 font-bold">₹{priceRange}</span>
            <span>₹1000</span>
          </div>
          <input 
            type="range" 
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" 
          />
        </div>
      </div>

      {/* Accessibility */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <p className="text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Accessibility
        </p>
        <div className="space-y-2.5 text-sm">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">Family Friendly</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">Senior Friendly</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">Wheelchair Accessible</span>
          </label>
        </div>
      </div>

      {/* Best Season */}
      <div className="mb-6">
        <p className="text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          Best Season
        </p>
        <div className="space-y-2.5 text-sm">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="season" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">☀️ Summer</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="season" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">🌧️ Monsoon</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="season" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500" />
            <span className="group-hover:text-green-600 transition-colors">❄️ Winter</span>
          </label>
        </div>
      </div>

      <button className="w-full px-4 py-3 mt-2 text-sm font-semibold border-2 border-gray-300 rounded-xl hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 group">
        <span className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Clear All Filters
        </span>
      </button>
    </div>
  );
}