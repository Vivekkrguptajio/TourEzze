import { Link } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Calendar,
  ClipboardList,
  IndianRupee,
  Star,
  MessageSquare,
  HelpCircle,
  Settings,
  Clock,
  FileClock,
  CheckCircle,
  XCircle,
  BedDouble,
  Car,
  Plus
} from "lucide-react";

export default function ProviderSidebar() {
  const [openListings, setOpenListings] = useState(true);
  const [openBookings, setOpenBookings] = useState(true);

  return (
    <aside className="w-64 bg-black text-white h-screen pt-20 fixed left-0 top-0 border-r border-green-900">

      <ul className="px-4 space-y-1">

        {/* Dashboard */}
        <Link to="/role/hotel-owner/dashboard">
          <li className="flex items-center gap-3 px-3 py-3 rounded-lg bg-green-700 cursor-pointer">
            <LayoutDashboard className="w-5 h-5 text-white" />
            <span className="font-medium">Dashboard</span>
          </li>
        </Link>

        {/* LISTINGS Heading */}
        <p className="text-green-500 text-xs font-semibold mt-4 mb-2 tracking-wide">
          LISTINGS
        </p>

        {/* Listings MAIN */}
        <li
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer transition"
          onClick={() => setOpenListings(!openListings)}
        >
          <Building2 className="w-5 h-5 text-white" />
          <span className="font-medium flex-1">Listings</span>
          <span>{openListings ? "▾" : "▸"}</span>
        </li>

        {/* Submenu */}
        {openListings && (
          <ul className="ml-6 border-l border-green-800 pl-3 mt-1 space-y-2 text-sm">

            <Link to="/role/hotel-owner/listings/rooms">
              <li className="hover:text-green-300 cursor-pointer flex items-center gap-2">
                <BedDouble className="w-4 h-4" />
                My Rooms
              </li>
            </Link>

            <Link to="/role/hotel-owner/listings/vehicles">
              <li className="hover:text-green-300 cursor-pointer flex items-center gap-2">
                <Car className="w-4 h-4" />
                My Vehicles
              </li>
            </Link>

            <Link to="/role/hotel-owner/listings/add">
              <li className="hover:text-green-300 cursor-pointer flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Listing
              </li>
            </Link>

          </ul>
        )}

        {/* Availability */}
        <Link to="/role/hotel-owner/availability">
          <li className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer">
            <Calendar className="w-5 h-5 text-white" />
            <span className="font-medium">Availability Calendar</span>
          </li>
        </Link>

        {/* BOOKINGS */}
        <li
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer transition"
          onClick={() => setOpenBookings(!openBookings)}
        >
          <ClipboardList className="w-5 h-5 text-white" />
          <span className="font-medium flex-1">Bookings</span>
          <span>{openBookings ? "▾" : "▸"}</span>
        </li>

        {openBookings && (
          <ul className="ml-6 border-l border-green-800 pl-3 mt-1 space-y-2 text-sm">

            <Link to="/role/hotel-owner/bookings/upcoming">
              <li className="hover:text-green-300 cursor-pointer flex items-center gap-2">
                <Clock className="w-4 h-4" /> Upcoming Bookings
              </li>
            </Link>

            <Link to="/role/hotel-owner/bookings/new">
              <li className="hover:text-green-300 cursor-pointer flex items-center gap-2">
                <FileClock className="w-4 h-4" /> New Requests
              </li>
            </Link>

            <Link to="/role/hotel-owner/bookings/completed">
              <li className="hover:text-green-300 cursor-pointer flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Completed
              </li>
            </Link>

            <Link to="/role/hotel-owner/bookings/cancelled">
              <li className="hover:text-green-300 cursor-pointer flex items-center gap-2">
                <XCircle className="w-4 h-4" /> Cancellations
              </li>
            </Link>

          </ul>
        )}

        {/* Earnings */}
        <Link to="/role/hotel-owner/earnings">
          <li className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer">
            <IndianRupee className="w-5 h-5 text-white" />
            <span className="font-medium">Earnings</span>
          </li>
        </Link>

        {/* Reviews */}
        <Link to="/role/hotel-owner/reviews">
          <li className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer">
            <Star className="w-5 h-5 text-white" />
            <span className="font-medium">Reviews</span>
          </li>
        </Link>

        {/* Messages */}
        <Link to="/role/hotel-owner/messages">
          <li className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="font-medium">Messages</span>
          </li>
        </Link>

        {/* Support */}
        <Link to="/role/hotel-owner/support">
          <li className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer">
            <HelpCircle className="w-5 h-5 text-white" />
            <span className="font-medium">Support</span>
          </li>
        </Link>

        {/* Settings */}
        <Link to="/role/hotel-owner/settings">
          <li className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-900 cursor-pointer">
            <Settings className="w-5 h-5 text-white" />
            <span className="font-medium">Settings</span>
          </li>
        </Link>

      </ul>
    </aside>
  );
}
