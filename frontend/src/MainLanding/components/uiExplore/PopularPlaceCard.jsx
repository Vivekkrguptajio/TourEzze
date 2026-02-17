
// import React, { useEffect, useState, useRef, useCallback } from "react";
// import {
//   MapPin,
//   Star,
//   ArrowRight,
//   Sparkles,
//   Clock,
//   Heart,
//   Share2,
//   ChevronLeft,
//   ChevronRight,
//   X
// } from "lucide-react";
// import { placesData } from "./placesData"; // Ensure this exists and exports an array

// function normalizePublicPath(p) {
//   if (!p) return "";
//   p = String(p).trim();
//   if (/^https?:\/\//i.test(p)) return p;
//   if (p.startsWith("/")) return p;
//   if (p.startsWith("public/")) return "/" + p.replace(/^public\//, "");
//   return "/" + p;
// }

// function isGoogleMapsEmbed(url) {
//   if (!url) return false;
//   return /google\.com\/maps\/embed/i.test(url);
// }

// function looksLikeGoogleShortOrMaps(url) {
//   if (!url) return false;
//   return /maps\.app\.goo\.gl|goo\.gl\/maps|google\.com\/maps(?!\/embed)/i.test(url);
// }

// export default function PopularPlaceCard({ place }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [showARVRModal, setShowARVRModal] = useState(false);
//   const mountedRef = useRef(false);
//   const autoSlideRef = useRef(null);

//   const placesLen = Array.isArray(placesData) ? placesData.length : 0;
//   const isSliderMode = !place && placesLen > 0; // true when no `place` prop and we have fallback data
//   const data = place || placesData[currentIndex] || {};

//   const img = data.image ? normalizePublicPath(data.image) : "/Photos/TopTen/placeholder.jpg";
//   const img360Raw = (data.image360 || "").toString().trim();
//   const img360 = isGoogleMapsEmbed(img360Raw) ? img360Raw : normalizePublicPath(img360Raw);

//   // stable close handler
// const closeARVR = useCallback((e) => {
//   if (e) {
//     if (typeof e.stopPropagation === "function") {
//       e.stopPropagation();
//     }
//     if (typeof e.preventDefault === "function") {
//       e.preventDefault();
//     }
//   }
//   setShowARVRModal(false);
//   document.body.style.overflow = "";
// }, []);


//   // stable open handler
//   const openARVR = useCallback((e) => {
//     e?.stopPropagation?.();
//     if (!img360Raw) {
//       // better UX: show toast or modal, for now alert
//       alert("360° view not available for this place.");
//       return;
//     }

//     // If embed url -> open modal
//     if (isGoogleMapsEmbed(img360Raw)) {
//       setShowARVRModal(true);
//       document.body.style.overflow = "hidden";
//       return;
//     }

//     // If looks like google short url -> ask to open in new tab
//     if (looksLikeGoogleShortOrMaps(img360Raw)) {
//       const proceed = window.confirm(
//         "This looks like a Google Maps link which may not embed properly. Open in a new tab?"
//       );
//       if (proceed) window.open(img360Raw, "_blank", "noopener,noreferrer");
//       return;
//     }

//     // fallback: try opening raw link in modal (could be direct image or viewer)
//     setShowARVRModal(true);
//     document.body.style.overflow = "hidden";
//   }, [img360Raw]);

//   // Auto-swipe only in slider mode
//   useEffect(() => {
//     if (!isSliderMode || placesLen <= 1) return;
//     autoSlideRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (placesLen ? (prev + 1) % placesLen : 0));
//     }, 4000);
//     return () => clearInterval(autoSlideRef.current);
//   }, [isSliderMode, placesLen]);

//   // cleanup overflow on unmount
//   useEffect(() => {
//     mountedRef.current = true;
//     return () => {
//       mountedRef.current = false;
//       document.body.style.overflow = "";
//       clearInterval(autoSlideRef.current);
//     };
//   }, []);

