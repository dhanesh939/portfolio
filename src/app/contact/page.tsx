import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Dhanesh Patel | Customer Intelligence & Martech Architect",
  description: "Contact Dhanesh Patel regarding senior roles, architecture leadership, consulting, contract projects, and advisory work.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
        <SectionHeader
          eyebrow="Contact"
          title="Open to the right opportunity"
          subtitle="For direct outreach, use email or LinkedIn. The form below will send a message to dhaneshpatel1234@gmail.com."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <Card>
            <h3 className="text-2xl font-semibold text-white">Direct contact</h3>
            <ul className="mt-5 space-y-4 text-sm leading-8 text-slate-400">
              <li>Email: <Link href={`mailto:${siteConfig.email}`} className="text-cyan-300">{siteConfig.email}</Link></li>
              <li>
                LinkedIn: <Link href={siteConfig.linkedin} className="text-cyan-300" target="_blank" rel="noreferrer">
                  {siteConfig.linkedin}
                </Link>
              </li>
              <li>Location: Dallas, TX / Remote</li>
              <li>Best fit for outreach: senior analytics, martech architecture, Adobe/Google measurement modernization, customer data strategy, consulting, advisory, and architecture review opportunities.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold text-white">What to include</h3>
            <p className="mt-4 text-sm leading-8 text-slate-400">A brief note about your team, timeline, scope, and whether you are hiring for a senior role, architecture lead, consultant, contractor, or advisory partner helps me respond faster.</p>
          </Card>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
