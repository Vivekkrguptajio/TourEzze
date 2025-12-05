// PopularPlaceCard.jsx
import React, { useEffect, useState } from "react";
import {
  MapPin,
  Star,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import { placesData } from "./placesData"; // adjust path if needed

function normalizePublicPath(p) {
  if (!p) return "";
  if (p.startsWith("public/")) p = p.replace(/^public\//, "/");
  if (!p.startsWith("/") && !/^https?:\/\//i.test(p)) p = "/" + p;
  return p;
}

function isGoogleMapsEmbed(url) {
  if (!url) return false;
  return url.includes("google.com/maps/embed");
}

function looksLikeGoogleShortOrMaps(url) {
  if (!url) return false;
  return /maps\.app\.goo\.gl|goo\.gl\/maps|google\.com\/maps/.test(url);
}

export default function PopularPlaceCard({ place }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showARVRModal, setShowARVRModal] = useState(false);

  const sliderAvailable = !place;
  const data = place || placesData[currentIndex];

  // Derive sanitized image paths — DO NOT mutate `data`
  const img = data.image ? normalizePublicPath(data.image) : "";
  const img360Raw = data.image360 ? data.image360.trim() : "";
  // If it's a Google embed URL, keep as is; otherwise normalize
  const img360 = isGoogleMapsEmbed(img360Raw) ? img360Raw : normalizePublicPath(img360Raw);

  // auto-swipe when no place prop is passed
  useEffect(() => {
    if (!sliderAvailable) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderAvailable]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close with ESC
  useEffect(() => {
    if (!showARVRModal) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeARVR();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showARVRModal]);

  const handlePrev = (e) => {
    e?.stopPropagation?.();
    setCurrentIndex((p) => (p - 1 + placesData.length) % placesData.length);
  };
  const handleNext = (e) => {
    e?.stopPropagation?.();
    setCurrentIndex((p) => (p + 1) % placesData.length);
  };

  const openARVR = (e) => {
    e?.stopPropagation?.();
    setShowARVRModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeARVR = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault?.();
    }
    setShowARVRModal(false);
    document.body.style.overflow = "";
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

    // Google embed iframe
    if (isGoogleMapsEmbed(img360Raw)) {
      // Wrap iframe in a relative container and force iframe to a lower z so our controls sit above it.
      return (
        <div className="w-full h-full relative">
          <iframe
            title={`${data.name} - 360° View`}
            src={img360}
            style={{ zIndex: 1 }}
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      );
    }

    // Google short/maps fallback
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
            Tip: For in-page viewing, add the Google Maps "Embed" iframe URL (google.com/maps/embed?pb=...).
          </p>
        </div>
      );
    }

    // Otherwise treat as image (local or remote)
    return (
      <img
        src={img360}
        alt={`${data.name} 360 view`}
        className="w-full h-full object-contain bg-black relative z-0"
        style={{ touchAction: "none" }}
      />
    );
  };

  return (
    <>
      <div className="group relative block max-w-4xl mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
          {/* Image section */}
          <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
            <img
              src={img || "/Photos/TopTen/placeholder.jpg"}
              alt={data.name}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* nav arrows only when slider fallback */}
            {sliderAvailable && (
              <>
                <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-white/50 text-gray-700 shadow z-20">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-white/50 text-gray-700 shadow z-20">
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* badges */}
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

            {/* like/share */}
            <div className="absolute top-16 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }} className={`p-2 rounded-full ${isLiked ? "bg-red-500 text-white" : "bg-white/90 text-gray-700"} shadow`}>
                <Heart size={14} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); if (navigator.share) navigator.share({ title: data.name, url: window.location.href }); }} className="p-2 rounded-full bg-white/90 text-gray-700 shadow">
                <Share2 size={14} />
              </button>
            </div>

            {/* rating */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full shadow">
              <Star size={14} fill="#f59e0b" />
              <span className="text-sm font-bold text-gray-900">{data.rating}</span>
            </div>

            {/* best time */}
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">{data.name}</h2>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-3 border border-green-200">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-green-900/60 font-medium">Location</p>
                    <p className="text-sm font-bold text-green-900">{data.location}</p>
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

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{data.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-600">{data.price ?? "Free"}</div>

              <div className="flex items-center gap-3">
                <button onClick={(e)=>e.stopPropagation()} className="py-2 px-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold">
                  Explore <ArrowRight size={14} />
                </button>

                <button onClick={openARVR} className="py-2 px-3 bg-white border rounded-lg shadow text-sm flex items-center gap-2 hover:bg-gray-50">
                  <span>ARVR</span> <Sparkles size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
        </div>
      </div>

      {/* ARVR Modal */}
      {showARVRModal && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center"
          style={{ zIndex: 999999 }}
          onClick={closeARVR}
        >
          {/* Close button OUTSIDE the iframe container - with pointer-events */}
          <button
            onClick={closeARVR}
            aria-label="Close 360 view"
            style={{ 
              zIndex: 9999999,
              position: 'fixed',
              top: '20px',
              right: '20px',
              pointerEvents: 'all'
            }}
            className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl 
                       transition-all duration-200 hover:scale-110 active:scale-95 
                       text-white border-4 border-white"
          >
            <X size={24} strokeWidth={3} />
          </button>

          {/* Title badge OUTSIDE iframe container */}
          <div 
            style={{ 
              zIndex: 9999999,
              position: 'fixed',
              top: '20px',
              left: '20px',
              pointerEvents: 'none'
            }}
            className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-3 shadow-xl border-2 border-gray-300"
          >
            <p className="text-base font-bold text-gray-800">{data.name} - 360° View</p>
          </div>

          {/* Viewer container - separate from controls */}
          <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              maxWidth: '95vw', 
              maxHeight: '90vh',
              margin: '20px'
            }}
          >
            <div className="w-full h-full bg-black rounded-lg overflow-hidden">
              {render360Viewer()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}