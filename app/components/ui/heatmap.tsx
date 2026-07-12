"use client"
import { ActivityCalendar, type ThemeInput } from "react-activity-calendar";

const data = [
  { date: "2026-01-05", count: 2, level: 1 },
  { date: "2026-01-12", count: 5, level: 3 },
  { date: "2026-02-03", count: 1, level: 1 },
  { date: "2026-02-18", count: 8, level: 4 },
  { date: "2026-03-07", count: 3, level: 2 },
  { date: "2026-04-14", count: 6, level: 3 },
  { date: "2026-05-02", count: 4, level: 2 },
  { date: "2026-06-20", count: 7, level: 4 },
  { date: "2026-07-01", count: 3, level: 2 },
  { date: "2026-07-02", count: 6, level: 4 },
];

const theme: ThemeInput = {
  light: ["#1e2b24", "#0e4429", "#006d32", "#26a641", "#39d353"],
  dark: ["#1e2b24", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export default function Heatmap() {
  return (
    <div className="overflow-x-auto">
      <ActivityCalendar
        data={data}
        theme={theme}
        colorScheme="dark"
        blockSize={12}
        blockMargin={4}
        blockRadius={3}
        fontSize={12}
      />
    </div>
  );
}