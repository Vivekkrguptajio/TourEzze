import React from "react";
import { Camera } from "lucide-react";

export default function ProfilePhotoSection() {
  return (
    <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Profile Photo</h2>
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-xl">
          RK
        </div>
        <div>
          <p className="text-sm text-gray-500">Upload a professional photo</p>
          <button className="mt-2 flex items-center gap-2 px-3 py-1 border rounded-md hover:bg-gray-100 text-sm">
            <Camera size={14} /> Change Photo
          </button>
        </div>
      </div>
    </div>
  );
}
