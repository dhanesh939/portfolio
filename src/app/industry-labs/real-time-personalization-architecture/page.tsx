import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Real-Time Personalization Architecture | ${siteConfig.name}`,
  description: "A practical view of how RT-CDP, AJO, Adobe Target, analytics, and customer profiles work together.",
};

export default function LabThreePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Industry Lab</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Real-Time Personalization Architecture</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A practical view of how real-time personalization can work across Adobe tools, identity layers, decisioning engines, and measurement loops.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Business problem" title="Personalization is often treated as a front-end feature" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            In many organizations, experimentation and personalization live in separate tools and data flows. That creates delays, weak segmentation, and poor measurement of business outcomes.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="Why it matters" title="Personalization is a governed loop" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            Personalization is not just a front-end experience. It is a governed loop between behavior, identity, decisioning, delivery, and measurement.
          </p>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="Reference architecture" title="Behavior to activation flow" />
        <p className="mt-4 text-sm leading-8 text-slate-400">
          Behavior event → consent check → AEP profile update → RT-CDP audience qualification → AJO journey decision → Target onsite personalization → CJA/Analytics measurement loop
        </p>
      </Card>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Key decisions" title="Priority considerations" />
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <li>Ensure personal data is consent-aware before activation.</li>
            <li>Use profile enrichment to support both real-time and batch decisioning.</li>
            <li>Connect audience qualification to measurable business outcomes.</li>
            <li>Measure the impact of personalization on conversion, retention, and engagement.</li>
          </ul>
        </Card>
        <Card>
          <SectionHeader eyebrow="Stack involved" title="Core platforms" />
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <li>Adobe Experience Platform</li>
            <li>Real-Time CDP</li>
            <li>Adobe Journey Optimizer</li>
            <li>Adobe Target</li>
            <li>Customer Journey Analytics</li>
          </ul>
        </Card>
      </section>

      <CTASection title="Need a personalization strategy for your stack?" description="I can help design a practical architecture that connects identity, consent, activation, and measurement without overcomplicating the system." href="/work-with-me" buttonLabel="Explore Consulting" />
    </main>
  );
}
