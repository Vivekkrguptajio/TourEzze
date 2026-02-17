// src/pages/Dashboard.jsx



import { StatsCard } from "../components/dashboard/stats-card";
import { BookingChart } from "../components/dashboard/booking-chart";
import { RevenueChart } from "../components/dashboard/revenue-chart";
import { VerificationCard } from "../components/dashboard/verification-card";
import { QuickActions } from "../components/dashboard/quick-actions";
import { RecentBookings } from "../components/dashboard/recent-bookings";

import {
  CalendarClock,
  Car,
  IndianRupee,
  Percent,
  ClipboardList,
} from "lucide-react";


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050805] text-white">

    

      <main className=" pb-10 space-y-6">

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <StatsCard
            label="Total Bookings"
            value="156"
            change="+12% from last month"
            helper="Today: 8 | This Month: 48"
            icon={<ClipboardList />}
          />

          <StatsCard
            label="Occupancy Rate"
            value="78%"
            change="+5% from last week"
            icon={<Percent />}
          />

          <StatsCard
            label="Vehicle Usage"
            value="85%"
            change="+8% from last week"
            icon={<Car />}
          />

          <StatsCard
            label="Monthly Revenue"
            value="₹2.45L"
            change="+18% from last month"
            icon={<IndianRupee />}
          />

          <StatsCard
            label="Pending Requests"
            value="12"
            change="Requires attention"
            icon={<CalendarClock />}
          />
        </div>

        {/* Chart + Right Box */}
        <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
          <BookingChart />
          <VerificationCard />
        </div>

        <QuickActions />
        <RevenueChart />
        <RecentBookings />
      </main>
    </div>
  );
}
