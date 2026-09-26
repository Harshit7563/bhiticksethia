import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-wide flex min-h-[70vh] flex-col items-center justify-center pt-[var(--header-h)] text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you’re looking for doesn’t exist. Head back home or talk to our team.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Go Home</Button>
        <Button href="/contact" variant="secondary">
          Talk to a CA
        </Button>
      </div>
      <p className="mt-6 text-sm text-muted-soft">
        Or browse <Link href="/services" className="underline">services</Link>.
      </p>
    </section>
  );
}
