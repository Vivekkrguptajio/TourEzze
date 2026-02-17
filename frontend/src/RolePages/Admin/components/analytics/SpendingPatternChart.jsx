import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { category: "Food", value: 1200 },
  { category: "Transport", value: 800 },
  { category: "Shopping", value: 1500 },
  { category: "Stay", value: 2000 },
  { category: "Attractions", value: 900 },
];

export default function SpendingPatternChart() {
  return (
    <div className="bg-white p-5 rounded-lg shadow border h-[350px]">
      <h3 className="font-semibold mb-3">Average Spending Pattern (₹)</h3>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
