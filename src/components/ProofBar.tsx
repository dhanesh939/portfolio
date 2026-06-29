type ProofBarProps = {
  items: string[];
};

export function ProofBar({ items }: ProofBarProps) {
  return (
    <section className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-4 py-4 shadow-[0_20px_60px_rgba(2,6,23,0.25)] sm:px-6">
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
