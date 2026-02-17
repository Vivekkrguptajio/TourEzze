export default function DailyReportTable() {
  const rows = [
    { date: "1 Jan 2025", tourists: 3200, revenue: "₹4.5L" },
    { date: "2 Jan 2025", tourists: 4100, revenue: "₹5.2L" },
    { date: "3 Jan 2025", tourists: 3800, revenue: "₹4.8L" },
    { date: "4 Jan 2025", tourists: 4500, revenue: "₹6.0L" },
  ];

  return (
    <div className="bg-white p-6 border rounded-xl shadow-sm">

      <h2 className="text-lg font-semibold mb-4">Daily Report</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Date</th>
            <th className="py-2">Tourists</th>
            <th className="py-2">Revenue</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="py-3">{r.date}</td>
              <td className="py-3">{r.tourists}</td>
              <td className="py-3 font-medium">{r.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