//   // ESC to close modal — use stable closeARVR in deps
//   useEffect(() => {
//     if (!showARVRModal) return;
//     const onKey = (e) => {
//       if (e.key === "Escape") closeARVR();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [showARVRModal, closeARVR]);

//   const handlePrev = (e) => {
//     e?.stopPropagation?.();
//     if (!placesLen) return;
//     clearInterval(autoSlideRef.current);
//     setCurrentIndex((p) => (p - 1 + placesLen) % placesLen);
//   };
//   const handleNext = (e) => {
//     e?.stopPropagation?.();
//     if (!placesLen) return;
//     clearInterval(autoSlideRef.current);
//     setCurrentIndex((p) => (p + 1) % placesLen);
//   };

//   const render360Viewer = () => {
//     if (!img360Raw) {
//       return (
//         <div className="w-full h-full flex items-center justify-center text-white p-6">
//           <div className="max-w-lg text-center">
//             <p className="mb-4 font-bold text-xl">360° view not available</p>
//             <p className="text-sm opacity-80">This place does not have a 360° view yet.</p>
//           </div>
//         </div>
//       );
//     }

//     if (isGoogleMapsEmbed(img360Raw)) {
//       return (
//         <div className="w-full h-full relative">
//           <iframe
//             title={`${data.name || "place"} - 360° View`}
//             src={img360}
//             className="w-full h-full border-0 absolute inset-0"
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       );
//     }

//     if (looksLikeGoogleShortOrMaps(img360Raw)) {
//       return (
//         <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-white">
//           <p className="text-lg font-semibold text-center max-w-prose">
//             This 360 link is a Google Maps link and may not be embeddable directly in the page.
//           </p>
//           <div className="flex gap-3">
//             <a
//               href={img360Raw}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 bg-white text-black rounded-md font-semibold"
//             >
//               Open in Google Maps
//             </a>
//             <button
//               onClick={() => window.open(img360Raw, "_blank", "noopener")}
//               className="px-4 py-2 bg-gray-200 text-black rounded-md font-semibold"
//             >
//               Open (fallback)
//             </button>
//           </div>
//           <p className="text-sm text-white/80 mt-4">
//             Tip: For best embed experience, use the Google Maps iframe embed URL (google.com/maps/embed?pb=...).
//           </p>
//         </div>
//       );
//     }

//     return (
//       <img
//         src={img360}
//         alt={`${data.name || "place"} 360 view`}
//         className="w-full h-full object-contain bg-black relative z-0"
//         style={{ touchAction: "none" }}
//       />
//     );
//   };

//   return (
//     <>
//       <div className="group relative block max-w-4xl mx-auto">
//         <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700 pointer-events-none" />

//         <div className="relative grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
//           {/* Image section */}
//           <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
//             <img
//               src={img}
//               alt={data.name || "place image"}
//               className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//             {/* nav arrows only when slider fallback */}
//             {isSliderMode && (
//               <>
//                 <button
//                   onClick={handlePrev}
//                   aria-label="Previous"
//                   className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-white/50 text-gray-700 shadow z-20"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   aria-label="Next"
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-white/50 text-gray-700 shadow z-20"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </>
//             )}

//             {/* badges */}
//             <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
//               {data.featured && (
//                 <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
//                   <Sparkles size={12} />
//                   Featured
//                 </div>
//               )}
//               {data.category && (
//                 <div className="bg-black/40 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
//                   {data.category}
//                 </div>
//               )}
//             </div>

//             {/* like/share */}
//             <div className="absolute top-16 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsLiked((s) => !s);
//                 }}
//                 aria-pressed={isLiked}
//                 aria-label="Like"
//                 className={`p-2 rounded-full ${isLiked ? "bg-red-500 text-white" : "bg-white/90 text-gray-700"} shadow`}
//               >
//                 <Heart size={14} />
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   if (navigator.share) navigator.share({ title: data.name, url: window.location.href });
//                 }}
//                 aria-label="Share"
//                 className="p-2 rounded-full bg-white/90 text-gray-700 shadow"
//               >
//                 <Share2 size={14} />
//               </button>
//             </div>

