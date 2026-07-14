import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description: "Download the resume and review Dhanesh Patel's enterprise customer intelligence leadership story.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Resume</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Dhanesh Patel — Director at Razorfish</h1>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
          <span>Location: Dallas, TX / Remote</span>
          <span>•</span>
          <span>Current role: Director at Razorfish</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/Dhanesh-Patel-Resume.pdf" download>
            Download Resume PDF
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Conversation
          </Button>
        </div>
      </section>

      <Card>
        <SectionHeader eyebrow="Professional summary" title="Trusted partner for enterprise customer intelligence strategy and delivery" />
        <p className="mt-4 text-sm leading-8 text-slate-400">
          Director-level analytics and customer intelligence architect with expertise delivering Adobe Experience Cloud and Google measurement programs for enterprise teams. I help marketing, analytics, and technology leaders unify tracking, governance, consent, identity, and personalization into AI-ready customer data systems that improve experience, measurement, and activation.
        </p>
      </Card>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Core strengths" title="What I bring to enterprise teams" />
          <ul className="mt-5 space-y-3 text-sm leading-8 text-slate-400">
            <li>Adobe Analytics, Adobe Tags, Web SDK, and AEP strategy</li>
            <li>GA4, GTM, server-side measurement, and data governance</li>
            <li>Consent-aware tracking and customer data layer architecture</li>
            <li>Measurement strategy, KPI definition, and reporting frameworks</li>
            <li>Personalization readiness and journey intelligence enablement</li>
            <li>Leadership for consulting, implementation, and team enablement</li>
          </ul>
        </Card>
        <Card>
          <SectionHeader eyebrow="Recent highlights" title="Enterprise impact examples" />
          <ul className="mt-5 space-y-3 text-sm leading-8 text-slate-400">
            <li>Directed architecture and delivery for enterprise analytics programs at Razorfish.</li>
            <li>Helped clients migrate measurement and consent systems onto Adobe and Google platforms.</li>
            <li>Designed customer intelligence flows for personalization, journey analytics, and reporting.</li>
            <li>Advised stakeholders on governance, identity, and data quality for trusted customer data.</li>
          </ul>
        </Card>
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
            Also available for advisory, consulting, and architecture reviews focused on analytics audits, measurement modernization, consent, and personalization strategy.
          </p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Certifications" title="Credentials" />
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <li>Adobe Analytics Architect Expert</li>
            <li>Additional certifications to be added</li>
          </ul>
        </Card>
        <Card>
          <SectionHeader eyebrow="Industry experience" title="Enterprise experience" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            Automotive, banking, telecom, ecommerce, retail, healthcare, insurance, and digital product environments.
          </p>
        </Card>
      </section>
    </main>
  );
}
