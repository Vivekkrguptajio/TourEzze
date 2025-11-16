import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setAuthType }) {
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Tourist");

  const handleRoleSelect = (role, path) => {
    setSelectedRole(role);
    setRoleOpen(false);
    window.location.href = path;
  };

  return (
    <nav className="bg-green-900 fixed w-full top-0 z-50 h-14 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/Photos/NavbarLogo/logo.png" className="w-10 h-10" alt="logo" />
          <div className="leading-tight">
            <h1 className="text-green-100 text-lg font-bold tracking-wide">Jharkhand</h1>
            <p className="text-[9px] text-green-300 uppercase tracking-widest -mt-[2px]">
              Tourism
            </p>
          </div>
        </div>

        {/* MIDDLE: MENU */}
        <div className="hidden md:flex items-center gap-6 text-white font-medium text-sm">

          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <Link to="/explore" className="hover:text-green-300 transition">Explore</Link>
          <Link to="/ai-itinerary" className="hover:text-green-300 transition">AI Itinerary</Link>
          <Link to="/ar-vr" className="hover:text-green-300 transition">AR/VR</Link>
          <Link to="/marketplace" className="hover:text-green-300 transition">Marketplace</Link>

          {/* ROLE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setRoleOpen(!roleOpen)}
              className="hover:text-green-300 transition flex items-center gap-1"
            >
              {selectedRole} ▼
            </button>

            {roleOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 text-gray-800 font-normal">
                {[
                  { label: "Tourist", path: "/role/tourist" },
                  { label: "Vendor / Artisan", path: "/role/vendor" },
                  { label: "Guide / Transport", path: "/role/guide" },
                  { label: "Hotel / Homestay Owner", path: "/role/hotel-owner" },
                  { label: "Government Department", path: "/role/government" },
                  { label: "Admin", path: "/role/admin" },
                ].map((item) => (
                  <p
                    key={item.path}
                    onClick={() => handleRoleSelect(item.label, item.path)}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* LOGIN / SIGNUP */}
          <button
            onClick={() => setAuthType("login")}
            className="px-3 py-1 rounded-md border border-white text-white text-sm hover:bg-white hover:text-green-700 transition duration-200"
          >
            Login
          </button>

          <button
            onClick={() => setAuthType("signup")}
            className="px-3 py-1 rounded-md border border-white text-white text-sm hover:bg-white hover:text-green-700 transition duration-200"
          >
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden text-white text-3xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
}
