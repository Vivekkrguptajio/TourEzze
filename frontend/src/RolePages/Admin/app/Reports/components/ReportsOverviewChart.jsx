import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", tourists: 12000 },
  { name: "Feb", tourists: 15000 },
  { name: "Mar", tourists: 18000 },
  { name: "Apr", tourists: 21000 },
  { name: "May", tourists: 25000 },
  { name: "Jun", tourists: 23000 },
];

export default function ReportsOverviewChart() {
  return (
    <div className="bg-white p-6 border rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Tourist Overview Report</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tourists" fill="#16a34a" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
