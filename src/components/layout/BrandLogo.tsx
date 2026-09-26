import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  priority = false,
  href = "/",
}: {
  className?: string;
  priority?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} — Chartered Accountants`}
        width={1024}
        height={341}
        priority={priority}
        className="h-16 w-auto max-w-[min(78vw,520px)] object-contain object-left sm:h-[4.75rem] sm:max-w-[580px] lg:h-20 lg:max-w-[640px]"
      />
    </Link>
  );
}
