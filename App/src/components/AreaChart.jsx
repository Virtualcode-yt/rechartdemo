
import {
  ResponsiveContainer,
  AreaChart as ReAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function AreaChart({ data }) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-200">
      <h2 className="font-semibold text-slate-900">Revenue Growth</h2>
      <p className="mt-1 mb-5 text-xs text-slate-500">
        Track revenue over time
      </p>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ReAreaChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf0f5" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#8992a3", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#8992a3", fontSize: 11 }} />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#10b981" strokeWidth={3} fill="url(#revenueFill)" />
          </ReAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
