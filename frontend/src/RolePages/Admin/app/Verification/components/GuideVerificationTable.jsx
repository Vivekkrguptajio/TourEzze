import { FileText, CheckCircle, XCircle, User } from "lucide-react";

export default function GuideVerificationTable() {
  const guides = [
    { name: "Ravi Kumar", location: "Ranchi", docs: 4 },
    { name: "Pooja Sharma", location: "Deoghar", docs: 3 },
    { name: "Amit Raj", location: "Hazaribagh", docs: 2 },
  ];

  return (
    <div className="bg-white p-6 border rounded-xl shadow-sm">

      <h2 className="text-lg font-semibold mb-4">Pending Guide Verification</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Guide</th>
            <th className="py-2">Location</th>
            <th className="py-2">Documents</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {guides.map((g, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">

              <td className="py-3 flex items-center gap-2">
                <User size={16} className="text-green-700" />
                {g.name}
              </td>

              <td className="py-3">{g.location}</td>

              <td className="py-3 flex items-center gap-1">
                <FileText size={16} className="text-blue-600" />
                {g.docs} files
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
