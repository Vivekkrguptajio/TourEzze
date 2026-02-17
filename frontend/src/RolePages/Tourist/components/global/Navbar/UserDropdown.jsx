import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { FaShoppingCart } from "react-icons/fa";

export default function DesktopMenu({
  navLinks,
  isLoggedIn,
  user,
  setAuthType,
  userMenuOpen,
  setUserMenuOpen,
  cartCount = 0,
}) {
  return (
    <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">

      {/* NAV LINKS */}
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-white font-medium hover:text-green-300 transition-colors text-sm lg:text-base whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}

      {/* ⭐ CART ICON - ALWAYS VISIBLE */}
      <Link 
        to="/tourist/cart"
        className="relative flex items-center text-white hover:text-green-300 transition-colors"
      >
        <FaShoppingCart size={20} />

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </Link>

      {/* NOT LOGGED IN → LOGIN / SIGNUP */}
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

      {/* USER DROPDOWN */}
      {isLoggedIn && user && (
        <UserDropdown
          user={user}
          userMenuOpen={userMenuOpen}
          setUserMenuOpen={setUserMenuOpen}
        />
      )}
    </div>
  );
}
