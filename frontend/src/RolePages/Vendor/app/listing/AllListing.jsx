import React from "react";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

export default function AllListing() {
  const products = [
    {
      id: 1,
      name: "Tribal Dokra Art Elephant",
      price: 1200,
      stock: 15,
      sales: 45,
      tag: "Handicraft",
      status: "active",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      name: "Handwoven Bamboo Basket",
      price: 450,
      stock: 3,
      sales: 32,
      tag: "Handicraft",
      status: "active",
      lowStock: true,
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      name: "Traditional Paitkar Painting",
      price: 2500,
      stock: 8,
      sales: 28,
      tag: "Tribal Art",
      status: "active",
      image: "https://picsum.photos/600/400?random=3",
    },
  ];

  return (
    <div className="p-6 w-full">

      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Products</h1>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
          <Plus size={18} />
          Add New Product
        </button>
      </div>

      <p className="text-gray-600 mt-1">Manage your product listings</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

        <div className="p-5 bg-white shadow rounded-xl border">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-semibold mt-2">6</h2>
        </div>

        <div className="p-5 bg-white shadow rounded-xl border">
          <p className="text-gray-500">Active</p>
          <h2 className="text-3xl font-semibold mt-2">5</h2>
        </div>

        <div className="p-5 bg-white shadow rounded-xl border">
          <p className="text-gray-500">Low Stock</p>
          <h2 className="text-3xl font-semibold mt-2">2</h2>
        </div>

      </div>

      {/* Search Box */}
      <div className="mt-6">
        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow border">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products by name..."
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow border overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              {p.lowStock && (
                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  Low Stock
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">

              <span className="text-xs bg-orange-200 text-orange-700 px-2 py-1 rounded">
                {p.tag}
              </span>

              <h2 className="mt-2 font-semibold text-lg">{p.name}</h2>

              <p className="text-green-700 font-bold text-xl mt-1">₹{p.price}</p>

              <p className="text-sm text-gray-500">
                Stock: {p.stock} units
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Sales: <b>{p.sales}</b>
              </p>

              {/* Status + Actions */}
              <div className="flex justify-between items-center mt-4">

                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${p.status === "active" ? "bg-green-500" : "bg-gray-400"}`}></div>
                  <span className="text-sm text-gray-600">Active</span>
                </div>

                <div className="flex items-center gap-3">
                  <Edit className="text-gray-600 cursor-pointer hover:text-blue-500" size={18} />
                  <Trash2 className="text-red-500 cursor-pointer hover:text-red-700" size={18} />
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
