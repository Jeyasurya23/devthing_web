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
  HelpingHand,
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
    <section id="level" className="relative z-10 border-t border-line py-24 overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 min-w-0">
        <h1 className="font-mono text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
          Level up with every contribution
        </h1>

        <p className="mt-3 mb-15 text-paper-dim text-base sm:text-lg lg:text-xl tracking-wide">
          Earn XP for asking, answering, getting upvoted, & using DevAI. Unlock
          levels, achievements, & badges that showcase your expertise.
        </p>

        <div className="w-full min-w-0 border border-line bg-surface rounded-2xl px-4 py-5 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-6 py-8 gap-4">
            <div className="flex items-center gap-4 font-mono text-sm text-paper-dim mb-2 ">
              <h1 className="w-24 h-24 flex items-center justify-center font-mono text-mint text-2xl rounded-full bg-surface2  border border-mint">
                J
              </h1>
              <div>
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-paper">
                  jeyasurya_dev
                </h3>
                <p className="mt-2 text-paper-dim text-sm sm:text-base lg:text-lg leading-relaxed">
                  Level 1 · Beginner
                </p>
              </div>
            </div>
            <h2 className="ml-3 mt-3 font-bold font-mono text-lg text-paper-dim">
              Progress
            </h2>
            <div className="h-4 rounded-full bg-line m-3 overflow-hidden">
              <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-mint-dim to-mint"></div>
            </div>
            <div className="flex justify-between mx-3">
              <h1>28 XP</h1>
              <h1>40 XP</h1>
            </div>
            <h2 className="ml-3 mt-3 font-bold font-mono text-lg text-paper-dim">
              Levels
            </h2>
            <div className="mx-3 mt-2 border border-mint px-6 py-4 rounded-2xl bg-surface flex justify-between">
              <div className="inline-flex justify-center items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center font-mono text-mint text-2xl rounded-full bg-surface2  border border-mint">
                  <Leaf size={10} />
                </span>
                <h1 className="font-mono font-bold text-mint">Beginner</h1>
              </div>
              <div className="font-mono text-mint inline-flex justify-center items-center gap-1">
                <Target size={12} />
                <h1>You</h1>
              </div>
            </div>
            {levels.map((l, i) => (
              <div
                key={i}
                className="mx-3 mt-4 border border-line px-6 py-4 rounded-2xl bg-surface flex justify-between"
              >
                <div className="inline-flex justify-center items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center font-mono text-paper-dim text-2xl rounded-full bg-surface2  border border-line">
                    {l.icon}
                  </span>
                  <h1 className="font-mono font-bold text-paper-dim">
                    {l.level}
                  </h1>
                </div>
                <div className="font-mono text-paper-dim inline-flex justify-center items-center gap-1">
                  <Lock size={12} />
                </div>
              </div>
            ))}
          </div>

          <div className="min-w-0 grid gap-6 lg:grid-rows-2">
            <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-6 py-8 gap-4">
              <h1 className="font-mono text-paper text-xl sm:text-xl lg:text-2xl font-bold tracking-wide">
                Milestones
              </h1>

              <p className="mt-1 mb-8 text-paper-dim text-base sm:text-md lg:text-lg tracking-wide">
                Unlock badges as you contribute.
              </p>

              {/* Honeycomb badges — single row, no wrap, scrolls */}
              <div className="flex flex-nowrap gap-6 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [scrollbar-color:var(--color-line)_transparent]">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
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

                    <span className="text-center text-[8px] font-mono text-paper-dim w-16 truncate">
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Milestone detail cards — stacked normally below */}
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-6 py-4 w-full">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-surface2 text-mint">
                    <MessageSquarePlus size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-semibold text-paper mr-auto">
                        First Question
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-mint">
                        <Check size={14} />
                        <span>Unlocked</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-paper-dim">
                      Ask your first question
                    </p>
                    <div className="h-2 rounded-full bg-line my-3 overflow-hidden">
                      <div className="h-full w-[100%] rounded-full bg-gradient-to-r from-mint-dim to-mint"></div>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-sm text-paper-dim">Completed</h1>
                      <h1 className="text-sm text-mint">+5 XP</h1>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-6 py-4 w-full">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-surface2 text-paper-dim">
                    <Lock size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-semibold text-paper-dim mr-auto">
                        Helper
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-paper-dim">
                        <Lock size={14} />
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-paper-dim">
                      Ask your first question
                    </p>
                    <div className="h-2 rounded-full bg-line my-3 overflow-hidden">
                      <div className="h-full w-[10%] rounded-full bg-gray-600"></div>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-sm text-paper-dim">1/5</h1>
                      <h1 className="text-sm text-paper-dim">+5 XP</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 border border-line bg-bg2 rounded-2xl px-10 py-8 gap-4">
              <h1 className="font-bold font-mono text-4xl tracking-wide text-paper mb-4">
                XP comes from real contribution
              </h1>
              <ul className="space-y-6 text-paper-dim text-lg">
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Earn <span className="font-semibold text-mint">3 XP</span> for
                  every question you ask.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Earn <span className="font-semibold text-mint">5 XP</span> for
                  every answer you post.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Receive <span className="font-semibold text-mint">2 XP</span>{" "}
                  for every upvote on your answers.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Gain <span className="font-semibold text-mint">1 XP</span> for
                  each DevAI usage.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Build XP combos through consistent daily contributions.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-mint">
                  Unlock exclusive badges as you reach important milestones.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-mint">
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