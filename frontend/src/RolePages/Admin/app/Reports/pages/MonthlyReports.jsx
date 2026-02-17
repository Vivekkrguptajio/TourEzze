import MainLayout from "../../../global/Layout";
import MonthlyReportChart from "../components/MonthlyReportChart";

export default function MonthlyReports() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Monthly Reports</h1>
      <p className="text-gray-600 mb-6">Month-wise tourism performance</p>

      <MonthlyReportChart />
    </MainLayout>
  );
}
