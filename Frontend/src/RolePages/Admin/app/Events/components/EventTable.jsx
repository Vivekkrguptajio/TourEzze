import { Calendar, Edit, Trash2, MapPin } from "lucide-react";

export default function EventTable() {
  const events = [
    {
      name: "Jharkhand Tribal Festival",
      location: "Ranchi",
      date: "12 Feb 2025",
      status: "Upcoming",
      bookings: 850,
    },
    {
      name: "Netarhat Winter Carnival",
      location: "Netarhat",
      date: "25 Dec 2024",
      status: "Completed",
      bookings: 1200,
    },
    {
      name: "Patratu Lake Marathon",
      location: "Patratu Valley",
      date: "10 Mar 2025",
      status: "Upcoming",
      bookings: 540,
    },
    {
      name: "Deoghar Mahotsav",
      location: "Deoghar",
      date: "5 Apr 2025",
      status: "Pending",
      bookings: 0,
    },
  ];

  const statusColors = {
    Upcoming: "bg-green-100 text-green-700",
    Completed: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white p-6 border rounded-xl shadow-sm">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Event Listings</h2>

        <button className="bg-green-700 text-white px-4 py-2 rounded-md">
          Add New Event
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Event</th>
            <th className="py-2">Location</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Bookings</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((ev, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">

              <td className="py-3 flex items-center gap-2">
                <Calendar size={18} className="text-green-700" />
                {ev.name}
              </td>

              <td className="py-3 flex items-center gap-1 text-gray-700">
                <MapPin size={14} className="text-red-500" />
                {ev.location}
              </td>

              <td className="py-3">{ev.date}</td>

              <td className="py-3">
                <span className={`px-3 py-1 rounded-full text-sm ${statusColors[ev.status]}`}>
                  {ev.status}
                </span>
              </td>

              <td className="py-3">{ev.bookings}</td>

              <td className="py-3 flex gap-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
