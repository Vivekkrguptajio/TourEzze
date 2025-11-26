import React from "react";
import { Briefcase, Languages } from "lucide-react";

export default function ProfessionalDetailsSection() {
  return (
    <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Briefcase size={18} className="text-green-700" /> Professional Details
      </h2>

      {/* Years & Type */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <select className="border rounded-md p-2">
          <option>5–10 years</option>
          <option>10–15 years</option>
        </select>
        <select className="border rounded-md p-2">
          <option>Trekking Guide</option>
          <option>City Tour Guide</option>
        </select>
      </div>

      {/* Languages */}
      <div className="mb-4">
        <h3 className="text-sm font-medium flex items-center gap-2 mb-2">
          <Languages size={14} /> Languages Spoken
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Hindi", "English", "Santhali", "Mundari"].map((lang) => (
            <span
              key={lang}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
            >
              {lang}
            </span>
          ))}
          <button className="border rounded-full px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">
            + Add Language
          </button>
        </div>
      </div>

      {/* Specializations */}
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Specializations</h3>
        <div className="flex flex-wrap gap-2">
          {["Trekking", "Waterfall Tours", "Tribal Culture", "Photography Tours"].map((sp) => (
            <span
              key={sp}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
            >
              {sp}
            </span>
          ))}
          <button className="border rounded-full px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">
            + Add Specialization
          </button>
        </div>
      </div>

      {/* Service Areas */}
      <div>
        <h3 className="text-sm font-medium mb-2">Service Areas</h3>
        <textarea
          className="border rounded-md w-full p-2 text-sm"
          defaultValue="Ranchi, Netarhat, Betla National Park, Hundru Falls, Tagore Hill"
        />
      </div>
    </div>
  );
}
