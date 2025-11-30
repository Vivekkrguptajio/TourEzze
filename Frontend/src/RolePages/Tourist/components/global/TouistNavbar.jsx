import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setAuthType }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <nav className="bg-green-900 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/role/tourist/"
          className="flex items-center gap-2 cursor-pointer shrink-0"
        >
          <img src="/Photos/NavbarLogo/logo.png" className="w-10 h-10" alt="logo" />
          <div className="leading-tight">
            <h1 className="text-green-100 text-lg font-bold tracking-wide">
              Jharkhand
            </h1>
            <p className="text-[9px] text-green-300 uppercase tracking-widest">
              Tourism
            </p>
          </div>
        </Link>

        {/* MENU ITEMS (Desktop) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 text-white font-medium max-w-full">

         
          <Link to="/role/tourist" className="hover:text-green-300 transition">Explore</Link>
          <Link to="/role/tourist/ai-itinerary" className="hover:text-green-300 transition">Plan</Link>
          <Link to="/role/tourist/hotels" className="hover:text-green-300 transition">Hotels</Link>
          <Link to="/role/tourist/shop" className="hover:text-green-300 transition">Shop</Link>
          <Link to="/role/tourist/events" className="hover:text-green-300 transition">Events</Link>

          {/* LOGIN / SIGNUP */}
          {!isLoggedIn && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setAuthType("login")}
                className="px-3 py-1 rounded-md border border-white text-white hover:bg-white hover:text-green-700 transition text-sm"
              >
                Login
              </button>

              <button
                onClick={() => setAuthType("signup")}
                className="px-3 py-1 rounded-md border border-white text-white hover:bg-white hover:text-green-700 transition text-sm"
              >
                Sign Up
              </button>
            </div>
          )}

          {/* USER DROPDOWN */}
          {isLoggedIn && user && (
            <div className="relative shrink-0">
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 bg-green-800 rounded-full text-white flex items-center justify-center cursor-pointer font-semibold"
              >
                {getInitials(user.name)}
              </div>

              {menuOpen && (
                <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-xl border z-[9999]">
                  <div className="p-4 border-b bg-gray-50">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>

                  <div className="flex flex-col text-sm text-gray-700">
                    <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/profile">
                      My Profile
                    </Link>
                    <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/saved">
                      Saved Itineraries
                    </Link>
                    <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/bookings">
                      My Bookings
                    </Link>
                    <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/favorites">
                      Favorites
                    </Link>

                    <hr />

                    <Link className="px-4 py-2 hover:bg-gray-100" to="/tourist/settings">
                      Settings
                    </Link>

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

        {/* MOBILE ICON */}
        <div className="md:hidden text-white text-3xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
}
