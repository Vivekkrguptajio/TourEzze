import { Building, FileText, CheckCircle, XCircle } from "lucide-react";

export default function HotelVerificationTable() {
  const hotels = [
    { name: "Netarhat Heritage Resort", location: "Netarhat", docs: 6 },
    { name: "Ranchi Grand Hotel", location: "Ranchi", docs: 4 },
    { name: "Deoghar Temple Stay", location: "Deoghar", docs: 3 },
  ];

  return (
    <div className="bg-white p-6 border rounded-xl shadow-sm">

      <h2 className="text-lg font-semibold mb-4">Pending Hotel Verification</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Hotel</th>
            <th className="py-2">Location</th>
            <th className="py-2">Documents</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {hotels.map((h, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">

              <td className="py-3 flex items-center gap-2">
                <Building size={16} className="text-green-700" />
                {h.name}
              </td>

              <td className="py-3">{h.location}</td>

              <td className="py-3 flex items-center gap-1">
                <FileText size={16} className="text-blue-600" />
                {h.docs} files
              </td>

              <td className="py-3 flex gap-4">
                <button className="text-green-600 hover:text-green-800 flex items-center gap-1">
                  <CheckCircle size={18} /> Approve
                </button>
                <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
                  <XCircle size={18} /> Reject
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
