import {
  Target,
  Lock,
  Compass,
  Code2,
  Rocket,
  Stars,
  Flame,
  Gem,
  Trophy,
  ShieldCheck,
  Sparkles,
  Zap,
  Leaf,
  MessageSquarePlus,
  MessageCircle,
  ArrowBigUp,
  Check,
} from "lucide-react";

const levels = [
  { level: "Explorer", icon: <Compass size={10} /> },
  { level: "Developer", icon: <Code2 size={10} /> },
  { level: "Contributor", icon: <Rocket size={10} /> },
  { level: "Expert", icon: <Stars size={10} /> },
  { level: "Senior", icon: <Flame size={10} /> },
  { level: "Architect", icon: <Gem size={10} /> },
  { level: "Elite", icon: <Trophy size={10} /> },
  { level: "Legend", icon: <ShieldCheck size={10} /> },
  { level: "Mythic", icon: <Sparkles size={10} /> },
  { level: "DevThing Master", icon: <Zap size={10} /> },
];

const badges = [
  {
    icon: <MessageSquarePlus size={12} />,
    name: "First Ques...",
    bg: "bg-emerald-500",
    text: "text-emerald-400",
  },
  {
    icon: <MessageCircle size={12} />,
    name: "First Ans...",
    bg: "bg-sky-500",
    text: "text-sky-400",
  },
  {
    icon: <ArrowBigUp size={12} />,
    name: "First Upv...",
    bg: "bg-amber-500",
    text: "text-amber-400",
  },
  {
    icon: <Lock size={12} />,
    name: "DevAI...",
    bg: "bg-gray-400/10",
    text: "text-violet-400",
  },
  {
    icon: <Lock size={12} />,
    name: "Help...",
    bg: "bg-gray-400/10",
    text: "text-rose-400",
  },
];

