const howIWork = [
  {
    title: "Root-Cause Problem Solver",
    description:
      "I enjoy unclear problems and work patiently to find the real source of an issue - not just the fastest patch.",
  },
  {
    title: "Enterprise Translator",
    description:
      "I turn business questions into technical requirements, QA plans, implementation standards, and reporting outcomes.",
  },
  {
    title: "Ownership Mindset",
    description:
      "I care about the result after the fix: clean measurement, trusted data, and a system teams can maintain.",
  },
];

export function ImageGallery() {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.25)] sm:p-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">How I Work</p>
          <h2 className="text-3xl font-semibold text-white">Calm under pressure. Clear in complexity.</h2>
          <p className="text-sm leading-7 text-slate-400">
            I work best when the problem is messy: tracking is inconsistent, reports do not match, teams are not aligned, and nobody is fully sure where the issue starts.
          </p>
          <p className="text-sm leading-7 text-slate-400">
            My strength is connecting the dots across business requirements, data layers, tag managers, analytics platforms, consent rules, QA, and reporting. I focus on making the system clear enough that both technical and business teams can trust the outcome.
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {howIWork.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 shadow-[0_16px_40px_rgba(2,6,23,0.18)]"
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-[0_24px_70px_rgba(2,6,23,0.22)]">
        <img
          src="/headshot.jpg"
          alt="Professional headshot of Dhanesh Patel"
          className="h-full min-h-[520px] w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
