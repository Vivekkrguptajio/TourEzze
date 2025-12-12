import React from "react";

export default function ARVRModal({ isOpen, link, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[2000]">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl overflow-hidden">
        
        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-xl font-bold">360° AR/VR Preview</h2>
          <button
            onClick={onClose}
            className="text-red-600 font-semibold hover:text-red-800"
          >
            ✖ Close
          </button>
        </div>

        {/* IFRAME VIEWER */}
        <div className="w-full h-[500px] bg-black">
          <iframe
            src={link}
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
