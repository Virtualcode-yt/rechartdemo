
import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function LineChart({ data }) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-violet-200">
      <h2 className="font-semibold text-slate-900">Revenue Overview</h2>
      <p className="mt-1 mb-5 text-xs text-slate-500">
        Monthly revenue vs expenses
      </p>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ReLineChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf0f5" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#8992a3", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#8992a3", fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#7657f6" strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#f59e0b" strokeWidth={2.5} dot={false} />
          </ReLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
