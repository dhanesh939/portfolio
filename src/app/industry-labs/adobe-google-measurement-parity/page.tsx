import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Adobe + Google Measurement Parity | ${siteConfig.name}`,
  description: "A framework for aligning Adobe Analytics, CJA, GA4, GTM, BigQuery, and reporting definitions.",
};

export default function LabTwoPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Industry Lab</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Adobe + Google Measurement Parity Framework</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A model for aligning Adobe Analytics, CJA, GA4, GTM, BigQuery, and reporting definitions so teams can make consistent decisions.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Business problem" title="Adobe and Google systems disagree" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            When Adobe and Google systems use different event names, dimensions, or definitions, teams lose trust in reporting and make conflicting decisions.
          </p>
        </Card>
        <Card>
          <SectionHeader eyebrow="Why it matters" title="Measurement parity creates decision confidence" />
          <p className="mt-4 text-sm leading-8 text-slate-400">
            When Adobe and Google systems disagree, teams lose trust. Measurement parity creates consistent decision-making across marketing, analytics, and executive reporting.
          </p>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="Reference architecture" title="A comparison model for shared definitions" />
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-slate-300">
            <thead>
              <tr className="border-b border-white/10 text-slate-200">
                <th className="py-3 pr-4">Adobe concept</th>
                <th className="py-3 pr-4">GA4 / Google concept</th>
                <th className="py-3">Use in reporting</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Adobe event</td>
                <td className="py-3 pr-4">GA4 event</td>
                <td className="py-3">Shared canonical event name</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">eVar/prop</td>
                <td className="py-3 pr-4">GA4 parameter</td>
                <td className="py-3">Mapped in a governance layer</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Adobe classification</td>
                <td className="py-3 pr-4">BigQuery dimension table</td>
                <td className="py-3">Aligned reference dimensions</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Adobe segment</td>
                <td className="py-3 pr-4">GA4 audience</td>
                <td className="py-3">Shared audience logic</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">CJA metric</td>
                <td className="py-3 pr-4">Looker metric</td>
                <td className="py-3">Metric definitions housed in one model</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Adobe workspace report</td>
                <td className="py-3 pr-4">Looker/BigQuery report</td>
                <td className="py-3">Executive reporting from the same source of truth</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <SectionHeader eyebrow="Key decisions" title="How this framework is applied" />
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
          <li>Create a canonical event taxonomy for both Adobe and Google-based systems.</li>
          <li>Document naming, definitions, and attribution assumptions.</li>
          <li>Use BigQuery or a semantic layer to reconcile metrics across platforms.</li>
          <li>Keep governance visible to both technical and business teams.</li>
        </ul>
      </Card>

      <CTASection title="Need a parity model for your analytics stack?" description="I can help define a naming framework, mapping plan, and reporting alignment strategy for Adobe and Google environments." href="/contact" buttonLabel="Contact Dhanesh" />
    </main>
  );
}
