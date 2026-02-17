const bookings = [
  {
    name: "Priya Sharma",
    subtitle: "Deluxe Suite #101 • Dec 15, 2024",
    amount: "₹12,000",
    status: "confirmed",
  },
  {
    name: "Amit Verma",
    subtitle: "Toyota Innova • Dec 18, 2024",
    amount: "₹3,500",
    status: "pending",
  },
  {
    name: "Sunita Devi",
    subtitle: "Family Room #205 • Dec 18, 2024",
    amount: "₹8,000",
    status: "confirmed",
  },
  {
    name: "Ravi Prasad",
    subtitle: "Maruti Dzire • Dec 17, 2024",
    amount: "₹2,000",
    status: "confirmed",
  },
];

export function RecentBookings() {
  return (
    <div className="bg-[#050b08] border border-green-900 rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-white font-semibold">Recent Bookings</h2>
        <button className="text-[11px] text-green-400 hover:text-green-300">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-2 text-xs">
        {bookings.map((b) => (
          <div
            key={b.name + b.subtitle}
            className="flex items-center justify-between bg-[#070f0b] rounded-xl px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-[10px] text-black font-semibold">
                {b.name
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div>
                <p className="text-gray-100 text-xs font-medium">{b.name}</p>
                <p className="text-[11px] text-gray-500">{b.subtitle}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-100 font-semibold">{b.amount}</p>
              <span
                className={`inline-flex items-center px-2 py-[2px] rounded-full text-[10px] mt-1 ${
                  b.status === "confirmed"
                    ? "bg-green-500/10 text-green-400 border border-green-600/60"
                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-600/60"
                }`}
              >
                {b.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}