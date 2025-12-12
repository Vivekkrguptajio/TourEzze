import React, { useState } from "react";
import { Upload, Eye } from "lucide-react";
<<<<<<< HEAD
import { API_URL } from "../../../../../api.js";
=======
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function AddRoomForm() {
  const [previewImage, setPreviewImage] = useState("");

  const [form, setForm] = useState({
    roomName: "",
    roomType: "",
    price: "",
    weekendPrice: "",
    maxGuests: "",
    description: "",
    imageLinks: "",
    coverPhoto: "",
  });

<<<<<<< HEAD
=======
  const API_URL = "http://localhost:5000/api/hotel/room/add";

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE COVER PHOTO
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      setForm({ ...form, coverPhoto: imageURL }); // Future: upload to server
    }
  };

  // SUBMIT FORM
  const handleSubmit = async () => {
    try {
      const body = {
        ...form,
        imageLinks: form.imageLinks
          ? form.imageLinks.split(",").map((i) => i.trim())
          : [],
      };

<<<<<<< HEAD
      const res = await fetch(`${API_URL}/api/hotel/room/add`, {
=======
      const res = await fetch(API_URL, {
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("hotel_token"),
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      console.log("ADD ROOM RESPONSE:", data);

      if (!data.success) {
        alert(data.message || "Error adding room!");
        return;
      }

      alert("Room added successfully!");
      window.location.href = "/role/hotel-owner/listings/rooms";
<<<<<<< HEAD
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
    } catch (err) {
      console.log(err);
      alert("Server Error!");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
<<<<<<< HEAD
      {/* LEFT FORM */}
      <div className="space-y-6">
=======

      {/* LEFT FORM */}
      <div className="space-y-6">

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        {/* ROOM DETAILS */}
        <div className="border border-black rounded-lg p-5 bg-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Room Details
          </h2>

          <label className="text-sm text-gray-700">Room Name</label>
          <input
            name="roomName"
            value={form.roomName}
            onChange={handleChange}
            placeholder="Deluxe AC Room"
            className="w-full p-3 mt-1 border border-black rounded"
          />

          <label className="text-sm text-gray-700 mt-4">Room Type</label>
          <select
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-black rounded"
          >
            <option>Select Type</option>
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Super Deluxe</option>
            <option>Suite</option>
          </select>

          <label className="text-sm text-gray-700 mt-4">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the room..."
            className="w-full p-3 mt-1 border border-black rounded h-24"
          />

          <label className="text-sm text-gray-700 mt-4">Max Guests</label>
          <input
            name="maxGuests"
            value={form.maxGuests}
            onChange={handleChange}
            placeholder="e.g. 2"
            className="w-full p-3 mt-1 border border-black rounded"
          />
        </div>

        {/* PRICING */}
        <div className="border border-black rounded-lg p-5 bg-white">
<<<<<<< HEAD
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Pricing</h2>
=======
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Pricing
          </h2>
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

          <label className="text-sm text-gray-700">Weekday Price (₹)</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="2500"
            className="w-full p-3 mt-1 border border-black rounded"
          />

<<<<<<< HEAD
          <label className="text-sm text-gray-700 mt-4">
            Weekend Price (₹)
          </label>
=======
          <label className="text-sm text-gray-700 mt-4">Weekend Price (₹)</label>
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          <input
            name="weekendPrice"
            value={form.weekendPrice}
            onChange={handleChange}
            placeholder="3000"
            className="w-full p-3 mt-1 border border-black rounded"
          />
        </div>

        {/* IMAGES */}
        <div className="border border-black rounded-lg p-5 bg-white">
<<<<<<< HEAD
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Images</h2>

          <label className="text-sm text-gray-700">
            Image Links (comma separated)
          </label>
=======
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Images
          </h2>

          <label className="text-sm text-gray-700">Image Links (comma separated)</label>
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          <textarea
            name="imageLinks"
            value={form.imageLinks}
            onChange={handleChange}
            placeholder="https://img1.jpg, https://img2.png"
            className="w-full p-3 mt-1 border border-black rounded h-20"
          />

          <label className="w-full h-56 mt-4 border border-black border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
            <Upload className="w-6 h-6 text-gray-700" />
<<<<<<< HEAD
            <span className="text-gray-700 text-sm mt-2">
              Upload Cover Photo
            </span>
            <input type="file" onChange={handleFile} className="hidden" />
          </label>
        </div>
=======
            <span className="text-gray-700 text-sm mt-2">Upload Cover Photo</span>
            <input type="file" onChange={handleFile} className="hidden" />
          </label>
        </div>

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
      </div>

      {/* RIGHT PREVIEW */}
      <div className="border border-black rounded-lg p-5 bg-white">
<<<<<<< HEAD
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        <div className="w-full h-72 border border-black rounded overflow-hidden flex items-center justify-center">
          {previewImage ? (
            <img src={previewImage} className="object-cover w-full h-full" />
          ) : (
            <p className="text-gray-500 text-sm">No image selected</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg flex gap-2 justify-center items-center"
        >
          <Eye size={16} /> Publish Room
        </button>
<<<<<<< HEAD
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
      </div>
    </div>
  );
}
