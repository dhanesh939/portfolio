import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Logo compact className="mb-5" />
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.26em] text-cyan-300">Enterprise Customer Intelligence Architect</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">Dallas, TX / Remote</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">Email: dhaneshpatel1234@gmail.com</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Navigate</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        (c) {currentYear} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
