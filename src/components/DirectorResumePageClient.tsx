'use client';

import { useState } from "react";

type DetailRow = {
  label: string;
  value: string;
};

type DetailSection = {
  title: string;
  rows: DetailRow[];
};

type Props = {
  sections: DetailSection[];
  targetTitles: string[];
};

export function DirectorResumePageClient({ sections, targetTitles }: Props) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const copyValue = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(null), 1600);
    } catch {
      setCopiedLabel(null);
    }
  };

  const copyAll = async () => {
    const text = sections
      .flatMap((section) => section.rows)
      .map((row) => `${row.label}: ${row.value}`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(`${text}\n\nTitle Preference: ${targetTitles.join(", ")}`);
      setCopiedLabel("all");
      window.setTimeout(() => setCopiedLabel(null), 1600);
    } catch {
      setCopiedLabel(null);
    }
  };

  return (
    <div className="space-y-5">
      {sections.map((section) => (
        <div key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{section.title}</h3>
          <div className="mt-3 space-y-2">
            {section.rows.map((row) => (
              <button
                key={row.label}
                type="button"
                onClick={() => copyValue(row.value, row.label)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-3 text-left text-sm text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50"
              >
                <span className="pr-3 text-slate-500">{row.label}</span>
                <span className="flex-1 text-right font-medium text-slate-900">{row.value}</span>
                <span className="ml-3 text-cyan-600">⧉</span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Title Preference</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">{targetTitles.join(", ")}</p>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          onClick={copyAll}
          className="rounded-full border border-cyan-500/50 bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          {copiedLabel === "all" ? "Copied" : "Copy All Details"}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Print / Save as PDF
        </button>
        <a href="/contact" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          Contact Dhanesh
        </a>
      </div>
    </div>
  );
}
