export default function StatsCard({ title, value, icon, subtitle, bg = "bg-green-50" }) {
  return (
    <div className={`p-5 rounded-xl shadow-sm border ${bg}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-3xl font-bold">{value}</h2>
          <p className="text-xs mt-1 text-gray-600">{subtitle}</p>
        </div>
        <div className="text-green-700">{icon}</div>
      </div>
    </div>
  );
}
