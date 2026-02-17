import React from "react";
import GuideNavbar from "./GuideNavbar";
import GuideSidebar from "./GuideSidebar";

export default function GuideLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-800">

      {/* TOP NAVBAR */}
      <GuideNavbar />

      {/* PAGE STRUCTURE */}
      <div className="flex pt-16">

        {/* SIDEBAR — FIXED + SCROLLABLE */}
        <div className="fixed left-0 top-16 w-64 h-[calc(100vh-64px)] overflow-y-auto bg-green-700">
          <GuideSidebar />
        </div>

        {/* PAGE CONTENT */}
        <main className="ml-64 p-6 w-full min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
