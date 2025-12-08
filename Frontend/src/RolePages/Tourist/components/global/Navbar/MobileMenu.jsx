import { Link } from "react-router-dom";
import { getInitials } from "./utils";

export default function MobileMenu({
  navLinks,
  isLoggedIn,
  user,
  mobileMenuOpen,
  setMobileMenuOpen,
  setAuthType
}) {
  if (!mobileMenuOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-40 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <hr className="my-3" />

          {isLoggedIn && user ? (
            <>
              <div className="px-4 py-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-700 rounded-full text-white flex items-center justify-center font-semibold">
                    {getInitials(user.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-600 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>

              <Link className="block px-4 py-3 hover:bg-gray-50" to="/tourist/profile">My Profile</Link>
              <Link className="block px-4 py-3 hover:bg-gray-50" to="/tourist/saved">Saved Itineraries</Link>
              <Link className="block px-4 py-3 hover:bg-gray-50" to="/tourist/bookings">My Bookings</Link>
              <Link className="block px-4 py-3 hover:bg-gray-50" to="/tourist/favorites">Favorites</Link>

              <hr className="my-2" />

              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setAuthType("login");
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 rounded-lg border-2 border-green-700 text-green-700 font-semibold hover:bg-green-50"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setAuthType("signup");
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
