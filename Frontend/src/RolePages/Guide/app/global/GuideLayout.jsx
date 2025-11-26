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
        {/* Sidebar */}
        <GuideSidebar />

        {/* Page content */}
        <main className="ml-64 p-6 w-full min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
