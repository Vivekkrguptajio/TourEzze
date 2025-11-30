import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, HelpCircle } from "lucide-react";

export default function VendorTopbar() {

  const navigate = useNavigate();

  return (
    <header className="w-full h-[72px] bg-white border-b px-6 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        {/* Logo */}
        <div className="w-11 h-11 bg-green-700 text-white rounded-xl flex items-center justify-center font-bold text-[14px]">
          JH
        </div>

        {/* CLICKABLE TEXT */}
        <div
          className="leading-tight cursor-pointer select-none"
          onClick={() => navigate("/")}    // 👈 Redirect on click
        >
          <h1 className="text-[17px] font-semibold text-gray-900">
            Vendor Dashboard
          </h1>
          <p className="text-[11px] text-gray-500 -mt-0.5">
            Jharkhand Digital Tourism
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 text-gray-700">
        <div className="relative cursor-pointer">
          <Bell size={21} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
        </div>

        <HelpCircle size={23} className="cursor-pointer" />

        <div className="w-9 h-9 bg-green-700 text-white rounded-full flex items-center justify-center font-semibold cursor-pointer">
          VA
        </div>
      </div>

    </header>
  );
}
