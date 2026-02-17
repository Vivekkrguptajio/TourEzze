import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Star,
  Filter,
  Search,
  Eye,
  Pencil,
} from "lucide-react";

export default function MyTour() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  const tours = [
    {
      id: 1,
      name: "Tagore Hill Sunrise Trek",
      date: "Jun 15, 2024",
      time: "06:00 AM",
      location: "Ranchi, Jharkhand",
      tourists: 4,
      rating: 4.9,
      status: "upcoming",
    },
    {
      id: 2,
      name: "Hundru Falls Adventure",
      date: "Jun 10, 2024",
      time: "09:00 AM",
      location: "Hundru Falls",
      tourists: 6,
      rating: 4.7,
      status: "completed",
    },
    {
      id: 3,
      name: "Ranchi Heritage Walk",
      date: "Jun 20, 2024",
      time: "04:00 PM",
      location: "Ranchi Old City",
      tourists: 8,
      rating: 4.5,
      status: "draft",
    },
  ];

  const filtered = tours.filter((t) => {
    const matchStatus =
      statusFilter === "all" ? true : t.status === statusFilter;
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const badgeClass = (status) => {
    if (status === "upcoming")
      return "bg-green-100 text-green-700 border-green-300";
    if (status === "completed")
      return "bg-blue-100 text-blue-700 border-blue-300";
    if (status === "draft")
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    return "bg-gray-100 text-gray-700 border-gray-300";
  };

  const label = {
    upcoming: "Upcoming",
    completed: "Completed",
    draft: "Draft",
  };

  return (
    <div className="px-6 pb-10 text-gray-900">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-green-800">My Tours</h1>
          <p className="text-sm text-gray-500">
            Manage all your created tours, itineraries and packages
          </p>
        </div>

        <button className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700">
          + Create New Tour
        </button>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 w-full md:w-2/3 shadow-sm">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by tour name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none text-sm w-full"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white shadow-sm"
          >
            <option value="all">All Tours</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* TOURS LIST */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-dashed border-gray-300 rounded-xl p-10 text-center text-gray-500 text-sm">
          No tours found. Try changing filters or create a new tour.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((tour) => (
            <div
              key={tour.id}
              className="bg-white border rounded-xl p-5 shadow-sm flex flex-col md:flex-row justify-between gap-4"
            >
              {/* LEFT INFO */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-lg font-semibold text-green-800">
                    {tour.name}
                  </h2>
                  <span
                    className={
                      "px-3 py-1 text-xs border rounded-full font-medium " +
                      badgeClass(tour.status)
                    }
                  >
                    {label[tour.status]}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {tour.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {tour.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> {tour.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} /> {tour.tourists} tourists
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" />{" "}
                    {tour.rating}
                  </div>
                </div>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex flex-col md:items-end gap-3 text-sm">
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 border rounded-md hover:bg-gray-100">
                    <Eye size={14} /> View
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 border rounded-md hover:bg-gray-100">
                    <Pencil size={14} /> Edit
                  </button>
                </div>

                <p className="text-xs text-gray-400">
                  Last updated: 2 days ago
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
