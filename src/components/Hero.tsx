import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";

type HeroProps = {
  eyebrow?: string;
  title: string;
  headline: string;
  intro: string;
  buttons?: Array<{ label: string; href: string; variant?: "primary" | "secondary" | "ghost" }>; 
  proofLine?: string;
  children?: ReactNode;
};

export function Hero({ eyebrow, title, headline, intro, buttons, proofLine, children }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_38%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)] sm:p-12 lg:p-16">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="relative max-w-4xl">
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-300 sm:text-2xl">
          {headline}
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{intro}</p>
        {buttons ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {buttons.map((button) => (
              <Button key={button.label} href={button.href} variant={button.variant ?? "primary"}>
                {button.label}
              </Button>
            ))}
          </div>
        ) : null}
        {proofLine ? <p className="mt-5 text-sm font-medium uppercase tracking-[0.25em] text-cyan-200">{proofLine}</p> : null}
        {children}
      </div>
    </section>
  );
}
