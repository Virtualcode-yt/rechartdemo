
import {
  ResponsiveContainer,
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function BarChart({ data }) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-amber-200">
      <h2 className="font-semibold text-slate-900">Monthly Sales</h2>
      <p className="mt-1 mb-5 text-xs text-slate-500">
        Compare monthly sales performance
      </p>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf0f5" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#8992a3", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#8992a3", fontSize: 11 }} />
            <Tooltip cursor={{ fill: "#f5f3ff" }} />
            <Bar dataKey="sales" name="Sales" fill="#f59e0b" radius={[7, 7, 0, 0]} maxBarSize={42} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
