import React from "react";
import "../style/Sidebar-scroll.css";

import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  TrendingUp,
  Hotel,
  Store,
  Users,
  Globe,
  CalendarCheck,
  ClipboardList,
  FileText,
  CheckCircle,
  AlertTriangle,
  Map,
  Settings,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="w-64 fixed left-0 top-0 bottom-0 bg-green-900 text-white p-4 
      overflow-y-auto scroll-smooth custom-scrollbar shadow-xl"
    >
      {/* MAIN */}
      <p className="text-gray-300 text-xs uppercase px-2 mb-2">Main</p>
      <SidebarItem to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" />
      <SidebarItem to="tourist-analytics" icon={<TrendingUp size={18} />} label="Tourist Analytics" />

      {/* MANAGEMENT */}
      <p className="text-gray-300 text-xs uppercase px-2 mt-5 mb-2">Management</p>
      <SidebarItem to="hotels" icon={<Hotel size={18} />} label="Hotels & Homestays" />
      <SidebarItem to="vendors" icon={<Store size={18} />} label="Vendors & Marketplace" />
      <SidebarItem to="guides" icon={<Users size={18} />} label="Tour Guides" />
      <SidebarItem to="transport" icon={<Globe size={18} />} label="Transport Providers" />

      {/* EVENTS */}
      <p className="text-gray-300 text-xs uppercase px-2 mt-5 mb-2">Events</p>
      <SidebarItem to="events" icon={<ClipboardList size={18} />} label="Event Management" />
      <SidebarItem to="approve-events" icon={<CalendarCheck size={18} />} label="Approve Events" />
      <SidebarItem to="create-events" icon={<FileText size={18} />} label="Create Events" />

      {/* REPORTS */}
      <p className="text-gray-300 text-xs uppercase px-2 mt-5 mb-2">Reports</p>
      <SidebarItem to="reports" icon={<FileText size={18} />} label="Reports" />
      <SidebarItem to="daily-reports" icon={<FileText size={18} />} label="Daily Reports" />
      <SidebarItem to="monthly-reports" icon={<FileText size={18} />} label="Monthly Reports" />

      {/* VERIFICATION */}
      <p className="text-gray-300 text-xs uppercase px-2 mt-5 mb-2">Verification</p>
      <SidebarItem to="verification" icon={<CheckCircle size={18} />} label="Verification Center" />
      <SidebarItem to="guide-verification" icon={<CheckCircle size={18} />} label="Guide Verification" />
      <SidebarItem to="vendor-verification" icon={<CheckCircle size={18} />} label="Vendor Verification" />
      <SidebarItem to="hotel-verification" icon={<CheckCircle size={18} />} label="Hotel Verification" />

      {/* OTHER */}
      <p className="text-gray-300 text-xs uppercase px-2 mt-5 mb-2">Other</p>
      <SidebarItem to="complaints" icon={<AlertTriangle size={18} />} label="Complaints & Fraud" />
      <SidebarItem to="maps" icon={<Map size={18} />} label="Heatmaps & Maps" />
      <SidebarItem to="settings" icon={<Settings size={18} />} label="Settings" />

      {/* LOGOUT */}
     {/* LOGOUT */}
<div className="mt-5">
  <SidebarItem 
    to="logout" 
    icon={<LogOut size={18} />} 
    label="Logout" 
    red 
  />
</div>

    </aside>
  );
}

/* ---------------------------------------------------------
   SidebarItem → Auto-prefix: /role/government/
---------------------------------------------------------- */
function SidebarItem({ to, icon, label, red, noPrefix }) {
  const location = useLocation();

  // ---> add prefix automatically unless noPrefix === true
  const fullPath = noPrefix ? to : `/role/government/${to}`;

  const active = location.pathname === fullPath;

  return (
    <Link
      to={fullPath}
      className={`
        flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer mb-1 transition
        ${active ? "bg-green-700 text-white" : red ? "text-red-400" : "text-gray-200 hover:bg-green-800"}
      `}
    >
      {icon}
      <span className={`${red ? "text-red-400" : ""}`}>{label}</span>
    </Link>
  );
}
