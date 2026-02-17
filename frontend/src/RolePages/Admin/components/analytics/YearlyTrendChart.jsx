import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "2018", tourists: 1.2 },
  { year: "2019", tourists: 1.45 },
  { year: "2020", tourists: 0.75 },
  { year: "2021", tourists: 1.65 },
  { year: "2022", tourists: 2.1 },
  { year: "2023", tourists: 2.6 },
  { year: "2024", tourists: 3.2 }
];

export default function YearlyTrendChart() {
  return (
    <div className="bg-white p-5 rounded-lg shadow border h-[350px]">
      <h3 className="font-semibold mb-3">Yearly Tourist Trend (Million)</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tourists" stroke="#16a34a" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
