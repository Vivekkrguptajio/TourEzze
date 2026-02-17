import React, { useState } from "react";
import {
  LayoutDashboard,
  Box,
  List,
  Plus,
  ShoppingCart,
  ClipboardList,
  CheckCircle2,
  XCircle,
  DollarSign,
  Star,
  MessageSquare,
  Boxes,
  ShieldCheck,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function VendorSidebar() {
  const [openProducts, setOpenProducts] = useState(true);
  const [openOrders, setOpenOrders] = useState(true);
  const navigate = useNavigate();

  const linkBase =
    "flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-150";
  const activeClass = "bg-green-100 text-green-900 font-semibold";
  const normalClass = "text-green-800 hover:bg-green-50";

  const handleLogout = () => {
    localStorage.removeItem("vendorToken");
    navigate("/role/vendor/login");
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 text-green-800 flex flex-col justify-between shadow-sm">

      {/* ------- TOP SECTION ------- */}
      <div className="py-5 flex flex-col gap-3 overflow-y-auto">

        {/* Dashboard */}
        <div className="px-3 mb-2">
          <NavLink
            to="/role/vendor/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-green-700 text-white font-semibold"
                  : "hover:bg-green-50"
              }`
            }
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>
        </div>

        {/* ------------ MENU ------------ */}
        <nav className="px-3 space-y-1 text-sm">

          {/* PRODUCTS SECTION */}
          <div>
            <button
              onClick={() => setOpenProducts(!openProducts)}
              className="w-full flex items-center justify-between px-2 py-2 hover:bg-green-50 rounded-lg"
            >
              <span className="flex items-center gap-2 font-medium">
                <Box size={18} />
                My Products
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openProducts ? "rotate-180" : ""
                }`}
              />
            </button>

            {openProducts && (
              <div className="ml-6 mt-1 space-y-1 border-l border-green-100 pl-3">
                <NavLink
                  to="/role/vendor/products"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <List size={16} />
                  All Listings
                </NavLink>

                <NavLink
                  to="/role/vendor/products/add"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <Plus size={16} />
                  Add Product
                </NavLink>
              </div>
            )}
          </div>

          {/* ORDERS SECTION */}
          <div>
            <button
              onClick={() => setOpenOrders(!openOrders)}
              className="w-full flex items-center justify-between px-2 py-2 mt-1 hover:bg-green-50 rounded-lg"
            >
              <span className="flex items-center gap-2 font-medium">
                <ShoppingCart size={18} />
                Orders
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openOrders ? "rotate-180" : ""
                }`}
              />
            </button>

            {openOrders && (
              <div className="ml-6 mt-1 space-y-1 border-l border-green-100 pl-3">

                <NavLink
                  to="/role/vendor/orders/new"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <ClipboardList size={16} />
                  New Orders
                </NavLink>

                <NavLink
                  to="/role/vendor/orders/accepted"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <CheckCircle2 size={16} />
                  Accepted
                </NavLink>

                <NavLink
                  to="/role/vendor/orders/completed"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <CheckCircle2 size={16} />
                  Completed
                </NavLink>

                <NavLink
                  to="/role/vendor/orders/cancelled"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <XCircle size={16} />
                  Cancelled
                </NavLink>

              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <NavLink
            to="/role/vendor/earnings"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <DollarSign size={16} />
            Earnings
          </NavLink>

          <NavLink
            to="/role/vendor/reviews"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <Star size={16} />
            Reviews
          </NavLink>

          <NavLink
            to="/role/vendor/messages"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <MessageSquare size={16} />
            Messages
          </NavLink>

          <NavLink
            to="/role/vendor/inventory"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <Boxes size={16} />
            Inventory
          </NavLink>

          <NavLink
            to="/role/vendor/verification"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <ShieldCheck size={16} />
            Verification
          </NavLink>

          <NavLink
            to="/role/vendor/settings"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <Settings size={16} />
            Settings
          </NavLink>

        </nav>
      </div>

      {/* LOGOUT */}
      <div className="px-3 pb-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 w-full text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
