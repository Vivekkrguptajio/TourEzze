import { Users, Store, Building } from "lucide-react";

export default function VerificationStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <Card title="Pending Guide Verification" value="18" icon={<Users size={28} />} color="text-yellow-600" />
      <Card title="Pending Vendor Verification" value="27" icon={<Store size={28} />} color="text-green-600" />
      <Card title="Pending Hotel Verification" value="9" icon={<Building size={28} />} color="text-blue-600" />

    </div>
  );
}

function Card({ title, value, icon, color }) {
  return (
    <div className="bg-white border p-5 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-700">{title}</p>
          <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
        </div>
        <div className="text-gray-800">{icon}</div>
      </div>
    </div>
  );
}
