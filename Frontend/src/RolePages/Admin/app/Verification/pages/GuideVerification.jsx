import MainLayout from "../../../global/Layout";
import GuideVerificationTable from "../components/GuideVerificationTable";

export default function GuideVerification() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Guide Verification</h1>
      <p className="text-gray-600 mb-6">Pending guide documents and approvals</p>

      <GuideVerificationTable />
    </MainLayout>
  );
}
