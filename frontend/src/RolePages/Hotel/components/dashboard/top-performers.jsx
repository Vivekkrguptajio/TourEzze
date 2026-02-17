const rooms = [
  { name: "Deluxe Suite #101", value: "₹84,000", info: "28 bookings" },
  { name: "Family Room #205", value: "₹48,000", info: "24 bookings" },
  { name: "Standard Double #103", value: "₹33,000", info: "22 bookings" },
];

const vehicles = [
  { name: "Toyota Innova", value: "₹67,500", info: "45 trips" },
  { name: "Maruti Dzire", value: "₹38,000", info: "38 trips" },
  { name: "Mahindra Scorpio", value: "₹56,000", info: "32 trips" },
];

export function TopPerformers() {
  return (
    <div className="bg-[#050b08] border border-green-900 rounded-2xl p-4 flex flex-col gap-4">
      <h2 className="text-sm text-white font-semibold">Top Performers</h2>

      <div className="flex flex-col gap-3 text-xs">
        <div>
          <p className="text-[11px] text-gray-400 mb-1">Rooms</p>
          <div className="flex flex-col gap-1.5">
            {rooms.map((r, idx) => (
              <div
                key={r.name}
                className="flex items-center justify-between bg-[#070f0b] rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-gray-400 w-4">
                    {idx + 1}.
                  </span>
                  <div>
                    <p className="text-gray-100 text-xs font-medium">
                      {r.name}
                    </p>
                    <p className="text-[11px] text-gray-500">{r.info}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-100 font-semibold">
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] text-gray-400 mb-1">Vehicles</p>
          <div className="flex flex-col gap-1.5">
            {vehicles.map((v, idx) => (
              <div
                key={v.name}
                className="flex items-center justify-between bg-[#070f0b] rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-gray-400 w-4">
                    {idx + 1}.
                  </span>
                  <div>
                    <p className="text-gray-100 text-xs font-medium">
                      {v.name}
                    </p>
                    <p className="text-[11px] text-gray-500">{v.info}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-100 font-semibold">
                  {v.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}