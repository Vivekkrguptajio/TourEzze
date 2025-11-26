import React from "react";
import { MapPin } from "lucide-react";

export default function BasicInfoSection() {
  return (
    <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="border rounded-md p-2"
          placeholder="Full Name"
          defaultValue="Ramesh Kumar"
        />
        <input
          className="border rounded-md p-2"
          placeholder="Phone Number"
          defaultValue="+91 9876543210"
        />
        <input
          className="border rounded-md p-2 col-span-2"
          placeholder="Email Address"
          defaultValue="ramesh.kumar@example.com"
        />
        <div className="col-span-2 flex items-center gap-2">
          <MapPin className="text-green-700" size={18} />
          <input
            className="border rounded-md p-2 w-full"
            placeholder="Based in"
            defaultValue="Ranchi, Jharkhand"
          />
        </div>
      </div>
    </div>
  );
}
