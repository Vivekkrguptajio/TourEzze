import React from "react";
import { ShieldCheck } from "lucide-react";

export default function VerificationCard() {
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ShieldCheck className="text-green-700" />
        <div>
          <p className="font-semibold text-green-700">Verified Guide</p>
          <p className="text-xs text-gray-600">Verified by Jharkhand Tourism Department</p>
        </div>
      </div>

      <span className="text-green-700 text-sm font-medium">Active</span>
    </div>
  );
}
