import React from "react";
import { Save } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-green-800">My Profile</h1>
        <p className="text-gray-500 text-sm">
          Manage your guide profile and credentials
        </p>
      </div>
      <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
        <Save size={16} /> Save Changes
      </button>
    </div>
  );
}
