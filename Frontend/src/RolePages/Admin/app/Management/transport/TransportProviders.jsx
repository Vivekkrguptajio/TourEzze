import MainLayout from "../../../global/Layout";
import {
  Car,
  CheckCircle,
  PauseCircle,
  AlertCircle,
  Edit,
  Trash2,
  Star,
  User
} from "lucide-react";

export default function TransportProviders() {

  const providers = [
    {
      name: "Ravi Travels",
      location: "Ranchi",
      status: "Verified",
      vehicle: "SUV (Innova)",
      driver: "Ravi Kumar",
      rating: 4.6,
      trips: 320,
      revenue: "₹4.2L",
    },
    {
      name: "Deoghar Taxi Services",
      location: "Deoghar",
      status: "Pending",
      vehicle: "Sedan (Dzire)",
      driver: "Sanjay Singh",
      rating: 4.1,
      trips: 190,
      revenue: "₹2.8L",
    },
    {
      name: "Netarhat Jungle Safari",
      location: "Netarhat",
      status: "Verified",
      vehicle: "Jeep (Safari Jeep)",
      driver: "Amit Raj",
      rating: 4.8,
      trips: 450,
      revenue: "₹5.7L",
    },
    {
      name: "Hazaribagh Car Rentals",
      location: "Hazaribagh",
      status: "Suspended",
      vehicle: "Hatchback (i20)",
      driver: "Rohit Verma",
      rating: 3.7,
      trips: 120,
      revenue: "₹1.1L",
    },
  ];

  return (
    <MainLayout>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Transport Providers</h1>
          <p className="text-gray-600">Manage tourist transport & vehicle services</p>
        </div>

        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">
          Add New Provider
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <SummaryCard title="Total Providers" value="178" color="text-gray-800" />
        <SummaryCard title="Verified" value="140" color="text-green-600" />
        <SummaryCard title="Pending Approval" value="28" color="text-yellow-600" />
        <SummaryCard title="Suspended" value="10" color="text-red-600" />

      </div>

      {/* TABLE */}
      <div className="bg-white p-6 border rounded-xl shadow-sm">

        <h2 className="text-lg font-semibold mb-4">Transport Provider Listings</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Provider</th>
              <th className="py-2">Location</th>
              <th className="py-2">Status</th>
              <th className="py-2">Vehicle</th>
              <th className="py-2">Driver</th>
              <th className="py-2">Rating</th>
              <th className="py-2">Trips</th>
              <th className="py-2">Revenue</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {providers.map((provider, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">

                {/* Provider Name */}
                <td className="py-3 flex items-center gap-2">
                  <Car size={18} className="text-green-700" />
                  {provider.name}
                </td>

                {/* Location */}
                <td className="py-3 text-gray-700">{provider.location}</td>

                {/* Status Badge */}
                <td className="py-3">
                  {provider.status === "Verified" && (
                    <StatusBadge color="green" text="Verified" icon={<CheckCircle size={14} />} />
                  )}

                  {provider.status === "Pending" && (
                    <StatusBadge color="yellow" text="Pending" icon={<PauseCircle size={14} />} />
                  )}

                  {provider.status === "Suspended" && (
                    <StatusBadge color="red" text="Suspended" icon={<AlertCircle size={14} />} />
                  )}
                </td>

                {/* Vehicle */}
                <td className="py-3">{provider.vehicle}</td>

                {/* Driver */}
                <td className="py-3 flex items-center gap-1">
                  <User size={14} /> {provider.driver}
                </td>

                {/* Rating */}
                <td className="py-3 flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" />
                  {provider.rating}
                </td>

                {/* Trips */}
                <td className="py-3">{provider.trips}</td>

                {/* Revenue */}
                <td className="py-3 font-medium">{provider.revenue}</td>

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
