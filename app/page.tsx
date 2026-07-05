import Link from "next/link";
import { homeProblem, homeWhy, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Constellation } from "@/components/Constellation";
import { SectionHeader, CTABanner } from "@/components/UI";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden />
        <div className="wrap relative" style={{ paddingTop: 150, paddingBottom: 40 }}>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-center">
            <Reveal>
              <div>
                <span className="tag">
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--color-gold)", display: "inline-block" }} />
                  Boutique recruitment · Chicago
                </span>
                <h1 className="display mt-6">
                  We Find The <span style={{ fontStyle: "italic", color: "var(--color-navy)" }}>Exceptional.</span>
                </h1>
                <p className="lede mt-7 max-w-xl">
                  A Chicago-based boutique recruitment firm specializing in Supply Chain,
                  Manufacturing, Operations, Engineering, Technology, and AI talent — across
                  industries, nationally.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn btn-primary">
                    Start a Search <span className="arw">→</span>
                  </Link>
                  <Link href="/services" className="btn btn-ghost">
                    How We Work
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 max-w-xl">
                  {site.disciplines.map((d) => (
                    <span key={d} className="font-mono text-[12px]" style={{ color: "var(--color-slate)", letterSpacing: "0.04em" }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mx-auto w-full max-w-[440px] aspect-square">
                <Constellation />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- THE PROBLEM ---------------- */}
      <section className="section" style={{ background: "var(--color-cream)" }}>
        <div className="wrap">
          <Reveal>
            <SectionHeader eyebrow={homeProblem.eyebrow} heading={homeProblem.heading} />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px mt-14" style={{ background: "var(--color-line)" }}>
            {homeProblem.columns.map((col, i) => (
              <Reveal key={col.title} delay={i * 90}>
                <div className="h-full" style={{ background: "var(--color-cream)", padding: "8px 0" }}>
                  <div style={{ paddingRight: 20 }}>
                    <span className="num">0{i + 1}</span>
                    <h3 className="h3 mt-4">{col.title}</h3>
                    <p className="mt-4 text-[15.5px]" style={{ color: "var(--color-graphite)", lineHeight: 1.65 }}>
                      {col.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY QUINTILE ---------------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHeader
              eyebrow={homeWhy.eyebrow}
              heading={homeWhy.heading}
              descriptor="Two disciplines in one partner — real recruiting craft, and real functional depth in the work your teams actually do."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {homeWhy.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="card card-hover h-full">
                  <div
                    className="flex items-center justify-center mb-6"
                    style={{ width: 44, height: 44, borderRadius: 10, background: "var(--color-sand)", border: "1px solid var(--color-line)" }}
                  >
                    <span className="font-serif" style={{ color: "var(--color-navy)", fontSize: 20 }}>{i + 1}</span>
                  </div>
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-[15px]" style={{ color: "var(--color-graphite)", lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PULL STATEMENT ---------------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-serif" style={{ fontSize: 64, color: "var(--color-gold)", lineHeight: 0.5, display: "inline-block" }}>&ldquo;</span>
              <p className="h2 mt-2" style={{ lineHeight: 1.25 }}>
                We don&rsquo;t just match resumes. We assess talent through the lens of your
                business and stakeholders — to ensure a seamless, high-impact fit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CTABanner
        heading="Every search is managed personally."
        subtext="Let's talk about what you're looking for. No commitment required."
        cta="Get in Touch"
      />
    </>
  );
}
