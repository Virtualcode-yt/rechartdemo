
import {
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#7657f6", "#10b981", "#f59e0b"];

export default function PieChart({ data }) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-pink-200">
      <h2 className="font-semibold text-slate-900">Traffic Sources</h2>
      <p className="mt-1 mb-5 text-xs text-slate-500">
        Website visitors by device type
      </p>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RePieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={55}
              outerRadius={88}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend verticalAlign="bottom" iconType="circle" />
          </RePieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
