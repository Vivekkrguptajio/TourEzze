import { useState, useEffect, useRef } from "react";
import { Bell, HelpCircle, User, Settings, LogOut, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProviderNavbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="w-full bg-green-900 h-16 flex items-center justify-between px-6 shadow-md fixed top-0 left-0 z-50">

      {/* LEFT LOGO + TITLE */}
      <div className="flex items-center gap-3">

        <img
          src="/Photos/NavbarLogo/logo.png"
          className="h-10 w-10 rounded-lg bg-green-700 p-1 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* CLICKABLE TEXT BLOCK */}
        <div
          className="leading-tight cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <h1 className="text-white font-bold text-base hover:text-yellow-300 transition">
            Jharkhand Tourism
          </h1>
          <p className="text-green-300 text-[11px]">
            Provider Portal
          </p>
        </div>
      </div>

      {/* CENTER HEADING */}
      <h2 className="hidden md:block text-white font-semibold text-[16px]">
        Hotel & Transport Dashboard
      </h2>

      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center w-[320px] bg-green-950/40 border border-green-800 rounded-lg px-3 py-1.5 text-gray-200">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full text-gray-200 placeholder-gray-400 text-sm"
        />
      </div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-4 text-white">

        <div className="relative cursor-pointer hover:text-yellow-300 transition">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] px-1 rounded-full">
            3
          </span>
        </div>

        <HelpCircle className="w-5 h-5 cursor-pointer hover:text-yellow-300 transition" />

        <div className="relative" ref={dropdownRef}>
          <img
            src="https://i.pravatar.cc/100"
            className="h-9 w-9 rounded-full cursor-pointer border border-green-700"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border overflow-hidden z-[9999]">
              <div className="px-4 py-3 border-b">
                <p className="font-semibold text-gray-800">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">rajesh@hotelparadise.com</p>
              </div>

              <div className="flex flex-col text-gray-700 text-sm">
                <button className="px-4 py-3 hover:bg-yellow-100 flex items-center gap-2">
                  <User size={16} /> Profile
                </button>

                <button className="px-4 py-3 hover:bg-gray-100 flex items-center gap-2">
                  <Settings size={16} /> Settings
                </button>

                <button className="px-4 py-3 hover:bg-gray-100 flex items-center gap-2">
                  <HelpCircle size={16} /> Support
                </button>

                <button className="px-4 py-3 hover:bg-red-100 flex items-center gap-2 text-red-600 border-t">
                  <LogOut size={16} /> Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
