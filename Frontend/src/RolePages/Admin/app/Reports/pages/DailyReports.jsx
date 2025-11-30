import MainLayout from "../../../global/Layout";
import DailyReportTable from "../components/DailyReportTable";

export default function DailyReports() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Daily Reports</h1>
      <p className="text-gray-600 mb-6">Day-by-day tourism statistics</p>

      <DailyReportTable />
    </MainLayout>
  );
}
