import { useState } from "react";
import { Link } from "react-router-dom";

export default function GuideNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 fixed w-full top-0 z-50 h-14 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/Photos/NavbarLogo/guide-logo.png" className="w-10 h-10" alt="logo" />
          <div className="leading-tight">
            <h1 className="text-blue-100 text-lg font-bold tracking-wide">Guide Portal</h1>
            <p className="text-[9px] text-blue-300 uppercase tracking-widest -mt-[2px]">
              TourEzze
            </p>
          </div>
        </div>

        {/* MIDDLE MENU */}
        <div className="hidden md:flex items-center gap-6 text-white font-medium text-sm">

          <Link to="/guide/dashboard" className="hover:text-blue-300 transition">
            Dashboard
          </Link>

          <Link to="/guide/bookings" className="hover:text-blue-300 transition">
            Bookings
          </Link>

          <Link to="/guide/routes" className="hover:text-blue-300 transition">
            Routes
          </Link>

          <Link to="/guide/services" className="hover:text-blue-300 transition">
            Services
          </Link>

          <Link to="/guide/settings" className="hover:text-blue-300 transition">
            Settings
          </Link>

          {/* LOGOUT */}
          <button
            onClick={() => {
              localStorage.removeItem("role");
              window.location.href = "/";
            }}
            className="px-3 py-1 rounded-md border border-white text-white text-sm 
                       hover:bg-white hover:text-blue-900 transition duration-200"
          >
            Logout
          </button>
        </div>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white px-6 py-4 space-y-3">

          <Link to="/guide/dashboard" className="block">Dashboard</Link>
          <Link to="/guide/bookings" className="block">Bookings</Link>
          <Link to="/guide/routes" className="block">Routes</Link>
          <Link to="/guide/services" className="block">Services</Link>
          <Link to="/guide/settings" className="block">Settings</Link>

          <button
            onClick={() => {
              localStorage.removeItem("role");
              window.location.href = "/";
            }}
            className="w-full mt-3 py-2 border rounded-md hover:bg-white hover:text-blue-900"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
