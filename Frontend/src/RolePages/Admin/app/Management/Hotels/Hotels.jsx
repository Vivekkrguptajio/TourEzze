import MainLayout from "../../../global/Layout";
import { CheckCircle, AlertCircle, PauseCircle, Edit, Trash2, Star } from "lucide-react";

export default function Hotels() {
  const hotels = [
    {
      name: "Netarhat Heritage Resort",
      location: "Netarhat, Latehar",
      status: "Verified",
      rating: 4.5,
      bookings: 1250,
      revenue: "₹8.5L"
    },
    {
      name: "Patratu Valley View",
      location: "Patratu Valley, Ramgarh",
      status: "Verified",
      rating: 4.3,
      bookings: 980,
      revenue: "₹6.2L"
    },
    {
      name: "Betla Forest Lodge",
      location: "Betla National Park",
      status: "Pending",
      rating: 4.7,
      bookings: 1450,
      revenue: "₹9.8L"
    },
    {
      name: "Ranchi Grand Hotel",
      location: "Ranchi City Center",
      status: "Verified",
      rating: 4.2,
      bookings: 2100,
      revenue: "₹14.5L"
    },
    {
      name: "Deoghar Temple Stay",
      location: "Deoghar",
      status: "Suspended",
      rating: 3.8,
      bookings: 650,
      revenue: "₹3.2L"
    },
  ];

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Hotels & Homestays</h1>
          <p className="text-gray-600">Manage accommodation listings across Jharkhand</p>
        </div>

        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">
          Add New Hotel
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-gray-700">Total Hotels</p>
          <h2 className="text-3xl font-bold">218</h2>
        </div>

        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-gray-700">Verified</p>
          <h2 className="text-3xl font-bold text-green-600">195</h2>
        </div>

        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-gray-700">Pending Verification</p>
          <h2 className="text-3xl font-bold text-yellow-600">18</h2>
        </div>

        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <p className="text-gray-700">Suspended</p>
          <h2 className="text-3xl font-bold text-red-600">5</h2>
        </div>

      </div>

      {/* Hotel Table */}
      <div className="bg-white p-6 border rounded-xl shadow-sm">

        <h2 className="text-lg font-semibold mb-4">Hotel Listings</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Location</th>
              <th className="py-2">Status</th>
              <th className="py-2">Rating</th>
              <th className="py-2">Bookings</th>
              <th className="py-2">Revenue</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">

                {/* Name */}
                <td className="py-3">{hotel.name}</td>

                {/* Location */}
                <td className="py-3 text-gray-700">{hotel.location}</td>

                {/* Status Badge */}
                <td className="py-3">
                  {hotel.status === "Verified" && (
                    <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full flex items-center gap-1 w-fit">
                      <CheckCircle size={14} /> Verified
                    </span>
                  )}

                  {hotel.status === "Pending" && (
                    <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full flex items-center gap-1 w-fit">
                      <PauseCircle size={14} /> Pending
                    </span>
                  )}

                  {hotel.status === "Suspended" && (
                    <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full flex items-center gap-1 w-fit">
                      <AlertCircle size={14} /> Suspended
                    </span>
                  )}
                </td>

                {/* Rating */}
                <td className="py-3 flex items-center gap-1 text-gray-700">
                  <Star size={16} className="text-yellow-500" />
                  {hotel.rating}
                </td>

                {/* Bookings */}
                <td className="py-3">{hotel.bookings}</td>

                {/* Revenue */}
                <td className="py-3 font-medium">{hotel.revenue}</td>

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
