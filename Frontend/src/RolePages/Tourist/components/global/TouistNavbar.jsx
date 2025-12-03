import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setAuthType }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) return;

    try {
      const parsed = JSON.parse(savedUser);
      if (parsed && typeof parsed === "object") {
        setUser(parsed);
      } else {
        localStorage.removeItem("user");
      }
    } catch (err) {
      console.warn("Failed to parse saved user:", err);
      localStorage.removeItem("user");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const navLinks = [
    { to: "/role/tourist", label: "Explore" },
    { to: "/role/tourist/ai-itinerary", label: "Plan" },
    { to: "/role/tourist/hotels", label: "Hotels" },
    { to: "/role/tourist/shop", label: "Shop" },
    { to: "/role/tourist/events", label: "Events" },
  ];

  return (
    <>
      <nav className="bg-green-900 fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src="/Photos/NavbarLogo/logo.png"
                className="w-9 h-9 sm:w-10 sm:h-10"
                alt="Jharkhand Tourism"
              />
              <div className="leading-tight">
                <h1 className="text-green-100 text-base sm:text-lg font-bold tracking-wide">
                  Jharkhand
                </h1>
                <p className="text-[8px] sm:text-[9px] text-green-300 uppercase tracking-widest">
                  Tourism
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white font-medium hover:text-green-300 transition-colors text-sm lg:text-base whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}

              {/* LOGIN / SIGNUP - Desktop */}
              {!isLoggedIn && (
                <div className="flex items-center gap-2 lg:gap-3 shrink-0 ml-2">
                  <button
                    onClick={() => setAuthType("login")}
                    className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg border border-white text-white hover:bg-white hover:text-green-900 transition-all text-sm font-medium"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => setAuthType("signup")}
                    className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-white text-green-900 hover:bg-green-100 transition-all text-sm font-semibold"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* USER DROPDOWN - Desktop */}
              {isLoggedIn && user && (
                <div className="relative ml-2">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 bg-green-800 hover:bg-green-700 transition-colors rounded-full pl-2 pr-3 py-1.5"
                  >
                    <div className="w-8 h-8 bg-green-700 rounded-full text-white flex items-center justify-center font-semibold text-sm">
                      {getInitials(user.name)}
                    </div>
                    <span className="text-white text-sm font-medium hidden lg:block">
                      {user.name.split(" ")[0]}
                    </span>
                    <svg
                      className={`w-4 h-4 text-white transition-transform ${userMenuOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {userMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                      <div className="absolute right-0 top-14 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                        <div className="p-4 border-b bg-gradient-to-r from-green-50 to-emerald-50">
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600 truncate">{user.email}</p>
                        </div>

                        <div className="py-2">
                          <Link className="flex items-center px-4 py-2.5 hover:bg-gray-50 text-gray-700 text-sm transition-colors" to="/tourist/profile" onClick={() => setUserMenuOpen(false)}>
                            My Profile
                          </Link>
                          <Link className="flex items-center px-4 py-2.5 hover:bg-gray-50 text-gray-700 text-sm transition-colors" to="/tourist/saved" onClick={() => setUserMenuOpen(false)}>
                            Saved Itineraries
                          </Link>
                          <Link className="flex items-center px-4 py-2.5 hover:bg-gray-50 text-gray-700 text-sm transition-colors" to="/tourist/bookings" onClick={() => setUserMenuOpen(false)}>
                            My Bookings
                          </Link>
                          <Link className="flex items-center px-4 py-2.5 hover:bg-gray-50 text-gray-700 text-sm transition-colors" to="/tourist/favorites" onClick={() => setUserMenuOpen(false)}>
                            Favorites
                          </Link>

                          <hr className="my-2" />

                          <Link className="flex items-center px-4 py-2.5 hover:bg-gray-50 text-gray-700 text-sm transition-colors" to="/tourist/settings" onClick={() => setUserMenuOpen(false)}>
                            Settings
                          </Link>

                          <button
                            onClick={() => {
                              localStorage.clear();
                              window.location.reload();
                            }}
                            className="w-full flex items-center px-4 py-2.5 hover:bg-red-50 text-left text-red-600 text-sm font-medium transition-colors"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-green-800 rounded-lg transition-colors z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />

            <div className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-40 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-900 transition-colors">
                    {link.label}
                  </Link>
                ))}

                <hr className="my-3" />

                {isLoggedIn && user ? (
                  <>
                    <div className="px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-700 rounded-full text-white flex items-center justify-center font-semibold">
                          {getInitials(user.name)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-600 truncate">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    <Link className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors" to="/tourist/profile" onClick={() => setMobileMenuOpen(false)}>
                      My Profile
                    </Link>
                    <Link className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors" to="/tourist/saved" onClick={() => setMobileMenuOpen(false)}>
                      Saved Itineraries
                    </Link>
                    <Link className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors" to="/tourist/bookings" onClick={() => setMobileMenuOpen(false)}>
                      My Bookings
                    </Link>
                    <Link className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors" to="/tourist/favorites" onClick={() => setMobileMenuOpen(false)}>
                      Favorites
                    </Link>

                    <hr className="my-2" />

                    <Link className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors" to="/tourist/settings" onClick={() => setMobileMenuOpen(false)}>
                      Settings
                    </Link>

                    <button onClick={() => { localStorage.clear(); window.location.reload(); }} className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors font-medium">
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="space-y-2 pt-2">
                    <button onClick={() => { setAuthType("login"); setMobileMenuOpen(false); }} className="w-full px-4 py-3 rounded-lg border-2 border-green-700 text-green-700 font-semibold hover:bg-green-50 transition-colors">
                      Login
                    </button>

                    <button onClick={() => { setAuthType("signup"); setMobileMenuOpen(false); }} className="w-full px-4 py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors">
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
