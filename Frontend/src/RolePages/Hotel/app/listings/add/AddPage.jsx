import React, { useState } from "react";
import { Home, Car } from "lucide-react";

import AddRoomForm from "./AddRoomForm";
import AddVehicleForm from "./AddVehicleForm";

export default function AddPage() {
  const [activeTab, setActiveTab] = useState("room");

  return (
    <div className="min-h-screen bg-[#020403] text-white px-6 pb-10">

      {/* HEADER */}
      <h1 className="text-2xl font-bold">Add New Listing</h1>
      <p className="text-gray-400 text-sm">
        Create a new room or vehicle listing for your business
      </p>

      {/* TABS */}
      <div className="flex gap-4 mt-5">
        <button
          onClick={() => setActiveTab("room")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            activeTab === "room"
              ? "border-green-700 bg-green-900/40 text-green-400"
              : "border-gray-700 text-gray-300 hover:bg-[#0a150f]"
          }`}
        >
          <Home size={16} /> Room / Property
        </button>

        <button
          onClick={() => setActiveTab("vehicle")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            activeTab === "vehicle"
              ? "border-green-700 bg-green-900/40 text-green-400"
              : "border-gray-700 text-gray-300 hover:bg-[#0a150f]"
          }`}
        >
          <Car size={16} /> Vehicle
        </button>
      </div>

      {/* SHOW SELECTED FORM */}
      <div className="mt-6">
        {activeTab === "room" ? <AddRoomForm /> : <AddVehicleForm />}
      </div>

    </div>
  );
}
