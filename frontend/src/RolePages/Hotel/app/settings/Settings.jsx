import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Bell,
  Globe,
  Save,
  Building2,
  Car,
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-[#020403] text-white px-6 pb-20">

      {/* HEADER */}
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-gray-400 text-sm">
        Manage your account, business details & preferences
      </p>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-4 gap-6 mt-8">

        {/* LEFT MENU */}
        <div className="border border-green-900 bg-black/20 rounded-xl p-4 space-y-2 h-fit">

          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left ${
              activeTab === "profile"
                ? "bg-green-700 border border-green-400"
                : "bg-[#0a150f] border border-green-900"
            }`}
          >
            <User size={18} /> Profile
          </button>

          <button
            onClick={() => setActiveTab("business")}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left ${
              activeTab === "business"
                ? "bg-green-700 border border-green-400"
                : "bg-[#0a150f] border border-green-900"
            }`}
          >
            <Building2 size={18} /> Business Details
          </button>

          <button
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left ${
              activeTab === "notifications"
                ? "bg-green-700 border border-green-400"
                : "bg-[#0a150f] border border-green-900"
            }`}
          >
            <Bell size={18} /> Notifications
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left ${
              activeTab === "security"
                ? "bg-green-700 border border-green-400"
                : "bg-[#0a150f] border border-green-900"
            }`}
          >
            <Lock size={18} /> Security
          </button>

          <button
            onClick={() => setActiveTab("preferences")}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left ${
              activeTab === "preferences"
                ? "bg-green-700 border border-green-400"
                : "bg-[#0a150f] border border-green-900"
            }`}
          >
            <Globe size={18} /> Preferences
          </button>

        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3 border border-green-900 bg-black/20 rounded-xl p-6">

          {/* ================= PROFILE ================= */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

              <div>
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Phone Number</label>
                <input
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <button className="mt-4 bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500 flex items-center gap-2">
                <Save size={16} /> Save Changes
              </button>
            </div>
          )}

          {/* ================= BUSINESS DETAILS ================= */}
          {activeTab === "business" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Business Details</h2>

              <div>
                <label className="text-sm text-gray-400">Hotel / Business Name</label>
                <input
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                  placeholder="Hotel Paradise"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Business Address</label>
                <textarea
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg h-20"
                  placeholder="Enter full business address"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 flex items-center gap-2">
                    <BedDouble size={16} /> Total Rooms
                  </label>
                  <input
                    className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                    placeholder="10"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 flex items-center gap-2">
                    <Car size={16} /> Vehicles in Fleet
                  </label>
                  <input
                    className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                    placeholder="5"
                  />
                </div>
              </div>

              <button className="mt-4 bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500 flex items-center gap-2">
                <Save size={16} /> Save Business Details
              </button>
            </div>
          )}

          {/* ================= NOTIFICATIONS ================= */}
          {activeTab === "notifications" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>

              <div className="space-y-4 text-sm">

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  Notify me for new bookings
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  Notify me when payment is pending
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  Notify me for cancellations
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  Weekly payout updates
                </label>
              </div>

              <button className="mt-6 bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500">
                Save Notification Settings
              </button>
            </div>
          )}

          {/* ================= SECURITY ================= */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Account Security</h2>

              <div>
                <label className="text-sm text-gray-400">Current Password</label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                  placeholder="********"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">New Password</label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                  placeholder="********"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 bg-[#0a150f] border border-green-900 rounded-lg"
                  placeholder="********"
                />
              </div>

              <button className="mt-4 bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500 flex items-center gap-2">
                <Save size={16} /> Update Password
              </button>
            </div>
          )}

          {/* ================= PREFERENCES ================= */}
          {activeTab === "preferences" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Preferences</h2>

              <label className="text-sm text-gray-400">Language</label>
              <select className="w-full p-3 bg-[#0a150f] border border-green-900 rounded-lg">
                <option>English</option>
                <option>Hindi</option>
                <option>Odia</option>
                <option>Bangla</option>
              </select>

              <label className="text-sm text-gray-400">Theme</label>
              <select className="w-full p-3 bg-[#0a150f] border border-green-900 rounded-lg">
                <option>Dark Mode</option>
                <option>Light Mode</option>
              </select>

              <button className="mt-4 bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500">
                Save Preferences
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
