import React from "react";
import DashboardHeader from "../app/dashboard/DashboardHeader";
import StatsCards from "../app/dashboard/StatsCards";
import ChartsSection from "../app/dashboard/ChartsSection";
import QuickActions from "../app/dashboard/QuickActions";

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
