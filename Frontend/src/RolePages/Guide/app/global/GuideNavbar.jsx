import React, { useState } from "react";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GuideNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between fixed top-0 left-0 z-50">

      {/* LEFT TITLE (CLICKABLE) */}
      <h1
        className="text-xl font-semibold text-green-800 cursor-pointer select-none"
        onClick={() => navigate("/")}   // 👈 redirect on click
      >
        Tour Guide Dashboard
      </h1>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-6 relative">

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-orange-500 w-2 h-2 rounded-full"></span>
        </div>

        {/* USER MENU */}
        <div className="relative">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>

          {/* DROPDOWN */}
          {openMenu && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-lg py-2 animate-fadeIn">

              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>

              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>

              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Support
              </a>

              <button
                className="block w-full text-left px-4 py-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600 mt-1"
              >
                Logout
              </button>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
