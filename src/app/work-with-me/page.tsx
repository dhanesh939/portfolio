import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { consultingOffers, fullTimeRoles, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Work With Me | ${siteConfig.name}`,
  description: "Full-time and consulting opportunities for enterprise customer intelligence architecture work.",
};

export default function WorkWithMePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <SectionHeader
          eyebrow="Work with me"
          title="Trusted measurement, clean customer data, and practical architecture"
          subtitle="I partner with teams that need trusted measurement, clean customer data, and practical architecture across Adobe, Google, and AI-ready martech systems."
        />
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Full-time roles" title="Leadership and architect roles" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fullTimeRoles.map((role) => (
            <Card key={role}>
              <h3 className="text-xl font-semibold text-white">{role}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Consulting / advisory" title="Offers for modernizing measurement and customer data systems" />
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
