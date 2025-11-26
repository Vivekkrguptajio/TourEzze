import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const bookingData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 70 },
  { month: "Apr", value: 65 },
  { month: "May", value: 85 },
  { month: "Jun", value: 95 },
  { month: "Jul", value: 90 },
  { month: "Aug", value: 80 },
  { month: "Sep", value: 82 },
  { month: "Oct", value: 84 },
  { month: "Nov", value: 88 },
  { month: "Dec", value: 110 },
];

export function BookingChart() {
  return (
    <div className="bg-[#050b08] border border-green-900 rounded-2xl p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-white font-semibold">Booking Trend</h2>
        <p className="text-[11px] text-gray-500">Last 12 months</p>
      </div>
      <div className="h-52 md:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={bookingData}>
            <XAxis
              dataKey="month"
              tick={{ fill: "#6b7280", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020403",
                border: "1px solid #064e3b",
                borderRadius: "0.75rem",
                fontSize: "11px",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}