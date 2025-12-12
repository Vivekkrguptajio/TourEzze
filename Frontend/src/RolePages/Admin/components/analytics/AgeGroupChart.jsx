import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { age: "0-18", value: 18 },
  { age: "19-30", value: 42 },
  { age: "31-45", value: 25 },
  { age: "46-60", value: 10 },
  { age: "60+", value: 5 },
];

export default function AgeGroupChart() {
  return (
    <div className="bg-white p-5 rounded-lg shadow border h-[350px]">
      <h3 className="font-semibold mb-3">Tourists Age Group</h3>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="age" />
          <Tooltip />
          <Bar dataKey="value" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
