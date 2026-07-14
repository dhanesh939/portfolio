import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  download?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  download = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200";
  const variants = {
    primary:
      "border-cyan-400/70 bg-cyan-500/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)] hover:bg-cyan-500/20",
    secondary:
      "border-white/10 bg-white/5 text-white hover:border-cyan-400/50 hover:bg-white/10",
    ghost: "border-transparent bg-transparent px-0 py-0 text-cyan-300 hover:text-cyan-200",
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (!href) {
    return <button className={classes}>{children}</button>;
  }

  if (download || external) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download ? "" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
