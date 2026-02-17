import MainLayout from "../../../global/Layout";
import ReportsOverviewChart from "../components/ReportsOverviewChart";

export default function Reports() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Reports</h1>
      <p className="text-gray-600 mb-6">Overview of tourism reports & analytics</p>

      <ReportsOverviewChart />
    </MainLayout>
  );
}
