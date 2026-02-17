export function StatsCard({ label, value, change, helper, icon }) {
  return (
    <div className="flex-1 min-w-[180px] bg-[#050b08] border border-green-900 rounded-2xl px-4 py-4 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 mb-1">{label}</p>
          <p className="text-2xl font-semibold text-white">{value}</p>
        </div>
        <div className="h-8 w-8 rounded-xl bg-[#07140e] flex items-center justify-center text-green-400">
          {icon}
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-0.5 text-[11px]">
        <p className="text-green-400">{change}</p>
        {helper && <p className="text-gray-500">{helper}</p>}
      </div>
    </div>
  );
}