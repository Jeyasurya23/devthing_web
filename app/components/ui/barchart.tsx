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
    <div className="rounded-2xl bg-[#0f1720] px-4 py-3 shadow-2xl border-0 outline-none">
      <p className="text-xs font-mono text-white/60">{label}</p>
      <p className="text-sm font-mono font-medium text-[#6EE7B7] mt-0.5">
        {payload[0].value} activities
      </p>
    </div>
  );
}

export default function ActivityChart() {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="min-h-[160px] w-full border-0 outline-none">
      <ResponsiveContainer width="100%" height={160}>
        <BarChart 
          data={data} 
          margin={{ top: 12, right: 12, left: -30, bottom: 8 }}
          style={{ border: "none", outline: "none" }}
        >
          <defs>
            <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={MINT} stopOpacity={0.95} />
              <stop offset="100%" stopColor={MINT} stopOpacity={0.45} />
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
            tick={{ fill: "rgba(255,255,255,0.0)", fontSize: 0 }}
            width={35}
          />

          <Tooltip 
            cursor={{ fill: "rgba(110, 231, 183, 0.08)" }} 
            content={<CustomTooltip />} 
            wrapperStyle={{ outline: "none", border: "none" }}
          />

          <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={36}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill="url(#barFill)"
                opacity={entry.value === maxValue ? 1 : 0.85}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}