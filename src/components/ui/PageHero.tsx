import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-paper pt-[calc(var(--header-h)+2.5rem)] pb-14 md:pb-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 grid-atmosphere opacity-70" aria-hidden />
      <div className="container-wide relative">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
