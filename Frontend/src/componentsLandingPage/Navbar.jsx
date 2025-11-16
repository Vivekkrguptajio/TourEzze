import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Tourist");

  const handleRoleSelect = (role, path) => {
    setSelectedRole(role);
    setRoleOpen(false);
    window.location.href = path;   // redirect to role-based page
  };

  return (
    <nav className="bg-green-900 backdrop-blur-md fixed w-full top-0 z-50 h-14">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

        {/* LOGO + NAME */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="Photos/NavbarLogo/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          <div className="flex flex-col leading-tight">
            <h1 className="text-lg font-semibold text-green-100 tour-title tracking-wide">
              Jharkhand
            </h1>
            <span className="text-[9px] text-green-200 -mt-1 uppercase tracking-widest">
              Tourism
            </span>
          </div>
        </div>

        {/* MENU ITEMS */}
        <ul className="hidden md:flex items-center gap-7 text-white font-medium tracking-wide">

          <li className="hover:text-green-300 transition cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-green-300 transition cursor-pointer">
            <Link to="/explore">Explore</Link>
          </li>

          <li className="hover:text-green-300 transition cursor-pointer">
            <Link to="/ai-itinerary">AI Itinerary</Link>
          </li>

          <li className="hover:text-green-300 transition cursor-pointer">
            <Link to="/ar-vr">AR/VR</Link>
          </li>

          <li className="hover:text-green-300 transition cursor-pointer">
            <Link to="/marketplace">Marketplace</Link>
          </li>

          {/* ROLE SELECT DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setRoleOpen(!roleOpen)}
              className="hover:text-green-300 cursor-pointer flex items-center gap-1"
            >
              {selectedRole} ▼
            </button>

            {roleOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white backdrop-blur-md shadow-lg rounded-lg border border-white/20 py-1 overflow-hidden text-green-900">

                <p
                  onClick={() => handleRoleSelect("Tourist", "/role/tourist")}
                  className="px-3 py-2 text-sm hover:bg-white/30 hover:text-green-700 cursor-pointer transition"
                >
                  Tourist
                </p>

                <p
                  onClick={() =>
                    handleRoleSelect("Vendor / Artisan", "/role/vendor")
                  }
                  className="px-3 py-2 text-sm hover:bg-white/30 hover:text-green-700 cursor-pointer transition"
                >
                  Vendor / Artisan
                </p>

                <p
                  onClick={() =>
                    handleRoleSelect(
                      "Guide / Transport Provider",
                      "/role/guide"
                    )
                  }
                  className="px-3 py-2 text-sm hover:bg-white/30 hover:text-green-700 cursor-pointer transition"
                >
                  Guide / Transport Provider
                </p>

                <p
                  onClick={() =>
                    handleRoleSelect(
                      "Hotel / Homestay Owner",
                      "/role/hotel-owner"
                    )
                  }
                  className="px-3 py-2 text-sm hover:bg-white/30 hover:text-green-700 cursor-pointer transition"
                >
                  Hotel / Homestay Owner
                </p>

                <p
                  onClick={() =>
                    handleRoleSelect(
                      "Government Department",
                      "/role/government"
                    )
                  }
                  className="px-3 py-2 text-sm hover:bg-white/30 hover:text-green-700 cursor-pointer transition"
                >
                  Government Department
                </p>

                <p
                  onClick={() => handleRoleSelect("Admin", "/role/admin")}
                  className="px-3 py-2 text-sm hover:bg-white/30 hover:text-green-700 cursor-pointer transition"
                >
                  Admin
                </p>

              </div>
            )}
          </div>
        </ul>

        {/* LOGIN / SIGNUP */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login"
            className="border border-white text-white px-3 py-1 rounded-md text-sm hover:bg-white hover:text-green-700 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="border border-white text-white px-3 py-1 rounded-md text-sm hover:bg-white hover:text-green-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden cursor-pointer text-3xl text-white">☰</div>
      </div>
    </nav>
  );
}
