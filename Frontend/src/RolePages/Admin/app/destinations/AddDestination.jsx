import React, { useState } from "react";
import {
  UploadCloud,
  MapPin,
  Mountain,
  Trees,
  Image,
  Calendar,
  Tag,
  Compass,
  Plus,
  Globe,
  Video,
} from "lucide-react";

export default function AddDestination() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const preview = files.map((file) => URL.createObjectURL(file));
    setImages(preview);
  };

  return (
    <div className="p-6 pl-32 space-y-6">
      
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-green-800">Add New Destination</h1>
        <p className="text-gray-600 text-sm">
          Add a tourist destination to the Jharkhand Eco & Cultural Tourism Directory.
        </p>
      </div>

      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-8">

        {/* GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Destination Name */}
          <div>
            <label className="font-medium text-sm">Destination Name</label>
            <input
              type="text"
              placeholder="Enter destination name"
              className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Mountain size={16} />
              Destination Category
            </label>
            <select className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600">
              <option>Select Category</option>
              <option>Hill Station</option>
              <option>Waterfall</option>
              <option>Eco-Tourism</option>
              <option>Heritage & History</option>
              <option>Wildlife Sanctuary</option>
              <option>Temple / Pilgrimage</option>
              <option>Adventure Activity</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <MapPin size={16} /> Location (District/City)
            </label>
            <input
              type="text"
              placeholder="Eg: Netarhat, Latehar"
              className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Map Link */}
          <div>
            <label className="font-medium text-sm">Google Maps URL</label>
            <input
              type="text"
              placeholder="https://maps.google.com/location"
              className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Best Season */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Calendar size={16} /> Best Time to Visit
            </label>
            <input
              type="text"
              placeholder="Eg: October – March"
              className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* AR/VR Support */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Video size={16} /> AR/VR Preview Available?
            </label>
            <select className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600">
              <option>Select Option</option>
              <option>Yes (360° View Available)</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="font-medium text-sm">Description</label>
          <textarea
            rows="4"
            placeholder="Write a detailed description of the destination, its culture, history, eco-importance..."
            className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>

        {/* Nearby Attractions */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <Compass size={16} /> Nearby Attractions
          </label>
          <input
            type="text"
            placeholder="Eg: Magnolia Point, Pine Forest, Upper Ghaghri Falls"
            className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Eco-friendly Tags */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <Tag size={16} /> Tags (Eco-Friendly, Cultural, Family Friendly)
          </label>
          <input
            type="text"
            placeholder="Eg: Eco-Friendly, Tribal Culture, Trekking"
            className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Images */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <Image size={18} /> Upload Destination Images
          </label>

          <div className="border-2 border-dashed mt-2 rounded-xl p-6 text-center">
            {images.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-full h-32 rounded-lg object-cover shadow"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <UploadCloud size={40} />
                <p className="mt-2">Drag & drop images here</p>
              </div>
            )}

            <label className="mt-4 inline-block cursor-pointer">
              <div className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg">
                Choose Images
              </div>
              <input type="file" multiple className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-800 flex items-center gap-2">
            <Plus size={20} />
            Add Destination
          </button>
        </div>
      </div>
    </div>
  );
}
