import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { district: "Ranchi", value: 650000 },
  { district: "Deoghar", value: 520000 },
  { district: "Netarhat", value: 480000 },
  { district: "Betla", value: 410000 },
  { district: "Latehar", value: 390000 },
];

export default function DistrictFootfallChart() {
  return (
    <div className="bg-white p-5 rounded-lg shadow border h-[350px]">
      <h3 className="font-semibold mb-3">Top Districts (Footfall)</h3>

      <ResponsiveContainer>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" />
          <Tooltip />
          <Bar dataKey="value" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
