import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { district: "Ranchi", value: 55000 },
  { district: "Deoghar", value: 45000 },
  { district: "Netarhat", value: 35000 },
  { district: "Patratu Valley", value: 30000 },
  { district: "Betla", value: 28000 },
  { district: "Palamu", value: 26000 },
  { district: "Latehar", value: 20000 },
];

export default function DistrictTourismChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border h-[340px]">
      <h3 className="font-semibold mb-3">District-wise Tourism</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" />
          <Tooltip />
          <Bar dataKey="value" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
