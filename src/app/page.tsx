import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTASection } from "@/components/CTASection";
import { FrameworkFlow } from "@/components/FrameworkFlow";
import { Hero } from "@/components/Hero";
import { ImageGallery } from "@/components/ImageGallery";
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
  title: "Dhanesh Patel | Enterprise Customer Intelligence Architect",
  description:
    "Enterprise customer intelligence architect helping enterprise teams design trusted customer data systems across Adobe Experience Cloud, Google, analytics, consent, personalization, and AI-ready data.",
  openGraph: {
    title: "Dhanesh Patel | Enterprise Customer Intelligence Architect",
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
  "Open to the right opportunity across senior roles, architecture leadership, consulting, contract work, and advisory support",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Hero
        eyebrow="ENTERPRISE CUSTOMER INTELLIGENCE ARCHITECT"
        title="Enterprise Customer Intelligence Architect"
        headline="I help enterprise teams turn fragmented digital behavior into trusted customer intelligence."
        intro="I design customer data, measurement, journey analytics, consent, identity, personalization, and activation systems across Adobe Experience Cloud and Google's marketing/data stack. My work helps teams move from disconnected tracking and inconsistent reporting to governed customer data that supports better decisions, scalable activation, and AI-ready experiences."
        buttons={[
          { label: "View Resume", href: "/resume-director-enterprise-customer-intelligence-architecture" },
          { label: "Explore Industry Labs", href: "/industry-labs" },
          { label: "Start a Conversation", href: "/contact" },
        ]}
        proofLine="Adobe Analytics Architect Expert | Adobe + Google Martech | Customer Data & Measurement Architecture | Dallas / Remote"
      />

      <ProofBar items={proofItems} />
      <ImageGallery />

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
            <span>Collect</span><span>-&gt;</span><span>Govern</span><span>-&gt;</span><span>Stitch</span><span>-&gt;</span><span>Analyze</span><span>-&gt;</span><span>Activate</span><span>-&gt;</span><span>Optimize</span>
          </div>
          <FrameworkFlow steps={frameworkSteps} />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Industry Labs"
          title="Public strategy studies and reference architectures"
          subtitle="These are not confidential client case studies. They are public thought leadership artifacts that show how I approach modern customer data problems."
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
        <SectionHeader
          eyebrow="Stack"
          title="The stack behind trusted customer intelligence"
          subtitle="Adobe, Google, customer data architecture, analytics engineering, and governance all work best when they are connected to one operating model."
        />
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
        title="Open to the right opportunity"
        description="I'm interested in senior roles, architecture leadership, consulting, contract projects, and advisory work where I can help teams improve customer data, measurement, Adobe + Google architecture, AEP/CJA readiness, personalization, or AI-ready data strategy."
        href="/work-with-me"
        buttonLabel="Start a Conversation"
      />
    </main>
  );
}
