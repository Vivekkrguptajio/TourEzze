// src/components/listings/room-card.jsx

import { Wifi, Snowflake, Coffee, CarFront, Pencil, Trash2 } from "lucide-react";

export default function RoomCard({ room }) {
  return (
    <div className="bg-[#070f0b] border border-green-900 rounded-2xl overflow-hidden shadow hover:border-green-600/60 transition">

      {/* ROOM IMAGE */}
      <div className="relative">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-52 object-cover"
        />

        {/* STATUS BADGE */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            room.status === "available"
              ? "bg-green-600 text-white"
              : "bg-yellow-600 text-white"
          }`}
        >
          {room.status === "available" ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{room.name}</h3>
        <p className="text-[13px] text-gray-400">
          {room.bookings} bookings this month
        </p>

        {/* PRICE */}
        <p className="text-green-400 font-bold text-lg mt-1">
          ₹{room.price}
          <span className="text-sm text-gray-400">/night</span>
        </p>

        {/* AMENITIES */}
        <div className="flex gap-2 mt-3 flex-wrap text-xs text-gray-300">
          {room.amenities.includes("WiFi") && (
            <span className="flex items-center gap-1 bg-[#0b1510] px-2 py-1 rounded-lg border border-green-800/40">
              <Wifi className="w-3 h-3" /> WiFi
            </span>
          )}
          {room.amenities.includes("AC") && (
            <span className="flex items-center gap-1 bg-[#0b1510] px-2 py-1 rounded-lg border border-green-800/40">
              <Snowflake className="w-3 h-3" /> AC
            </span>
          )}
          {room.amenities.includes("Breakfast") && (
            <span className="flex items-center gap-1 bg-[#0b1510] px-2 py-1 rounded-lg border border-green-800/40">
              <Coffee className="w-3 h-3" /> Breakfast
            </span>
          )}
          {room.amenities.includes("Parking") && (
            <span className="flex items-center gap-1 bg-[#0b1510] px-2 py-1 rounded-lg border border-green-800/40">
              <CarFront className="w-3 h-3" /> Parking
            </span>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-4">
          {/* Availability */}
          <div className="flex items-center gap-2">
            <div
              className={`h-3 w-3 rounded-full ${
                room.status === "available" ? "bg-green-500" : "bg-yellow-500"
              }`}
            />
            <span className="text-xs text-gray-300 capitalize">
              {room.status}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm bg-[#0c1510] px-3 py-1 rounded-lg border border-green-800 hover:bg-[#0f1b14] text-gray-200">
              <Pencil className="w-4 h-4" /> Edit
            </button>

            <button className="p-2 rounded-lg bg-[#180a0a] border border-red-800 text-red-400 hover:bg-[#2a0f0f]">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
