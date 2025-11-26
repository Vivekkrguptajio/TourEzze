import React from "react";
import { Award } from "lucide-react";

export default function CertificationsSection() {
  const certs = [
    { name: "Government Guide License", info: "Valid until: Dec 2025" },
    { name: "First Aid Certification", info: "Valid until: Jun 2024" },
    { name: "Police Verification", info: "Verified on: Jan 2024" },
  ];

  return (
    <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Award className="text-orange-500" size={18} /> Certifications & Documents
      </h2>

      {certs.map((c, i) => (
        <div
          key={i}
          className="border rounded-md p-3 mb-2 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{c.name}</p>
            <p className="text-xs text-gray-500">{c.info}</p>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Verified
          </span>
        </div>
      ))}

      <button className="w-full text-sm text-gray-700 border rounded-md py-2 mt-2 hover:bg-gray-50">
        Upload New Certificate
      </button>
    </div>
  );
}
