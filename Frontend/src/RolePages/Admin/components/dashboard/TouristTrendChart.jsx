import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", tourists: 12000 },
  { month: "Feb", tourists: 15000 },
  { month: "Mar", tourists: 18000 },
  { month: "Apr", tourists: 21000 },
  { month: "May", tourists: 17000 },
  { month: "Jun", tourists: 16000 },
  { month: "Jul", tourists: 19000 },
  { month: "Aug", tourists: 22000 },
  { month: "Sep", tourists: 24000 },
  { month: "Oct", tourists: 26000 },
  { month: "Nov", tourists: 28000 },
  { month: "Dec", tourists: 32000 },
];

export default function TouristTrendChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border h-[330px]">
      <h3 className="font-semibold mb-3">Tourist Footfall Trend</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tourists" stroke="#16a34a" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
