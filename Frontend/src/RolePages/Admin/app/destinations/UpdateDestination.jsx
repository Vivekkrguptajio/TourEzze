import React, { useState } from "react";
import {
  UploadCloud,
  MapPin,
  Mountain,
  Video,
  Calendar,
  Tag,
  Compass,
  Image,
  Save,
} from "lucide-react";

export default function UpdateDestination() {
  const [selected, setSelected] = useState("");
  const [images, setImages] = useState([]);

  const demoDestinations = [
    "Netarhat – Queen of Chotanagpur",
    "Hundru Waterfall",
    "Parasnath Hills",
    "Betla National Park",
    "Hirni Falls",
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const preview = files.map((file) => URL.createObjectURL(file));
    setImages(preview);
  };

  return (
    <div className="p-6 pl-32 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-green-900">Update Destination</h1>
        <p className="text-gray-600">Select a destination and update its details.</p>
      </div>

      {/* SELECT DESTINATION */}
      <div className="bg-white border rounded-2xl shadow-sm p-6">
        <label className="font-medium text-sm">Select Destination</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full mt-2 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="">Choose Destination</option>
          {demoDestinations.map((d, i) => (
            <option key={i}>{d}</option>
          ))}
        </select>
      </div>

      {/* FORM ONLY IF SELECTED */}
      {selected && (
        <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-8">
          {/* Title */}
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            Editing: {selected}
          </h2>

          {/* GRID FIELDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Destination Name */}
            <div>
              <label className="font-medium text-sm">Destination Name</label>
              <input
                type="text"
                defaultValue={selected}
                className="w-full mt-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Category */}
            <div>
              <label className="font-medium text-sm flex items-center gap-1">
                <Mountain size={16} />
                Category
              </label>
              <select className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600">
                <option>Hill Station</option>
                <option>Waterfall</option>
                <option>Heritage & Culture</option>
                <option>Wildlife Sanctuary</option>
                <option>Pilgrimage</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="font-medium text-sm flex items-center gap-1">
                <MapPin size={16} /> Location
              </label>
              <input
                type="text"
                placeholder="District, City"
                defaultValue="Latehar"
                className="w-full mt-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Map URL */}
            <div>
              <label className="font-medium text-sm">Google Map URL</label>
              <input
                type="text"
                placeholder="https://maps.google.com/xyz"
                defaultValue="https://maps.google.com/netarhat"
                className="w-full mt-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Season */}
            <div>
              <label className="font-medium text-sm flex items-center gap-1">
                <Calendar size={16} /> Best Season
              </label>
              <input
                type="text"
                placeholder="October - March"
                defaultValue="October - March"
                className="w-full mt-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* AR/VR Support */}
            <div>
              <label className="font-medium text-sm flex items-center gap-1">
                <Video size={16} /> AR/VR Preview
              </label>
              <select className="w-full border mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600">
                <option>Yes (360° Available)</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-sm">Description</label>
            <textarea
              rows={4}
              defaultValue="Netarhat is known as the Queen of Chotanagpur, famous for sunrise and sunset views."
              className="w-full mt-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          {/* Nearby */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Compass size={16} /> Nearby Attractions
            </label>
            <input
              type="text"
              defaultValue="Magnolia Point, Upper Ghaghri Falls"
              className="w-full mt-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Tag size={16} /> Tags
            </label>
            <input
              type="text"
              defaultValue="Eco-Friendly, Trekking, Sunrise View"
              className="w-full mt-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* IMAGES */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Image size={18} /> Destination Images
            </label>

            <div className="border-2 border-dashed rounded-xl p-6 text-center mt-2">
              {images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((img, i) => (
                    <img key={i} src={img} className="w-full h-32 object-cover rounded-lg shadow" />
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 flex flex-col items-center">
                  <UploadCloud size={40} />
                  <p className="mt-2">Upload new or updated images</p>
                </div>
              )}

              <label className="mt-4 inline-block cursor-pointer">
                <div className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                  Upload Images
                </div>
                <input type="file" multiple className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
          </div>

          {/* UPDATE BUTTON */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-lg">
              <Save size={20} />
              Update Destination
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
