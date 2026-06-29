type FrameworkStep = {
  title: string;
  description: string;
};

type FrameworkFlowProps = {
  steps: FrameworkStep[];
};

export function FrameworkFlow({ steps }: FrameworkFlowProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-semibold text-cyan-200">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
          </div>
          <p className="text-sm leading-7 text-slate-400">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
