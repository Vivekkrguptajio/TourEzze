import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function ComplaintsTable() {
  const complaints = [
    {
      user: "Ravi Kumar",
      issue: "Fraudulent Guide Demand",
      date: "12 Jan 2025",
      status: "Pending"
    },
    {
      user: "Pooja Sharma",
      issue: "Overpricing by Vendor",
      date: "10 Jan 2025",
      status: "Investigating"
    },
    {
      user: "Amit Raj",
      issue: "Hotel denied booking",
      date: "5 Jan 2025",
      status: "Resolved"
    }
  ];

  const badge = {
    Pending: "bg-yellow-100 text-yellow-700",
    Investigating: "bg-blue-100 text-blue-700",
    Resolved: "bg-green-100 text-green-700"
  };

  return (
    <div className="bg-white p-6 border rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Complaints List</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">User</th>
            <th className="py-2">Issue</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((c, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">

              <td className="py-3">{c.user}</td>
              <td className="py-3">{c.issue}</td>
              <td className="py-3">{c.date}</td>

              <td className="py-3">
                <span className={`px-3 py-1 rounded-full text-sm ${badge[c.status]}`}>
                  {c.status}
                </span>
              </td>

              <td className="py-3 flex gap-4">
                <button className="text-green-600 hover:text-green-800 flex items-center gap-1">
                  <CheckCircle size={18} /> Resolve
                </button>

                <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
                  <XCircle size={18} /> Close
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
