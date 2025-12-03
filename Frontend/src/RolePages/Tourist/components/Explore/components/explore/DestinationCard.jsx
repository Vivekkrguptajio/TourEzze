

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Bookmark, Star, X } from "lucide-react";
// import { motion ,  AnimatePresence } from "framer-motion";

// export default function DestinationCard({ item }) {
//   const [open, setOpen] = useState(false);
//   const hasVR = !!item.hasVR;
//   const featured = !!item.featured;

//   // close on Esc
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <>
//       <div className="rounded-3xl p-[1.5px] bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-lg w-full max-w-[240px] mx-auto">
//         <div
//           className="group bg-white rounded-3xl overflow-hidden relative w-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
//           aria-labelledby={`dest-${item.id}-title`}
//         >
//           <div className="relative w-full aspect-[16/10] overflow-hidden">
//             <img
//               src={item.image}
//               alt={item.name}
//               loading="lazy"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-70 mix-blend-multiply" />

//             {featured && (
//               <span className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-sm border border-white/20">
//                 🔥 Featured
//               </span>
//             )}

//             <button
//               className="absolute top-3 right-3 p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/10 text-white hover:bg-white/30 transition"
//               onClick={(e) => {
//                 e.preventDefault();
//                 // toggle bookmark logic can go here
//               }}
//               aria-label="Bookmark"
//             >
//               <Bookmark className="w-4 h-4" />
//             </button>

//             <div className="absolute left-3 right-3 bottom-3 bg-black/45 backdrop-blur-md rounded-xl px-3 py-2 text-white">
//               <h4 id={`dest-${item.id}-title`} className="font-bold text-sm truncate">
//                 {item.name}
//               </h4>
//               <p className="text-xs text-white/90 truncate">{item.district} District</p>
//             </div>
//           </div>

//           <div className="p-3 flex flex-col gap-2">
//             <div className="flex items-center justify-between gap-2">
//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <Star className="w-4 h-4 text-yellow-400" />
//                 <span className="font-medium">{item.rating ?? "4.6"}</span>
//                 <span className="text-xs text-gray-400">({item.reviews ?? 120})</span>
//               </div>

//               <div className="text-right">
//                 <span className="text-sm font-semibold text-green-700">{item.price ?? "Free"}</span>
//                 <div className="text-xs text-gray-400">per visit</div>
//               </div>
//             </div>

//             <p className="text-sm text-gray-700 leading-snug line-clamp-3">{item.shortDescription}</p>

//             <div className="flex flex-col gap-2 items-center">
//               <div className="flex gap-2 items-center justify-center">
//                 <button
//                   onClick={() => setOpen(true)}
//                   className="px-3 py-1.5 rounded-md text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-sm hover:scale-105 transition"
//                 >
//                   View
//                 </button>

//                 {hasVR && (
//                   <Link
//                     to={`/place/${item.id}/vr`}
//                     className="px-2.5 py-1.5 rounded-md text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
//                   >
//                     AR/VR
//                   </Link>
//                 )}
//               </div>

//               <Link
//                 to={`/itinerary/add/${item.id}`}
//                 className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-orange-600 border border-orange-100 hover:bg-white transition-shadow"
//               >
//                 Add
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Expanded Modal ---------- */}
//       <AnimatePresence>
//         {open && (
//           <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             {/* backdrop */}
//             <motion.div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

//             {/* modal panel */}
//             <motion.div
//               className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-[95%] md:w-3/4 lg:w-2/3 overflow-hidden"
//               initial={{ y: 30, scale: 0.98, opacity: 0 }}
//               animate={{ y: 0, scale: 1, opacity: 1 }}
//               exit={{ y: 20, scale: 0.98, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               onClick={(e) => e.stopPropagation()}
//               role="dialog"
//               aria-modal="true"
//               aria-labelledby={`dest-${item.id}-title`}
//             >
//               {/* Close button */}
//               <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white transition" aria-label="Close">
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="md:flex">
//                 <div className="md:w-1/2 w-full aspect-[4/3] md:aspect-auto overflow-hidden">
//                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                 </div>

//                 <div className="md:w-1/2 w-full p-6 flex flex-col gap-4">
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <h2 className="text-2xl font-bold" id={`dest-${item.id}-title`}>
//                         {item.name}
//                       </h2>
//                       <p className="text-sm text-gray-500 mt-1">{item.district} District • {item.state ?? ""}</p>
//                     </div>