//             {/* rating */}
//             <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full shadow">
//               <Star size={14} fill="#f59e0b" />
//               <span className="text-sm font-bold text-gray-900">{data.rating ?? "—"}</span>
//             </div>

//             {/* best time */}
//             {data.bestTime && (
//               <div className="absolute bottom-4 right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
//                 Best: {data.bestTime}
//               </div>
//             )}
//           </div>

//           {/* content */}
//           <div className="p-6 md:p-8 flex flex-col justify-between">
//             <div>
//               <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">{data.subCategory ?? "Destination"}</p>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">{data.name ?? "Unknown place"}</h2>

//               <div className="space-y-3 mb-5">
//                 <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-3 border border-green-200">
//                   <div className="bg-green-500 p-2 rounded-lg">
//                     <MapPin size={18} className="text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-green-900/60 font-medium">Location</p>
//                     <p className="text-sm font-bold text-green-900">{data.location ?? "—"}</p>
//                   </div>
//                 </div>

//                 {data.duration && (
//                   <div className="flex items-start gap-3 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-3 border border-teal-200">
//                     <div className="bg-teal-500 p-2 rounded-lg">
//                       <Clock size={18} className="text-white" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-teal-900/60 font-medium">Duration</p>
//                       <p className="text-sm font-bold text-teal-900">{data.duration}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <p className="text-gray-600 text-sm md:text-base leading-relaxed">{data.description ?? "No description available."}</p>
//             </div>

//             <div className="mt-6 flex items-center justify-between gap-4">
//               <div className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-600">{data.price ?? "Free"}</div>

//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={(e) => { e.stopPropagation(); /* navigate or open details */ }}
//                   className="py-2 px-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold flex items-center gap-2"
//                   aria-label="Explore"
//                 >
//                   Explore <ArrowRight size={14} />
//                 </button>

//                 <button
//                   onClick={openARVR}
//                   className="py-2 px-3 bg-white border rounded-lg shadow text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors"
//                   aria-label="Open AR/VR preview"
//                 >
//                   <span>ARVR</span> <Sparkles size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
//         </div>
//       </div>

//       {/* ARVR Modal */}
//       {showARVRModal && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
//           style={{ zIndex: 999999 }}
//           onClick={closeARVR}
//           role="dialog"
//           aria-modal="true"
//           aria-label="360 degree preview"
//         >
//           <div
//             className="relative bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ease-out flex flex-col overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               width: "90vw",
//               maxWidth: "1100px",
//               height: "80vh",
//               maxHeight: "750px"
//             }}
//           >
//             <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
//               <h2 className="text-xl font-bold text-gray-900">360° AR/VR Preview</h2>

//               <button
//                 onClick={closeARVR}
//                 aria-label="Close preview"
//                 className="bg-red-600 hover:bg-red-700 rounded-full p-2 transition-all duration-200 hover:scale-110 active:scale-95 text-white shadow-lg"
//               >
//                 <X size={24} strokeWidth={2.5} />
//               </button>
//             </div>

//             <div className="flex-1 bg-black relative overflow-hidden">
//               <div className="w-full h-full">
//                 {render360Viewer()}
//               </div>

//               <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg px-4 py-2 z-10">
//                 <p className="text-white font-semibold">{data.name}</p>
//                 <p className="text-gray-300 text-sm">{data.location}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  MapPin,
  Star,
  ArrowRight,
  Sparkles,
  Clock,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

