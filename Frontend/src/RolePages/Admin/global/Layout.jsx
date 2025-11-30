import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR - FIXED BUT WITH SIDEBAR OFFSET */}
        <div className="fixed top-0 left-64 right-0 z-50 bg-white shadow">
          <Topbar />
        </div>

        {/* MAIN CONTENT - TOPBAR SPACE ADJUSTED */}
        <main className="pt-10 px-6 pb-6 ml-28">
          {children}
        </main>

      </div>
    </div>
  );
}
