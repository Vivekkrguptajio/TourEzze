// import React, { useState, useEffect } from "react";
// import { Search, MapPin, Edit, Trash2, Video } from "lucide-react";

// export default function AllDestinations() {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [destinations, setDestinations] = useState([]);

//   // EDIT STATE
//   const [editingData, setEditingData] = useState(null);
//   const [isEditOpen, setEditOpen] = useState(false);

//   // ------------------------------------------------
//   // FETCH DESTINATIONS
//   // ------------------------------------------------
//   const fetchDestinations = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/admin/destinations");
//       const data = await res.json();

//       if (data.success) setDestinations(data.data);
//     } catch (err) {
//       console.error("Fetch Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   // ------------------------------------------------
//   // UPDATE DESTINATION
//   // ------------------------------------------------
//   const updateDestination = async (form) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/admin/destinations/${editingData._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify(form),
//         }
//       );

//       const data = await res.json();

//       if (data.success) {
//         alert("Destination Updated Successfully ✔");
//         setEditOpen(false);
//         fetchDestinations();
//       } else {
//         alert(data.message || "Failed to update destination ❌");
//       }
//     } catch (err) {
//       console.error("Update Error:", err);
//     }
//   };

//   // ------------------------------------------------
//   // FILTER SEARCH
//   // ------------------------------------------------
//   const filtered = destinations.filter(
//     (d) =>
//       (filter === "All" || d.category === filter) &&
//       d.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 pl-32 space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-green-900">All Destinations</h1>
//         <p className="text-gray-600">
//           List of all registered tourist destinations.
//         </p>
//       </div>

//       {/* Search + Filter */}
//       <div className="flex flex-wrap items-center gap-4">
//         <div className="flex items-center bg-white border rounded-xl px-4 py-2 shadow-sm w-full sm:w-72">
//           <Search size={18} className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search destinations..."
//             className="flex-1 ml-2 outline-none"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <select
//           className="border bg-white rounded-xl px-4 py-2 shadow-sm outline-none"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option>All</option>
//           <option>Hill Station</option>
//           <option>Waterfall</option>
//           <option>Wildlife Sanctuary</option>
//           <option>Pilgrimage</option>
//           <option>Heritage & Culture</option>
//         </select>
//       </div>

//       {/* ALL DESTINATION CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filtered.map((d) => (
//           <div
//             key={d._id}
//             className="bg-white border rounded-xl shadow-sm overflow-hidden"
//           >
//             <img
//               src={
//                 d.images?.[0]
//                   ? `http://localhost:5000${d.images[0]}`
//                   : "https://via.placeholder.com/300"
//               }
//               alt={d.name}
//               className="w-full h-40 object-cover"
//             />

//             <div className="p-4 space-y-2">
//               <div className="flex items-center justify-between">
//                 <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
//                   {d.category}
//                 </span>

//                 {d.arvr === "yes" && (
//                   <span className="text-xs flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
//                     <Video size={14} /> AR/VR
//                   </span>
//                 )}
//               </div>

//               <h2 className="text-lg font-semibold">{d.name}</h2>

//               <p className="flex items-center gap-1 text-gray-600 text-sm">
//                 <MapPin size={14} />
//                 {d.location || "Unknown"}
//               </p>

//               {/* ACTION BUTTONS */}
//               <div className="flex justify-end gap-3 pt-3">
//                 <button
//                   className="text-blue-600 hover:text-blue-800"
//                   onClick={() => {
//                     setEditingData(d);
//                     setEditOpen(true);
//                   }}
//                 >
//                   <Edit size={18} />
//                 </button>

//                 <button className="text-red-600 hover:text-red-800">
//                   <Trash2 size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ⭐ EDIT MODAL HERE INSIDE RETURN */}
//       <EditModal
//         isOpen={isEditOpen}
//         data={editingData}
//         onClose={() => setEditOpen(false)}
//         onSave={updateDestination}
//       />
//     </div>
//   );
// }

// /* ======================================================
//      EDIT MODAL COMPONENT
// ====================================================== */
// function EditModal({ isOpen, onClose, data, onSave }) {
//   const [form, setForm] = useState({
//     name: "",
//     category: "",
//     location: "",
//     mapUrl: "",
//     bestSeason: "",
//     arvr: "",
//     arvrLink: "",
//     description: "",
//     nearby: "",
//     tags: "",
//   });

