import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setAuthType }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0); // ⭐ NEW: CART COUNT

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  // Load user
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Load Cart Items from localStorage ⭐
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("tour_cart")) || [];
    setCartCount(cart.length);
  }, []);

  const navLinks = [
    { to: "/role/tourist", label: "Explore" },
    { to: "/role/tourist/ai-itinerary", label: "Plan" },
    { to: "/role/tourist/hotels", label: "Hotels" },
    { to: "/role/tourist/packages", label: "Packages" },
    { to: "/role/tourist/shop", label: "Shop" },
    { to: "/role/tourist/events", label: "Events" },
  ];

  const getInitials = (name = "") =>
    name
      .trim()
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <>
      <nav className="bg-green-900 fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/Photos/NavbarLogo/logo.png" className="w-10 h-10" alt="Jharkhand Tourism" />
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">Jharkhand</h1>
              <p className="text-green-300 text-[10px] tracking-widest -mt-1">TOURISM</p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            {/* PAGE LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white text-sm font-medium hover:text-green-300 transition tracking-wide"
              >
                {link.label}
              </Link>
            ))}

            {/* ⭐ ALWAYS VISIBLE CART ICON */}
            <Link
              to="/role/tourist/cart"
              className="relative flex items-center text-white hover:text-green-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 2.293a1 1 0 00.76 1.707H17m0 0a2 2 0 110 4 2 2 0 010-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {/* COUNT BADGE */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* LOGIN BUTTON */}
            {!isLoggedIn && (
              <div
                className="relative"
                onMouseEnter={() => setLoginDropdown(true)}
                onMouseLeave={() => setLoginDropdown(false)}
              >
                <button className="bg-white text-green-900 px-4 py-1.5 rounded-md font-semibold shadow hover:bg-green-100 transition">
                  Login ▾
                </button>

                {/* LOGIN DROPDOWN */}
                {loginDropdown && (
                  <div className="absolute right-0 w-64 bg-white shadow-xl rounded-md mt-2 z-50">
                    <div className="flex justify-between px-4 py-3 border-b">
                      <span className="font-semibold text-gray-800">Welcome</span>

                      <span
                        className="text-green-700 cursor-pointer font-semibold"
                        onClick={() => setAuthType("signup")}
                      >
                        Sign Up
                      </span>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => setAuthType("login")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                      >
                        Login Now
                      </button>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="#">
                        Explore Destinations
                      </Link>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="#">
                        Tour Packages
                      </Link>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="#">
                        Events & Festivals
                      </Link>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="#">
                        Browse Products
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* USER DROPDOWN */}
            {isLoggedIn && user && (
              <div
                className="relative"
                onMouseEnter={() => setUserDropdown(true)}
                onMouseLeave={() => setUserDropdown(false)}
              >
                <button className="flex items-center gap-2 bg-green-800 text-white px-3 py-1.5 rounded-full shadow hover:bg-green-700 transition">
                  <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-sm font-semibold">
                    {getInitials(user?.name)}
                  </div>
                  <span className="font-medium">{user?.name.split(" ")[0]}</span>
                  ▾
                </button>

                {userDropdown && (
                  <div className="absolute right-0 w-64 bg-white shadow-xl rounded-md mt-2 z-50">

                    <div className="p-4 border-b bg-green-50">
                      <p className="font-semibold text-gray-800">{user?.name}</p>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>

                    <div className="py-2">

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="/tourist/profile">
                        My Profile
                      </Link>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="/tourist/bookings">
                        My Bookings
                      </Link>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="/tourist/saved">
                        Saved Itineraries
                      </Link>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="/tourist/favorites">
                        Favorites
                      </Link>

                      <Link className="block px-4 py-2 hover:bg-gray-50" to="/tourist/packages">
                        Packages Booked
                      </Link>

                      <div className="block px-4 py-2 text-gray-700 font-medium bg-gray-50">
                        Added Items (Checkout Later)
                      </div>

                      <hr className="my-2" />

                      <button
                        onClick={() => {
                          localStorage.clear();
                          window.location.reload();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 font-medium"
                      >
                        Logout
                      </button>
                    </div>

                  </div>
                )}
              </div>
            )}

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 space-y-4">

            {/* ⭐ Cart in Mobile */}
            <Link
              to="/role/tourist/cart"
              className="block text-gray-800 py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              🛒 Added Items ({cartCount})
            </Link>

            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="block text-gray-800 py-2 border-b">
                {link.label}
              </Link>
            ))}

            {!isLoggedIn ? (
              <button
                onClick={() => setAuthType("login")}
                className="w-full py-2 bg-green-700 text-white rounded-md"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="w-full py-2 bg-red-600 text-white rounded-md"
              >
                Logout
              </button>
            )}

          </div>
        )}
      </nav>

      <div className="h-16" />
    </>
  );
}
