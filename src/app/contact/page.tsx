import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: "Contact Dhanesh Patel for full-time, consulting, and advisory work.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <SectionHeader
          eyebrow="Contact"
          title="Open to full-time roles, consulting, advisory work, and architecture reviews"
          subtitle="For now, reach out by email or LinkedIn. A contact form will be wired up soon."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h3 className="text-2xl font-semibold text-white">Direct contact</h3>
          <ul className="mt-5 space-y-4 text-sm leading-8 text-slate-400">
            <li>Email: <Link href={`mailto:${siteConfig.email}`} className="text-cyan-300">{siteConfig.email}</Link></li>
            <li>
              LinkedIn: <Link href={siteConfig.linkedin} className="text-cyan-300" target="_blank" rel="noreferrer">
                {siteConfig.linkedin}
              </Link>
            </li>
            <li>Location: Dallas, TX / Remote</li>
          </ul>
        </Card>

        <Card>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Name</span>
                <input className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Your name" />
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Email</span>
                <input className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="you@company.com" />
              </label>
            </div>
            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Company</span>
              <input className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Company name" />
            </label>
            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Message</span>
              <textarea className="min-h-36 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Tell me about your team and what you need help with." />
            </label>
            <button className="inline-flex rounded-full border border-cyan-400/70 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20" type="button">
              Send Message
            </button>
          </form>
        </Card>
      </section>
    </main>
  );
}
