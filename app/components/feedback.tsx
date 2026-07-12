import React from "react";

export default function Feedback() {
  return (
    <section id="feedback" className="relative z-10 border-t border-line py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 min-w-0">
        <div className="min-w-0 border border-line bg-surface rounded-2xl px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="min-w-0">
            <div className="inline-flex px-3 py-2 border border-amber-300/30 bg-[rgba(245,196,81,0.1)] rounded-2xl">
              <h3 className="text-[#F5C451] text-xs font-bold font-mono tracking-wide">
                MVP · actively evolving
              </h3>
            </div>

            <h2 className="mt-4 font-mono text-paper text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
              We&apos;re just getting started
            </h2>

            <p className="mt-3 max-w-xl text-paper-dim text-sm sm:text-base tracking-wide leading-relaxed">
              DevThing is in active MVP development new features and
              improvements ship continuously based on feedback from
              developers like you.
            </p>
          </div>

          <a
             href="mailto:jeyasurya0100@gmail.com?subject=DevThing Feedback&body=Hi Jeyasurya,%0D%0A%0D%0A"
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-mint px-6 py-3 font-bold font-mono text-lg font-semibold text-[#09101A] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Send feedback
          </a>
        </div>
      </div>
    </section>
  );
}
