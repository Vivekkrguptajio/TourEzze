import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 120000 },
  { month: "Feb", value: 150000 },
  { month: "Mar", value: 190000 },
  { month: "Apr", value: 240000 },
  { month: "May", value: 200000 },
  { month: "Jun", value: 160000 },
  { month: "Jul", value: 130000 },
  { month: "Aug", value: 170000 },
  { month: "Sep", value: 210000 },
  { month: "Oct", value: 260000 },
  { month: "Nov", value: 300000 },
  { month: "Dec", value: 350000 },
];

export default function SeasonalTrendChart() {
  return (
    <div className="bg-white p-5 rounded-lg shadow border h-[350px]">
      <h3 className="font-semibold mb-3">Seasonal Tourist Trend</h3>

      <ResponsiveContainer>
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Area dataKey="value" stroke="#16a34a" fill="#86efac" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
