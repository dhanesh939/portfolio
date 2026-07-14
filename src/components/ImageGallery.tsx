export function ImageGallery() {
  const gallery = [
    "/gallery-01.jpg",
    "/gallery-02.jpg",
    "/gallery-03.jpg",
    "/gallery-04.jpg",
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.25)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-slate-950/70 p-4">
          <img src="/headshot.jpg" alt="Dhanesh Patel" className="h-full w-full rounded-[1.5rem] object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_35%)]" />
        </div>
        <div className="mt-6 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Personal brand</p>
          <h2 className="text-3xl font-semibold text-white">A polished presence with a human touch.</h2>
          <p className="text-slate-400">
            This section introduces the personal view behind the architecture work, with a headshot and gallery that reinforce the senior, consulting-first positioning.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {gallery.map((src) => (
          <div key={src} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(2,6,23,0.18)]">
            <img src={src} alt="Dhanesh Patel portfolio" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
