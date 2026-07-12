
const howItWorks = [
  {
    number: "01",
    label: "Create your account",
    subTitle: "Sign up free with your email and set up your developer profile.",
  },
  {
    number: "02",
    label: "Ask or answer your first question",
    subTitle:
      "Get an instant DevAI answer, or share what you know with the community.",
  },
  {
    number: "03",
    label: "Earn XP and level up",
    subTitle:
      "Every contribution counts toward your level, badges, and dashboard stats.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 border-t border-line py-24 ">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h1 className="font-mono text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
          Start contributing in three simple steps
        </h1>

        <p className="mt-3 mb-25 text-paper-dim text-base sm:text-lg lg:text-xl tracking-wide">
          Create your account, get answers from DevAI or the community, and earn XP as you grow your developer profile.
        </p>

        <div className="space-y-12">
          {howItWorks.map((item) => (
            <div
              key={item.number}
              className="flex gap-5 border-b border-line pb-6"
            >
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-mint shrink-0">
                {item.number}
              </h2>

              <div>
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-paper">
                  {item.label}
                </h3>

                <p className="mt-2 text-paper-dim text-sm sm:text-base lg:text-lg leading-relaxed">
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}