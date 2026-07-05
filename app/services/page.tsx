import type { Metadata } from "next";
import { services } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "Executive Search & Recruitment Services | Quintile Advisory",
  description:
    "Executive & retained search, exclusive & contingency, interim placement, sub-contractor partnership, and embedded recruitment capacity — a transparent five-step process.",
};

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" headline={services.headline} subtext={services.subtext} />

      {/* Offerings */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">01 · Our Services</p>
          </Reveal>
          <div className="mt-10">
            {services.offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 2) * 70}>
                <div
                  className="grid md:grid-cols-[auto_1fr] gap-5 md:gap-10 py-9 group"
                  style={{ borderTop: "1px dashed var(--color-line-strong)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="num pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="h3 md:w-[320px] transition-colors" style={{ color: "var(--color-ink)" }}>
                      {o.title}
                    </h3>
                  </div>
                  <p className="text-[16px]" style={{ color: "var(--color-graphite)", lineHeight: 1.7, maxWidth: "62ch" }}>
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px dashed var(--color-line-strong)" }} />
          </div>
        </div>
      </section>

      {/* Five-Step Process */}
      <section className="section" style={{ background: "var(--color-cream)" }}>
        <div className="wrap">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow">02 · Our Five-Step Process</p>
              <h2 className="h1 mt-4">Transparent, accountable, and tailored.</h2>
            </div>
          </Reveal>

          <div className="mt-16 relative">
            <div className="grid gap-5 md:grid-cols-5">
              {services.process.map((step, i) => (
                <Reveal key={step.n} delay={i * 80}>
                  <div className="card h-full" style={{ background: "var(--color-bone)" }}>
                    <div className="flex items-center justify-between">
                      <span className="font-serif" style={{ fontSize: 34, color: "var(--color-gold)" }}>{step.n}</span>
                      {i < services.process.length - 1 && (
                        <span className="hidden md:inline" style={{ color: "var(--color-flint)" }}>→</span>
                      )}
                    </div>
                    <h3 className="mt-5 font-serif" style={{ fontSize: 19, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, minHeight: "2.4em" }}>
                      {step.title}
                    </h3>
                    <div className="mt-4 mb-4" style={{ width: 24, borderTop: "1px solid var(--color-line-strong)" }} />
                    <p className="text-[14px]" style={{ color: "var(--color-graphite)", lineHeight: 1.6 }}>
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Principles */}
      <section className="section">
        <div className="wrap">
          <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <div>
                <p className="eyebrow">03 · Engagement Principles</p>
                <h2 className="h1 mt-4">How we hold ourselves accountable.</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid sm:grid-cols-2 gap-px" style={{ background: "var(--color-line)" }}>
                {services.principles.map((p, i) => {
                  const [head, ...rest] = p.split(" — ");
                  return (
                    <div key={i} style={{ background: "var(--color-paper)", padding: "28px 24px" }}>
                      <div className="flex items-center gap-3">
                        <span style={{ width: 8, height: 8, background: "var(--color-gold)", transform: "rotate(45deg)", display: "inline-block" }} />
                        <h3 className="font-serif" style={{ fontSize: 18, color: "var(--color-ink)" }}>{head}</h3>
                      </div>
                      {rest.length > 0 && (
                        <p className="mt-2 text-[14.5px]" style={{ color: "var(--color-graphite)", lineHeight: 1.6 }}>
                          {rest.join(" — ")}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Tell us about the role you're trying to fill."
        subtext="We'll map the search and show you exactly how we'll approach it."
        cta="Start a Search"
      />
    </>
  );
}
