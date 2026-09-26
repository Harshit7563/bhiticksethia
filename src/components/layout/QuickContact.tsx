"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, Mail, Calendar, X, Headphones } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const items = [
  {
    href: `tel:${siteConfig.phoneRaw}`,
    label: "Call",
    detail: siteConfig.phone,
    icon: Phone,
    tone: "call" as const,
  },
  {
    href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I’d like to discuss my business finance needs.")}`,
    label: "WhatsApp",
    detail: "Chat with us",
    icon: MessageCircle,
    tone: "whatsapp" as const,
    external: true,
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    detail: siteConfig.email,
    icon: Mail,
    tone: "email" as const,
  },
  {
    href: "/book-consultation",
    label: "Book",
    detail: "Schedule a call",
    icon: Calendar,
    tone: "book" as const,
  },
];

const toneClass = {
  call: "bg-[#e8f1ff] text-[#1d4ed8]",
  whatsapp: "bg-[#e7f8ee] text-[#128C7E]",
  email: "bg-saffron-soft text-saffron",
  book: "bg-accent text-white",
};

export function QuickContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "pointer-events-none fixed bottom-5 right-5 z-40 hidden transition duration-500 md:block",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
    >
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <AnimatePresence>
          {open ? (
            <motion.div
              key="menu"
              initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-[17.5rem] overflow-hidden rounded-[1.5rem] border border-line bg-surface/95 shadow-[var(--shadow-lg)] backdrop-blur-xl"
              role="menu"
              aria-label="Quick contact options"
            >
              <div className="border-b border-line-soft px-4 py-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-soft">
                  Reach us
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink">How can we help?</p>
              </div>

              <ul className="p-2">
                {items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.label}
                      initial={reduce ? false : { opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.04, duration: 0.25 }}
                    >
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-2xl px-2.5 py-2.5 transition",
                          item.tone === "book"
                            ? "bg-accent-soft hover:bg-accent/15"
                            : "hover:bg-paper",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                            toneClass[item.tone],
                          )}
                        >
                          <Icon size={17} aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink">{item.label}</span>
                          <span className="block truncate text-xs text-muted">{item.detail}</span>
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close quick contact" : "Open quick contact"}
          onClick={() => setOpen((v) => !v)}
          whileTap={reduce ? undefined : { scale: 0.96 }}
          className={cn(
            "relative flex h-14 items-center gap-2.5 rounded-full px-5 text-sm font-semibold shadow-[0_16px_40px_rgba(31,138,82,0.35)] transition",
            open
              ? "bg-ink text-paper"
              : "bg-accent text-white hover:bg-accent-deep",
          )}
        >
          {!open ? (
            <span
              className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/40"
              style={{ animationDuration: "2.4s" }}
              aria-hidden
            />
          ) : null}
          {open ? <X size={18} aria-hidden /> : <Headphones size={18} aria-hidden />}
          <span>{open ? "Close" : "Contact"}</span>
        </motion.button>
      </div>
    </div>
  );
}
