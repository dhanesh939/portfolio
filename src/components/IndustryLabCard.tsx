import Link from "next/link";
import { Badge } from "./Badge";
import { Card } from "./Card";

type IndustryLabCardProps = {
  title: string;
  summary: string;
  href: string;
};

export function IndustryLabCard({ title, summary, href }: IndustryLabCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <Badge>Industry Lab</Badge>
        <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{summary}</p>
      </div>
      <Link href={href} className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
        Read the framework →
      </Link>
    </Card>
  );
}
