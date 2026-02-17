import MainLayout from "../../../global/Layout";
import ApproveEventTable from "../components/ApproveEventTable";

export default function ApproveEvents() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Approve Events</h1>
      <p className="text-gray-600 mb-6">Review and approve pending events</p>

      <ApproveEventTable />
    </MainLayout>
  );
}
