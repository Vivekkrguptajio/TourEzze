import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setAuthType }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // -------- USER DATA FROM LOCALSTORAGE ----------
  const [user, setUser] = useState(null);
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Avatar initials
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <nav className="bg-green-900 fixed w-full top-0 z-50 h-14 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/Photos/NavbarLogo/logo.png" className="w-10 h-10" alt="logo" />
          <div className="leading-tight">
            <h1 className="text-green-100 text-lg font-bold tracking-wide">Jharkhand</h1>
            <p className="text-[9px] text-green-300 uppercase tracking-widest -mt-[2px]">
              Tourism
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-6 text-white font-medium text-sm">

          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <Link to="/role/tourist/explore" className="hover:text-green-300 transition">Explore</Link>
          <Link to="/role/tourist/ai-itinerary" className="hover:text-green-300 transition">Plan</Link>
          <Link to="/role/tourist/book" className="hover:text-green-300 transition">Book</Link>
          <Link to="/role/tourist/shop" className="hover:text-green-300 transition">Shop</Link>
          <Link to="/role/tourist/events" className="hover:text-green-300 transition">Events</Link>

          {/* -------- IF USER NOT LOGGED IN ---------- */}
          {!isLoggedIn && (
            <>
              <button
                onClick={() => setAuthType("login")}
                className="px-3 py-1 rounded-md border border-white text-white hover:bg-white hover:text-green-700 transition"
              >
                Login
              </button>

              <button
                onClick={() => setAuthType("signup")}
                className="px-3 py-1 rounded-md border border-white text-white hover:bg-white hover:text-green-700 transition"
              >
                Sign Up
              </button>
            </>
          )}

          {/* -------- IF USER LOGGED IN (AVATAR + MENU) ---------- */}
          {isLoggedIn && user && (
            <div className="relative">
              {/* Avatar */}
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 bg-green-700 rounded-full text-white flex 
                  items-center justify-center cursor-pointer font-semibold"
              >
                {getInitials(user.name)}
              </div>

              {/* Dropdown */}
              {menuOpen && (
  <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-xl border overflow-hidden z-[9999]">
    <div className="p-4 border-b">
      <p className="font-semibold">{user.name}</p>
      <p className="text-sm text-gray-500">{user.email}</p>
    </div>

    <div className="flex flex-col text-sm text-gray-700">
      <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/profile">My Profile</Link>
      <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/saved">Saved Itineraries</Link>
      <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/bookings">My Bookings</Link>
      <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/favorites">Favorites</Link>

      <hr />

      <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/settings">Settings</Link>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="px-4 py-2 hover:bg-gray-100 text-left text-red-600"
      >
        Logout
      </button>
    </div>
  </div>
)}

            </div>
          )}
        </div>

        {/* MOBILE MENU (NOT added yet) */}
        <div className="md:hidden text-white text-3xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
}
