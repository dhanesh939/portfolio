import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { consultingOffers, fullTimeRoles, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Work With Me | ${siteConfig.name}`,
  description: "Full-time and consulting opportunities for enterprise customer intelligence architecture, Adobe Experience Cloud, martech modernization, and AI-ready customer data work.",
};

export default function WorkWithMePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <SectionHeader
          eyebrow="Work with me"
          title="Work with a Director-level Customer Intelligence Architect"
          subtitle="I help teams modernize customer data, measurement, analytics, personalization, and AI-readiness across Adobe and Google ecosystems."
        />
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Full-time leadership roles" title="Best fit for organizations that need someone who can bridge marketing, analytics, product, engineering, data, privacy, and executive stakeholders." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fullTimeRoles.map((role) => (
            <Card key={role}>
              <h3 className="text-xl font-semibold text-white">{role}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Consulting / advisory offers" title="Architecture reviews, audits, modernization, and roadmap support" />
        <div className="grid gap-5 lg:grid-cols-2">
          {consultingOffers.map((offer) => (
            <Card key={offer.title}>
              <h3 className="text-xl font-semibold text-white">{offer.title}</h3>
              <p className="mt-3 text-sm leading-8 text-slate-400">{offer.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <CTASection title="Start a conversation" description="If your team needs an architecture review, strategic roadmap, or senior leadership support, I would be glad to connect." href="/contact" buttonLabel="Contact Dhanesh" />
    </main>
  );
}
