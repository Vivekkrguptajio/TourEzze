import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

export default function DesktopMenu({
  navLinks,
  isLoggedIn,
  user,
  setAuthType,
  userMenuOpen,
  setUserMenuOpen
}) {
  return (
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
