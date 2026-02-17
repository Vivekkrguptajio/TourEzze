import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Domestic", value: 78 },
  { name: "Foreign", value: 22 },
];

const colors = ["#16a34a", "#0ea5e9"];

export default function DomesticForeignPie() {
  return (
    <div className="bg-white p-5 rounded-lg shadow border h-[350px]">
      <h3 className="font-semibold mb-3">Domestic vs Foreign Tourists</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={90} label>
            {data.map((_, i) => <Cell key={i} fill={colors[i]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
