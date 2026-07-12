import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa6";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Levels & XP", href: "#level" },
  ],
  Connect: [
    { label: "Portfolio", href: "https://jeyasurya.vercel.app" },
    { label: "GitHub", href: "https://github.com/Jeyasurya23" },
    { label: "Contact", href: "mailto:jeyasurya0100@gmail.com" },
  ],
};

const socials = [
  { icon: <FaGithub size={16} />, href: "https://github.com/Jeyasurya23", label: "GitHub" },
  { icon: <FaLinkedin size={16} />, href: "https://linkedin.com/in/jeyasurya-g", label: "LinkedIn" },
  { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/jeyasurya_dev/", label: "Instagram" },
  { icon: <FaEnvelope size={16} />, href: "mailto:jeyasurya0100@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 min-w-0 pt-8 pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-mint/40 bg-surface text-mint font-mono text-sm">
                {"</>"}
              </span>
              <span className="font-mono text-lg font-bold text-paper tracking-wide">
                DevThing
              </span>
            </div>

            <p className="mt-4 max-w-xs text-paper-dim text-sm leading-relaxed tracking-wide">
              A developer community Q&amp;A platform. Built solo by a developer
              who wanted a better place to ask, answer, and grow.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-paper-dim transition-all duration-200 hover:border-mint/40 hover:text-mint hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="min-w-0">
              <h3 className="font-mono text-xs uppercase tracking-widest text-paper-dim">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-mono text-sm text-paper-dim transition-colors duration-200 hover:text-mint"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 min-w-0 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-paper-dim tracking-wide">
            © {year} DevThing. Built by{" "}
            <a
              href="https://jeyasurya.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim hover:text-mint transition-colors duration-200"
            >
              Jeyasurya
            </a>
            .
          </p>

          <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
            <span className="font-mono text-xs text-paper-dim tracking-wide">
              MVP · actively evolving
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}