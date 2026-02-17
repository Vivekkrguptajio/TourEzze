import MainLayout from "../../../global/Layout";
import VerificationStats from "../components/VerificationStats";


export default function VerificationCenter() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Verification Center</h1>
      <p className="text-gray-600 mb-6">
        Centralized verification for guides, vendors, and hotels
      </p>

      <VerificationStats />
    </MainLayout>
  );
}
