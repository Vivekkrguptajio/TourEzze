import React from "react";


import { Calendar, MapPin, DollarSign, Star } from "lucide-react";
import VerificationCard from "../Components/dashboard/VerificationCard";
import MonthlyBookingsChart from "../Components/dashboard/MonthlyBookingsChart";
import EarningsTrendChart from "../Components/dashboard/EarningsTrendChart";
import QuickActions from "../Components/dashboard/QuickActions";
import UpcomingTourItem from "../Components/dashboard/UpcomingTourItem";
import StatsCard from "../Components/dashboard/StatsCard";

export default function Dashboard() {
  return (
    <div>

      <h1 className="text-2xl font-bold">Welcome back, Ramesh Kumar!</h1>
      <p className="text-gray-500 mb-5">
        Here's what's happening with your tours today
      </p>

      {/* TOP STATS */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard
          icon={<Calendar />}
          label="Total Bookings"
          value="142"
          sub="↑ 12% from last month"
        />
        <StatsCard
          icon={<MapPin />}
          label="Upcoming Tours"
          value="8"
          sub=""
        />
        <StatsCard
          icon={<DollarSign />}
          label="Monthly Earnings"
          value="₹61,000"
          sub="↑ 18% from last month"
        />
        <StatsCard
          icon={<Star />}
          label="Average Rating"
          value="4.8"
          sub="↑ 0.2 Increase"
        />
      </div>

      {/* VERIFIED */}
      <div className="mt-5">
        <VerificationCard />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <MonthlyBookingsChart />
        <EarningsTrendChart />
      </div>

      {/* Upcoming Tours */}
      <h3 className="mt-8 font-semibold">Upcoming Tours</h3>
      <div className="space-y-3 mt-3">
        <UpcomingTourItem
          name="Tagore Hill Trek"
          date="June 15, 2024 at 6:00 AM"
          tourists={4}
          status="confirmed"
        />
        <UpcomingTourItem
          name="Hundru Falls Tour"
          date="June 16, 2024 at 9:00 AM"
          tourists={6}
          status="confirmed"
        />
        <UpcomingTourItem
          name="Ranchi Heritage Walk"
          date="June 18, 2024 at 4:00 PM"
          tourists={8}
          status="pending"
        />
      </div>

      <QuickActions />
    </div>
  );
}
