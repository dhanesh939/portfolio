import { Button } from "./Button";

type CTASectionProps = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
};

export function CTASection({ title, description, href, buttonLabel }: CTASectionProps) {
  return (
    <section className="rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(15,23,42,0.95))] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.25)] sm:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">{description}</p>
        </div>
        <Button href={href}>{buttonLabel}</Button>
      </div>
    </section>
  );
}
