import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Dhanesh Patel | Customer Intelligence & Martech Architect",
  description: "Customer intelligence and martech architect focused on Adobe Experience Cloud, Google, customer data, personalization, and AI-ready systems.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_40%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          I help enterprise teams turn complex customer data and measurement problems into systems people can trust.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My work sits at the intersection of Adobe Experience Cloud, Google marketing and data tools, customer data architecture, consent-aware measurement, customer journey analytics, personalization, and AI-ready systems. I bring a technical foundation in engineering and development into enterprise analytics and martech strategy, with a focus on clarity, governance, and business impact.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/industry-labs">Explore Labs</Button>
          <Button href="/resume-director-enterprise-customer-intelligence-architecture" variant="secondary">View Resume</Button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="How I think" title="Root-cause problem solver" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            I enjoy complex debugging, connecting business and technical teams, and designing clean requirements that can scale across enterprises. The strongest systems are not just implemented; they are understood, governed, and maintained.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="What I care about" title="Trust, clarity, and usability" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            I care about measurement that people trust, customer data that is usable, and architecture that helps teams make better decisions rather than simply collect more data.
          </p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Where I create value" title="Enterprise translator" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            I bridge engineering, analytics, marketing, data, privacy, and executive stakeholders. My value comes from translating messy business questions into practical technical architecture and clear implementation standards.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="What I am building toward" title="AI-ready customer intelligence" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            The future of marketing and analytics depends on a better customer data foundation. I am building toward measurement systems that are governed, composable, and ready for personalization and AI-driven experiences.
          </p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.88),rgba(2,6,23,0.94))] p-8 shadow-[0_24px_70px_rgba(2,6,23,0.24)] sm:p-10">
          <SectionHeader
            eyebrow="Beyond the work"
            title="The people and values that keep me grounded."
          />
          <div className="mt-4 space-y-4">
            <p className="text-sm leading-8 text-slate-400">
              Outside of work, my life is centered around family, learning, and building a better future. My family keeps me grounded and reminds me why clarity, trust, ownership, and long-term thinking matter.
            </p>
            <p className="text-sm leading-8 text-slate-400">
              That same mindset carries into my professional work. Whether I am solving a complex analytics issue, building a measurement strategy, or helping teams align around customer data, I try to bring patience, responsibility, and a practical focus on outcomes.
            </p>
            <p className="text-sm leading-8 text-slate-300">
              For me, good systems are not just about technology - they are about creating stability, trust, and better decisions for the people who depend on them.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-white">Family</p>
              <p className="mt-1 text-xs text-slate-400">Grounded by the people who matter most.</p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-white">Growth</p>
              <p className="mt-1 text-xs text-slate-400">Always learning, improving, and building toward the next level.</p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-white">Ownership</p>
              <p className="mt-1 text-xs text-slate-400">Focused on responsibility, trust, and long-term value.</p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/#how-i-work" variant="secondary">Learn how I work</Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(2,6,23,0.2)] sm:col-span-2">
            <img
              src="/gallery-01.jpg"
              alt="Dhanesh Patel and spouse at an event"
              className="h-[320px] w-full object-contain object-center p-3 transition duration-300 hover:scale-[1.01]"
            />
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(2,6,23,0.18)]">
            <img
              src="/gallery-02.jpg"
              alt="Dhanesh Patel with family"
              className="h-[300px] w-full object-cover object-center transition duration-300 hover:scale-[1.01]"
            />
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(2,6,23,0.18)]">
            <img
              src="/gallery-04.jpg"
              alt="Family moment outside of work"
              className="h-[300px] w-full object-cover object-center transition duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      <CTASection title="Ready to discuss architecture, consulting, or a senior role?" description="I work with teams that need strategic clarity and practical implementation depth across Adobe, Google, customer data, and AI-readiness." href="/contact" buttonLabel="Contact Dhanesh" />
    </main>
  );
}
