import React, { useState } from "react";
import { UploadCloud, ArrowLeft, Plus } from "lucide-react";

export default function AddProduct() {
  const [imagePreview, setImagePreview] = useState(null);

  // Image Preview Handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="w-full p-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <ArrowLeft className="cursor-pointer text-gray-700 hover:text-black" />
        <h1 className="text-3xl font-bold">Add New Product</h1>
      </div>

      <div className="bg-white shadow-lg border rounded-xl p-6">

        {/* Product Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name..."
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Category</label>
            <select className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500">
              <option>Select Category</option>
              <option>Handicraft</option>
              <option>Tribal Art</option>
              <option>Traditional Weaving</option>
              <option>Bamboo Craft</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              placeholder="1200"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Stock */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Stock (units)</label>
            <input
              type="number"
              placeholder="10"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-1">Description</label>
            <textarea
              rows={4}
              placeholder="Write about your product..."
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-2">Product Images</label>

            <div className="border-2 border-dashed p-6 rounded-lg text-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="preview"
                  className="w-40 h-40 object-cover rounded-lg mx-auto"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-500">
                  <UploadCloud size={40} />
                  <p className="mt-2">Upload product images</p>
                </div>
              )}

              <label className="mt-4 inline-block cursor-pointer">
                <div className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Choose Image
                </div>
                <input type="file" className="hidden" onChange={handleImage} />
              </label>
            </div>
          </div>

        </form>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg">
            <Plus size={20} />
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
