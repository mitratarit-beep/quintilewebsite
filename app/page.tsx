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
        <div className="wrap relative" style={{ paddingTop: 168, paddingBottom: 56 }}>
          <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-10 items-center">
            <Reveal>
              <div>
                <span className="tag">
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--color-gold)", display: "inline-block" }} />
                  Boutique Recruitment · Chicago
                </span>
                <h1 className="display mt-7">
                  We Find The{" "}
                  <span style={{ fontStyle: "italic" }}>Exceptional.</span>
                </h1>
                <p className="lede mt-7 max-w-xl">
                  A Chicago-based boutique recruitment firm specializing in Supply Chain,
                  Manufacturing, Operations, Engineering, Technology, and AI talent — across
                  industries, nationally.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn btn-primary">
                    Start a Search <span className="arw">→</span>
                  </Link>
                  <Link href="/services" className="btn btn-ghost">
                    How We Work
                  </Link>
                </div>

                <div className="mt-14 pt-6" style={{ borderTop: "1px dashed var(--color-line-strong)" }}>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {site.disciplines.map((d) => (
                      <span key={d} className="font-mono text-[11px]" style={{ color: "var(--color-slate)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mx-auto w-full max-w-[430px] aspect-square">
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
            <SectionHeader
              eyebrow={homeProblem.eyebrow}
              heading={homeProblem.heading}
              descriptor="The people who move your business forward are rarely the ones sending in a résumé."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12 mt-16">
            {homeProblem.columns.map((col, i) => (
              <Reveal key={col.title} delay={i * 90}>
                <div className="pt-6 h-full" style={{ borderTop: "1px solid var(--color-line-strong)" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")} / 03</span>
                  <h3 className="h3 mt-5">{col.title}</h3>
                  <p className="mt-4 text-[15.5px]" style={{ color: "var(--color-graphite)", lineHeight: 1.66 }}>
                    {col.body}
                  </p>
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
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {homeWhy.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="card card-hover h-full flex flex-col" style={{ padding: "36px 32px" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h3 mt-5" style={{ minHeight: "2.4em", display: "flex", alignItems: "flex-start" }}>{item.title}</h3>
                  <div className="mt-4 mb-5" style={{ width: 28, borderTop: "1px solid var(--color-gold)" }} />
                  <p className="text-[15px]" style={{ color: "var(--color-graphite)", lineHeight: 1.66 }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PULL STATEMENT ---------------- */}
      <section className="section-tight" style={{ background: "var(--color-cream)" }}>
        <div className="wrap">
          <Reveal>
            <figure className="max-w-4xl mx-auto text-center">
              <span className="font-serif block" style={{ fontSize: 56, color: "var(--color-gold)", lineHeight: 1, height: 34, overflow: "hidden" }} aria-hidden>&ldquo;</span>
              <blockquote className="h2 mt-4" style={{ lineHeight: 1.28 }}>
                We don&rsquo;t just match résumés. We assess talent through the lens of your
                business and stakeholders — to ensure a seamless, high-impact fit.
              </blockquote>
            </figure>
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
