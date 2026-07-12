"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Dart", value: 13, color: "#3B9EFF" },
  { name: "Docker", value: 13, color: "#5EC95E" },
  { name: "Firebase", value: 13, color: "#20C9C9" },
  { name: "Flutter", value: 13, color: "#4C4FE0" },
  { name: "Java", value: 12, color: "#EF4444" },
  { name: "Gemini AI", value: 12, color: "#F5A623" },
  { name: "JWT", value: 12, color: "#B347D9" },
  { name: "Oracle Cloud", value: 12, color: "#1FAE8E" },
];

export default function TechDonut() {
  const [selected, setSelected] = useState(data[0].name);
  const [hovered, setHovered] = useState<string | null>(null);

  const activeName = hovered ?? selected;
  const activeItem = data.find((d) => d.name === activeName) ?? data[0];
  const activeIndex = data.findIndex((d) => d.name === activeName);

  return (
    <div className="flex flex-col items-center gap-8 min-w-0">
      {/* Donut */}
      <div className="relative shrink-0 w-[220px] h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={62}
              outerRadius={100}
              paddingAngle={3}
              stroke="none"
              startAngle={90}
              endAngle={450}
              isAnimationActive={false}
              onClick={(_, index) => setSelected(data[index].name)}
              onMouseEnter={(_, index) => setHovered(data[index].name)}
              onMouseLeave={() => setHovered(null)}
            >
              {data.map((entry) => {
                const isActive = activeName === entry.name;
                return (
                  <Cell
                    key={entry.name}
                    fill={entry.color}
                    className="cursor-pointer outline-none"
                    opacity={isActive ? 1 : 0.4}
                    style={{
                      transition: "opacity 200ms ease, filter 200ms ease",
                      filter: isActive
                        ? `drop-shadow(0 0 8px ${entry.color}aa)`
                        : "none",
                    }}
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* center label */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-xs text-paper-dim">Top</span>
          <span className="font-mono text-lg font-bold text-paper tracking-wide transition-all duration-200">
            {activeItem.name.toUpperCase()}
          </span>
          <span className="font-mono text-2xl font-bold text-mint mt-1">
            {activeIndex + 1}
          </span>
          <span className="font-mono text-xs text-paper-dim mt-0.5">
            {activeItem.value}%
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="w-full grid grid-cols-2 gap-3">
        {data.map((entry) => {
          const isActive = entry.name === activeName;
          const isSelected = entry.name === selected;
          return (
            <button
              key={entry.name}
              onClick={() => setSelected(entry.name)}
              onMouseEnter={() => setHovered(entry.name)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-left outline-none border-0 transition-all duration-200 ${
                isActive ? "bg-mint/10 scale-[1.02]" : "bg-surface scale-100"
              }`}
            >
              {isSelected && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4/5 w-[3px] rounded-full bg-mint" />
              )}

              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125"
                  style={{ backgroundColor: entry.color }}
                />
                <span
                  className={`font-mono text-xs uppercase tracking-wide truncate transition-colors duration-200 ${
                    isActive ? "text-paper" : "text-paper-dim"
                  }`}
                >
                  {entry.name}
                </span>
              </div>
              <span
                className={`font-mono text-xs shrink-0 transition-colors duration-200 ${
                  isActive ? "text-mint" : "text-paper-dim"
                }`}
              >
                {entry.value}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}