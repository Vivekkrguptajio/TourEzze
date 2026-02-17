// src/layouts/ProviderLayout.jsx

import Sidebar from "../../../Hotel/app/global/ProviderSidebar";
import TopNavbar from "../../../Hotel/app/global/ProviderNavbar";


export default function ProviderLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#020403] text-white">
      <TopNavbar/>

      <Sidebar/>
      <main className="ml-60 px-4 md:px-8 pt-24 pb-8 space-y-6">
        {children}
      </main>
    </div>
  );
}
