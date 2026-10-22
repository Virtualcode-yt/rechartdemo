
import {
  ResponsiveContainer,
  RadarChart as ReRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

export default function RadarChart({ data }) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-200">
      <h2 className="font-semibold text-slate-900">Skills Analysis</h2>
      <p className="mt-1 mb-5 text-xs text-slate-500">
        Compare performance across technologies
      </p>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ReRadarChart data={data} outerRadius="70%">
            <PolarGrid stroke="#e8edf5" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: "#667085", fontSize: 11 }} />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip />
            <Radar
              name="Skill Score"
              dataKey="score"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.28}
            />
          </ReRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
