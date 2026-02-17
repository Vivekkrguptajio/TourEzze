import React, { useState } from "react";
import { Search, Plus, Filter, Edit, Trash2 } from "lucide-react";

export default function VehiclePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Types");

  const vehicles = [
    {
      id: 1,
      name: "Toyota Innova Crysta",
      type: "SUV",
      trips: 45,
      priceKm: 15,
      priceDay: 3500,
      seats: "7 seats",
      fuel: "Diesel",
      gear: "Manual",
      driverAvailable: true,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: "Maruti Suzuki Dzire",
      type: "Sedan",
      trips: 38,
      priceKm: 10,
      priceDay: 2000,
      seats: "5 seats",
      fuel: "Petrol",
      gear: "Manual",
      driverAvailable: true,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1583267745912-c3e8fe2d5bdf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      name: "Mahindra Scorpio N",
      type: "SUV",
      trips: 32,
      priceKm: 18,
      priceDay: 4000,
      seats: "7 seats",
      fuel: "Diesel",
      gear: "Automatic",
      driverAvailable: true,
      status: "unavailable",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 1,
      name: "Toyota Innova Crysta",
      type: "SUV",
      trips: 45,
      priceKm: 15,
      priceDay: 3500,
      seats: "7 seats",
      fuel: "Diesel",
      gear: "Manual",
      driverAvailable: true,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: "Maruti Suzuki Dzire",
      type: "Sedan",
      trips: 38,
      priceKm: 10,
      priceDay: 2000,
      seats: "5 seats",
      fuel: "Petrol",
      gear: "Manual",
      driverAvailable: true,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1583267745912-c3e8fe2d5bdf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      name: "Mahindra Scorpio N",
      type: "SUV",
      trips: 32,
      priceKm: 18,
      priceDay: 4000,
      seats: "7 seats",
      fuel: "Diesel",
      gear: "Automatic",
      driverAvailable: true,
      status: "unavailable",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020403] text-white px-6 pb-10">

      {/* PAGE HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Vehicles</h1>
          <p className="text-gray-400 text-sm">
            Manage your taxi, cab, and transport fleet
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 text-sm">
          <Plus className="w-4 h-4" /> Add New Vehicle
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center w-full bg-[#0a150f] border border-green-800 rounded-xl px-4 py-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search vehicles..."
            className="bg-transparent outline-none ml-3 w-full text-sm placeholder-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="flex items-center gap-2 bg-[#0a150f] border border-green-800 px-4 py-3 rounded-xl text-sm hover:border-green-500 transition">
          {filter}
          <Filter className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* VEHICLE CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {vehicles.map((v) => (
          <div
            key={v.id}
            className="bg-black rounded-xl border border-green-900 overflow-hidden shadow-md"
          >
            {/* IMAGE */}
            <div className="relative">
              <img src={v.image} alt="" className="w-full h-56 object-cover" />

              {/* TYPE BADGE */}
              <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {v.type}
              </span>

              {/* STATUS BADGE */}
              <span
                className={`absolute top-3 right-3 px-2 py-1 text-xs rounded ${
                  v.status === "available"
                    ? "bg-green-600 text-white"
                    : "bg-gray-600 text-white"
                }`}
              >
                {v.status === "available" ? "Available" : "Unavailable"}
              </span>
            </div>

            {/* DETAILS */}
            <div className="p-4">

              <h2 className="font-semibold text-lg">{v.name}</h2>
              <p className="text-gray-400 text-sm">{v.trips} trips this month</p>

              {/* PRICE */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-green-400 font-semibold">
                  ₹{v.priceKm}/km
                </p>
                <p className="text-gray-400 text-xs">₹{v.priceDay}/day</p>
              </div>

              {/* SPECS */}
              <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-300">
                <span>{v.seats}</span>
                <span>{v.fuel}</span>
                <span>{v.gear}</span>
              </div>

              {/* DRIVER */}
              {v.driverAvailable && (
                <p className="mt-2 text-green-400 bg-green-900/20 px-2 py-1 rounded text-xs w-fit">
                  Driver Available
                </p>
              )}

              {/* STATUS TOGGLE */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      v.status === "available" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></div>
                  <span className="text-sm">
                    {v.status === "available" ? "Available" : "Unavailable"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 px-2 py-1 rounded bg-[#0b140f] hover:bg-green-900 text-xs">
                    <Edit className="w-3 h-3" /> Edit
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 rounded bg-[#300909] hover:bg-red-900 text-xs text-red-400">
                    <Trash2 className="w-3 h-3" /> Delete
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
