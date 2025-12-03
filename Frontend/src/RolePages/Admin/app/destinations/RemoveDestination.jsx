import React, { useState } from "react";
import { Search, Trash2, AlertTriangle, X } from "lucide-react";

export default function RemoveDestination() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const destinations = [
    "Netarhat – Queen of Chotanagpur",
    "Hundru Waterfall",
    "Betla National Park",
    "Parasnath Hills",
    "Patratu Valley",
    "Hirni Falls",
  ];

  const filtered = destinations.filter((d) =>
    d.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 pl-32 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-red-600">Remove Destination</h1>
        <p className="text-gray-600">
          Select a destination you want to delete from the tourism directory.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white border rounded-2xl shadow-sm p-4">
        <div className="flex items-center gap-2 bg-gray-50 border rounded-lg px-3 py-2">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* DESTINATION LIST */}
      <div className="bg-white border rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Available Destinations</h2>

        <div className="space-y-3">
          {filtered.length === 0 && (
            <p className="text-gray-500">No destinations found.</p>
          )}

          {filtered.map((d, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-50 border rounded-lg p-3 hover:bg-gray-100"
            >
              <p className="font-medium">{d}</p>
              <button
                onClick={() => {
                  setSelected(d);
                  setConfirmOpen(true);
                }}
                className="flex items-center gap-2 text-red-600 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg text-sm"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CONFIRM DELETE MODAL */}
      {confirmOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                <AlertTriangle size={22} /> Confirm Delete
              </h2>

              <button
                onClick={() => setConfirmOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-4 text-gray-700 text-sm">
              Are you sure you want to permanently delete:
            </p>

            <p className="mt-2 font-semibold text-lg text-red-700">{selected}</p>

            <div className="mt-4">
              <label className="text-sm font-medium">Reason for deletion (optional)</label>
              <textarea
                className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-red-600"
                rows="3"
                placeholder="Eg: Duplicate entry, Incorrect data, Replaced with updated version..."
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setConfirmOpen(false);
                  alert("Destination Deleted!");
                }}
                className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white rounded-lg flex items-center gap-2"
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
