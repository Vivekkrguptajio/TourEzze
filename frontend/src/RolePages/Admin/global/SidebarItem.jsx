import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({ to, icon: Icon, label, red, collapsed }) {
  const location = useLocation();

  // Prevent double-slash → /role/government/destinations
  const cleanTo = to.startsWith("/") ? to.slice(1) : to;
  const finalPath = `/role/government/${cleanTo}`;

  const active = location.pathname === finalPath;

  return (
    <Link
      to={finalPath}
      className={`
        group relative flex items-center gap-3 px-3 py-2.5 rounded-lg
        transition-all duration-200 ease-in-out select-none
        ${collapsed ? "justify-center px-2" : ""}
        ${
          active
            ? "bg-white/15 text-white shadow-inner border border-white/10"
            : "text-white/80 hover:bg-white/10 hover:text-white"
        }
        ${red && "!text-red-300 hover:!text-red-200 hover:!bg-red-500/10"}
      `}
    >
      <Icon
        size={20}
        strokeWidth={active ? 2 : 1.5}
        className={`transition-all duration-200 ${
          active ? "scale-110 text-white" : "group-hover:scale-105"
        }`}
      />

      {!collapsed && (
        <span className={`text-[15px] tracking-wide ${active ? "font-medium text-white" : ""}`}>
          {label}
        </span>
      )}

      {active && !collapsed && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r"></div>
      )}

      {collapsed && (
        <span
          className="
            absolute left-full ml-3 px-3 py-1.5 rounded-md text-sm
            bg-black/80 text-white whitespace-nowrap
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all shadow-lg z-50
          "
        >
          {label}
        </span>
      )}
    </Link>
  );
}
