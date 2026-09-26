"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site";

const actions = [
  {
    href: `tel:${siteConfig.phoneRaw}`,
    label: "Call",
    icon: Phone,
    className: "bg-paper text-ink border border-line",
  },
  {
    href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I’d like to discuss my business finance needs.")}`,
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
    className: "bg-[#128C7E] text-white",
  },
  {
    href: "/book-consultation",
    label: "Book",
    icon: Calendar,
    className: "bg-accent text-white",
  },
];

export function MobileStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className={`flex h-12 items-center justify-center gap-1.5 rounded-full text-sm font-semibold shadow-sm ${action.className}`}
            >
              <Icon size={15} aria-hidden />
              {action.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
