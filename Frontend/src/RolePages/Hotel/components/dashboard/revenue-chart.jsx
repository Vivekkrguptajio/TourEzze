import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jan", value: 80000 },
  { month: "Feb", value: 95000 },
  { month: "Mar", value: 130000 },
  { month: "Apr", value: 120000 },
  { month: "May", value: 140000 },
  { month: "Jun", value: 150000 },
  { month: "Jul", value: 160000 },
  { month: "Aug", value: 145000 },
  { month: "Sep", value: 115000 },
  { month: "Oct", value: 125000 },
  { month: "Nov", value: 118000 },
  { month: "Dec", value: 175000 },
];

export function RevenueChart() {
  return (
    <div className="bg-[#050b08] border border-green-900 rounded-2xl p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-white font-semibold">Revenue Overview</h2>
        <p className="text-[11px] text-gray-500">Last 12 months</p>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData}>
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
            <Bar dataKey="value" fill="#fbbf24" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
