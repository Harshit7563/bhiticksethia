import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "surface" | "ink" | "accent-soft";
}) {
  const tones = {
    paper: "bg-paper text-ink",
    surface: "bg-surface text-ink",
    ink: "bg-ink text-paper",
    "accent-soft": "bg-accent-soft text-ink",
  };

  return (
    <section id={id} className={cn("section-pad relative", tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl leading-[1.08] text-balance",
          light ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-paper/70" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
