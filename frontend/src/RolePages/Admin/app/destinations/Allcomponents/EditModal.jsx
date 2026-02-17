import React, { useEffect, useState } from "react";
import {
  MapPin,
  Mountain,
  Calendar,
  Tag,
  Compass,
  Video,
  Image,
} from "lucide-react";

export default function EditModal({ isOpen, onClose, data, onSave }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    mapUrl: "",
    bestSeason: "",
    arvr: "",
    arvrLink: "",
    description: "",
    nearby: "",
    tags: "",
    imageLinks: "", // ⭐ Image URL links
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        category: data.category || "",
        location: data.location || "",
        mapUrl: data.mapUrl || "",
        bestSeason: data.bestSeason || "",
        arvr: data.arvr || "",
        arvrLink: data.arvrLink || "",
        description: data.description || "",
        nearby: data.nearby || "",
        tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
        imageLinks: Array.isArray(data.imageLinks)
          ? data.imageLinks.join(", ")
          : "",
      });
    }
  }, [data]);

  // Handle Inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = () => {
    onSave(form);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[2000]">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-xl overflow-y-auto max-h-[95vh] space-y-6">

        <h2 className="text-2xl font-bold text-green-800">Edit Destination</h2>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="font-medium text-sm">Destination Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Mountain size={16} /> Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            >
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
              <MapPin size={16} /> Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          {/* Map URL */}
          <div>
            <label className="font-medium text-sm">Google Map URL</label>
            <input
              type="text"
              name="mapUrl"
              value={form.mapUrl}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          {/* Best Season */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Calendar size={16} /> Best Time to Visit
            </label>
            <input
              type="text"
              name="bestSeason"
              value={form.bestSeason}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          {/* AR/VR */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Video size={16} /> AR/VR Available?
            </label>
            <select
              name="arvr"
              value={form.arvr}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* ARVR Link */}
          {form.arvr === "yes" && (
            <div className="col-span-2">
              <label className="font-medium text-sm">360° AR/VR Link</label>
              <input
                type="text"
                name="arvrLink"
                value={form.arvrLink}
                onChange={handleChange}
                className="w-full border mt-1 px-3 py-2 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="font-medium text-sm">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full border mt-1 px-3 py-2 rounded-lg"
          />
        </div>

        {/* Nearby */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <Compass size={16} /> Nearby Attractions
          </label>
          <input
            type="text"
            name="nearby"
            value={form.nearby}
            onChange={handleChange}
            className="w-full border mt-1 px-3 py-2 rounded-lg"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <Tag size={16} /> Tags
          </label>
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            className="w-full border mt-1 px-3 py-2 rounded-lg"
          />
        </div>

        {/* ⭐ IMAGE LINKS */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <Image size={18} /> Image URLs
          </label>

          <input
            type="text"
            name="imageLinks"
            value={form.imageLinks}
            onChange={handleChange}
            placeholder="Put image URLs separated by comma"
            className="w-full border mt-1 px-3 py-2 rounded-lg"
          />

          <p className="text-xs text-gray-500 mt-1">
            Example: https://img1.jpg, https://img2.png
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
