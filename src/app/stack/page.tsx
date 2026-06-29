import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { StackGrid } from "@/components/StackGrid";
import { siteConfig, stackCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: `Stack | ${siteConfig.name}`,
  description: "A view of the Adobe, Google, data, and governance stack that supports customer intelligence architecture.",
};

export default function StackPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <SectionHeader
          eyebrow="Stack"
          title="The stack behind trusted customer intelligence"
          subtitle="Across Adobe Experience Cloud, Google marketing tools, customer data systems, analytics engineering, and governance, the objective is the same: make data reliable, useful, and ready for activation."
        />
      </section>

      <StackGrid categories={stackCategories} />

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="text-2xl font-semibold text-white">Customer Journey Analytics</h3>
          <p className="mt-3 text-sm leading-8 text-slate-400">
            Used for cross-channel journey analysis, flexible data views, and deeper analysis on top of Adobe Experience Platform datasets.
          </p>
        </Card>
        <Card>
          <h3 className="text-2xl font-semibold text-white">Real-Time CDP</h3>
          <p className="mt-3 text-sm leading-8 text-slate-400">
            Used to unify customer profiles, build audiences, and activate segments across destinations.
          </p>
        </Card>
        <Card>
          <h3 className="text-2xl font-semibold text-white">Adobe Journey Optimizer</h3>
          <p className="mt-3 text-sm leading-8 text-slate-400">
            Used for journey orchestration and real-time customer engagement.
          </p>
        </Card>
        <Card>
          <h3 className="text-2xl font-semibold text-white">Adobe Target</h3>
          <p className="mt-3 text-sm leading-8 text-slate-400">
            Used for experimentation, personalization, and optimization.
          </p>
        </Card>
        <Card>
          <h3 className="text-2xl font-semibold text-white">GA4 + BigQuery</h3>
          <p className="mt-3 text-sm leading-8 text-slate-400">
            Used for event-level data export, custom modeling, and advanced analysis.
          </p>
        </Card>
        <Card>
          <h3 className="text-2xl font-semibold text-white">AI-Ready Data Systems</h3>
          <p className="mt-3 text-sm leading-8 text-slate-400">
            Used to ensure data quality, standardization, and governance are in place before AI models or personalization engines are trusted.
          </p>
        </Card>
      </section>
    </main>
  );
}
