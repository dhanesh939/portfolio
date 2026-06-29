import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "Dhanesh Patel's story as a measurement architect and customer intelligence strategist.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_40%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          I turn unclear digital data problems into systems people can trust.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Dhanesh began with an engineering and software development mindset, then moved into analytics and martech because he was drawn to invisible problems: broken data, unclear requirements, inconsistent tracking, and reports that did not match user behavior.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/industry-labs">Explore Labs</Button>
          <Button href="/resume" variant="secondary">View Resume</Button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="How I think" title="Root-cause problem solver" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            I enjoy complex debugging, connecting business and technical teams, and designing clean requirements that can scale across organizations. The best systems are not just implemented; they are understood, governed, and maintained.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="What I care about" title="Trust, clarity, and usability" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            I care about measurement that people trust, customer data that is usable, and architecture that helps teams make better decisions rather than just collect more data.
          </p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Where I create value" title="Enterprise translator" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            I bridge engineering, analytics, marketing, data, and executive stakeholders. My value comes from translating messy business questions into practical technical architecture and clear implementation standards.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="What I am building toward" title="AI-ready customer intelligence" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            The future of marketing and analytics depends on a better customer data foundation. I am building toward measurement systems that are governed, composable, and ready for personalization and AI-driven experiences.
          </p>
        </Card>
      </section>

      <CTASection title="Ready to discuss architecture, consulting, or a senior role?" description="I work with teams that need strategic clarity and practical implementation depth across Adobe, Google, customer data, and AI-readiness." href="/contact" buttonLabel="Contact Dhanesh" />
    </main>
  );
}
