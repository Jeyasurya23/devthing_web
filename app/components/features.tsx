import {
  MessageSquarePlus,
  Trophy,
  ArrowBigUp,
  Sparkles,
  Award,
  LayoutDashboard,
  Search,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquarePlus size={20} />,
    label: "Ask questions",
    subTitle:
      "Post what you're stuck on and reach developers who've solved it before.",
  },
  {
    icon: <Trophy size={20} />,
    label: "Answer & earn XP",
    subTitle:
      "Help others, build your reputation, and level up while you do it.",
  },
  {
    icon: <ArrowBigUp size={20} />,
    label: "Upvotes",
    subTitle:
      "The most helpful questions and answers rise to the top, voted on by the community.",
  },
  {
    icon: <Sparkles size={20} />,
    label: "DevAI",
    subTitle:
      "Instant AI-powered coding assistance for any question, in any language.",
  },
  {
    icon: <Award size={20} />,
    label: "Achievements & badges",
    subTitle:
      "Unlock developer levels, badges, and achievements that showcase your expertise.",
  },
  {
    icon: <LayoutDashboard size={20} />,
    label: "Developer dashboard",
    subTitle:
      "Visualize your progress with a contribution heatmap, activity chart, and tech breakdown.",
  },
  {
    icon: <Search size={20} />,
    label: "Search",
    subTitle: "Find questions and technologies in seconds.",
  },
  {
    icon: <Bell size={20} />,
    label: "Real-time notifications",
    subTitle:
      "Know the moment someone answers, upvotes, or you hit a milestone.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-line py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 min-w-0">
        <h1 className="font-mono text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
          Everything a developer needs, in one place
        </h1>

        <p className="mt-3 mb-25 text-paper-dim text-base sm:text-lg lg:text-xl tracking-wide">
          Ask questions, get instant answers from DevAI, collaborate with the
          community, earn XP, and showcase your growth.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:[grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] min-w-0">
          {features.map((item) => (
            <div
              key={item.label}
              className="group min-w-0 rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-mint hover:scale-[1.03]"
            >
              <span className="mb-4 inline-flex h-10 w-10 text-mint items-center justify-center rounded-lg border border-line transition-colors duration-300 group-hover:border-mint">
                {item.icon}
              </span>

              <h3 className="font-mono text-xl font-semibold text-paper transition-colors duration-300 group-hover:text-mint">
                {item.label}
              </h3>

              <p className="mt-3 text-paper-dim leading-relaxed">
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}