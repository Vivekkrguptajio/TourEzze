import { Link } from "react-router-dom";
import { getInitials } from "./utils";

export default function UserDropdown({ user, userMenuOpen, setUserMenuOpen }) {
  return (
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
      </button>

      {userMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setUserMenuOpen(false)}
          />

          <div className="absolute right-0 top-14 w-64 bg-white rounded-xl shadow-2xl border z-50 overflow-hidden">
            <div className="p-4 border-b bg-green-50">
              <p className="font-semibold text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-600 truncate">{user.email}</p>
            </div>

            <div className="py-2">
              <Link className="block px-4 py-2.5 hover:bg-gray-50" to="/tourist/profile">My Profile</Link>
              <Link className="block px-4 py-2.5 hover:bg-gray-50" to="/tourist/saved">Saved Itineraries</Link>
              <hr className="my-2" />
              <Link className="block px-4 py-2.5 hover:bg-gray-50" to="/tourist/settings">Settings</Link>

              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
