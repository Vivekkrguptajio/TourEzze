import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Male", value: 56 },
  { name: "Female", value: 44 },
];

const colors = ["#0ea5e9", "#f472b6"];

export default function GenderRatioChart() {
  return (
    <div className="bg-white p-5 rounded-lg shadow border h-[350px]">
      <h3 className="font-semibold mb-3">Gender Ratio</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} outerRadius={90} dataKey="value" label>
            {data.map((_, i) => <Cell key={i} fill={colors[i]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
