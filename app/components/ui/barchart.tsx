"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { day: "Mon", value: 4 },
  { day: "Tue", value: 8 },
  { day: "Wed", value: 6 },
  { day: "Thu", value: 10 },
  { day: "Fri", value: 7 },
  { day: "Sat", value: 2 },
  { day: "Sun", value: 5 },
];

const MINT = "#6EE7B7";

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-white/10 bg-[#0f1720] px-3 py-2 shadow-lg">
      <p className="text-xs font-mono text-white/50">{label}</p>
      <p className="text-sm font-mono font-medium text-[#6EE7B7]">
        {payload[0].value} activities
      </p>
    </div>
  );
}

export default function ActivityChart() {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="min-h-[160px] w-full">
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} margin={{ top: 8, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={MINT} stopOpacity={0.9} />
              <stop offset="100%" stopColor={MINT} stopOpacity={0.35} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "monospace" }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11, fontFamily: "monospace" }}
            width={28}
          />

          <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} content={<CustomTooltip />} />

          <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={32}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill="url(#barFill)"
                opacity={entry.value === maxValue ? 1 : 0.75}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}