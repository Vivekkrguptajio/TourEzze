import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebarSections } from "./sidebarItems";
import "./Sidebar.css";
export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside
      className={`
    fixed top-0 left-0 h-screen bg-[#0B5120] text-white 
    transition-all duration-300 flex flex-col
    border-r border-white/10
    ${collapsed ? "w-20" : "w-64"}
  `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="
      py-4 bg-[#0A4A1D] hover:bg-[#0D5E25]
      flex justify-center items-center text-2xl
      border-b border-white/10
    "
      >
        ☰
      </button>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto px-3 pt-4 pb-6 custom-scrollbar">
        {sidebarSections.map((sec, i) => (
          <div key={i} className="mb-6">
            {/* Section Title */}
            {!collapsed && sec.title && (
              <p className="text-white/50 text-[11px] font-semibold uppercase mb-2 px-1 tracking-wider">
                {sec.title}
              </p>
            )}

            {/* Items */}
            <div className="flex flex-col gap-1">
              {sec.items.map((item) => (
                <SidebarItem key={item.label} collapsed={collapsed} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
