import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from "recharts";
import { TrendingUp, Users, Calendar } from "lucide-react";

const data = [
  { month: "Jan", tourists: 12000, growth: 0 },
  { month: "Feb", tourists: 15000, growth: 25 },
  { month: "Mar", tourists: 18000, growth: 20 },
  { month: "Apr", tourists: 21000, growth: 16.7 },
  { month: "May", tourists: 17000, growth: -19 },
  { month: "Jun", tourists: 16000, growth: -5.9 },
  { month: "Jul", tourists: 19000, growth: 18.8 },
  { month: "Aug", tourists: 22000, growth: 15.8 },
  { month: "Sep", tourists: 24000, growth: 9.1 },
  { month: "Oct", tourists: 26000, growth: 8.3 },
  { month: "Nov", tourists: 28000, growth: 7.7 },
  { month: "Dec", tourists: 32000, growth: 14.3 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gradient-to-br from-white to-emerald-50 backdrop-blur-sm p-4 rounded-xl shadow-2xl border-2 border-emerald-200">
        <p className="font-bold text-gray-800 text-lg mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-emerald-600" />
          {data.month} 2024
        </p>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
            <Users className="w-5 h-5" />
            {data.tourists.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500">Total Visitors</p>
          {data.growth !== 0 && (
            <div className={`flex items-center gap-1 mt-2 ${data.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className={`w-4 h-4 ${data.growth < 0 ? 'rotate-180' : ''}`} />
              <span className="font-semibold">{Math.abs(data.growth).toFixed(1)}%</span>
              <span className="text-xs">{data.growth > 0 ? 'growth' : 'decline'}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  if (payload.tourists === Math.max(...data.map(d => d.tourists))) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={8} fill="#16a34a" stroke="white" strokeWidth={3} />
        <circle cx={cx} cy={cy} r={12} fill="#16a34a" opacity={0.2} />
      </g>
    );
  }
  return (
    <circle cx={cx} cy={cy} r={4} fill="#16a34a" stroke="white" strokeWidth={2} />
  );
};

export default function TouristTrendChart() {
  const totalTourists = data.reduce((sum, item) => sum + item.tourists, 0);
  const peakMonth = data.reduce((max, item) => item.tourists > max.tourists ? item : max, data[0]);
  const yearGrowth = ((data[11].tourists - data[0].tourists) / data[0].tourists * 100).toFixed(1);

  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 flex items-center gap-2">
          <TrendingUp className="w-7 h-7 text-emerald-600" />
          Tourist Footfall Trend
        </h2>
        <p className="text-gray-600">Monthly visitor statistics for 2024</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 hover:shadow-lg transition-all">
          <p className="text-sm text-gray-500 mb-1">Total Visitors</p>
          <p className="text-2xl font-bold text-emerald-600">{totalTourists.toLocaleString()}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-teal-100 hover:shadow-lg transition-all">
          <p className="text-sm text-gray-500 mb-1">Peak Month</p>
          <p className="text-2xl font-bold text-teal-600">{peakMonth.month}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100 hover:shadow-lg transition-all">
          <p className="text-sm text-gray-500 mb-1">Year Growth</p>
          <p className="text-2xl font-bold text-green-600">+{yearGrowth}%</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTourists" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            style={{ fontSize: '13px', fontWeight: '500' }}
            tickLine={false}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '13px' }}
            tickLine={false}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#16a34a', strokeWidth: 1, strokeDasharray: '5 5' }} />
          <Area 
            type="monotone" 
            dataKey="tourists" 
            stroke="url(#lineGradient)" 
            strokeWidth={3}
            fill="url(#colorTourists)"
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
          <Line 
            type="monotone" 
            dataKey="tourists" 
            stroke="url(#lineGradient)" 
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8, stroke: 'white', strokeWidth: 3, fill: '#16a34a' }}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border border-emerald-200">
        <p className="text-sm text-gray-700 text-center flex items-center justify-center gap-2">
          <span className="font-semibold"> Insight:</span> 
          December recorded the highest footfall with {peakMonth.tourists.toLocaleString()} visitors
        </p>
      </div>
    </div>
  );
}