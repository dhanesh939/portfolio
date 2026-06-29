import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { FrameworkFlow } from "@/components/FrameworkFlow";
import { Hero } from "@/components/Hero";
import { IndustryLabCard } from "@/components/IndustryLabCard";
import { ProofBar } from "@/components/ProofBar";
import { SectionHeader } from "@/components/SectionHeader";
import { StackGrid } from "@/components/StackGrid";
import {
  frameworkSteps,
  labsPreview,
  proofItems,
  siteConfig,
  solveCards,
  stackCategories,
} from "@/lib/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website",
    url: "https://dhaneshpatel.com",
    images: [{ url: "/og-image.svg" }],
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Hero
        eyebrow="Enterprise Customer Intelligence Architect"
        title="Enterprise Customer Intelligence Architect"
        headline="I help enterprise brands design trusted customer data systems across analytics, consent, identity, journey intelligence, personalization, and AI-readiness."
        intro="My work sits at the intersection of Adobe Experience Cloud, Google Marketing Platform, customer data architecture, measurement strategy, and personalization systems. I help teams move from fragmented tracking and disconnected reporting to governed customer intelligence that supports better decisions and AI-ready experiences."
        buttons={[
          { label: "View Industry Labs", href: "/industry-labs" },
          { label: "View Resume", href: "/resume" },
          { label: "Work With Me", href: "/work-with-me" },
        ]}
        proofLine="Associate Director at Razorfish · Adobe Analytics Architect Expert · Dallas / Remote"
      />

      <ProofBar items={proofItems} />

      <section className="space-y-6">
        <SectionHeader
          eyebrow="What I solve"
          title="The problems that quietly undermine growth, trust, and decision-making"
          subtitle="When the foundation is weak, every downstream activation and insight becomes more expensive and less trustworthy."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solveCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Signature framework"
          title="The Customer Intelligence Layer"
          subtitle="A practical framework for turning digital behavior into governed, actionable customer intelligence."
        />
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.25)] sm:p-8">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
            <span>Collect</span>
            <span>→</span>
            <span>Govern</span>
            <span>→</span>
            <span>Stitch</span>
            <span>→</span>
            <span>Analyze</span>
            <span>→</span>
            <span>Activate</span>
            <span>→</span>
            <span>Optimize</span>
          </div>
          <FrameworkFlow steps={frameworkSteps} />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Industry Labs"
          title="Public strategy studies and reference architectures"
          subtitle="These labs show how I approach big customer data, measurement, personalization, and AI-readiness problems in enterprise environments."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {labsPreview.map((lab) => (
            <IndustryLabCard key={lab.title} title={lab.title} summary={lab.summary} href={lab.href} />
          ))}
        </div>
        <div className="flex justify-start">
          <Button href="/industry-labs" variant="secondary">Explore Industry Labs</Button>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Stack" title="The tools that sit inside the customer intelligence layer" />
        <StackGrid categories={stackCategories} />
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.25)]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              I work best where business questions, technical systems, and messy data collide.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              I started from an engineering and development background, then moved into analytics because I enjoyed solving invisible problems — the kind where the website looks fine, but the data telling the business story is wrong. Today, I focus on customer intelligence: helping teams design measurement and data systems that are trusted, governed, and ready for personalization and AI-driven experiences.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Button href="/about" variant="secondary">Read About Dhanesh</Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Available for senior roles, consulting, and advisory work"
        description="If you are hiring for a senior martech, analytics, or customer data architecture leader, or need an architecture review, I would be glad to connect."
        href="/work-with-me"
        buttonLabel="Work With Me"
      />
    </main>
  );
}
