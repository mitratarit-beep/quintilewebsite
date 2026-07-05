import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/* Editorial section header: monospace marker + serif heading + descriptor */
export function SectionHeader({
  eyebrow,
  heading,
  descriptor,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  heading: string;
  descriptor?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={align === "center" ? "text-center max-w-3xl mx-auto" : "grid md:grid-cols-[1.1fr_1fr] gap-6 md:gap-12 items-end"}
    >
      <div>
        <p className="eyebrow" style={dark ? { color: "var(--color-gold)" } : undefined}>{eyebrow}</p>
        <h2 className="h1 mt-4" style={{ color: dark ? "#f6f3ea" : undefined }}>{heading}</h2>
      </div>
      {descriptor && (
        <p className="lede" style={{ color: dark ? "#c4c9d1" : undefined }}>
          {descriptor}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  headline,
  subtext,
  children,
}: {
  eyebrow: string;
  headline: string;
  subtext: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 148, paddingBottom: 24 }}>
      <div className="absolute inset-0 grid-lines opacity-70 pointer-events-none" aria-hidden />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-5" style={{ maxWidth: "16ch" }}>
            {headline}
          </h1>
          <p className="lede mt-6 max-w-2xl">{subtext}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function CTABanner({
  heading = "Every search is managed personally.",
  subtext = "Let's talk about what you're looking for.",
  cta = "Get in Touch",
  href = "/contact",
}: {
  heading?: string;
  subtext?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div
            className="dark-section on-dark relative overflow-hidden"
            style={{ borderRadius: 18, padding: "clamp(40px,6vw,72px)" }}
          >
            <div className="relative grid gap-8 md:grid-cols-[1.5fr_auto] md:items-center">
              <div>
                <h2 className="h1" style={{ color: "#f6f3ea", maxWidth: "18ch" }}>{heading}</h2>
                <p className="lede mt-4" style={{ color: "#c4c9d1" }}>{subtext}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={href} className="btn btn-gold">
                  {cta} <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
