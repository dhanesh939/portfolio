'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { navLinks, siteConfig } from "@/lib/content";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-semibold text-cyan-200">
            DP
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
            <p className="text-xs text-slate-400">{siteConfig.title}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">Hire / Contact</Button>
        </div>

        <button
          className="rounded-full border border-white/10 p-2 text-slate-300 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="text-lg">☰</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 justify-start">Hire / Contact</Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
