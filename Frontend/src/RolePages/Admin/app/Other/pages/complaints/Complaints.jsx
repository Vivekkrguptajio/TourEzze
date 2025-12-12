import MainLayout from "../../../../global/Layout";
import ComplaintsTable from "../../components/complaints/ComplaintsTable.jsx";


export default function Complaints() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Complaints & Fraud</h1>
      <p className="text-gray-600 mb-6">
        Manage user complaints, fraud alerts & escalations
      </p>

      <ComplaintsTable />
    </MainLayout>
  );
}
