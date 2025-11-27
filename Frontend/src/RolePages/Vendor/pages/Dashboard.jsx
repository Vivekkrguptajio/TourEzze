import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import ChartsSection from "../components/dashboard/ChartsSection";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <StatsCards />
      <ChartsSection />
      <QuickActions />
    </div>
  );
}
