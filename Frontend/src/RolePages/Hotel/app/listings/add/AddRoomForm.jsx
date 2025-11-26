import React, { useState } from "react";
import { Upload, Eye } from "lucide-react";

export default function AddRoomForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">

      {/* LEFT FORM */}
      <div className="space-y-6">

        {/* BASIC INFO */}
        <div className="border border-green-900 rounded-lg p-5 bg-black/30">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

          <label className="text-sm text-gray-400">Room Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="E.g. Deluxe Suite"
            className="w-full mt-1 p-3 bg-[#0a150f] border border-green-900 rounded-lg outline-none"
          />

          <label className="text-sm mt-4 text-gray-400">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Describe your room..."
            className="w-full mt-1 p-3 bg-[#0a150f] border border-green-900 rounded-lg h-24 outline-none"
          />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm text-gray-400">Room Type</label>
              <select className="w-full mt-1 p-3 bg-[#0a150f] border border-green-900 rounded-lg">
                <option>Select Type</option>
                <option>Single</option>
                <option>Double</option>
                <option>Suite</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400">Max Guests</label>
              <select className="w-full mt-1 p-3 bg-[#0a150f] border border-green-900 rounded-lg">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <label className="text-sm mt-4 text-gray-400">Location</label>
          <input
            placeholder="Full address"
            className="w-full mt-1 p-3 bg-[#0a150f] border border-green-900 rounded-lg"
          />
        </div>

        {/* PRICING */}
        <div className="border border-green-900 rounded-lg p-5 bg-black/30">
          <h2 className="text-lg font-semibold mb-4">Pricing</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Price per Night (₹)</label>
              <input
                placeholder="e.g. 2500"
                className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Weekend Price (₹)</label>
              <input
                placeholder="e.g. 3000"
                className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* PHOTOS */}
        <div className="border border-green-900 rounded-lg p-5 bg-black/30">
          <h2 className="text-lg font-semibold mb-4">Photos</h2>

          <label className="w-full h-64 border border-green-900 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#0d1a13]">
            <Upload className="w-6 h-6 text-gray-400" />
            <span className="text-gray-400 text-sm mt-2">Upload Photo</span>
            <input type="file" onChange={handleFile} className="hidden" />
          </label>
        </div>

      </div>

      {/* RIGHT PREVIEW */}
      <div className="border border-green-900 rounded-lg p-5 bg-black/30">
        <h2 className="text-lg font-semibold mb-3">Preview</h2>

        <div className="w-full h-72 bg-[#0a150f] border border-green-900 rounded-lg flex items-center justify-center overflow-hidden">
          {previewImage ? (
            <img src={previewImage} className="w-full h-full object-cover" />
          ) : (
            <p className="text-gray-500 text-sm">No image uploaded</p>
          )}
        </div>

        <div className="mt-4">
          <p className="font-semibold">{title || "Your Room Title"}</p>
          <p className="text-gray-400 text-xs">Location will appear here</p>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="w-1/2 px-4 py-2 bg-black border border-green-900 text-gray-300 rounded-lg">
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
