import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description: "Recruiter-friendly resume page for Dhanesh Patel's enterprise customer intelligence architecture profile.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Resume</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Dhanesh Patel — Enterprise Customer Intelligence Architect</h1>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
          <span>Location: Dallas, TX / Remote</span>
          <span>•</span>
          <span>Current role: Associate Director at Razorfish</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#">Download Resume PDF</Button>
          <Button href="/contact" variant="secondary">Start a Conversation</Button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <SectionHeader eyebrow="Target roles" title="Open to senior architecture and leadership opportunities" />
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
            <li>Enterprise Customer Intelligence Architect</li>
            <li>Martech Solutions Architect</li>
            <li>Adobe Experience Cloud Architect</li>
            <li>Digital Analytics Architect</li>
            <li>Customer Data Platform Architect</li>
            <li>CJA / AEP Consultant</li>
            <li>Measurement Strategy Lead</li>
            <li>Analytics Implementation Lead</li>
            <li>AI-Ready Customer Data Architect</li>
          </ul>
        </Card>
        <Card>
          <SectionHeader eyebrow="Compensation" title="Target compensation" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            $200K+ base or $220K–$300K total compensation depending on scope, title, bonus/equity, remote flexibility, and leadership expectations.
          </p>
          <p className="mt-6 text-sm leading-8 text-slate-400">
            Also open to consulting/advisory projects involving analytics audits, Adobe/Google measurement modernization, CJA/AEP readiness, data layer architecture, consent-aware measurement, and personalization strategy.
          </p>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="Core summary" title="Enterprise customer intelligence and martech architecture leader" />
        <p className="mt-4 text-sm leading-8 text-slate-400">
          Enterprise customer intelligence and martech architecture leader with experience across Adobe Analytics, Adobe Tags, Web SDK, GA4, GTM, data layer architecture, consent-aware measurement, and enterprise analytics implementation. Focused on helping organizations build trusted, governed, AI-ready customer data systems across analytics, journey intelligence, activation, and personalization.
        </p>
      </Card>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Certifications" title="Credentials" />
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <li>Adobe Analytics Architect Expert</li>
            <li>Additional certifications to be added</li>
          </ul>
        </Card>
        <Card>
          <SectionHeader eyebrow="Industries" title="Experience across enterprise sectors" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            Automotive, banking, telecom, ecommerce, retail, healthcare, insurance, and digital product environments.
          </p>
        </Card>
      </section>
    </main>
  );
}
