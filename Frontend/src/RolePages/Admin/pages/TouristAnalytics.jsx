import MainLayout from "../global/Layout";
import {
  Users,
  TrendingUp,
  Calendar,
  Globe2
} from "lucide-react";

import YearlyTrendChart from "../components/analytics/YearlyTrendChart";
import DomesticForeignPie from "../components/analytics/DomesticForeignPie";
import AgeGroupChart from "../components/analytics/AgeGroupChart";
import DistrictFootfallChart from "../components/analytics/DistrictFootfallChart";
import SeasonalTrendChart from "../components/analytics/SeasonalTrendChart";
import GenderRatioChart from "../components/analytics/GenderRatioChart";
import SpendingPatternChart from "../components/analytics/SpendingPatternChart";

export default function TouristAnalytics() {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold">Tourist Analytics</h1>
      <p className="text-gray-600 mb-6">In-depth analytics of tourism activities across Jharkhand</p>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 rounded-lg shadow border">
          <p className="text-gray-700">Total Tourists (2024)</p>
          <h2 className="text-3xl font-bold">3.2M</h2>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <TrendingUp size={16} /> 12.4% growth
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border">
          <p className="text-gray-700">Domestic Tourists</p>
          <h2 className="text-3xl font-bold">2.7M</h2>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <Users size={16} /> 8.2% ↑
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border">
          <p className="text-gray-700">Foreign Tourists</p>
          <h2 className="text-3xl font-bold">0.5M</h2>
          <p className="text-sm text-blue-600 flex items-center gap-1">
            <Globe2 size={16} /> 4.1% ↑
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border">
          <p className="text-gray-700">Average Stay Duration</p>
          <h2 className="text-3xl font-bold">3.4 Days</h2>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Calendar size={16} /> Stable
          </p>
        </div>

      </div>

      {/* YEARLY TREND + DOMESTIC/FOREIGN PIE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <YearlyTrendChart />
        </div>
        <DomesticForeignPie />
      </div>

      {/* AGE GROUP + DISTRICT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AgeGroupChart />
        <DistrictFootfallChart />
      </div>

      {/* SEASONAL + GENDER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <SeasonalTrendChart />
        <GenderRatioChart />
      </div>

      {/* SPENDING PATTERN */}
      <SpendingPatternChart />

    </MainLayout>
  );
}