//   useEffect(() => {
//     if (data) {
//       setForm({
//         name: data.name,
//         category: data.category,
//         location: data.location,
//         mapUrl: data.mapUrl,
//         bestSeason: data.bestSeason,
//         arvr: data.arvr,
//         arvrLink: data.arvrLink,
//         description: data.description,
//         nearby: data.nearby,
//         tags: data.tags?.join(", ") || "",
//       });
//     }
//   }, [data]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[2000]">
//       <div className="bg-white w-full max-w-xl rounded-xl p-6 space-y-4">
//         <h2 className="text-xl font-bold">Edit Destination</h2>

//         {/* FIELDS */}
//         {[
//           "name",
//           "category",
//           "location",
//           "mapUrl",
//           "bestSeason",
//           "description",
//           "nearby",
//         ].map((field) => (
//           <input
//             key={field}
//             className="w-full border p-2 rounded"
//             placeholder={field}
//             value={form[field]}
//             onChange={(e) => setForm({ ...form, [field]: e.target.value })}
//           />
//         ))}

//         {/* AR/VR SELECT */}
//         <select
//           className="w-full border p-2 rounded"
//           value={form.arvr}
//           onChange={(e) => setForm({ ...form, arvr: e.target.value })}
//         >
//           <option value="">Select AR/VR</option>
//           <option value="yes">Yes</option>
//           <option value="no">No</option>
//         </select>

//         {form.arvr === "yes" && (
//           <input
//             className="w-full border p-2 rounded"
//             placeholder="360° View Link"
//             value={form.arvrLink}
//             onChange={(e) => setForm({ ...form, arvrLink: e.target.value })}
//           />
//         )}

//         {/* TAGS */}
//         <input
//           className="w-full border p-2 rounded"
//           placeholder="Tags (comma separated)"
//           value={form.tags}
//           onChange={(e) => setForm({ ...form, tags: e.target.value })}
//         />

//         {/* ACTION BUTTONS */}
//         <div className="flex justify-end gap-3 pt-4">
//           <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
//             Cancel
//           </button>

//           <button
//             className="px-4 py-2 bg-green-600 text-white rounded"
//             onClick={() => onSave(form)}
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import SearchFilterBar from "./Allcomponents/SearchFilterBar";
import DestinationCard from "./Allcomponents/DestinationCard";
import EditModal from "./Allcomponents/EditModal";

export default function AllDestinations() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [destinations, setDestinations] = useState([]);

  const [editingData, setEditingData] = useState(null);
  const [isEditOpen, setEditOpen] = useState(false);

  // -------------------------------------------------------
  // FETCH ALL DESTINATIONS
  // -------------------------------------------------------
  const fetchDestinations = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/destinations");
      const data = await res.json();

      if (data.success) {
        setDestinations(data.data);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // -------------------------------------------------------
  // UPDATE DESTINATION (PUT)
  // -------------------------------------------------------
  const updateDestination = async (form) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/destinations/${editingData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Destination Updated Successfully ✔");
        setEditOpen(false);
        fetchDestinations();
      } else {
        alert(data.message || "Failed to update destination ❌");
      }
    } catch (err) {
      console.error("Update Error:", err);
    }
  };

  // -------------------------------------------------------
  // DELETE DESTINATION (DELETE)
  // -------------------------------------------------------
  const deleteDestination = async (id) => {
    if (!window.confirm("Are you sure you want to delete this destination?"))
      return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/destinations/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Destination Deleted Successfully ✔");

        // UI se card hata do
        setDestinations((prev) => prev.filter((d) => d._id !== id));
      } else {
        alert(data.message || "Delete failed ❌");
      }
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  // -------------------------------------------------------
  // SEARCH + FILTER
  // -------------------------------------------------------
  const filtered = destinations.filter(
    (d) =>
      (filter === "All" || d.category === filter) &&
      d.name?.toLowerCase()?.includes(search.toLowerCase())
  );

  return (
    <div className="p-6 pl-32 space-y-6">
      <h1 className="text-3xl font-bold text-green-900">All Destinations</h1>
      <p className="text-gray-600">List of all registered destinations.</p>

      {/* Search & Filter Component */}
      <SearchFilterBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((d) => (
          <DestinationCard
            key={d._id}
            data={d}
            onEdit={() => {
              setEditingData(d);
              setEditOpen(true);
            }}
            onDelete={() => deleteDestination(d._id)} // ⭐ WORKING DELETE
          />
        ))}
      </div>

      {/* Edit Modal */}
      <EditModal
        isOpen={isEditOpen}
        data={editingData}
        onClose={() => setEditOpen(false)}
        onSave={updateDestination}
      />
    </div>
  );
}
