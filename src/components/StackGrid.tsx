type StackCategory = {
  title: string;
  tools: string[];
};

type StackGridProps = {
  categories: StackCategory[];
};

export function StackGrid({ categories }: StackGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {categories.map((category) => (
        <div key={category.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            {category.tools.map((tool) => (
              <li key={tool} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
