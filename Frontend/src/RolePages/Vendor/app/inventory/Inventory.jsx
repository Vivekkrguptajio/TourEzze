import React, { useState } from "react";
import { Search, SortAsc, SortDesc, Package, AlertTriangle } from "lucide-react";

export default function Inventory() {
  const [sortType, setSortType] = useState("asc");

  const inventory = [
    {
      id: 1,
      name: "Bamboo Handwoven Basket",
      stock: 32,
      sold: 120,
      category: "Handicraft",
    },
    {
      id: 2,
      name: "Dokra Art Elephant",
      stock: 5,
      sold: 87,
      category: "Metal Craft",
      low: true,
    },
    {
      id: 3,
      name: "Paitkar Traditional Painting",
      stock: 12,
      sold: 45,
      category: "Tribal Art",
    },
    {
      id: 4,
      name: "Wooden Mask",
      stock: 3,
      sold: 30,
      category: "Handmade",
      low: true,
    },
  ];

  const sortedInventory = [...inventory].sort((a, b) =>
    sortType === "asc" ? a.stock - b.stock : b.stock - a.stock
  );

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold">Inventory</h1>
          <p className="text-gray-500">Manage product stock & availability</p>
        </div>

        <button
          onClick={() =>
            setSortType(sortType === "asc" ? "desc" : "asc")
          }
          className="flex items-center gap-2 bg-white border rounded-lg px-4 py-2 hover:bg-gray-50"
        >
          {sortType === "asc" ? <SortAsc size={18} /> : <SortDesc size={18} />}
          Sort by Stock
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border shadow-sm rounded-xl p-5">
          <p className="text-gray-500 text-sm">Total Products</p>
          <h2 className="text-3xl font-bold mt-1">24</h2>
        </div>

        <div className="bg-white border shadow-sm rounded-xl p-5">
          <p className="text-gray-500 text-sm">Low Stock Items</p>
          <h2 className="text-3xl font-bold text-orange-600 mt-1">4</h2>
        </div>

        <div className="bg-white border shadow-sm rounded-xl p-5">
          <p className="text-gray-500 text-sm">Out of Stock</p>
          <h2 className="text-3xl font-bold text-red-600 mt-1">1</h2>
        </div>
      </div>

      {/* Search */}
      <div className="mt-2">
        <div className="flex items-center gap-2 bg-white border rounded-xl px-4 py-3 shadow-sm">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search product in inventory..."
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white border rounded-xl shadow-sm mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-gray-50 border-b">
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4">Sold</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {sortedInventory.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-0 hover:bg-gray-50"
              >
                <td className="py-3 px-4 font-medium">{item.name}</td>

                <td className="py-3 px-4 text-gray-600">{item.category}</td>

                <td className="py-3 px-4 font-semibold">{item.stock}</td>

                <td className="py-3 px-4 text-gray-600">{item.sold}</td>

                <td className="py-3 px-4">
                  {item.stock === 0 ? (
                    <span className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full flex items-center gap-1 w-fit">
                      <AlertTriangle size={12} />
                      Out of Stock
                    </span>
                  ) : item.low ? (
                    <span className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded-full flex items-center gap-1 w-fit">
                      <AlertTriangle size={12} />
                      Low Stock
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full flex items-center gap-1 w-fit">
                      <Package size={12} />
                      In Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
