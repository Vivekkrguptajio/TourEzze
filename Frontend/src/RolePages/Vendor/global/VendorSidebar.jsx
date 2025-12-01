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
import { NavLink } from "react-router-dom";

export default function VendorSidebar() {
  const [openProducts, setOpenProducts] = useState(true);
  const [openOrders, setOpenOrders] = useState(true);

  const linkBase =
    "flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition";
  const activeClass = "bg-green-100 text-green-900 font-medium";
  const normalClass = "text-green-800 hover:bg-green-50";

  return (
    <aside className="w-64 h-screen bg-white border-r text-green-800 flex flex-col justify-between">

      {/* ------------------- TOP + MIDDLE SECTION ------------------- */}
      <div className="py-4 flex flex-col gap-3 overflow-y-auto">

        {/* Dashboard */}
        <div className="px-3 mb-2">
          <NavLink
            to="/role/vendor"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-green-700 text-white" : "hover:bg-green-50"
              }`
            }
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>
        </div>

        <nav className="px-3 space-y-1 text-sm">

          {/* My Products */}
          <div>
            <button
              onClick={() => setOpenProducts(!openProducts)}
              className="w-full flex items-center justify-between px-2 py-2 hover:bg-green-50 rounded-lg"
            >
              <span className="flex items-center gap-2">
                <Box size={18} />
                <span>My Products</span>
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openProducts ? "rotate-180" : ""
                }`}
              />
            </button>

            {openProducts && (
              <div className="ml-7 mt-1 space-y-1">
                <NavLink
                  to="/role/vendor/products"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <List size={16} />
                  <span>All Listings</span>
                </NavLink>

                <NavLink
                  to="/role/vendor/products/add"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <Plus size={16} />
                  <span>Add Product</span>
                </NavLink>
              </div>
            )}
          </div>

          {/* Orders */}
          <div>
            <button
              onClick={() => setOpenOrders(!openOrders)}
              className="w-full flex items-center justify-between px-2 py-2 hover:bg-green-50 rounded-lg mt-1"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart size={18} />
                <span>Orders</span>
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openOrders ? "rotate-180" : ""
                }`}
              />
            </button>

            {openOrders && (
              <div className="ml-7 mt-1 space-y-1">
                <NavLink
                  to="/role/vendor/orders/new"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <ClipboardList size={16} />
                  <span>New Orders</span>
                </NavLink>

                <NavLink
                  to="/role/vendor/orders/accepted"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <Box size={16} />
                  <span>Accepted</span>
                </NavLink>

                <NavLink
                  to="/role/vendor/orders/completed"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <CheckCircle2 size={16} />
                  <span>Completed</span>
                </NavLink>

                <NavLink
                  to="/role/vendor/orders/cancelled"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : normalClass}`
                  }
                >
                  <XCircle size={16} />
                  <span>Cancelled</span>
                </NavLink>
              </div>
            )}
          </div>

          {/* Single Items */}
          <NavLink
            to="/role/vendor/earnings"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <DollarSign size={16} />
            <span>Earnings</span>
          </NavLink>

          <NavLink
            to="/role/vendor/reviews"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <Star size={16} />
            <span>Reviews</span>
          </NavLink>

          <NavLink
            to="/role/vendor/messages"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <MessageSquare size={16} />
            <span>Messages</span>
          </NavLink>

          <NavLink
            to="/role/vendor/inventory"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <Boxes size={16} />
            <span>Inventory</span>
          </NavLink>

          <NavLink
            to="/role/vendor/verification"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <ShieldCheck size={16} />
            <span>Verification</span>
          </NavLink>

          <NavLink
            to="/role/vendor/settings"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : normalClass}`
            }
          >
            <Settings size={16} />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* ------------------- LOGOUT AT BOTTOM ------------------- */}
      <div className="px-3 pb-4">
        <NavLink
  to="/role/vendor/logout"
  className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg w-full"
>
  <LogOut size={18} />
  <span>Logout</span>
</NavLink>

      </div>

    </aside>
  );
}
