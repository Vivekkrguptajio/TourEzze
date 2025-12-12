import React from "react";

export default function ARVRModal({ isOpen, link, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[3000]">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">AR / VR Preview</h2>
          <button
            onClick={onClose}
            className="text-red-500 text-lg font-bold hover:text-red-700"
          >
            ✕
          </button>
        </div>

        {/* VIEWER */}
        <div className="w-full h-[450px] bg-black">
          <iframe
            src={link}
            title="AR/VR Preview"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
