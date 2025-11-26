// src/pages/RoomsPage.jsx
import RoomCard from "../../../components/listings/room-card";
import { Search, Filter, Plus } from "lucide-react";
import { useState } from "react";

export default function RoomsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Rooms");

  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite #101",
      price: 4500,
      bookings: 28,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e3acbb29df?auto=format&fit=crop&w=1200&q=80",
      amenities: ["WiFi", "AC", "Breakfast", "Parking"],
    },
    {
      id: 2,
      name: "Family Room #205",
      price: 3500,
      bookings: 24,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1600585154816-578a1eb63a3e?auto=format&fit=crop&w=1200&q=80",
      amenities: ["WiFi", "AC", "Parking"],
    },
    {
      id: 3,
      name: "Standard Double #103",
      price: 2000,
      bookings: 22,
      status: "unavailable",
      image:
        "https://images.unsplash.com/photo-1631049035182-249ec68b7f0d?auto=format&fit=crop&w=1200&q=80",
      amenities: ["WiFi", "AC"],
    },
     {
      id: 1,
      name: "Deluxe Suite #101",
      price: 4500,
      bookings: 28,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e3acbb29df?auto=format&fit=crop&w=1200&q=80",
      amenities: ["WiFi", "AC", "Breakfast", "Parking"],
    },
    {
      id: 2,
      name: "Family Room #205",
      price: 3500,
      bookings: 24,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1600585154816-578a1eb63a3e?auto=format&fit=crop&w=1200&q=80",
      amenities: ["WiFi", "AC", "Parking"],
    },
    {
      id: 3,
      name: "Standard Double #103",
      price: 2000,
      bookings: 22,
      status: "unavailable",
      image:
        "https://images.unsplash.com/photo-1631049035182-249ec68b7f0d?auto=format&fit=crop&w=1200&q=80",
      amenities: ["WiFi", "AC"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#020403] text-white px-4 md:px-10 pb-10">

      {/* page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Rooms</h1>
          <p className="text-gray-400 text-sm">Manage your hotel rooms and homestay listings</p>
        </div>

        <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 text-sm">
          <Plus className="w-4 h-4" /> Add New Room
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center w-full bg-[#0a150f] border border-green-800 rounded-xl px-4 py-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search rooms..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        <button className="flex items-center gap-2 bg-[#0a150f] border border-green-800 px-4 py-3 rounded-xl">
          All Rooms
          <Filter className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* ROOM CARDS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}