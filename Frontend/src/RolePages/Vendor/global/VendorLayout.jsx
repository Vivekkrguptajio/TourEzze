import React from "react";
import VendorTopbar from "./VendorTopbar";
import VendorSidebar from "./VendorSidebar";


export default function VendorLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-800">

      {/* TOP NAVBAR */}
      <VendorTopbar />

      {/* PAGE STRUCTURE */}
      <div className="flex pt-0">

        {/* SIDEBAR — FIXED + SCROLLABLE */}
        <div className="fixed left-0 top-16 w-64 h-[calc(100vh-64px)] overflow-y-auto bg-white border-r shadow-sm">
          <VendorSidebar/>
        </div>

        {/* MAIN CONTENT */}
        <main className="ml-64 p-6 w-full min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