//                     <div className="text-right">
//                       <div className="flex items-center gap-2">
//                         <Star className="w-5 h-5 text-yellow-400" />
//                         <div>
//                           <div className="font-medium">{item.rating ?? "4.6"}</div>
//                           <div className="text-xs text-gray-400">({item.reviews ?? 120} reviews)</div>
//                         </div>
//                       </div>

//                       <div className="mt-3 text-right">
//                         <div className="text-lg font-semibold text-green-700">{item.price ?? "Free"}</div>
//                         <div className="text-xs text-gray-400">per visit</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-sm text-gray-700 leading-relaxed">{item.longDescription ?? item.shortDescription ?? "No further details available."}</div>

//                   <div className="mt-auto flex gap-2">
//                     <Link to={`/place/${item.id}`} onClick={() => setOpen(false)} className="px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow">
//                       Open Page
//                     </Link>

//                     {hasVR && (
//                       <Link to={`/place/${item.id}/vr`} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md border text-sm font-medium border-gray-200">
//                         View AR/VR
//                       </Link>
//                     )}

//                     <button onClick={() => (window.location.href = `/itinerary/add/${item.id}`)} className="ml-auto px-4 py-2 rounded-md text-sm font-semibold bg-white border border-orange-100 text-orange-600">
//                       Add to trip
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bookmark, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DestinationCard({ item, onAddToItinerary }) {
  const [openView, setOpenView] = useState(false);
  const [openVR, setOpenVR] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const hasVR = !!item.hasVR;
  const featured = !!item.featured;
  const navigate = useNavigate();

  // close on Esc for any open modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenView(false);
        setOpenVR(false);
        setOpenAdd(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // example add handler (calls parent's callback if provided)
  const handleConfirmAdd = (formData) => {
    if (onAddToItinerary) {
      onAddToItinerary(item.id, formData);
    } else {
      // fallback behavior: navigate to itinerary add route
      navigate(`/itinerary/add/${item.id}`);
    }
    setOpenAdd(false);
  };

  return (
    <>
      <div className="rounded-3xl p-[1.5px] bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-lg w-full max-w-[240px] mx-auto">
        <div
          className="group bg-white rounded-3xl overflow-hidden relative w-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          aria-labelledby={`dest-${item.id}-title`}
        >
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-70 mix-blend-multiply" />

            {featured && (
              <span className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-sm border border-white/20">
                🔥 Featured
              </span>
            )}

            <button
              className="absolute top-3 right-3 p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/10 text-white hover:bg-white/30 transition"
              onClick={(e) => {
                e.preventDefault();
                // toggle bookmark logic can go here
              }}
              aria-label="Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <div className="absolute left-3 right-3 bottom-3 bg-black/45 backdrop-blur-md rounded-xl px-3 py-2 text-white">
              <h4 id={`dest-${item.id}-title`} className="font-bold text-sm truncate">
                {item.name}
              </h4>
              <p className="text-xs text-white/90 truncate">{item.district} District</p>
            </div>
          </div>

          <div className="p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">{item.rating ?? "4.6"}</span>
                <span className="text-xs text-gray-400">({item.reviews ?? 120})</span>
              </div>

              <div className="text-right">
                <span className="text-sm font-semibold text-green-700">{item.price ?? "Free"}</span>
                <div className="text-xs text-gray-400">per visit</div>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-snug line-clamp-3">{item.shortDescription}</p>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-2 items-center justify-center">
                {/* VIEW opens full details modal */}
                <button
                  onClick={() => setOpenView(true)}
                  className="px-3 py-1.5 rounded-md text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-sm hover:scale-105 transition"
                >
                  View
                </button>

                {/* AR/VR opens VR modal preview (if available) */}
                {hasVR && (
                  <button
                    onClick={() => setOpenVR(true)}
                    className="px-2.5 py-1.5 rounded-md text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
                  >
                    AR/VR
                  </button>
                )}
              </div>

              {/* ADD opens add-to-itinerary modal */}
              <button
                onClick={() => setOpenAdd(true)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-orange-600 border border-orange-100 hover:bg-white transition-shadow"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ View Modal ------------------ */}
      <AnimatePresence>
        {openView && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute inset-0 bg-black/60" onClick={() => setOpenView(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-[95%] md:w-3/4 lg:w-2/3 overflow-hidden"
              initial={{ y: 30, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`dest-${item.id}-title`}
            >
              <button onClick={() => setOpenView(false)} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white transition" aria-label="Close">
                <X className="w-5 h-5" />
              </button>

              <div className="md:flex">
                <div className="md:w-1/2 w-full aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="md:w-1/2 w-full p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold" id={`dest-${item.id}-title`}>{item.name}</h2>
                      <p className="text-sm text-gray-500 mt-1">{item.district} District • {item.state ?? ""}</p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <div>
                          <div className="font-medium">{item.rating ?? "4.6"}</div>
                          <div className="text-xs text-gray-400">({item.reviews ?? 120} reviews)</div>
                        </div>
                      </div>

                      <div className="mt-3 text-right">
                        <div className="text-lg font-semibold text-green-700">{item.price ?? "Free"}</div>
                        <div className="text-xs text-gray-400">per visit</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 leading-relaxed">{item.longDescription ?? item.shortDescription ?? "No further details available."}</div>

                  <div className="mt-auto flex gap-2">
                    <Link to={`/place/${item.id}`} onClick={() => setOpenView(false)} className="px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow">
                      Open Page
                    </Link>

                    {hasVR && (
                      <button
                        onClick={() => {
                          setOpenView(false);
                          navigate(`/place/${item.id}/vr`);
                        }}
                        className="px-3 py-2 rounded-md border text-sm font-medium border-gray-200"
                      >
                        View AR/VR
                      </button>
                    )}

                    <button onClick={() => { setOpenView(false); setOpenAdd(true); }} className="ml-auto px-4 py-2 rounded-md text-sm font-semibold bg-white border border-orange-100 text-orange-600">
                      Add to trip
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------ VR Modal ------------------ */}
      <AnimatePresence>
        {openVR && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute inset-0 bg-black/60" onClick={() => setOpenVR(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-[92%] overflow-hidden"
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button onClick={() => setOpenVR(false)} className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/60 border border-gray-200 hover:bg-white transition" aria-label="Close">
                <X className="w-5 h-5" />
              </button>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AR / VR Preview</h3>
                <p className="text-sm text-gray-600 mb-4">Preview of the AR/VR experience for <strong>{item.name}</strong>.</p>

                {/* example preview: image or small iframe; replace with actual preview */}
                <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  {item.vrPreviewImage ? (
                    <img src={item.vrPreviewImage} alt="vr preview" className="w-full h-full object-cover rounded-md" />
                  ) : (
                    <div className="text-gray-400">VR preview not available</div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setOpenVR(false);
                      navigate(`/place/${item.id}/vr`);
                    }}
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-semibold"
                  >
                    Open AR/VR Page
                  </button>

                  <button onClick={() => setOpenVR(false)} className="px-4 py-2 rounded-md border">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------ Add Modal ------------------ */}
      <AnimatePresence>
        {openAdd && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute inset-0 bg-black/60" onClick={() => setOpenAdd(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-[92%] overflow-hidden"
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button onClick={() => setOpenAdd(false)} className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/60 border border-gray-200 hover:bg-white transition" aria-label="Close">
                <X className="w-5 h-5" />
              </button>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Add <span className="font-bold">{item.name}</span> to your trip</h3>
                <p className="text-sm text-gray-600 mb-4">Choose date and confirm.</p>

                <div className="flex flex-col gap-3">
                  <label className="text-sm">Planned date</label>
                  <input type="date" id="tripDate" name="tripDate" className="border rounded-md p-2" />

                  <label className="text-sm">Notes (optional)</label>
                  <textarea id="tripNotes" name="tripNotes" rows="3" className="border rounded-md p-2" />

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => {
                        const date = document.getElementById("tripDate")?.value;
                        const notes = document.getElementById("tripNotes")?.value;
                        handleConfirmAdd({ date, notes });
                      }}
                      className="px-4 py-2 rounded-md bg-green-600 text-white font-semibold"
                    >
                      Confirm
                    </button>

                    <button onClick={() => setOpenAdd(false)} className="px-4 py-2 rounded-md border">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
