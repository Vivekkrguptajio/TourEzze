import React from "react";
import VendorSidebar from "./VendorSidebar";
import VendorTopbar from "./VendorTopbar";
import { Outlet } from "react-router-dom";

export default function VendorLayout() {
  return (
    <div className="h-screen w-full flex bg-gray-50">

   

      {/* RIGHT SIDE: TOPBAR + CONTENT */}
      <div className="flex-1 ml-64 flex flex-col">

        {/* TOPBAR FIXED */}
        <div className="fixed top-0 left-0 right-0 z-30 bg-white border-b">
          <VendorTopbar />
        </div>

        {/* MAIN CONTENT */}
        <main className="mt-[72px] p-6 overflow-y-auto h-full">
          <Outlet />
        </main>
      </div>
         {/* LEFT SIDEBAR FIXED */}
      <div className="w-64 fixed left-0 top-0 pt-15 h-full border-r bg-white z-20">
        <VendorSidebar />
      </div>
      
    </div>
  );
}
