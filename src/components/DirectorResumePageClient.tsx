'use client';

import { useState } from "react";

const detailsText = `Dhanesh Patel
Director, Enterprise Customer Intelligence Architecture
Dallas, TX / Remote
Website: dhaneshpatel.com
Email: dhaneshpatel1234@gmail.com
LinkedIn: linkedin.com/in/dhaneshpatel1234/

Work Authorization: Authorized to work in the U.S.
Sponsorship: Not required
Availability: Open to the right full-time, consulting, advisory, or contract opportunity
Job Type: Full-time, contract, consulting, advisory
Location Preference: Dallas, Remote, Hybrid, or selective relocation

Full-Time Target: $200K+ base or $220K–$300K total compensation depending on scope, title, bonus/equity, leadership expectations, and remote flexibility
Consulting Target: Available for architecture reviews, audits, roadmap work, advisory, and implementation modernization
Hourly/Project Rate: Discuss based on scope

Target Titles: Director, Enterprise Customer Intelligence Architecture; Adobe Experience Cloud Architect; Adobe Experience Platform Architect; AEP Architect; AEP / AJO Architect; Customer Data Platform Architect; Martech Solutions Architect; Digital Analytics Architect; Measurement Architect; Customer Journey Analytics Architect; RT-CDP Architect; Director of Marketing Technology; Director of Analytics Architecture; Data Product Lead, Adobe Experience Cloud; AI-Ready Customer Data Architect`;

export function DirectorResumePageClient() {
  const [copied, setCopied] = useState(false);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(detailsText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const printResume = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={copyAll}
        className="rounded-full border border-cyan-400/70 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
      >
        {copied ? "Copied" : "Copy All Details"}
      </button>
      <button
        type="button"
        onClick={printResume}
        className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Print / Save as PDF
      </button>
      <a href="/contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
        Contact Dhanesh
      </a>
    </div>
  );
}
