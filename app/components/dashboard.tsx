import Heatmap from "./ui/heatmap";
import ActivityChart from "./ui/barchart";
import TechDonut from "./ui/tech_donut";

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative z-10 border-t border-line py-12 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <h1 className="font-mono text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
          See your growth, visually
        </h1>

        <p className="mt-3 mb-12 md:mb-16 text-paper-dim text-base sm:text-lg lg:text-xl tracking-wide">
          Your personal Developer Dashboard turns activity into insight, a daily heatmap, weekly activity chart, and technology breakdown at a glance.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="w-full min-w-0 border border-line bg-surface rounded-2xl px-4 py-5 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0 grid gap-6 lg:grid-rows-2">
            <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-4 sm:px-6 py-6 md:py-8 flex flex-col gap-4">
              <p className="font-mono text-sm sm:text-md text-paper-dim tracking-wider uppercase">
                Daily contribution heatmap
              </p>
              <div className="flex-1 min-h-[260px] sm:min-h-[300px]">
                <Heatmap />
              </div>
            </div>

            <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-4 sm:px-6 py-6 md:py-8 flex flex-col gap-4">
              <p className="font-mono text-sm sm:text-md text-paper-dim tracking-wider uppercase">
                Weekly activity
              </p>
              <div className="flex-1 min-h-[260px] sm:min-h-[300px]">
                <ActivityChart />
              </div>
            </div>
          </div>

          <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-4 sm:px-6 py-6 md:py-10 flex flex-col gap-4">
            <p className="font-mono text-sm sm:text-md text-paper-dim tracking-wider uppercase">
              Technology usage
            </p>
            <div className="flex-1 flex items-center justify-center min-h-[340px] sm:min-h-[420px]">
              <TechDonut />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}