import React, { useState } from "react";
import {
  Search,
  MapPin,
  Edit,
  Trash2,
  Video,
  Layers,
} from "lucide-react";

export default function AllDestinations() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Demo destination data
  const destinations = [
    {
      name: "Netarhat – Queen of Chotanagpur",
      category: "Hill Station",
      district: "Latehar",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      arvr: true,
    },
    {
      name: "Hundru Waterfall",
      category: "Waterfall",
      district: "Ranchi",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      arvr: false,
    },
    {
      name: "Betla National Park",
      category: "Wildlife Sanctuary",
      district: "Palamu",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      arvr: true,
    },
    {
      name: "Parasnath Hills",
      category: "Pilgrimage",
      district: "Giridih",
      image: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a",
      arvr: false,
    },
  ];

  // Filter + Search Logic
  const filtered = destinations.filter(
    (d) =>
      (filter === "All" || d.category === filter) &&
      d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 pl-32 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-green-900">All Destinations</h1>
        <p className="text-gray-600">List of all registered tourist destinations.</p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center bg-white border rounded-xl px-4 py-2 shadow-sm w-full sm:w-72">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="flex-1 ml-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border bg-white rounded-xl px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-green-600"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Hill Station</option>
          <option>Waterfall</option>
          <option>Wildlife Sanctuary</option>
          <option>Pilgrimage</option>
          <option>Heritage & Culture</option>
        </select>
      </div>

      {/* Destination List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((d, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  {d.category}
                </span>

                {d.arvr && (
                  <span className="text-xs flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    <Video size={14} /> AR/VR
                  </span>
                )}
              </div>

              <h2 className="text-lg font-semibold">{d.name}</h2>

              <p className="flex items-center gap-1 text-gray-600 text-sm">
                <MapPin size={14} />
                {d.district}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-lg bg-white hover:bg-gray-100">
            1
          </button>
          <button className="px-3 py-1 border rounded-lg bg-white hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 border rounded-lg bg-white hover:bg-gray-100">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
