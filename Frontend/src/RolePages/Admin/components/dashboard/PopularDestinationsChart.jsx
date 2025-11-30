import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Netarhat", value: 35 },
  { name: "Patratu Valley", value: 28 },
  { name: "Betla NP", value: 22 },
  { name: "Deoghar", value: 15 },
];

const colors = ["#16a34a", "#facc15", "#f97316", "#0ea5e9"];

export default function PopularDestinationsChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border h-[330px]">
      <h3 className="font-semibold mb-3">Popular Destinations</h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} innerRadius={50} outerRadius={90} dataKey="value" label>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
