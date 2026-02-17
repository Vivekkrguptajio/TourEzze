// import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { district: "Ranchi", value: 55000 },
//   { district: "Deoghar", value: 45000 },
//   { district: "Netarhat", value: 35000 },
//   { district: "Patratu Valley", value: 30000 },
//   { district: "Betla", value: 28000 },
//   { district: "Palamu", value: 26000 },
//   { district: "Latehar", value: 20000 },
// ];

// export default function DistrictTourismChart() {
//   return (
//     <div className="bg-white p-5 rounded-xl shadow-sm border h-[340px]">
//       <h3 className="font-semibold mb-3">District-wise Tourism</h3>

//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data} layout="vertical">
//           <XAxis type="number" />
//           <Tooltip />
//           <Bar dataKey="value" fill="#facc15" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }




import React, { useMemo, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

const rawData = [
  { district: "Ranchi", value: 55000 },
  { district: "Deoghar", value: 45000 },
  { district: "Netarhat", value: 35000 },
  { district: "Patratu Valley", value: 30000 },
  { district: "Betla", value: 28000 },
  { district: "Palamu", value: 26000 },
  { district: "Latehar", value: 20000 },
];

function numberFormatter(v) {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(0)}k`;
  return String(v);
}

export default function DistrictTourismChart({ data = rawData }) {
  // UI state: sort order & color mode
  const [sortDesc, setSortDesc] = useState(true);

  const sorted = useMemo(() => {
    const copy = Array.isArray(data) ? [...data] : [];
    copy.sort((a, b) => (sortDesc ? b.value - a.value : a.value - b.value));
    return copy;
  }, [data, sortDesc]);

  // CSV export
  function exportCSV() {
    const header = "district,value\n";
    const rows = sorted.map((r) => `${JSON.stringify(r.district)},${r.value}\n`).join("");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "district-tourism.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Accessible label for chart
  const chartTitleId = "district-tourism-chart-title";

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 min-h-[360px]">
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          <h3 id={chartTitleId} className="text-xl font-semibold text-gray-800">
            District-wise Tourism
          </h3>
          <p className="text-sm text-gray-500 mt-1">Annual visitor statistics — accessible & exportable</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSortDesc((s) => !s)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm hover:shadow-md"
            aria-pressed={sortDesc}
          >
            {sortDesc ? "Sort: High → Low" : "Sort: Low → High"}
          </button>

          <button
            onClick={exportCSV}
            className="px-3 py-2 bg-yellow-400 text-gray-900 rounded-lg shadow-sm text-sm hover:brightness-95"
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="h-[330px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sorted}
            layout="vertical"
            margin={{ top: 8, right: 24, left: 12, bottom: 8 }}
            role="img"
            aria-labelledby={chartTitleId}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" vertical={false} />

            {/* X axis shows numbers (visitors) */}
            <XAxis
              type="number"
              tickFormatter={numberFormatter}
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />

            {/* Y axis is category (district) */}
            <YAxis
              type="category"
              dataKey="district"
              width={140}
              tick={{ fill: "#374151", fontSize: 13 }}
            />

            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const p = payload[0].payload;
                  return (
                    <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm">
                      <div className="font-medium">{p.district}</div>
                      <div className="text-yellow-400">{p.value.toLocaleString()} visitors</div>
                    </div>
                  );
                }
                return null;
              }}
              cursor={{ fill: "rgba(245,158,11,0.06)" }}
            />

            <Bar
              dataKey="value"
              radius={[0, 8, 8, 0]}
              isAnimationActive={true}
              animationDuration={800}
              label={({ x, y, width, height, value }) => {
                // smart label placement: show inside if bar is wide enough, otherwise show to the right
                const inside = width > 80;
                const style = {
                  fill: inside ? "white" : "#374151",
                  fontSize: 12,
                  fontWeight: 600,
                };
                return (
                  <text x={x + (inside ? width - 8 : width + 8)} y={y + height / 2 + 4} style={style}>
                    {value.toLocaleString()}
                  </text>
                );
              }}
            >
              {/* gradient & per-bar subtle color variation */}
              {sorted.map((entry, index) => (
                <Cell key={`cell-${index}`}>
                  <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity={1} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.95 - index * 0.03} />
                  </linearGradient>
                </Cell>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 text-xs text-gray-500">Tip: Click "Export CSV" to download data or toggle sort to reorder bars.</div>
    </div>
  );
}

