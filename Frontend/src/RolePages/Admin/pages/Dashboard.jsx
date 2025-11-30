import Layout from "../global/Layout";
import StatsCard from "../components/dashboard/StatsCard";

import TouristTrendChart from "../components/dashboard/TouristTrendChart";
import PopularDestinationsChart from "../components/dashboard/PopularDestinationsChart";
import DistrictTourismChart from "../components/dashboard/DistrictTourismChart";
import RevenueChart from "../components/dashboard/RevenueChart";

import { Users, Building, Store, BadgeCheck, Calendar, AlertTriangle, BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-600 mb-6">Overview of tourism activities across Jharkhand</p>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">

        <StatsCard title="Total Tourists" value="275,840"
          subtitle="↑ 12.5% vs last month" icon={<Users size={30} />} />

        <StatsCard title="Active Hotels" value="218"
          subtitle="↑ 8.2% vs last month" icon={<Building size={30} />} />

        <StatsCard title="Active Vendors" value="489"
          subtitle="↑ 15.4% vs last month" icon={<Store size={30} />} />

        <StatsCard title="Verified Guides" value="134"
          subtitle="↑ 6.8% vs last month" icon={<BadgeCheck size={30} />} />
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <TouristTrendChart />
        </div>
        <PopularDestinationsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DistrictTourismChart />
        <RevenueChart />
      </div>

    </Layout>
  );
}
