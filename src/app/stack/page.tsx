import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { StackGrid } from "@/components/StackGrid";
import { stackCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: `Adobe + Google Martech Stack | Dhanesh Patel`,
  description: "Adobe Experience Cloud, AEP, CJA, RT-CDP, AJO, Target, Adobe Analytics, GA4, GTM, BigQuery, Looker, customer data architecture, and AI-ready data systems.",
};

const expandedCategories = [
  {
    title: "Adobe Experience Cloud Architecture",
    what: "Used to align measurement, identity, behavior collection, and activation across Adobe’s platform ecosystem.",
    tools: "Adobe Analytics, Adobe Tags/Launch, Adobe Web SDK, AEP, CJA, RT-CDP, AJO, Target",
    problem: "Enterprise teams need a coherent operating model for analytics, personalization, and customer data across a complex platform stack.",
    keywords: "Adobe Experience Cloud, AEP, CJA, RT-CDP, AJO, Target, solution architecture",
  },
  {
    title: "AEP Data Foundation",
    what: "Used to design XDM schemas, datasets, identity stitching, merge policies, and Real-Time Customer Profile models.",
    tools: "Adobe Experience Platform, XDM, datasets, identity resolution, Real-Time Customer Profile",
    problem: "Businesses need a governed foundation for customer intelligence before they can activate or personalize reliably.",
    keywords: "XDM schema design, identity resolution, merge policies, Real-Time Customer Profile, data governance",
  },
  {
    title: "Customer Journey Analytics",
    what: "Used for cross-channel journey analysis, flexible data views, cohort analysis, and pathing across Adobe data models.",
    tools: "Customer Journey Analytics, data views, datasets, segments, analysis workspace",
    problem: "Teams need a trusted view of customer behavior across acquisition, engagement, conversion, and retention journeys.",
    keywords: "Customer Journey Analytics, CJA, pathing, cohort analysis, cross-channel analytics",
  },
  {
    title: "RT-CDP & Audience Activation",
    what: "Used to unify profiles, build audiences, and activate segments across CRM and campaign destinations.",
    tools: "RT-CDP, audiences, destinations, CRM integrations, Salesforce, Microsoft Dynamics",
    problem: "Marketing teams need reliable customer audiences that can be activated without breaking consent or governance requirements.",
    keywords: "RT-CDP, audience activation, segmentation, CRM integration, destination strategy",
  },
  {
    title: "AJO & Journey Orchestration",
    what: "Used for customer journey orchestration, personalized experiences, and measurable engagement across channels.",
    tools: "Adobe Journey Optimizer, journeys, decisioning, content, events",
    problem: "Organizations need orchestration that spans the full lifecycle from trigger to journey outcome.",
    keywords: "Adobe Journey Optimizer, journey orchestration, omnichannel orchestration, personalization",
  },
  {
    title: "Adobe Target & Personalization",
    what: "Used for experimentation, personalization, and optimization loops that are tied to measurement and customer context.",
    tools: "Adobe Target, experiments, activities, offers, profile attributes",
    problem: "Teams need practical personalization that is connected to audience logic, consent, and analytics evidence.",
    keywords: "Adobe Target, personalization, experimentation, optimization, segmentation",
  },
  {
    title: "Adobe Analytics / Tags / Web SDK",
    what: "Used to collect, validate, and govern event data from web and app experiences at scale.",
    tools: "Adobe Analytics, Adobe Tags/Launch, Adobe Web SDK, data layer, event taxonomy",
    problem: "Dirty or inconsistent tracking undermines reporting, attribution, and activation confidence.",
    keywords: "Adobe Analytics, Adobe Tags, Adobe Web SDK, data layer architecture, event taxonomy",
  },
  {
    title: "Google Marketing & Data Stack",
    what: "Used to align GA4, GTM, BigQuery, SQL, and reporting layers for modern measurement operations.",
    tools: "GA4, Google Tag Manager, BigQuery, Looker Studio, SQL",
    problem: "Organizations need a dependable analytics and data foundation that supports both executive reporting and engineering-grade analysis.",
    keywords: "GA4, GTM, BigQuery, Looker, SQL, analytics engineering",
  },
  {
    title: "BigQuery / SQL / Analytics Engineering",
    what: "Used to model raw events into sessions, users, conversions, and business-ready reporting layers.",
    tools: "BigQuery, SQL, Looker, dashboards, data marts",
    problem: "Businesses need structured data models that are reliable enough for reporting, performance analysis, and AI-ready operations.",
    keywords: "BigQuery, SQL, analytics engineering, data marts, reporting governance",
  },
  {
    title: "Consent, Governance & Data Quality",
    what: "Used to make measurement and customer data both compliant and trustworthy.",
    tools: "OneTrust, consent management, data quality, data lineage, DULE policies",
    problem: "Privacy-aware measurement requires governance discipline across tagging, activation, reporting, and customer data use.",
    keywords: "consent management, data governance, data quality, privacy governance, DULE policies",
  },
  {
    title: "Enterprise Leadership & Delivery",
    what: "Used to connect business stakeholders, engineering teams, analytics teams, and executive leadership through roadmap and implementation governance.",
    tools: "roadmap planning, sprint planning, prioritization, stakeholder management, executive communication",
    problem: "Architecture work only succeeds when it is connected to delivery, adoption, and measurable business outcomes.",
    keywords: "stakeholder management, executive communication, implementation governance, cross-functional delivery",
  },
];

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
        {expandedCategories.map((category) => (
          <Card key={category.title}>
            <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400"><span className="font-semibold text-slate-200">What it is used for:</span> {category.what}</p>
            <p className="mt-3 text-sm leading-7 text-slate-400"><span className="font-semibold text-slate-200">Tools involved:</span> {category.tools}</p>
            <p className="mt-3 text-sm leading-7 text-slate-400"><span className="font-semibold text-slate-200">Business problem solved:</span> {category.problem}</p>
            <p className="mt-3 text-sm leading-7 text-slate-400"><span className="font-semibold text-slate-200">Recruiter keywords demonstrated:</span> {category.keywords}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
