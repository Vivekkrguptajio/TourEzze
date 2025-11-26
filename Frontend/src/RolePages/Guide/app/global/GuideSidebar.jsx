import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  User,
  Map,
  PlusCircle,
  ClipboardList,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  IndianRupee,
  Star,
  MessageSquare,
  ShieldCheck,
  HelpCircle,
  Settings,
  ChevronDown
} from "lucide-react";

export default function GuideSidebar() {
  const [openTours, setOpenTours] = useState(true);
  const [openBookings, setOpenBookings] = useState(true);

  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen pt-6 px-4 fixed left-0 top-0">

      {/* HEADER */}
      <h1 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <span>🧭</span> Guide Portal
      </h1>

      {/* MAIN SECTION */}
      <p className="uppercase text-xs font-semibold text-green-200 mb-2">Main</p>

      <LinkItem icon={<LayoutDashboard size={18} />} label="Dashboard" to="/role/guide" />
      <LinkItem icon={<User size={18} />} label="My Profile" to="/role/guide/profile" />

      {/* TOURS SECTION */}
      <p className="uppercase text-xs font-semibold text-green-200 mt-5 mb-2">Tours</p>

      <Dropdown
        label="Tours"
        open={openTours}
        setOpen={setOpenTours}
        items={[
          { icon: <Map size={16} />, label: "My Tours", to: "/role/guide/tours" },
          { icon: <PlusCircle size={16} />, label: "Create New Tour", to: "/role/guide/tours/new" }
        ]}
      />

      {/* BOOKINGS SECTION */}
      <p className="uppercase text-xs font-semibold text-green-200 mt-5 mb-2">Bookings</p>

      <Dropdown
        label="Bookings"
        open={openBookings}
        setOpen={setOpenBookings}
        items={[
          { icon: <ClipboardList size={16} />, label: "New Requests", to: "/role/guide/bookings/requests" },
          { icon: <Clock size={16} />, label: "Upcoming", to: "/role/guide/bookings/upcoming" },
          { icon: <CheckCircle size={16} />, label: "Completed", to: "/role/guide/bookings/completed" },
          { icon: <XCircle size={16} />, label: "Cancelled", to: "/role/guide/bookings/cancelled" }
        ]}
      />

      {/* OTHER SECTION */}
      <p className="uppercase text-xs font-semibold text-green-200 mt-5 mb-2">Other</p>

      <LinkItem icon={<Calendar size={18} />} label="Calendar" to="/role/guide/calendar" />
      <LinkItem icon={<IndianRupee size={18} />} label="Earnings" to="/role/guide/earnings" />
      <LinkItem icon={<Star size={18} />} label="Reviews" to="/role/guide/reviews" />
      <LinkItem icon={<MessageSquare size={18} />} label="Messages" to="/role/guide/messages" />
      <LinkItem icon={<ShieldCheck size={18} />} label="Verification" to="/role/guide/verification" />
      <LinkItem icon={<HelpCircle size={18} />} label="Support" to="/role/guide/support" />
      <LinkItem icon={<Settings size={18} />} label="Settings" to="/role/guide/settings" />

    </aside>
  );
}

/* ===========================
   INDIVIDUAL LINK ITEM
=========================== */
function LinkItem({ icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-800 transition text-sm"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

/* ===========================
   DROPDOWN (LINK INSIDE)
=========================== */
function Dropdown({ label, open, setOpen, items }) {
  return (
    <div>
      {/* Main clickable header */}
      <div
        className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-green-800 transition text-sm"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          <Map size={18} />
          {label}
        </span>
        <ChevronDown size={16} className={`${open ? "rotate-180" : ""} transition`} />
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="ml-6 mt-2 flex flex-col gap-1">
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-800/60 text-sm"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
