import React from "react";
import { User, Bell, Globe, Lock, Trash2 } from "lucide-react";

export default function Setting() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-green-900">Account Settings</h1>
        <p className="text-sm text-gray-600">
          Yaha se aap apni profile, notifications aur security settings manage kar sakte hain.
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white border rounded-xl shadow-sm p-5 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <User size={18} className="text-green-700" />
          <h3 className="font-semibold text-green-900">Profile Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="text-xs text-gray-500">Full Name</label>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-1 focus:ring-green-500"
              defaultValue="Vivek Kumar (Guide)"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500">Email</label>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-1 focus:ring-green-500"
              defaultValue="guide@example.com"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500">Phone Number</label>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-1 focus:ring-green-500"
              defaultValue="+91-98765-43210"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500">Base Location</label>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-1 focus:ring-green-500"
              defaultValue="Ranchi, Jharkhand"
            />
          </div>
        </div>

        <button className="mt-2 bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      </div>

      {/* Notification Settings */}
      <div className="bg-white border rounded-xl shadow-sm p-5 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <Bell size={18} className="text-green-700" />
          <h3 className="font-semibold text-green-900">Notification Preferences</h3>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New booking alerts</p>
              <p className="text-xs text-gray-500">
                Jab bhi koi tourist aapke tour ka booking kare.
              </p>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Payment & settlement updates</p>
              <p className="text-xs text-gray-500">
                Payment credit, settlement aur payout ke notifications.
              </p>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Promotional tips & offers</p>
              <p className="text-xs text-gray-500">
                Growth tips, new features aur special campaigns.
              </p>
            </div>
            <input type="checkbox" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Language & Region */}
      <div className="bg-white border rounded-xl shadow-sm p-5 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <Globe size={18} className="text-green-700" />
          <h3 className="font-semibold text-green-900">Language & Region</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="text-xs text-gray-500">Preferred Language</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-1 focus:ring-green-500">
              <option>Hindi</option>
              <option>English</option>
              <option>Hindi + English (Mixed)</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500">Time Zone</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-1 focus:ring-green-500">
              <option>IST (UTC +5:30)</option>
              <option>UTC</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security & Danger Zone */}
      <div className="bg-white border rounded-xl shadow-sm p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Lock size={18} className="text-green-700" />
          <h3 className="font-semibold text-green-900">Security</h3>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <div>
            <p className="font-medium">Change Password</p>
            <p className="text-xs text-gray-500">
              Time-time par password change karna safe rehta hai.
            </p>
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-lg">
            Update Password
          </button>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center gap-2 text-red-600 mb-1">
            <Trash2 size={16} />
            <p className="font-semibold text-sm">Danger Zone</p>
          </div>
          <p className="text-xs text-gray-500 mb-2">
            Account delete karne par aapka saara data permanently remove ho sakta hai.
          </p>
          <button className="text-xs border border-red-500 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-50">
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
}
