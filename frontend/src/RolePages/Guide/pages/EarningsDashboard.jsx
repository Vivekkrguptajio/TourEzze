import React from "react";
import EarningsSummaryCard from "../app/others/Earning/EarningsSummaryCard";
import MonthlyEarningsChart from "../app/others/Earning/MonthlyEarningsChart";
import TourTypePieChart from "../app/others/Earning/TourTypePieChart";
import CommissionStructure from "../app/others/Earning/CommissionStructure";
import SettlementHistory from "../app/others/Earning/SettlementHistory";
import DownloadReportButton from "../app/others/Earning/DownloadReportButton";


export default function EarningsDashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* Top Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <EarningsSummaryCard
          title="Total Earnings" 
          amount="₹2,52,000" 
          subtitle="↑ 18% from last month" 
        />
        <EarningsSummaryCard 
          title="This Month" 
          amount="₹61,000" 
          subtitle="From 35 tours" 
        />
        <EarningsSummaryCard 
          title="Pending Settlement" 
          amount="₹15,000" 
          subtitle="8 completed tours" 
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <MonthlyEarningsChart />
        </div>
        <TourTypePieChart />
      </div>

      {/* Commission */}
      <CommissionStructure />

      {/* Settlement History */}
      <SettlementHistory />
      <DownloadReportButton/>
    </div>
  );
}
