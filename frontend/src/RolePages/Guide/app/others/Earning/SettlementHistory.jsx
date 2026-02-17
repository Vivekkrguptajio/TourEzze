import React from "react";

export default function SettlementHistory() {
  const rows = [
    { date: "June 1, 2024", amount: "₹52,000", tours: 30, status: "Settled" },
    { date: "May 1, 2024", amount: "₹38,000", tours: 22, status: "Settled" },
    { date: "April 1, 2024", amount: "₹45,000", tours: 25, status: "Settled" },
  ];

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold mb-3 text-green-800">Settlement History</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500">
            <th className="py-2 text-left">Date</th>
            <th className="py-2 text-left">Amount</th>
            <th className="py-2 text-left">Tours Completed</th>
            <th className="py-2 text-left">Status</th>
            <th className="py-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="py-2">{r.date}</td>
              <td className="py-2 text-orange-600">{r.amount}</td>
              <td className="py-2">{r.tours}</td>
              <td className="py-2">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  {r.status}
                </span>
              </td>
              <td className="py-2 text-blue-600 cursor-pointer">Invoice</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
