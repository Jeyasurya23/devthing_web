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
        <div className="w-full min-w-0 border border-line bg-surface rounded-2xl p-4 sm:p-5 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0 grid gap-6 lg:grid-rows-2">
            <div className="min-w-0 border border-line bg-bg2 rounded-2xl p-5 sm:p-6 flex flex-col">
              <p className="font-mono text-sm sm:text-base text-paper-dim tracking-wider uppercase mb-4">
                Daily contribution heatmap
              </p>
              <div className="flex-1 min-h-[280px] sm:min-h-[320px] flex items-center justify-center bg-surface rounded-xl">
                <Heatmap />
              </div>
            </div>

            <div className="min-w-0 border border-line bg-bg2 rounded-2xl p-5 sm:p-6 flex flex-col">
              <p className="font-mono text-sm sm:text-base text-paper-dim tracking-wider uppercase mb-4">
                Weekly activity
              </p>
              <div className="flex-1 min-h-[280px] sm:min-h-[320px] flex items-center justify-center bg-surface rounded-xl">
                <ActivityChart />
              </div>
            </div>
          </div>

          <div className="min-w-0 border border-line bg-bg2 rounded-2xl p-5 sm:p-6 flex flex-col lg:col-span-1">
            <p className="font-mono text-sm sm:text-base text-paper-dim tracking-wider uppercase mb-6">
              Technology usage
            </p>
            <div className="flex-1 flex items-center justify-center min-h-[340px] sm:min-h-[400px] bg-surface rounded-xl">
              <TechDonut />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}