// Import places data from external file
import { placesData } from "./placesData";
// import placesData from "../uiExplore/placesData.js";
function normalizePublicPath(p) {
  if (!p) return "";
  p = String(p).trim();
  if (/^https?:\/\//i.test(p)) return p;
  if (p.startsWith("/")) return p;
  if (p.startsWith("public/")) return "/" + p.replace(/^public\//, "");
  return "/" + p;
}

function isGoogleMapsEmbed(url) {
  if (!url) return false;
  return /google\.com\/maps\/embed/i.test(url);
}

function looksLikeGoogleShortOrMaps(url) {
  if (!url) return false;
  return /maps\.app\.goo\.gl|goo\.gl\/maps|google\.com\/maps(?!\/embed)/i.test(url);
}

export default function PopularPlaceCard({ place }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showARVRModal, setShowARVRModal] = useState(false);
  const mountedRef = useRef(false);
  const autoSlideRef = useRef(null);

  const placesLen = Array.isArray(placesData) ? placesData.length : 0;
  const isSliderMode = !place && placesLen > 0;
  const data = place || placesData[currentIndex] || {};

  const img = data.image ? normalizePublicPath(data.image) : "/Photos/TopTen/placeholder.jpg";
  const img360Raw = (data.image360 || "").toString().trim();
  const img360 = isGoogleMapsEmbed(img360Raw) ? img360Raw : normalizePublicPath(img360Raw);

  const closeARVR = useCallback(() => {
    setShowARVRModal(false);
    document.body.style.overflow = "";
  }, []);

  const openARVR = useCallback((e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    if (!img360Raw) {
      alert("360° view is not available for this place.");
      return;
    }

    setShowARVRModal(true);
    document.body.style.overflow = "hidden";
  }, [img360Raw]);

  useEffect(() => {
    if (!isSliderMode || placesLen <= 1) return;
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (placesLen ? (prev + 1) % placesLen : 0));
    }, 4000);
    return () => clearInterval(autoSlideRef.current);
  }, [isSliderMode, placesLen]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      document.body.style.overflow = "";
      clearInterval(autoSlideRef.current);
    };
  }, []);

  useEffect(() => {
    if (!showARVRModal) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeARVR();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showARVRModal, closeARVR]);

  const handlePrev = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!placesLen) return;
    clearInterval(autoSlideRef.current);
    setCurrentIndex((p) => (p - 1 + placesLen) % placesLen);
  };
  
  const handleNext = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!placesLen) return;
    clearInterval(autoSlideRef.current);
    setCurrentIndex((p) => (p + 1) % placesLen);
  };

  const render360Viewer = () => {
    if (!img360Raw) {
      return (
        <div className="w-full h-full flex items-center justify-center text-white p-6">
          <div className="max-w-lg text-center">
            <p className="mb-4 font-bold text-xl">360° view not available</p>
            <p className="text-sm opacity-80">This place does not have a 360° view yet.</p>
          </div>
        </div>
      );
    }

    if (isGoogleMapsEmbed(img360Raw)) {
      return (
        <div className="w-full h-full relative">
          <iframe
            title={`${data.name || "place"} - 360° View`}
            src={img360}
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      );
    }

    if (looksLikeGoogleShortOrMaps(img360Raw)) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-white">
          <p className="text-lg font-semibold text-center max-w-prose">
            This 360 link is a Google Maps link and may not be embeddable directly in the page.
          </p>
          <div className="flex gap-3">
            <a
              href={img360Raw}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black rounded-md font-semibold"
            >
              Open in Google Maps
            </a>
            <button
              onClick={() => window.open(img360Raw, "_blank", "noopener")}
              className="px-4 py-2 bg-gray-200 text-black rounded-md font-semibold"
            >
              Open (fallback)
            </button>
          </div>
          <p className="text-sm text-white/80 mt-4">
            Tip: For best embed experience, use the Google Maps iframe embed URL (google.com/maps/embed?pb=...).
          </p>
        </div>
      );
    }

    return (
      <img
        src={img360}
        alt={`${data.name || "place"} 360 view`}
        className="w-full h-full object-contain bg-black relative z-0"
        style={{ touchAction: "none" }}
      />
    );
  };

  return (
    <>
      <div className="group relative block max-w-4xl mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700 pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
          {/* Image section */}
          <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
            <img
              src={img}
              alt={data.name || "place image"}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {isSliderMode && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-white/50 text-gray-700 shadow z-20 hover:bg-white transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-white/50 text-gray-700 shadow z-20 hover:bg-white transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              {data.featured && (
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                  <Sparkles size={12} />
                  Featured
                </div>
              )}
              {data.category && (
                <div className="bg-black/40 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {data.category}
                </div>
              )}
            </div>

            <div className="absolute top-16 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked((s) => !s);
                }}
                aria-pressed={isLiked}
                aria-label="Like"
                className={`p-2.5 rounded-full transition-all duration-300 shadow-lg hover:scale-110 ${
                  isLiked 
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white" 
                    : "bg-white/95 text-gray-700 hover:bg-red-50"
                }`}
              >
                <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (navigator.share) {
                    navigator.share({ 
                      title: data.name || 'Amazing Place', 
                      text: data.description || 'Check out this place!',
                      url: window.location.href 
                    });
                  } else {
                    alert('Share feature\n\n' + (data.name || 'Place') + '\n' + window.location.href);
                  }
                }}
                aria-label="Share"
                className="p-2.5 rounded-full bg-white/95 text-gray-700 shadow-lg hover:scale-110 hover:bg-blue-50 transition-all duration-300"
              >
                <Share2 size={16} />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full shadow">
              <Star size={14} fill="#f59e0b" className="text-amber-500" />
              <span className="text-sm font-bold text-gray-900">{data.rating ?? "—"}</span>
            </div>

            {data.bestTime && (
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                Best: {data.bestTime}
              </div>
            )}
          </div>

          {/* content */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">{data.subCategory ?? "Destination"}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">{data.name ?? "Unknown place"}</h2>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-3 border border-green-200">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-green-900/60 font-medium">Location</p>
                    <p className="text-sm font-bold text-green-900">{data.location ?? "—"}</p>
                  </div>
                </div>

                {data.duration && (
                  <div className="flex items-start gap-3 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-3 border border-teal-200">
                    <div className="bg-teal-500 p-2 rounded-lg">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-teal-900/60 font-medium">Duration</p>
                      <p className="text-sm font-bold text-teal-900">{data.duration}</p>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{data.description ?? "No description available."}</p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-600">{data.price ?? "Free"}</div>

              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    alert(`Exploring ${data.name || 'this place'}!\n\nLocation: ${data.location || 'Unknown'}\nRating: ${data.rating || 'N/A'}`);
                  }}
                  className="py-2 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold flex items-center gap-2 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  aria-label="Explore"
                >
                  Explore <ArrowRight size={16} />
                </button>

                <button
                  onClick={openARVR}
                  className="py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-2 border-purple-400 rounded-lg shadow-md text-sm font-bold flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  aria-label="Open AR/VR preview"
                >
                  <span>AR/VR</span> <Sparkles size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
        </div>
      </div>

      {/* ARVR Modal - Full Screen Centered with Blur Background */}
      {showARVRModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
          onClick={closeARVR}
          role="dialog"
          aria-modal="true"
          aria-label="360 degree preview"
        >
          <div
            className="relative bg-black rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90vw",
              maxWidth: "1400px",
              height: "90vh",
              maxHeight: "900px"
            }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="text-white" size={24} />
                <h2 className="text-xl font-bold text-white">360° AR/VR Experience</h2>
              </div>

              <button
                onClick={closeARVR}
                aria-label="Close preview"
                className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95 text-white shadow-lg border-2 border-white/50"
              >
                <X size={28} strokeWidth={3} />
              </button>
            </div>

            <div className="flex-1 bg-black relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                {render360Viewer()}
              </div>

              <div className="absolute top-8 left-8 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl px-6 py-4 z-10 border-2 border-white/20 shadow-2xl">
                <p className="text-white font-bold text-2xl">{data.name}</p>
                <p className="text-gray-300 text-base flex items-center gap-2 mt-2">
                  <MapPin size={16} />
                  {data.location}
                </p>
              </div>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-xl rounded-full px-8 py-3 z-10 border-2 border-white/30 shadow-2xl">
                <p className="text-white text-base font-semibold">🖱️ Use mouse/touch to explore 360° view</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}