// import React, { useState } from "react";
// import { IndianRupee, Image, Info, FileText } from "lucide-react";

// export default function AddTour() {
//   const [price, setPrice] = useState("");
//   const [groupSize, setGroupSize] = useState("");
//   const [images, setImages] = useState([]);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-8 py-10 text-gray-800">
//       <h1 className="text-2xl font-bold text-green-800 mb-6">
//         Create New Tour Package
//       </h1>

//       {/* SECTION 1: TOUR GUIDE DASHBOARD */}
//       <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
//         <h2 className="text-lg font-semibold mb-4 text-gray-800">
//           Tour Guide Dashboard
//         </h2>

//         <div className="space-y-4">
//           <textarea
//             placeholder="List all places/attractions covered in this tour (one per line)"
//             className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             rows="3"
//           />

//           <textarea
//             placeholder="What are the key highlights tourists will experience?"
//             className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             rows="3"
//           />
//         </div>
//       </div>

//       {/* SECTION 2: PRICING */}
//       <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
//           <IndianRupee size={18} className="text-green-700" /> Pricing
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="text-sm text-gray-600">Price per Person (₹)</label>
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="500"
//               className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Maximum Group Size</label>
//             <input
//               type="number"
//               value={groupSize}
//               onChange={(e) => setGroupSize(e.target.value)}
//               placeholder="8"
//               className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//         </div>

//         <div className="space-y-4">
//           <textarea
//             placeholder="List what's included in the price (e.g., Guide service, Entry fees, Refreshments)"
//             className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             rows="3"
//           />

//           <textarea
//             placeholder="List what tourists need to pay separately"
//             className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             rows="3"
//           />
//         </div>
//       </div>

//       {/* SECTION 3: IMPORTANT INFORMATION */}
//       <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
//           <Info size={18} className="text-green-700" /> Important Information
//         </h2>

//         <div className="space-y-4">
//           <textarea
//             placeholder="List essential items (e.g., Water bottle, Comfortable shoes, Sunscreen)"
//             className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             rows="2"
//           />

//           <textarea
//             placeholder="Important safety instructions and precautions"
//             className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
//             rows="2"
//           />

//           <select className="w-full border rounded-lg p-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-green-500">
//             <option>Select Cancellation Policy</option>
//             <option>Free cancellation up to 24 hours</option>
//             <option>No refund on cancellation</option>
//             <option>Partial refund available</option>
//           </select>
//         </div>
//       </div>

//       {/* SECTION 4: PHOTOS & VIDEOS */}
//       <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
//           <Image size={18} className="text-green-700" /> Photos & Videos
//         </h2>

//         <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition">
//           <Image size={40} className="text-green-500 mb-3" />
//           <p className="text-sm text-gray-600 mb-2">
//             Upload Tour Photos (at least 3 high-quality images)
//           </p>
//           <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
//             Choose Files
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>

//           {images.length > 0 && (
//             <p className="text-xs text-gray-500 mt-2">
//               {images.length} file(s) selected
//             </p>
//           )}
//         </div>
//       </div>

//       {/* BUTTONS */}
//       <div className="flex flex-col md:flex-row justify-end gap-4 mt-8">
//         <button className="px-5 py-2 border border-green-600 text-green-700 rounded-md font-medium hover:bg-green-50">
//           Preview Tour
//         </button>
//         <button className="px-5 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 flex items-center gap-2">
//           <FileText size={16} /> Publish Tour Package
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { IndianRupee, Image, Info, FileText } from "lucide-react";

export default function AddTour() {
  const [data, setData] = useState({
    places: "",
    highlights: "",
    price: "",
    groupSize: "",
    included: "",
    excluded: "",
    essentials: "",
    safety: "",
    cancellation: "",
  });

  const [images, setImages] = useState([]);

  // Handle all text values
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle image uploads
  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  // Preview Handler
  const handlePreview = () => {
    alert("Previewing tour…\n\n" + JSON.stringify(data, null, 2));
  };

  // Submit / Publish Handler
  const handlePublish = () => {
    const payload = { ...data, images };
    console.log("FINAL TOUR DATA:", payload);

    alert("Tour Package Published Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10 text-gray-800">
      <h1 className="text-2xl font-bold text-green-800 mb-6">
        Create New Tour Package
      </h1>

      {/* SECTION 1: TOUR GUIDE DASHBOARD */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Tour Guide Dashboard
        </h2>

        <div className="space-y-4">
          <textarea
            name="places"
            value={data.places}
            onChange={handleChange}
            placeholder="Places covered (one per line)"
            className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          />

          <textarea
            name="highlights"
            value={data.highlights}
            onChange={handleChange}
            placeholder="Key Highlights"
            className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          />
        </div>
      </div>

      {/* SECTION 2: PRICING */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
          <IndianRupee size={18} className="text-green-700" /> Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-600">Price per Person (₹)</label>
            <input
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="500"
              className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Maximum Group Size</label>
            <input
              type="number"
              name="groupSize"
              value={data.groupSize}
              onChange={handleChange}
              placeholder="8"
              className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <textarea
            name="included"
            value={data.included}
            onChange={handleChange}
            placeholder="What's Included?"
            className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          />

          <textarea
            name="excluded"
            value={data.excluded}
            onChange={handleChange}
            placeholder="What's Excluded?"
            className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          />
        </div>
      </div>

      {/* SECTION 3: IMPORTANT INFO */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
          <Info size={18} className="text-green-700" /> Important Information
        </h2>

        <div className="space-y-4">
          <textarea
            name="essentials"
            value={data.essentials}
            onChange={handleChange}
            placeholder="Essential items to bring"
            className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            rows="2"
          />

          <textarea
            name="safety"
            value={data.safety}
            onChange={handleChange}
            placeholder="Safety Instructions"
            className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            rows="2"
          />

          <select
            name="cancellation"
            value={data.cancellation}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Cancellation Policy</option>
            <option value="Free cancellation up to 24 hours">
              Free cancellation up to 24 hours
            </option>
            <option value="No refund on cancellation">
              No refund on cancellation
            </option>
            <option value="Partial refund available">
              Partial refund available
            </option>
          </select>
        </div>
      </div>

      {/* SECTION 4: PHOTOS */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
          <Image size={18} className="text-green-700" /> Photos & Videos
        </h2>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition">
          <Image size={40} className="text-green-500 mb-3" />
          <p className="text-sm text-gray-600 mb-2">
            Upload at least 3 high-quality images
          </p>

          <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
            Choose Files
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {images.length > 0 && (
            <p className="text-xs text-gray-500 mt-2">
              {images.length} file(s) selected
            </p>
          )}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row justify-end gap-4 mt-8">
        <button
          onClick={handlePreview}
          className="px-5 py-2 border border-green-600 text-green-700 rounded-md font-medium hover:bg-green-50"
        >
          Preview Tour
        </button>

        <button
          onClick={handlePublish}
          className="px-5 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 flex items-center gap-2"
        >
          <FileText size={16} /> Publish Tour Package
        </button>
      </div>
    </div>
  );
}
