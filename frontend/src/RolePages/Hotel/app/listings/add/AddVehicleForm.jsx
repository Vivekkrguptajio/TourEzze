import React, { useState } from "react";
import { Upload, Eye } from "lucide-react";

export default function AddVehicleForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">

      {/* VEHICLE FORM */}
      <div className="space-y-6">

        {/* Info */}
        <div className="border border-green-900 rounded-lg p-5 bg-black/30">
          <h2 className="text-lg font-semibold mb-4">Vehicle Information</h2>

          <label className="text-sm text-gray-400">Vehicle Name</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Toyota Innova"
            className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
          />

          <label className="text-sm text-gray-400 mt-4">Category</label>
          <select className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg">
            <option>SUV</option>
            <option>Sedan</option>
            <option>Hatchback</option>
          </select>

          <label className="text-sm text-gray-400 mt-4">Seats</label>
          <input
            placeholder="e.g. 7 seats"
            className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
          />

          <label className="text-sm text-gray-400 mt-4">Fuel Type</label>
          <select className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg">
            <option>Diesel</option>
            <option>Petrol</option>
            <option>EV</option>
          </select>
        </div>

        {/* PRICING */}
        <div className="border border-green-900 rounded-lg p-5 bg-black/30">
          <h2 className="text-lg font-semibold mb-4">Pricing</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Price per km (₹)</label>
              <input
                placeholder="e.g. 15"
                className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Price per day (₹)</label>
              <input
                placeholder="e.g. 3500"
                className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* UPLOAD */}
        <div className="border border-green-900 rounded-lg p-5 bg-black/30">
          <h2 className="text-lg font-semibold mb-4">Upload Vehicle Photo</h2>

          <label className="w-full h-64 border border-green-900 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#0d1a13]">
            <Upload className="w-6 h-6 text-gray-400" />
            <p className="text-gray-400 text-sm mt-2">Upload Photo</p>
            <input type="file" onChange={handleFile} className="hidden" />
          </label>
        </div>

      </div>

      {/* PREVIEW */}
      <div className="border border-green-900 rounded-lg p-5 bg-black/30">
        <h2 className="text-lg font-semibold mb-3">Preview</h2>

        <div className="w-full h-72 bg-[#0a150f] border border-green-900 rounded-lg flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} className="w-full h-full object-cover" />
          ) : (
            <p className="text-gray-500 text-sm">No image uploaded</p>
          )}
        </div>

        <p className="mt-4 font-semibold">{title || "Vehicle Name"}</p>
        <p className="text-gray-400 text-xs">Details will appear here</p>

        <div className="flex gap-3 mt-6">
          <button className="w-1/2 px-4 py-2 bg-black border border-green-900 rounded-lg text-gray-300">
            Save Draft
          </button>

          <button className="w-1/2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg flex items-center justify-center gap-2">
            <Eye size={16} /> Publish
          </button>
        </div>
      </div>

    </div>
  );
}
