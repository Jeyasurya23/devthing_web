"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Levels", href: "#level" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Feedback", href: "#feedback" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-line bg-[rgba(15,21,18,0.82)] backdrop-blur-[10px] font-mono tracking-wider">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold text-2xl font-mono text-mint"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-mint/40 bg-surface text-mint font-mono text-sm">
            {"</>"}
          </span>
          DevThing
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-lg px-4 py-2 text-paper-dim transition hover:bg-surface hover:text-mint"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://devthing-api.duckdns.org/downloads/devthing.apk"
            className="rounded-sm bg-mint px-3 py-2 text-xs font-bold tracking-wider text-black transition hover:bg-mint-soft sm:px-4 sm:py-2 sm:text-sm"
          >
            Download
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-paper-dim hover:bg-surface md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-paper-dim transition hover:bg-surface hover:text-mint"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
