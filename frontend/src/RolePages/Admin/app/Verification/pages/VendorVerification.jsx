import MainLayout from "../../../global/Layout";
import VendorVerificationTable from "../components/VendorVerificationTable";


export default function VendorVerification() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Vendor Verification</h1>
      <p className="text-gray-600 mb-6">Pending vendor listings for verification</p>

      <VendorVerificationTable />
    </MainLayout>
  );
}
