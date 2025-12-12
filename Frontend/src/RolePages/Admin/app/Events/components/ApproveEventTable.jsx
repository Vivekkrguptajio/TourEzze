import { CheckCircle, XCircle, FileText } from "lucide-react";

export default function ApproveEventTable() {
  const pending = [
    { name: "Hazaribagh Cultural Night", organizer: "City Tourism Board", submissions: 3 },
    { name: "Ranchi Food Carnival", organizer: "Food Court Assoc.", submissions: 5 },
    { name: "Deoghar Pilgrimage Walk", organizer: "Temple Trust", submissions: 2 },
  ];

  return (
    <div className="bg-white p-6 border rounded-xl shadow-sm">

      <h2 className="text-lg font-semibold mb-4">Pending Events</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Event</th>
            <th className="py-2">Organizer</th>
            <th className="py-2">Documents</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {pending.map((ev, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">

              <td className="py-3">{ev.name}</td>

              <td className="py-3">{ev.organizer}</td>

              <td className="py-3 flex items-center gap-1">
                <FileText size={16} className="text-green-700" />
                {ev.submissions} files
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
