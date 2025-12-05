import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Tag,
  User,
  FileText,
  FileUp,
  Image,
  Video,
} from "lucide-react";

export default function EditEventModal({ isOpen, data, onClose, onSave }) {
  const [form, setForm] = useState({
    eventName: "",
    organizer: "",
    location: "",
    eventDate: "",
    description: "",
    category: "",
    tags: "",
    bannerImage: "",
    documentLink: "",
    arvr: "",
    arvrLink: "",
  });

  // Load data when modal opens
  useEffect(() => {
    if (data) {
      setForm({
        eventName: data.eventName || "",
        organizer: data.organizer || "",
        location: data.location || "",
        eventDate: data.eventDate || "",
        description: data.description || "",
        category: data.category || "",
        tags: data.tags?.join(", ") || "",
        bannerImage: data.bannerImage || "",
        documentLink: data.documentLink || "",
        arvr: data.arvr || "no",
        arvrLink: data.arvrLink || "",
      });
    }
  }, [data]);

  // Input Handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = () => {
    const payload = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()),
    };

    onSave(payload); // send to parent
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[2000]">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-xl overflow-y-auto max-h-[95vh] space-y-6">

        <h2 className="text-2xl font-bold text-green-800">Edit Event</h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Event Name */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <FileText size={16} /> Event Name
            </label>
            <input
              type="text"
              name="eventName"
              value={form.eventName}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          {/* Organizer */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <User size={16} /> Organizer
            </label>
            <input
              type="text"
              name="organizer"
              value={form.organizer}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
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

          {/* Event Date */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Calendar size={16} /> Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-medium text-sm flex items-center gap-1">
              <Tag size={16} /> Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            >
              <option>Select Category</option>
              <option>Cultural Program</option>
              <option>Sports Event</option>
              <option>Festival</option>
              <option>Government Meeting</option>
              <option>Training / Workshop</option>
              <option>Tourism & Travel</option>
            </select>
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
              placeholder="Music, Free Entry"
              className="w-full border mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          {/* ARVR SELECT */}
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
              <option value="no">No</option>
              <option value="yes">Yes (360° View)</option>
            </select>
          </div>

          {/* ARVR LINK */}
          {form.arvr === "yes" && (
            <div className="col-span-2">
              <label className="font-medium text-sm">360° AR/VR Link</label>
              <input
                type="text"
                name="arvrLink"
                value={form.arvrLink}
                onChange={handleChange}
                placeholder="https://your-360-view.com"
                className="w-full border mt-1 px-3 py-2 rounded-lg"
              />
            </div>
          )}

        </div>

        {/* Description */}
        <div>
          <label className="font-medium text-sm">Event Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full border mt-1 px-3 py-2 rounded-lg"
          ></textarea>
        </div>

        {/* Banner Image */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <Image size={16} /> Banner Image URL
          </label>
          <input
            type="text"
            name="bannerImage"
            value={form.bannerImage}
            onChange={handleChange}
            placeholder="https://image.jpg"
            className="w-full border mt-1 px-3 py-2 rounded-lg"
          />
        </div>

        {/* Document Link */}
        <div>
          <label className="font-medium text-sm flex items-center gap-1">
            <FileUp size={16} /> Document Link
          </label>
          <input
            type="text"
            name="documentLink"
            value={form.documentLink}
            onChange={handleChange}
            placeholder="https://docs.pdf"
            className="w-full border mt-1 px-3 py-2 rounded-lg"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
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
