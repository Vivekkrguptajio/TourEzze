import React, { useState } from "react";

export default function Orders() {
  const [tab, setTab] = useState("new");

  const orders = [
    {
      id: "ORD001",
      name: "Rajesh Kumar",
      product: "Tribal Dokra Art Elephant",
      qty: 2,
      date: "2024-01-15",
      type: "Pickup",
      amount: 2400,
      status: "Paid",
    },
    {
      id: "ORD002",
      name: "Priya Singh",
      product: "Handwoven Bamboo Basket",
      qty: 1,
      date: "2024-01-15",
      type: "Delivery",
      amount: 450,
      status: "COD",
    },
  ];

  return (
    <div className="p-6 font-sans">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-2">Orders</h1>
      <p className="text-gray-500 mb-6">Manage your customer orders</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <SummaryCard title="New Orders" value="2" icon="⏱️" />
        <SummaryCard title="Accepted" value="1" icon="📦" />
        <SummaryCard title="Completed" value="1" icon="✔️" />
        <SummaryCard title="Cancelled" value="1" icon="❌" />
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        {["new", "accepted", "completed", "cancelled"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 text-sm font-medium ${
              tab === t
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Order List */}
      <div className="space-y-4">
        {orders.map((o) => (
          <OrderCard key={o.id} order={o} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------- Summary Card -------------------------- */

function SummaryCard({ title, value, icon }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
}

/* ---------------------------- Order Card --------------------------- */

function OrderCard({ order }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold">
            {order.name[0]}
          </div>
          <div>
            <p className="font-semibold">{order.name}</p>
            <p className="text-gray-500 text-sm">Order {order.id}</p>
          </div>
        </div>

        <span
          className={`px-3 py-1 text-xs rounded-full ${
            order.status === "Paid"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {order.status}
        </span>
      </div>

      <p className="mt-3 text-gray-700">
        <span className="font-semibold">Product: </span>
        {order.product}
      </p>

      <p className="text-gray-500 text-sm">
        Qty: {order.qty} &nbsp; | &nbsp; Date: {order.date} &nbsp; | &nbsp; Type:{" "}
        {order.type}
      </p>

      <p className="text-green-600 text-xl font-bold mt-2">
        ₹{order.amount}
      </p>

      <div className="flex gap-3 mt-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Accept
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
          Reject
        </button>
      </div>
    </div>
  );
}
