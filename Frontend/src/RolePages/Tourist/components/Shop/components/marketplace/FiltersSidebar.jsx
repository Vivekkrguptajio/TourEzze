import React, { useState } from 'react';
import { Filter, X, ChevronDown, MapPin, Tag, DollarSign, Package } from 'lucide-react';

export default function FiltersSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(5000);
  const [location, setLocation] = useState("All Locations");
  const [availability, setAvailability] = useState("All");
  const [craftType, setCraftType] = useState("All");

  const locations = ["All Locations", "Ranchi", "Hazaribagh", "Khumti"];
  const craftList = ["All", "Handmade", "Tribal Art", "Organic", "Eco-Friendly"];

  const clearAllFilters = () => {
    setPrice(5000);
    setLocation("All Locations");
    setAvailability("All");
    setCraftType("All");
  };

  return (
    <>
      {/* Filter Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 left-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-3 font-semibold"
      >
        <Filter size={20} />
        {isOpen ? 'Hide Filters' : 'Show Filters'}
        <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs">
          4
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      {/* Filter Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Filter size={24} />
            <h2 className="text-xl font-bold">Filters</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Clear All Button */}
          <button
            onClick={clearAllFilters}
            className="w-full text-purple-600 font-semibold text-sm hover:bg-purple-50 py-2 px-4 rounded-lg transition-all border border-purple-200"
          >
            Clear All Filters
          </button>

          {/* Price Range */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-800">
              <DollarSign size={18} className="text-purple-600" />
              <p className="font-bold">Price Range</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl">
              <input
                type="range"
                min={0}
                max={10000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 accent-purple-600 cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span className="font-medium">₹0</span>
                <span className="font-bold text-purple-600">₹{price.toLocaleString()}</span>
                <span className="font-medium">₹10,000+</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-800">
              <MapPin size={18} className="text-purple-600" />
              <p className="font-bold">Location</p>
            </div>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border-2 border-purple-200 rounded-xl px-4 py-3 text-sm font-medium appearance-none cursor-pointer hover:border-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-600 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-800">
              <Package size={18} className="text-purple-600" />
              <p className="font-bold">Availability</p>
            </div>
            <div className="space-y-2">
              {["All", "In Stock", "Pre-order"].map((avail) => (
                <label
                  key={avail}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 cursor-pointer transition-all group"
                >
                  <input
                    type="radio"
                    name="avail"
                    checked={availability === avail}
                    onChange={() => setAvailability(avail)}
                    className="w-5 h-5 accent-purple-600 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600">
                    {avail}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Craft Type */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-800">
              <Tag size={18} className="text-purple-600" />
              <p className="font-bold">Craft Type</p>
            </div>
            <div className="space-y-2">
              {craftList.map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 cursor-pointer transition-all group"
                >
                  <input
                    type="radio"
                    name="craft"
                    checked={craftType === c}
                    onChange={() => setCraftType(c)}
                    className="w-5 h-5 accent-purple-600 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600">
                    {c}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}