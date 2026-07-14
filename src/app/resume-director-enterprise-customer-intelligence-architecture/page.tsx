import type { Metadata } from "next";
import { DirectorResumePageClient } from "@/components/DirectorResumePageClient";
import { ResumeDownloadBar } from "@/components/ResumeDownloadBar";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Director Resume | ${siteConfig.name} | Enterprise Customer Intelligence Architecture`,
  description: "Resume and application details for Dhanesh Patel, Director-level enterprise customer intelligence architect specializing in Adobe Experience Cloud, AEP, CJA, RT-CDP, AJO, Target, GA4, BigQuery, and AI-ready customer data.",
};

const detailSections = [
  {
    title: "Personal Information",
    rows: [
      { label: "Name", value: "Dhanesh Patel" },
      { label: "Title", value: "Director, Enterprise Customer Intelligence Architecture" },
      { label: "Location", value: "Dallas, TX / Remote" },
      { label: "Website", value: "https://www.dhaneshpatel.com" },
      { label: "Email", value: "dhaneshpatel1234@gmail.com" },
      { label: "LinkedIn", value: "https://www.linkedin.com/in/dhaneshpatel1234/" },
    ],
  },
  {
    title: "Work Authorization",
    rows: [
      { label: "Authorized to Work", value: "Yes" },
      { label: "Visa Sponsorship", value: "Not required" },
      { label: "Security Clearance", value: "None currently" },
      { label: "Driver's License", value: "Yes" },
    ],
  },
  {
    title: "Job Preferences",
    rows: [
      { label: "Experience", value: "10+ years across analytics, implementation, martech, and customer data systems" },
      { label: "Job Type", value: "Full-time, contract, consulting, advisory" },
      { label: "Salary Range", value: "$200K+ base or $220K–$300K total compensation" },
      { label: "Consulting Range", value: "Discuss based on scope" },
      { label: "Start Date", value: "Open to the right opportunity" },
      { label: "Location Preference", value: "Dallas, TX / Remote / Hybrid / selective relocation" },
    ],
  },
];

const targetTitles = [
  "Director of Marketing Technology",
  "Director of Analytics Architecture",
  "Adobe Experience Cloud Architect",
  "Adobe Experience Platform Architect",
  "Customer Data Platform Architect",
  "Martech Solutions Architect",
  "Digital Analytics Architect",
  "Measurement Strategy Lead",
];

export default function DirectorResumePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-6 text-slate-900 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 lg:flex-row lg:items-start">
        <aside className="w-full lg:sticky lg:top-5 lg:w-[500px] lg:max-w-[500px]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">Application Details</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Click any row to copy</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Recruiter-ready application details for full-time, consulting, advisory, and architecture leadership conversations.
            </p>
            <div className="mt-5">
              <DirectorResumePageClient sections={detailSections} targetTitles={targetTitles} />
            </div>
          </div>
        </aside>

        <section className="w-full flex-1 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <ResumeDownloadBar />

          <div className="mt-6 space-y-8 print:space-y-6">
            <header className="border-b border-slate-200 pb-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Dhanesh Patel</h1>
                  <p className="mt-2 text-lg font-medium text-slate-700">Director, Enterprise Customer Intelligence Architecture</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    Director-level customer intelligence and martech architecture leader with experience across Adobe Experience Cloud, Google marketing and data stack, enterprise measurement, consent-aware analytics, data layer architecture, journey analytics, personalization, and AI-ready customer data.
                  </p>
                </div>
                <div className="text-sm leading-7 text-slate-600">
                  <p>dhaneshpatel1234@gmail.com</p>
                  <p>Dallas, TX / Remote</p>
                  <p>dhaneshpatel.com</p>
                  <p>linkedin.com/in/dhaneshpatel1234/</p>
                </div>
              </div>
            </header>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Skills</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <p><span className="font-semibold text-slate-900">Adobe Experience Cloud</span> — Architecture across Adobe Analytics, Adobe Tags/Launch, Adobe Web SDK, AEP, CJA, RT-CDP, AJO, Adobe Target, XDM schema strategy, datasets, identities, segmentation, activation readiness, and implementation governance.</p>
                <p><span className="font-semibold text-slate-900">Customer Data Platforms</span> — Design customer data architecture for unified profiles, identity resolution, CRM integrations, audience activation, consent management, governance, data quality, and AI-ready customer intelligence use cases.</p>
                <p><span className="font-semibold text-slate-900">Measurement Modernization</span> — Align Adobe Analytics, CJA, GA4, GTM, BigQuery, data layer architecture, event taxonomy, attribution, conversion tracking, reporting governance, and QA validation so enterprise teams can trust performance data.</p>
                <p><span className="font-semibold text-slate-900">Journey Analytics & Personalization</span> — Support cross-channel journey analysis, pathing, cohort analysis, segmentation, RT-CDP audiences, AJO journeys, Target personalization, experimentation, and measurable optimization loops.</p>
                <p><span className="font-semibold text-slate-900">Analytics Engineering</span> — Model event, session, user, customer, and conversion data using GA4, BigQuery, SQL, Looker/Looker Studio, reporting layers, data marts, and quality checks.</p>
                <p><span className="font-semibold text-slate-900">Enterprise Leadership</span> — Bridge marketing, analytics, product, engineering, data, privacy, QA, and executive stakeholders through roadmap planning, requirements translation, solution design, implementation governance, and cross-functional delivery.</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">Additional skills: AEP, RT-CDP, AJO, CJA, Target, Adobe Analytics, Adobe Launch, Adobe Web SDK, XDM, identity resolution, Real-Time Customer Profile, GA4, GTM, BigQuery, SQL, Looker, OneTrust, consent management, event taxonomy, data governance, customer data platform strategy, marketing technology transformation, digital analytics, measurement strategy, AI-ready data.</p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Experience</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Razorfish — Director-Level Customer Intelligence & Analytics Architecture</h3>
                      <p className="text-sm text-slate-600">Global digital agency supporting enterprise analytics, martech, customer experience, and digital transformation programs.</p>
                    </div>
                    <p className="text-sm text-slate-500">Nov 2022 – Present</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                    <li>Lead enterprise measurement and customer data architecture work across complex digital ecosystems, improving data collection quality, reporting trust, and implementation governance.</li>
                    <li>Translate business and marketing goals into analytics architecture, data layer requirements, Adobe/Google mappings, QA plans, platform documentation, and reporting validation approaches.</li>
                    <li>Support Adobe Experience Cloud and Google measurement modernization across Adobe Analytics, Adobe Tags/Launch, Adobe Web SDK concepts, GA4, GTM, consent logic, event taxonomy, classifications, and enterprise reporting.</li>
                    <li>Partner with product owners, developers, QA, analytics teams, data stakeholders, and client leadership to resolve tracking gaps, duplicate events, missing variables, attribution issues, and platform behavior inconsistencies.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Earlier Career — Analytics Implementation, Digital Analytics, and Software Development</h3>
                    </div>
                    <p className="text-sm text-slate-500">Earlier Career</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                    <li>Built a technical foundation in software development, web behavior, JavaScript, browser debugging, data layers, and digital implementation logic.</li>
                    <li>Supported analytics implementation, tagging, reporting, and measurement work across ecommerce, lead generation, digital product journeys, retail, healthcare, financial services, and enterprise marketing environments.</li>
                    <li>Created analytics requirements, data collection logic, QA documentation, and stakeholder-ready explanations for complex measurement issues.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Industry Labs</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>AI-Ready Customer Intelligence Blueprint — Reference architecture for collection, consent, identity, journey analytics, activation, personalization, and AI-readiness across Adobe and Google ecosystems.</li>
                <li>Adobe + Google Measurement Parity Framework — Model for aligning Adobe Analytics, CJA, GA4, GTM, BigQuery, events, dimensions, audiences, conversions, and reporting definitions.</li>
                <li>Real-Time Personalization Architecture — RT-CDP audience, AJO journey, Target personalization, consent, profile, and analytics measurement loop.</li>
                <li>GA4 to BigQuery Analytics Mart — Conceptual analytics engineering model for raw GA4 events, cleaned events, sessions, users, conversions, acquisition reporting, and business-ready dashboards.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Education</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">Nagpur University — Bachelor’s Degree, Electronics & Telecommunication Engineering</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">Lambton College — Internet Programming and Database Management</p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Certifications</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>Adobe Analytics Architect Expert</li>
                <li>Adobe Analytics Implementation Specialist</li>
                <li>Adobe Customer Journey Analytics Developer / Architect — planned</li>
                <li>Adobe Experience Platform — planned</li>
                <li>GA4 / Google Analytics — planned</li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
