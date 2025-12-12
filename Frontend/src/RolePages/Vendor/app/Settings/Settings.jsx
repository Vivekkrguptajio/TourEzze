import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Bell,
  EyeOff,
  Sun,
  Moon,
  Trash2,
  Save,
} from "lucide-react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-full p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account, privacy, and preferences.</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <User size={20} className="text-green-600" />
          Profile Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="+91 98765 43210"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Your address"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Security Settings */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Lock size={20} className="text-green-600" />
          Security Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium">Current Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Confirm New Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
          <Save size={18} />
          Update Password
        </button>
      </div>

      {/* Notification Settings */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Bell size={20} className="text-green-600" />
          Notification Settings
        </h2>

        <div className="space-y-3">
          {[
            "Order Updates",
            "New Messages",
            "Low Stock Alerts",
            "Payout Status",
            "System Notifications",
          ].map((item, i) => (
            <label
              key={i}
              className="flex items-center justify-between py-2 border-b last:border-0"
            >
              <span>{item}</span>
              <input type="checkbox" className="h-4 w-4 accent-green-600" />
            </label>
          ))}
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
          {darkMode ? (
            <Moon size={20} className="text-green-600" />
          ) : (
            <Sun size={20} className="text-green-600" />
          )}
          Appearance
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-gray-700">Theme Mode</p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-red-600 mb-4">
          <Trash2 size={20} />
          Danger Zone
        </h2>

        <p className="text-gray-600 mb-4">
          Deleting your account is permanent and cannot be undone.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
          <Trash2 size={18} />
          Delete Account
        </button>
      </div>
    </div>
  );
}
