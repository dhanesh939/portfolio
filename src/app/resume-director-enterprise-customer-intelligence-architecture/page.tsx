import type { Metadata } from "next";
import { DirectorResumePageClient } from "@/components/DirectorResumePageClient";
import { ResumeDownloadBar } from "@/components/ResumeDownloadBar";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume | Dhanesh Patel | Enterprise Customer Intelligence Architect",
  description:
    "Resume and application details for Dhanesh Patel, enterprise customer intelligence architect specializing in Adobe Experience Cloud, AEP, CJA, RT-CDP, AJO, Target, GA4, BigQuery, and AI-ready customer data.",
};

const detailSections = [
  {
    title: "Personal Information",
    rows: [
      { label: "Name", value: "Dhanesh Patel" },
      { label: "Title", value: "Enterprise Customer Intelligence Architect" },
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
      { label: "Salary Range", value: "$200K+ base or $220K-$300K total compensation" },
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

const experienceItems = [
  {
    role: "Senior Consultant, Adobe Analytics",
    company: "dentsu International",
    location: "Toronto, Canada",
    period: "Oct 2021 - Present",
    bullets: [
      "Evaluate business goals and objectives across multiple business teams and develop tracking and tagging strategies that help stakeholders measure success clearly.",
      "Consult directly with clients and agency partners on web analytics platform selection, implementation, remediation, and dashboard development projects.",
      "Lead site tagging implementation, custom rule development, and data layer enablement using Adobe Launch, Adobe Dynamic Tag Management, Tealium, and Ensighten.",
      "Serve as the primary owner of implementation documentation for client developers, including page code requirements and data layer specifications that support business analysis needs.",
      "Conduct platform training and knowledge-sharing sessions in web analytics for clients and project teams.",
      "Act as the primary technical lead for client developers and lead discussions that keep both client and internal teams aligned throughout delivery.",
    ],
  },
  {
    role: "Data Strategist, Adobe Implementation Specialist",
    company: "Scotiabank Digital Factory",
    location: "Toronto, Canada",
    period: "Feb 2020 - Oct 2021",
    bullets: [
      "Worked independently with stakeholders to deliver implementation outcomes, insights, and results aligned to business expectations.",
      "Applied digital analytics concepts within business context to shape practical solutions for measurement and customer journey analysis.",
      "Led implementation and continued rollout of Adobe Analytics and Google Analytics products across properties, pages, and applications.",
      "Built and maintained reports and analytical processes to evaluate digital customer journeys and provide actionable insight across web and mobile marketing initiatives.",
      "Partnered with digital marketing teams to identify issues and opportunities that improved sales, retention, and digital customer experience.",
      "Educated stakeholders on Adobe Workspace to support self-service analysis and stronger platform adoption.",
      "Managed migration of properties from Adobe DTM to Adobe Launch.",
      "Performed audits, QA, and UAT for bugs and tracking implementations across new and existing pages and features.",
      "Supported development of internal processes and documentation governing team delivery and analytics implementation standards.",
    ],
  },
  {
    role: "Digital Analytics Developer",
    company: "TELUS",
    location: "Toronto, Canada",
    period: "Jun 2019 - Feb 2020",
    bullets: [
      "Migrated the Koodo website from Tealium, Ensighten, and Adobe DTM to Adobe Launch.",
      "Migrated marketing pixels and associated tracking logic from DTM to Adobe Launch.",
      "Ensured reliable data flow from digital properties into Adobe Analytics report suites.",
      "Implemented Adobe tags on websites built with React, PHP, and HTML5.",
      "Supported internal processes and documentation covering Adobe Analytics tagging, implementation, QA, and continuous improvement.",
      "Conducted regular audits of analytics implementations and recommended improvements to data structure and reporting quality.",
      "Managed quality assurance across Adobe Analytics implementations and contributed recommendations for stronger digital reporting, dashboards, and service delivery standards.",
    ],
  },
  {
    role: "Senior Technical Systems Analyst",
    company: "RBC Bank",
    location: "Toronto, Canada",
    period: "Oct 2017 - Jun 2019",
    bullets: [
      "Led frontend development for a finance project using Angular, initially on Angular 2 and later upgraded to Angular 6.",
      "Built middleware services using Spring Boot and Java and deployed microservices to Pivotal Cloud Foundry.",
      "Worked within a Netflix OSS-based architecture including Zuul, Eureka, Ribbon, Hystrix, and Config Server.",
      "Supported extraction, transfer, and processing of data with vendor and internal enterprise applications.",
      "Configured GitHub, Jenkins, and UrbanCode Deploy and helped other teams adopt those practices.",
    ],
  },
  {
    role: "Technical Systems Analyst",
    company: "RBC Bank",
    location: "Toronto, Canada",
    period: "Aug 2015 - Sep 2017",
    bullets: [
      "Developed middleware applications on the .NET framework primarily using C#.",
      "Participated deeply in design discussions with business analysts, technical teams, and business stakeholders during requirements phases.",
      "Contributed to data architecture discussions for introducing new data flows across multiple applications.",
      "Provided L3 support by analyzing, troubleshooting, and resolving critical production issues affecting the business.",
      "Migrated SQL Server environments from 2008 to 2012 and application servers from 2008 to 2012 with successful testing and deployment cycles.",
      "Performed code walkthroughs and participated in review sessions with technical leads and team members to improve future solution design.",
    ],
  },
  {
    role: "Junior Web and Application Developer",
    company: "Real Estate Council of Ontario (RECO)",
    location: "Toronto, Canada",
    period: "Sep 2014 - May 2015",
    bullets: [
      "Created reports using Google Analytics automated dashboard features.",
      "Supported implementation and continued rollout of Google Analytics products including Google Tag Manager and Report Builder across properties, pages, and applications.",
      "Maintained a focal-point relationship for Google Analytics implementation activities.",
      "Built application pages with validations and web services for certificate authentication workflows.",
      "Created the My RECO Certificate app for Windows, enhanced the BlackBerry app using Cordova, and contributed to the Android app using Android Studio.",
    ],
  },
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
              Recruiter-ready application details for senior roles, architecture leadership, consulting, contract, and advisory conversations.
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
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Dhanesh Patel - Enterprise Customer Intelligence Architect</h1>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    Customer intelligence and martech architecture leader with a foundation in analytics implementation, digital measurement, tagging strategy, customer journey analysis, and enterprise-grade technical delivery across Adobe, Google, and data-driven platforms.
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
                <p><span className="font-semibold text-slate-900">Adobe Experience Cloud</span> - Architecture across Adobe Analytics, Adobe Tags/Launch, Adobe Web SDK, AEP, CJA, RT-CDP, AJO, Adobe Target, XDM schema strategy, datasets, identities, segmentation, activation readiness, and implementation governance.</p>
                <p><span className="font-semibold text-slate-900">Customer Data Platforms</span> - Design customer data architecture for unified profiles, identity resolution, CRM integrations, audience activation, consent management, governance, data quality, and AI-ready customer intelligence use cases.</p>
                <p><span className="font-semibold text-slate-900">Measurement Modernization</span> - Align Adobe Analytics, CJA, GA4, GTM, BigQuery, data layer architecture, event taxonomy, attribution, conversion tracking, reporting governance, and QA validation so enterprise teams can trust performance data.</p>
                <p><span className="font-semibold text-slate-900">Journey Analytics and Personalization</span> - Support cross-channel journey analysis, pathing, cohort analysis, segmentation, RT-CDP audiences, AJO journeys, Target personalization, experimentation, and measurable optimization loops.</p>
                <p><span className="font-semibold text-slate-900">Analytics Engineering</span> - Model event, session, user, customer, and conversion data using GA4, BigQuery, SQL, Looker/Looker Studio, reporting layers, data marts, and quality checks.</p>
                <p><span className="font-semibold text-slate-900">Enterprise Leadership</span> - Bridge marketing, analytics, product, engineering, data, privacy, QA, and executive stakeholders through roadmap planning, requirements translation, solution design, implementation governance, and cross-functional delivery.</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">Additional skills: AEP, RT-CDP, AJO, CJA, Target, Adobe Analytics, Adobe Launch, Adobe Web SDK, XDM, identity resolution, Real-Time Customer Profile, GA4, GTM, BigQuery, SQL, Looker, OneTrust, consent management, event taxonomy, data governance, customer data platform strategy, marketing technology transformation, digital analytics, measurement strategy, AI-ready data.</p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Experience</h2>
              <div className="mt-4 space-y-6">
                {experienceItems.map((item) => (
                  <div key={`${item.company}-${item.role}`} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                        <p className="text-sm text-slate-600">{item.company} - {item.location}</p>
                      </div>
                      <p className="text-sm font-medium text-slate-500">{item.period}</p>
                    </div>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Industry Labs</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>AI-Ready Customer Intelligence Blueprint - Reference architecture for collection, consent, identity, journey analytics, activation, personalization, and AI-readiness across Adobe and Google ecosystems.</li>
                <li>Adobe + Google Measurement Parity Framework - Model for aligning Adobe Analytics, CJA, GA4, GTM, BigQuery, events, dimensions, audiences, conversions, and reporting definitions.</li>
                <li>Real-Time Personalization Architecture - RT-CDP audience, AJO journey, Target personalization, consent, profile, and analytics measurement loop.</li>
                <li>GA4 to BigQuery Analytics Mart - Conceptual analytics engineering model for raw GA4 events, cleaned events, sessions, users, conversions, acquisition reporting, and business-ready dashboards.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Education</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Lambton College</p>
                  <p>Postgraduate, Internet Programming and Database Management - Toronto, Canada</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)</p>
                  <p>Bachelor of Engineering, Electronics and Telecommunication - Nagpur, India</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Certifications</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>Adobe Analytics Architect Expert</li>
                <li>Adobe Analytics Implementation Specialist</li>
                <li>Adobe Customer Journey Analytics Developer / Architect - planned</li>
                <li>Adobe Experience Platform - planned</li>
                <li>GA4 / Google Analytics - planned</li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
