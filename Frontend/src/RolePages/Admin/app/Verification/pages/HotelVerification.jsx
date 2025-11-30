import MainLayout from "../../../global/Layout";
import HotelVerificationTable from "../components/HotelVerificationTable";


export default function HotelVerification() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Hotel Verification</h1>
      <p className="text-gray-600 mb-6">Pending hotel KYC & compliance review</p>

      <HotelVerificationTable />
    </MainLayout>
  );
}
