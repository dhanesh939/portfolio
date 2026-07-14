type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/40 bg-[linear-gradient(135deg,_rgba(6,182,212,0.22),_rgba(59,130,246,0.24))] shadow-[0_0_30px_rgba(34,211,238,0.16)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_45%)]" />
        <svg viewBox="0 0 64 64" className="relative h-7 w-7" aria-label="Dhanesh Patel monogram" role="img">
          <rect x="6" y="6" width="52" height="52" rx="16" fill="rgba(2,6,23,0.9)" stroke="rgba(34,211,238,0.8)" strokeWidth="2" />
          <path d="M18 18 L18 46 L26 46 Q34 46 34 32 Q34 18 26 18 Z M40 46 L40 18 L48 18 Q54 18 54 24 Q54 30 48 30 L40 30" fill="url(#dpGradient)" />
          <defs>
            <linearGradient id="dpGradient" x1="16" y1="18" x2="42" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67e8f9" />
              <stop offset="1" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {!compact ? (
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-white uppercase">Dhanesh Patel</p>
          <p className="text-xs text-slate-400">Director, Enterprise Customer Intelligence Architecture</p>
        </div>
      ) : null}
    </div>
  );
}
