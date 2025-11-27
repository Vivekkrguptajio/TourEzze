import React, { useState } from "react";

export default function Accepted() {
  // sample data — replace with real API data later
  const [orders, setOrders] = useState([
    {
      id: "ORD003",
      name: "Asha Verma",
      product: "Handloom Cotton Stole",
      qty: 1,
      date: "2024-02-10",
      type: "Delivery",
      amount: 1200,
      status: "Accepted",
    },
    {
      id: "ORD004",
      name: "Suresh Patel",
      product: "Terracotta Vase",
      qty: 2,
      date: "2024-02-11",
      type: "Pickup",
      amount: 900,
      status: "Accepted",
    },
  ]);

  function markComplete(id) {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "Completed" } : o))
    );
  }

  function cancelOrder(id) {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "Cancelled" } : o))
    );
  }

  const acceptedList = orders.filter((o) => o.status === "Accepted");

  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-semibold mb-1">Accepted Orders</h2>
      <p className="text-gray-500 mb-6">Orders you've accepted — manage them here.</p>

      {acceptedList.length === 0 ? (
        <div className="border rounded-xl p-6 bg-white shadow-sm text-center text-gray-500">
          No accepted orders right now.
        </div>
      ) : (
        <div className="space-y-4">
          {acceptedList.map((order) => (
            <div key={order.id} className="border rounded-xl p-4 bg-white shadow-sm">
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

                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
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

              <div className="flex items-center justify-between mt-3">
                <p className="text-green-600 text-xl font-bold">₹{order.amount}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => markComplete(order.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:opacity-95"
                  >
                    Mark Complete
                  </button>
                  <button
                    onClick={() => cancelOrder(order.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-95"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
