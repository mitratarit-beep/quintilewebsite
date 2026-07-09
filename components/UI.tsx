import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/* Editorial section header: monospace marker + serif heading + descriptor,
   two-column on desktop (heading left, descriptor right, baseline-aligned). */
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
  if (align === "center") {
    return (
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow eyebrow-gold" style={dark ? { color: "#f2795c" } : undefined}>{eyebrow}</p>
        <h2 className="h1 mt-5" style={{ color: dark ? "#f4efe3" : undefined }}>{heading}</h2>
        {descriptor && (
          <p className="lede mt-5 mx-auto max-w-xl" style={{ color: dark ? "#c3bcac" : undefined }}>{descriptor}</p>
        )}
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-16 md:items-end">
      <div>
        <p className="eyebrow eyebrow-gold" style={dark ? { color: "#f2795c" } : undefined}>{eyebrow}</p>
        <h2 className="h1 mt-5" style={{ color: dark ? "#f4efe3" : undefined, maxWidth: "16ch" }}>{heading}</h2>
      </div>
      {descriptor && (
        <p className="lede md:pb-2" style={{ color: dark ? "#c3bcac" : undefined }}>
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
    <section className="relative overflow-hidden" style={{ paddingTop: 168, paddingBottom: 8 }}>
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow eyebrow-gold">{eyebrow}</p>
          <h1 className="display mt-6" style={{ maxWidth: "17ch" }}>
            {headline}
          </h1>
          <p className="lede mt-7 max-w-2xl">{subtext}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function CTABanner({
  heading = "Rigorous, high-touch, personalized end-to-end execution on every mandate.",
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
            style={{ borderRadius: 4, padding: "clamp(44px,6vw,80px)" }}
          >
            {/* thin clay top rule */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 64, height: 2, background: "#e8613f" }} aria-hidden />
            <div className="grid gap-10 md:grid-cols-[1.5fr_auto] md:items-end">
              <div>
                <p className="eyebrow" style={{ color: "#f2795c" }}>Start a Search</p>
                <h2 className="h1 mt-5" style={{ color: "#f4efe3", maxWidth: "17ch" }}>{heading}</h2>
                <p className="lede mt-5" style={{ color: "#c3bcac", maxWidth: "44ch" }}>{subtext}</p>
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
