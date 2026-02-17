import MainLayout from "../../../global/Layout";
import {
  CheckCircle,
  PauseCircle,
  AlertCircle,
  Edit,
  Trash2,
  Star,
  User
} from "lucide-react";

export default function TourGuides() {
  
  const guides = [
    {
      name: "Ravi Kumar",
      location: "Ranchi",
      status: "Verified",
      experience: "5 yrs",
      languages: "Hindi, English",
      rating: 4.7,
      tours: 320,
      revenue: "₹4.8L",
    },
    {
      name: "Pooja Sharma",
      location: "Deoghar",
      status: "Pending",
      experience: "2 yrs",
      languages: "Hindi",
      rating: 4.3,
      tours: 140,
      revenue: "₹1.6L",
    },
    {
      name: "Amit Raj",
      location: "Hazaribagh",
      status: "Verified",
      experience: "4 yrs",
      languages: "Hindi, Bengali",
      rating: 4.8,
      tours: 410,
      revenue: "₹6.3L",
    },
    {
      name: "Roshni Devi",
      location: "Jamshedpur",
      status: "Suspended",
      experience: "3 yrs",
      languages: "Hindi, English",
      rating: 3.9,
      tours: 90,
      revenue: "₹0.9L",
    },
  ];

  return (
    <MainLayout>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Tour Guides</h1>
          <p className="text-gray-600">Manage registered tourist guides across Jharkhand</p>
        </div>

        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">
          Add New Guide
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <SummaryCard title="Total Guides" value="134" color="text-gray-800" />
        <SummaryCard title="Verified" value="112" color="text-green-600" />
        <SummaryCard title="Pending Approval" value="18" color="text-yellow-600" />
        <SummaryCard title="Suspended" value="4" color="text-red-600" />

      </div>

      {/* GUIDES TABLE */}
      <div className="bg-white p-6 border rounded-xl shadow-sm">

        <h2 className="text-lg font-semibold mb-4">Guide Listings</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Guide</th>
              <th className="py-2">Location</th>
              <th className="py-2">Status</th>
              <th className="py-2">Experience</th>
              <th className="py-2">Languages</th>
              <th className="py-2">Rating</th>
              <th className="py-2">Tours</th>
              <th className="py-2">Revenue</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {guides.map((guide, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">

                {/* Guide */}
                <td className="py-3 flex items-center gap-2">
                  <User size={18} className="text-green-700" />
                  {guide.name}
                </td>

                {/* Location */}
                <td className="py-3">{guide.location}</td>

                {/* Status */}
                <td className="py-3">
                  {guide.status === "Verified" && (
                    <StatusBadge color="green" text="Verified" icon={<CheckCircle size={14} />} />
                  )}
                  {guide.status === "Pending" && (
                    <StatusBadge color="yellow" text="Pending" icon={<PauseCircle size={14} />} />
                  )}
                  {guide.status === "Suspended" && (
                    <StatusBadge color="red" text="Suspended" icon={<AlertCircle size={14} />} />
                  )}
                </td>

                {/* Experience */}
                <td className="py-3">{guide.experience}</td>

                {/* Languages */}
                <td className="py-3">{guide.languages}</td>

                {/* Rating */}
                <td className="py-3 flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" /> {guide.rating}
                </td>

                {/* Tours */}
                <td className="py-3">{guide.tours}</td>

                {/* Revenue */}
                <td className="py-3 font-medium">{guide.revenue}</td>

                {/* Actions */}
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

    </MainLayout>
  );
}


function SummaryCard({ title, value, color }) {
  return (
    <div className="bg-white p-5 border rounded-xl shadow-sm">
      <p className="text-gray-700">{title}</p>
      <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}

function StatusBadge({ text, icon, color }) {
  const colors = {
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 w-fit ${colors[color]}`}>
      {icon} {text}
    </span>
  );
}
