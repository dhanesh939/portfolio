import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { DirectorResumePageClient } from "@/components/DirectorResumePageClient";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Director Resume | ${siteConfig.name} | Enterprise Customer Intelligence Architecture`,
  description: "Resume and application details for Dhanesh Patel, Director-level Enterprise Customer Intelligence Architect specializing in Adobe Experience Cloud, AEP, CJA, RT-CDP, AJO, Target, GA4, BigQuery, and AI-ready customer data.",
};

const applicationDetails = [
  { label: "Name", value: "Dhanesh Patel" },
  { label: "Title", value: "Director, Enterprise Customer Intelligence Architecture" },
  { label: "Location", value: "Dallas, TX / Remote" },
  { label: "Website", value: "dhaneshpatel.com" },
  { label: "Email", value: "dhaneshpatel1234@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/dhaneshpatel1234/" },
];

const targetTitles = [
  "Director, Enterprise Customer Intelligence Architecture",
  "Adobe Experience Cloud Architect",
  "Adobe Experience Platform Architect",
  "AEP Architect",
  "AEP / AJO Architect",
  "Customer Data Platform Architect",
  "Martech Solutions Architect",
  "Digital Analytics Architect",
  "Measurement Architect",
  "Customer Journey Analytics Architect",
  "RT-CDP Architect",
  "Director of Marketing Technology",
  "Director of Analytics Architecture",
  "Data Product Lead, Adobe Experience Cloud",
  "AI-Ready Customer Data Architect",
];

const skills = [
  {
    title: "Adobe Experience Cloud",
    items: ["Adobe Experience Cloud", "AEP", "Adobe Analytics", "Customer Journey Analytics", "CJA", "Real-Time CDP", "RT-CDP", "Adobe Journey Optimizer", "AJO", "Adobe Target", "Adobe Tags", "Adobe Launch", "Adobe Web SDK", "XDM schema design", "identities", "data governance"],
  },
  {
    title: "Google Marketing & Data Stack",
    items: ["Google Analytics 4", "GA4", "Google Tag Manager", "GTM", "BigQuery", "Looker Studio", "Looker", "SQL", "event modeling", "session modeling", "conversion marts"],
  },
  {
    title: "Customer Data Architecture",
    items: ["customer data architecture", "CDP architecture", "customer intelligence", "identity resolution", "Real-Time Customer Profile", "audience activation", "CRM integration", "event taxonomy", "data layer architecture"],
  },
  {
    title: "Measurement Governance",
    items: ["consent-aware measurement", "consent management", "OneTrust", "data quality", "data validation", "QA frameworks", "attribution", "reporting governance", "analytics requirements"],
  },
  {
    title: "Personalization & Activation",
    items: ["personalization strategy", "segmentation", "journey orchestration", "experiment design", "audience activation", "personalization architecture", "AI-ready customer data"],
  },
  {
    title: "Analytics Engineering",
    items: ["analytics engineering", "event modeling", "session modeling", "user modeling", "conversion marts", "reporting layers", "Looker", "BigQuery", "SQL"],
  },
  {
    title: "Leadership & Delivery",
    items: ["enterprise architecture", "solution design", "stakeholder management", "executive communication", "cross-functional leadership", "technical leadership", "delivery leadership", "roadmap planning", "implementation governance"],
  },
];

const keywords = [
  "Adobe Experience Cloud",
  "AEP",
  "RT-CDP",
  "AJO",
  "CJA",
  "Adobe Target",
  "Adobe Analytics",
  "Adobe Tags",
  "Adobe Launch",
  "Adobe Web SDK",
  "XDM",
  "schemas",
  "datasets",
  "identity resolution",
  "Real-Time Customer Profile",
  "GA4",
  "GTM",
  "BigQuery",
  "Looker",
  "SQL",
  "data layer",
  "event taxonomy",
  "consent management",
  "OneTrust",
  "data governance",
  "customer data platform",
  "CDP architecture",
  "customer journey analytics",
  "personalization",
  "segmentation",
  "audience activation",
  "marketing technology",
  "martech architecture",
  "digital analytics",
  "measurement strategy",
  "analytics engineering",
  "AI-ready customer data",
];

export default function DirectorResumePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Director Resume</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Dhanesh Patel</h1>
        <p className="mt-4 text-xl text-slate-300">Director, Enterprise Customer Intelligence Architecture</p>
        <p className="mt-4 text-lg leading-8 text-slate-400">Adobe Experience Cloud | AEP, CJA, RT-CDP, AJO, Target | GA4, GTM, BigQuery | AI-Ready Customer Data</p>
        <div className="mt-8">
          <DirectorResumePageClient />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <SectionHeader eyebrow="Application details" title="Recruiter-friendly application details" />
          <div className="mt-5 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
            {applicationDetails.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-2 font-medium text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionHeader eyebrow="Work preferences" title="Target roles, work style, and compensation" />
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
            <li><span className="font-semibold text-slate-200">Work Authorization:</span> Authorized to work in the U.S.</li>
            <li><span className="font-semibold text-slate-200">Sponsorship:</span> Not required</li>
            <li><span className="font-semibold text-slate-200">Availability:</span> Open to full-time, consulting, advisory, or contract opportunities</li>
            <li><span className="font-semibold text-slate-200">Full-Time Target:</span> $200K+ base or $220K–$300K total compensation depending on scope, title, bonus/equity, leadership expectations, and remote flexibility</li>
            <li><span className="font-semibold text-slate-200">Consulting:</span> Available for architecture reviews, audits, roadmap work, advisory, and implementation modernization</li>
          </ul>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="Executive summary" title="Director-level customer intelligence and martech architecture leader" />
        <p className="mt-4 text-sm leading-8 text-slate-400">
          Director-level customer intelligence and martech architecture leader with enterprise consulting experience across Adobe Experience Cloud, Google marketing and data stack, customer data architecture, consent-aware measurement, journey analytics, personalization, and AI-ready data systems. Skilled at helping organizations move from fragmented tracking and inconsistent reporting to governed customer intelligence that supports better decisions, scalable activation, and measurable customer experiences.
        </p>
        <p className="mt-4 text-sm leading-8 text-slate-400">
          Experience spans automotive, banking, telecom, ecommerce, retail, healthcare, insurance, and digital product environments. Strong background across Adobe Analytics, Adobe Tags/Launch, Adobe Web SDK, GA4, GTM, data layer architecture, JavaScript-based instrumentation, analytics QA, reporting governance, and stakeholder-ready requirements. Expanding architecture focus across AEP, CJA, RT-CDP, AJO, Target, BigQuery, Looker, identity resolution, XDM schema strategy, and AI-assisted data operations.
        </p>
      </Card>

      <section className="space-y-6">
        <SectionHeader eyebrow="What I solve for enterprise teams" title="Modernize the foundation behind customer intelligence" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-white">Modernize Adobe and Google measurement ecosystems</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">Across web, app, campaign, CRM, ecommerce, and offline touchpoints, I help teams align behavior data with reporting, governance, and activation needs.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-white">Design the data layer, identity, and governance model</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">I create the structural foundation needed for customer intelligence use cases, including XDM schema strategy, identity resolution, event taxonomy, and data quality.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-white">Support AEP, RT-CDP, AJO, CJA, and Target readiness</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">I work from architecture planning and use-case mapping through data quality design and implementation governance.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-white">Build the governed foundation for personalization and AI</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">I help teams translate business requirements into scalable technical requirements, QA plans, implementation standards, and executive-ready roadmaps.</p>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Core skills" title="Keyword-rich capabilities aligned to the market" />
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.title}>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">{item}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Experience" title="Director-level customer intelligence & analytics architecture" />
        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Razorfish</h3>
              <p className="text-sm text-cyan-300">Director-Level Customer Intelligence & Analytics Architecture</p>
            </div>
            <p className="text-sm text-slate-400">Nov 2022 – Present</p>
          </div>
          <p className="mt-4 text-sm leading-8 text-slate-400">Enterprise digital agency supporting large-scale analytics, martech, customer experience, and digital transformation programs.</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
            <li>Lead enterprise measurement and customer data architecture work across complex digital ecosystems, improving data collection quality, reporting trust, and implementation governance.</li>
            <li>Translate business and marketing goals into analytics architecture, data layer requirements, Adobe/Google mappings, QA plans, platform documentation, and reporting validation approaches.</li>
            <li>Support Adobe Experience Cloud and Google measurement modernization across Adobe Analytics, Adobe Tags/Launch, Adobe Web SDK concepts, GA4, GTM, consent logic, event taxonomy, classifications, and enterprise reporting.</li>
            <li>Partner with product owners, developers, QA, analytics teams, data stakeholders, and client leadership to resolve tracking gaps, duplicate events, missing variables, attribution issues, and platform behavior inconsistencies.</li>
            <li>Design scalable governance patterns for page-view tracking, interaction tracking, custom events, link calls, consent states, plugin behavior, and cross-brand measurement standards.</li>
            <li>Help teams move beyond one-off fixes by defining reusable requirements, implementation standards, QA criteria, and documentation patterns.</li>
            <li>Bridge business, technical, and reporting teams by simplifying complex platform behavior into clear decisions, action plans, and expected outcomes.</li>
            <li>Contribute enterprise perspective across automotive, banking, telecom, ecommerce, retail, healthcare, insurance, and digital product environments.</li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Previous Experience</h3>
              <p className="text-sm text-cyan-300">Analytics Implementation, Digital Analytics, and Software Development Roles</p>
            </div>
            <p className="text-sm text-slate-400">Earlier Career</p>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
            <li>Built a technical foundation in software development, web behavior, JavaScript, browser debugging, data layers, and digital implementation logic.</li>
            <li>Supported analytics implementation, tagging, reporting, and measurement work across ecommerce, lead generation, digital product journeys, retail, healthcare, financial services, and enterprise marketing environments.</li>
            <li>Created analytics requirements, data collection logic, QA documentation, and stakeholder-ready explanations for complex measurement issues.</li>
            <li>Developed a reputation as a root-cause problem solver who can isolate unclear data issues, identify implementation or platform behavior, and translate findings into practical fixes.</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Certifications" title="Credentials and planned additions" />
        <Card>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">Adobe Analytics Architect Expert</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Adobe Analytics Implementation Specialist</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Adobe Customer Journey Analytics Developer / Architect — planned</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Adobe Experience Platform — planned</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">GA4 / Google Analytics — planned</span>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Public Strategy Labs" title="Reference architectures and thought leadership" />
        <Card>
          <p className="text-sm leading-8 text-slate-400">Public strategy studies and reference architectures demonstrating how I think about modern customer data problems. These are not confidential client case studies.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">AI-Ready Customer Intelligence Blueprint</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Adobe + Google Measurement Parity Framework</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Real-Time Personalization Architecture</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">GA4 to BigQuery Analytics Mart</span>
          </div>
        </Card>
      </section>

      <Card>
        <SectionHeader eyebrow="Relevant keywords" title="Compact ATS-friendly keyword block" />
        <div className="mt-4 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300">{keyword}</span>
          ))}
        </div>
      </Card>
    </main>
  );
}
