import React from "react";
import { Sparkles, MoveUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="items-center justify-center relative z-10 grid grid-cols-1 gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:mt-30 lg:mb-25 lg:pb-50">
      <div>
        <p className="text-md text-mint-dim font-mono tracking-wider mb-4">
          // AI-powered developer community · MVP
        </p>
        <h1 className="text-6xl text-paper font-mono font-bold tracking-wide mb-3">
          Stuck? Your<br /> <span className="text-mint">Community's</span>{" "}
            got you.
        </h1>
        <p className="text-xl text-paper-dim mb-10">
          Post your question and get real answers from real developers — upvoted, battle-tested, and backed by an AI assist when you need speed.
        </p>
        <a
          href="https://devthing-api.duckdns.org/downloads/devthing.apk"
          className="rounded-2xl bg-mint px-6 py-4 text-xl font-bold tracking-wider text-black transition hover:bg-mint-soft"
        >
          Download APK
        </a>
        <p className="mt-4.5 py-2 text-sm text-paper-dim tracking-wider">
          Free to Download ● Android ● MVP
        </p>
        <p className="text-xs text-paper-dim/70 tracking-wide">
          Not on Play Store yet — Android may ask you to confirm the install, that's normal for early-access apps.
        </p>
      </div>
      <div className="grid gap-3.5 p-4.5 bg-gradient-to-b from-[rgba(30,43,36,0.9)] to-[hsla(150,18%,11%,1)] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] rounded-xl">
        <div className="px-3.5 py-4 bg-surface border-line rounded-2xl border-2 border-line">
          <div className="flex items-center gap-2 font-mono text-sm text-paper-dim mb-2 ">
            <span className="w-5.5 h-5.5 flex items-center justify-center font-mono text-paper-dim rounded-full bg-line">
              J
            </span>
            jeyasurya_dev asked ● 10m ago
          </div>
          <p className="mb-1">
            Why does useEffect run twice in React 18 dev mode?
          </p>
          <p className="text-paper-dim text-sm mb-2">
            I'm using React 18, and my useEffect runs twice in development,
            causing duplicate API calls and repeated initialization. Is this
            expected behavior with Strict Mode, and how can I avoid duplicate
            side effects while developing?
          </p>
          <div className="flex gap-1.5">
            <span className="font-mono text-xs text-mint-dim bg-[rgba(95,227,176,0.08)] border border-[rgba(95,227,176,0.2)] px-2 py-[2px] rounded-[5px]">
              REACT
            </span>
            <span className="font-mono text-xs text-mint-dim bg-[rgba(95,227,176,0.08)] border border-[rgba(95,227,176,0.2)] px-2 py-[2px] rounded-[5px]">
              JAVASCRIPT
            </span>
          </div>
        </div>
        <div className="px-3.5 py-4 bg-surface border-line rounded-2xl border-1 border-mint-dim">
          <div className="flex items-center gap-2 font-mono text-lg text-mint mb-2 ">
            <span className="w-6 h-6 flex items-center justify-center font-mono text-mint rounded-full bg-line">
              <Sparkles size={10} />
            </span>
            DevAI answered instantly
          </div>
          <p className="text-paper-dim text-sm mb-2">
            React 18's Strict Mode intentionally double-invokes effects in
            development to help you catch missing cleanup functions. It won't
            happen in production builds…
          </p>     
        </div>
        <div className="px-3.5 py-4 bg-surface border-line rounded-2xl border-2 border-line">
          <div className="flex items-center gap-2 font-mono text-sm text-paper-dim mb-2 ">
            <span className="w-5.5 h-5.5 flex items-center justify-center font-mono text-paper-dim rounded-full bg-line">
              U
            </span>
            user_10 asked ● 2m ago
          </div>
          <p className="text-paper-dim text-sm mb-2">
            I'm using React 18, and my useEffect runs twice in development,
            causing duplicate API calls and repeated initialization. Is this
            expected behavior with Strict Mode, and how can I avoid duplicate
            side effects while developing?
          </p>
          <div className="flex gap-1 mt-3 font-mono text-xs text-paper-dim">
            <span className="text-mint">⬆</span>
            1 upvotes
          </div>
        </div>
      </div>
    </section>
  );
}
