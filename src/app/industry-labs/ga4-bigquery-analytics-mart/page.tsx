import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `GA4 to BigQuery Analytics Mart | ${siteConfig.name}`,
  description: "A strategy for transforming raw GA4 event data into reliable customer, session, and conversion reporting layers.",
};

export default function LabFourPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Industry Lab</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">GA4 to BigQuery Analytics Mart</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A strategy for transforming raw GA4 event data into business-ready reporting layers for customers, sessions, conversions, and acquisition performance.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Business problem" title="The GA4 UI is not enough" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            The GA4 UI is useful for basic reporting, but it does not provide the depth, flexibility, and control needed for enterprise analytics modeling and governance.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="Why it matters" title="BigQuery unlocks deeper reporting" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            The GA4 UI is not enough for advanced enterprise analytics. BigQuery unlocks deeper modeling, quality control, and business-ready reporting.
          </p>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="Reference architecture" title="From raw events to business model" />
        <p className="mt-4 text-sm leading-8 text-slate-400">
          GA4 events → BigQuery export → event cleaning → session modeling → user/customer modeling → conversion mart → Looker dashboard → business insights
        </p>
      </Card>

      <Card>
        <SectionHeader eyebrow="Example conceptual tables" title="A resilient analytics mart structure" />
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-slate-300">
            <thead>
              <tr className="border-b border-white/10 text-slate-200">
                <th className="py-3 pr-4">Table</th>
                <th className="py-3">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">raw_events</td>
                <td className="py-3">Unaltered export of GA4 event data</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">cleaned_events</td>
                <td className="py-3">Cleaned and standardized event records</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">sessions</td>
                <td className="py-3">Session-level reporting and attribution-ready structure</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">users</td>
                <td className="py-3">User and customer-level rollups</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">conversions</td>
                <td className="py-3">Tracked conversion outcomes and funnel performance</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">acquisition_performance</td>
                <td className="py-3">Channel and campaign performance reporting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <SectionHeader eyebrow="Measurement strategy" title="From raw data to business insight" />
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
          <li>Clean and standardize event names and parameters.</li>
          <li>Model sessions, users, and conversions with explicit logic.</li>
          <li>Create reusable marts for marketing, product, and executive reporting.</li>
          <li>Use Looker or BI tools on top of the mart rather than raw event exports.</li>
        </ul>
      </Card>

      <CTASection title="Need a data mart strategy for your analytics estate?" description="I can help design an implementation plan that makes GA4 data usable for broader reporting, governance, and business insight." href="/contact" buttonLabel="Contact Dhanesh" />
    </main>
  );
}
