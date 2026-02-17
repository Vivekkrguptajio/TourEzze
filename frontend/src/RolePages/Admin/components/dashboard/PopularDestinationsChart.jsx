
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Netarhat", value: 35, description: "Queen of Chotanagpur" },
  { name: "Patratu Valley", value: 28, description: "Scenic Valley Views" },
  { name: "Betla National Park", value: 22, description: "Wildlife Paradise" },
  { name: "Deoghar", value: 15, description: "Temple Town" },
];

const colors = ["#16a34a", "#facc15", "#f97316", "#0ea5e9"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-2xl border border-gray-200">
        <p className="font-bold text-gray-800 text-lg mb-1">{payload[0].name}</p>
        <p className="text-sm text-gray-600 mb-2">{payload[0].payload.description}</p>
        <p className="text-2xl font-bold" style={{ color: payload[0].payload.fill }}>
          {payload[0].value}%
        </p>
        <p className="text-xs text-gray-500 mt-1">of total bookings</p>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.08) return null;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="font-bold text-sm drop-shadow-lg"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PopularDestinationsChart() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-white to-blue-50 rounded-2xl p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Popular Destinations
        </h2>
        <p className="text-gray-600">Top tourist attractions in Jharkhand</p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <defs>
            {colors.map((color, i) => (
              <linearGradient key={i} id={`gradient${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={1} />
                <stop offset="100%" stopColor={color} stopOpacity={0.7} />
              </linearGradient>
            ))}
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={CustomLabel}
            outerRadius={140}
            innerRadius={70}
            fill="#8884d8"
            dataKey="value"
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#gradient${index})`}
                stroke="white"
                strokeWidth={3}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white/90 transition-all cursor-pointer group"
          >
            <div
              className="w-4 h-4 rounded-full shadow-md group-hover:scale-110 transition-transform"
              style={{ backgroundColor: colors[index] }}
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
            <p className="text-lg font-bold" style={{ color: colors[index] }}>
              {item.value}%
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl border border-emerald-200">
        <p className="text-sm text-gray-700 text-center">
          <span className="font-semibold">Total bookings analyzed:</span> Based on last quarter data
        </p>
      </div>
    </div>
  );
}