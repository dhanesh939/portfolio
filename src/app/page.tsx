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
  title: `Dhanesh Patel | Director, Enterprise Customer Intelligence Architecture`,
  description:
    "Director-level customer intelligence and martech architecture leader helping enterprise brands design trusted customer data systems across Adobe Experience Cloud, Google, analytics, consent, personalization, and AI-readiness.",
  openGraph: {
    title: `Dhanesh Patel | Director, Enterprise Customer Intelligence Architecture`,
    description: siteConfig.description,
    type: "website",
    url: "https://dhaneshpatel.com",
    images: [{ url: "/og-image.svg" }],
  },
};

const proofOfFitCards = [
  "Adobe Analytics Architect Expert",
  "Enterprise consulting background across automotive, banking, telecom, ecommerce, retail, healthcare, insurance, and digital products",
  "Adobe + Google measurement architecture across Adobe Analytics, Launch, Web SDK concepts, GA4, GTM, BigQuery, consent, and reporting governance",
  "Customer intelligence architecture positioning across AEP, CJA, RT-CDP, AJO, Target, identity, data quality, and activation readiness",
  "Strong technical foundation in JavaScript, data layer, browser debugging, QA, requirements translation, and implementation governance",
  "Open to Director-level roles, architecture leadership, consulting, advisory, and modernization roadmaps",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Hero
        eyebrow="Director, Enterprise Customer Intelligence Architecture"
        title="Director, Enterprise Customer Intelligence Architecture"
        headline="I help enterprise brands turn fragmented digital behavior into trusted customer intelligence."
        intro="I design customer data, measurement, journey analytics, consent, identity, personalization, and activation systems across Adobe Experience Cloud and Google’s marketing and data stack. My work helps teams move from disconnected tracking and inconsistent reporting to governed, AI-ready customer data that supports better decisions and scalable activation."
        buttons={[
          { label: "Director Resume", href: "/resume-director-enterprise-customer-intelligence-architecture" },
          { label: "Explore Industry Labs", href: "/industry-labs" },
          { label: "Work With Me", href: "/work-with-me" },
        ]}
        proofLine="Director-level customer intelligence & martech architecture · Adobe Analytics Architect Expert · Dallas / Remote"
      />

      <ProofBar items={proofItems} />

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Proof of fit"
          title="Proof of fit for senior Adobe, Google, martech, and customer data roles"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {proofOfFitCards.map((item) => (
            <Card key={item}>
              <p className="text-sm leading-7 text-slate-400">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="What recruiters should know"
          title="Built for the problems enterprise teams are hiring for"
          subtitle="This is the language of Adobe, AEP, CJA, RT-CDP, martech, measurement modernization, and customer data leadership."
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
            <span>Collect</span><span>→</span><span>Govern</span><span>→</span><span>Stitch</span><span>→</span><span>Analyze</span><span>→</span><span>Activate</span><span>→</span><span>Optimize</span>
          </div>
          <FrameworkFlow steps={frameworkSteps} />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Industry Labs"
          title="Public strategy studies and reference architectures"
          subtitle="These are not confidential client case studies. They are Director-level thought leadership artifacts that show how I approach modern customer data problems."
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
        <SectionHeader eyebrow="Stack" title="The stack behind trusted customer intelligence" subtitle="Adobe, Google, customer data architecture, analytics engineering, and governance all work best when they are connected to one operating model." />
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
              I bring a technical foundation in engineering and development into enterprise analytics, martech, and customer intelligence strategy. My work is focused on helping organizations design measurement systems that are trusted, governed, and ready for personalization and AI-driven experiences.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Button href="/about" variant="secondary">Read About Dhanesh</Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Available for Director-level roles, consulting, and advisory work"
        description="If your team needs a senior leader to modernize customer data, measurement, Adobe + Google architecture, AEP/CJA readiness, or AI-ready personalization strategy, I would be glad to connect."
        href="/work-with-me"
        buttonLabel="Work With Me"
      />
    </main>
  );
}
