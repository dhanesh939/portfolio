import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { IndustryLabCard } from "@/components/IndustryLabCard";
import { SectionHeader } from "@/components/SectionHeader";
import { labsPreview, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Industry Labs | Adobe, Google & AI-Ready Customer Data`,
  description: "Public strategy labs and reference architectures for Adobe Experience Cloud, Google analytics, customer data platforms, personalization, measurement governance, and AI-ready customer intelligence.",
};

export default function IndustryLabsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <SectionHeader
          eyebrow="Industry Labs"
          title="Director-level strategy studies and reference architectures"
          subtitle="These are public thinking artifacts for enterprise customer intelligence, Adobe + Google measurement modernization, consent-aware data design, personalization, and AI-ready customer data systems."
        />
        <Card className="mt-8">
          <p className="text-sm leading-8 text-slate-400">
            These are public learning and strategy artifacts, not confidential client case studies. They are designed to demonstrate how I approach modern customer data problems at the enterprise level.
          </p>
        </Card>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {labsPreview.map((lab) => (
          <IndustryLabCard key={lab.title} title={lab.title} summary={lab.summary} href={lab.href} />
        ))}
      </section>

      <CTASection title="Need a custom strategy lens for your team?" description="I can help translate these concepts into an architecture roadmap, audit, or consulting engagement." href="/work-with-me" buttonLabel="Work With Me" />
    </main>
  );
}
