import React, { useState } from "react";
import { Search, Bell, User } from "lucide-react";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-64 top-0 right-0 h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 z-50">

      {/* LEFT: LOGO + TITLE */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">
          JH
        </div>

        <div className="leading-tight">
          <h1 className="font-semibold text-gray-900">Jharkhand Tourism Department</h1>
          <p className="text-xs text-gray-500 -mt-1">Government Portal</p>
        </div>
      </div>

      {/* CENTER SEARCH */}
      <div className="hidden md:flex items-center w-96 bg-gray-100 rounded-lg px-3 py-1.5">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search hotels, vendors, guides, events..."
          className="ml-2 w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-6">

        {/* Bell */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] text-white px-1 rounded-full">3</span>
        </div>

        {/* Profile */}
        <div className="relative">
          <User
            className="w-8 h-8 cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg border">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Admin Account</p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Help</p>
              <p className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer">Logout</p>
            </div>
          )}
        </div>
      </div>

    </header>
  );
}
