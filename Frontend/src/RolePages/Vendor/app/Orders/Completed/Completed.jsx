import React, { useState } from "react";

export default function Completed() {
  const [orders] = useState([
    {
      id: "ORD010",
      name: "Rohit Sharma",
      product: "Bamboo Craft Flower Pot",
      qty: 1,
      date: "2024-02-01",
      type: "Delivery",
      amount: 650,
      status: "Completed",
    },
    {
      id: "ORD011",
      name: "Maya Devi",
      product: "Dokra Tribal Art Necklace",
      qty: 1,
      date: "2024-02-03",
      type: "Pickup",
      amount: 1800,
      status: "Completed",
    },
  ]);

  const completedList = orders.filter((o) => o.status === "Completed");

  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-semibold mb-1">Completed Orders</h2>
      <p className="text-gray-500 mb-6">Successfully delivered or picked-up orders.</p>

      {completedList.length === 0 ? (
        <div className="border rounded-xl p-6 bg-white shadow-sm text-center text-gray-500">
          No completed orders found.
        </div>
      ) : (
        <div className="space-y-4">
          {completedList.map((order) => (
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

                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  {order.status}
                </span>
              </div>

              <p className="mt-3 text-gray-700">
                <span className="font-semibold">Product: </span>
                {order.product}
              </p>

              <p className="text-gray-500 text-sm">
                Qty: {order.qty} &nbsp; | &nbsp; Date: {order.date} &nbsp; | &nbsp; Type: {order.type}
              </p>

              <p className="text-green-600 text-xl font-bold mt-2">₹{order.amount}</p>

              <div className="mt-3">
                <span className="text-sm px-3 py-1 rounded-md bg-gray-100 text-gray-600">
                  ✔ This order has been completed.
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}