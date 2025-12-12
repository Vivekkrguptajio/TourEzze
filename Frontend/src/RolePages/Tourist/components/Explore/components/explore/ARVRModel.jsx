import React from "react";

export default function ARVRModal({ isOpen, link, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[2000] px-4">
      <div
        className="bg-white w-full max-w-[90%] lg:max-w-[70%] rounded-xl shadow-xl overflow-hidden"
        style={{ height: "80vh" }}   // <-- modal ki height 80% window
      >

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
          <h2 className="text-2xl font-bold">360° AR/VR Preview</h2>
          <button
            onClick={onClose}
            className="text-red-600 font-bold text-xl hover:text-red-800"
          >
            ✖
          </button>
        </div>

        {/* IFRAME */}
        <div className="w-full h-full bg-black">
          <iframe
            src={link}
            className="w-full h-full border-0"
            allow="accelerometer; gyroscope; magnetometer; vr; xr"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
