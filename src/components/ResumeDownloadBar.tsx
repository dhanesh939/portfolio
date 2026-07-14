'use client';

export function ResumeDownloadBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-slate-100 print:hidden">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Download Resume</span>
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
      >
        Print / Save as PDF
      </button>
    </div>
  );
}
