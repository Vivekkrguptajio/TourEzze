import React, { useState } from "react";

export default function Cancelled() {
  const [orders] = useState([
    {
      id: "ORD020",
      name: "Neha Kumari",
      product: "Terracotta Wall Hanging",
      qty: 1,
      date: "2024-02-05",
      type: "Delivery",
      amount: 750,
      status: "Cancelled",
      reason: "Customer requested cancellation",
    },
    {
      id: "ORD021",
      name: "Arvind Gupta",
      product: "Metal Tribal Mask",
      qty: 1,
      date: "2024-02-07",
      type: "Pickup",
      amount: 2200,
      status: "Cancelled",
      reason: "Payment not completed",
    },
  ]);

  const cancelledList = orders.filter((o) => o.status === "Cancelled");

  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-semibold mb-1">Cancelled Orders</h2>
      <p className="text-gray-500 mb-6">Orders that were cancelled by customer or seller.</p>

      {cancelledList.length === 0 ? (
        <div className="border rounded-xl p-6 bg-white shadow-sm text-center text-gray-500">
          No cancelled orders found.
        </div>
      ) : (
        <div className="space-y-4">
          {cancelledList.map((order) => (
            <div key={order.id} className="border rounded-xl p-4 bg-white shadow-sm">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
                    {order.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{order.name}</p>
                    <p className="text-gray-500 text-sm">Order {order.id}</p>
                  </div>
                </div>

                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                  {order.status}
                </span>
              </div>

              {/* Product */}
              <p className="mt-3 text-gray-700">
                <span className="font-semibold">Product: </span>
                {order.product}
              </p>

              <p className="text-gray-500 text-sm">
                Qty: {order.qty} &nbsp; | &nbsp; Date: {order.date} &nbsp; | &nbsp; Type:{" "}
                {order.type}
              </p>

              <p className="text-red-600 text-xl font-bold mt-2">
                ₹{order.amount}
              </p>

              {/* Cancellation Reason */}
              <div className="mt-3">
                <span className="text-sm px-3 py-1 rounded-md bg-gray-100 text-gray-700">
                  ❌ {order.reason}
                </span>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}