export default function Level() {
  return (
    <section
      id="level"
      className="relative z-10 border-t border-line py-12 md:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 min-w-0">
        <h1 className="font-mono text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
          Level up with every contribution
        </h1>

        <p className="mt-3 mb-12 md:mb-16 text-paper-dim text-base sm:text-lg lg:text-xl tracking-wide">
          Earn XP for asking, answering, getting upvoted, & using DevAI. Unlock
          levels, achievements, & badges that showcase your expertise.
        </p>

        <div className="w-full min-w-0 border border-line bg-surface rounded-2xl px-4 sm:px-5 py-5 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-4 sm:px-6 py-6 md:py-8 gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 font-mono text-sm text-paper-dim mb-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center font-mono text-mint text-3xl rounded-full bg-surface2 border border-mint mx-auto sm:mx-0">
                J
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-paper break-words">
                  jeyasurya_dev
                </h3>
                <p className="mt-1 text-paper-dim text-sm sm:text-base lg:text-lg leading-relaxed">
                  Level 1 · Beginner
                </p>
              </div>
            </div>

            <h2 className="mt-6 sm:mt-8 font-bold font-mono text-lg text-paper-dim px-1">
              Progress
            </h2>
            <div className="h-4 rounded-full bg-line mx-1 mt-2 overflow-hidden">
              <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-mint-dim to-mint"></div>
            </div>
            <div className="flex justify-between mx-1 mt-1.5 text-sm">
              <span>28 XP</span>
              <span>40 XP</span>
            </div>

            <h2 className="mt-7 sm:mt-8 font-bold font-mono text-lg text-paper-dim px-1">
              Levels
            </h2>

            <div className="mx-1 mt-3 border border-mint px-5 py-6 sm:py-5 rounded-2xl bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center justify-center sm:justify-start gap-4 w-full sm:w-auto">
                <span className="w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center font-mono text-mint text-3xl sm:text-2xl rounded-full bg-surface2 border border-mint flex-shrink-0 shadow-sm">
                  <Leaf size={16} />
                </span>
                <div>
                  <h1 className="font-mono font-bold text-mint text-lg">Beginner</h1>
                  <p className="text-xs text-mint/70 font-mono -mt-0.5">Current Level</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-2 font-mono text-mint text-sm bg-mint/10 px-4 py-2 rounded-xl w-full sm:w-auto">
                <Target size={15} />
                <span className="font-medium">You are here</span>
              </div>
            </div>

            {levels.map((l, i) => (
              <div
                key={i}
                className="mx-1 mt-3 border border-line px-5 py-6 sm:py-5 rounded-2xl bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center justify-center sm:justify-start gap-4 w-full sm:w-auto">
                  <span className="w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center font-mono text-paper-dim text-3xl sm:text-2xl rounded-full bg-surface2 border border-line flex-shrink-0">
                    {l.icon}
                  </span>
                  <div>
                    <h1 className="font-mono font-bold text-paper-dim text-lg">{l.level}</h1>
                    <p className="text-xs text-paper-dim/60 font-mono -mt-0.5">Locked</p>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-2 font-mono text-paper-dim text-sm bg-line/70 px-4 py-2 rounded-xl w-full sm:w-auto">
                  <Lock size={15} />
                  <span className="font-medium">Locked</span>
                </div>
              </div>
            ))}
          </div>

          <div className="min-w-0 grid gap-6 lg:grid-rows-2">
            <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-4 sm:px-6 py-6 md:py-8">
              <h1 className="font-mono text-paper text-2xl sm:text-3xl font-bold tracking-wide">
                Milestones
              </h1>

              <p className="mt-1 mb-8 text-paper-dim text-base sm:text-lg tracking-wide">
                Unlock badges as you contribute.
              </p>

              <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4 -mx-1 px-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [scrollbar-color:var(--color-line)_transparent]">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 shrink-0 snap-start"
                  >
                    <div
                      className={`w-12 h-12 ${badge.bg}
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-110 hover:shadow-lg
                      [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]`}
                    >
                      {badge.icon}
                    </div>
                    <span className="text-center text-[10px] font-mono text-paper-dim w-16 truncate">
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-4 sm:px-6 py-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-surface2 text-mint">
                    <MessageSquarePlus size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-semibold text-paper text-base sm:text-lg pr-2">
                        First Question
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm text-mint whitespace-nowrap">
                        <Check size={16} />
                        <span>Unlocked</span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-paper-dim">Ask your first question</p>
                    <div className="h-2 rounded-full bg-line my-3 overflow-hidden">
                      <div className="h-full w-[100%] rounded-full bg-gradient-to-r from-mint-dim to-mint"></div>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-paper-dim">Completed</span>
                      <span className="text-mint">+5 XP</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-4 sm:px-6 py-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-surface2 text-paper-dim">
                    <Lock size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-semibold text-paper-dim text-base sm:text-lg pr-2">
                        Helper
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-paper-dim whitespace-nowrap">
                        <Lock size={14} />
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-paper-dim">Help 5 users</p>
                    <div className="h-2 rounded-full bg-line my-3 overflow-hidden">
                      <div className="h-full w-[10%] rounded-full bg-gray-600"></div>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-paper-dim">1/5</span>
                      <span className="text-paper-dim">+5 XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-5 sm:px-6 lg:px-10 py-8">
              <h1 className="font-bold font-mono text-3xl sm:text-4xl tracking-wide text-paper mb-6">
                XP comes from real contribution
              </h1>
              <ul className="space-y-5 sm:space-y-6 text-paper-dim text-base sm:text-lg">
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Earn <span className="font-semibold text-mint">3 XP</span> for every question you ask.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Earn <span className="font-semibold text-mint">5 XP</span> for every answer you post.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Receive <span className="font-semibold text-mint">2 XP</span> for every upvote on your answers.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Gain <span className="font-semibold text-mint">1 XP</span> for each DevAI usage.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Build XP combos through consistent daily contributions.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Unlock exclusive badges as you reach important milestones.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Level up to showcase your experience and expertise.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}