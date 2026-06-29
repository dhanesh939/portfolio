import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `AI-Ready Customer Intelligence Blueprint | ${siteConfig.name}`,
  description: "Reference architecture for connecting collection, governance, identity, analytics, activation, and AI-readiness.",
};

export default function LabOnePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Industry Lab</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">AI-Ready Customer Intelligence Blueprint</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A reference architecture for connecting data collection, consent, identity, analytics, activation, and AI-readiness across modern enterprise stacks.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Business problem" title="Data is fragmented and hard to trust" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            Enterprises often collect signals from web, apps, CRM, media, service, and offline systems without a common governance model. That creates inconsistent measurement, weak personalization, and low-confidence AI systems.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="Why it matters" title="AI starts with trusted data" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            AI does not start with a model. It starts with trusted, governed, well-structured customer data. Without that layer, AI outputs become brittle and hard to explain.
          </p>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="Reference architecture" title="A connected customer intelligence layer" />
        <p className="mt-4 text-sm leading-8 text-slate-400">
          Web/App/CRM/Media/Offline → Consent & Governance → Adobe Web SDK / GTM → AEP / GA4 / BigQuery → Identity & Profile Layer → CJA / Adobe Analytics / Looker → RT-CDP / AJO / Target → AI-assisted insights and personalization
        </p>
      </Card>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Key decisions" title="Architecture choices that matter" />
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <li>Standardize event taxonomy and naming early.</li>
            <li>Design consent and governance into the data pipeline from the start.</li>
            <li>Use identity and profile layers to create a durable customer view.</li>
            <li>Keep analytics, activation, and AI systems connected to the same governing model.</li>
          </ul>
        </Card>
        <Card>
          <SectionHeader eyebrow="Stack involved" title="Tools and platforms" />
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <li>Adobe Web SDK / GTM / Adobe Experience Platform</li>
            <li>GA4 / BigQuery / Looker</li>
            <li>Customer Journey Analytics / Adobe Analytics</li>
            <li>RT-CDP / Adobe Journey Optimizer / Adobe Target</li>
          </ul>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="What this demonstrates" title="A practical enterprise blueprint" />
        <p className="mt-4 text-sm leading-8 text-slate-400">
          This lab demonstrates how organizations can move from fragmented tracking to a connected architecture that supports measurement, personalization, governance, and AI-readiness in a way that is both strategic and operational.
        </p>
      </Card>

      <CTASection title="Want to turn this into a roadmap for your team?" description="I can help frame this into an architecture review, implementation model, or executive strategy conversation." href="/work-with-me" buttonLabel="Work With Me" />
    </main>
  );
}
