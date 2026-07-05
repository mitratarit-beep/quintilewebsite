import type { Metadata } from "next";
import { functions } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "Functions We Recruit — Supply Chain, Manufacturing, Engineering, AI",
  description:
    "Specialist recruitment across supply chain planning, procurement, manufacturing, engineering, logistics, supply chain technology, AI & data, consulting, and executive leadership — Analyst through C-Suite.",
};

export default function Functions() {
  return (
    <>
      <PageHero eyebrow="Functions" headline={functions.headline} subtext={functions.subtext} />

      <section className="section">
        <div className="wrap">
          <div className="flex flex-col">
            {functions.areas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 2) * 60}>
                <div
                  className="grid md:grid-cols-[0.85fr_1.4fr] gap-6 md:gap-12 py-10"
                  style={{ borderTop: "1px dashed var(--color-line-strong)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="num pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="h2" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)" }}>{area.title}</h3>
                  </div>

                  <div>
                    <p className="eyebrow eyebrow-quiet">Specialties</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
                      {area.specialties.map((s, si) => (
                        <span key={s} className="text-[15px]" style={{ color: "var(--color-slate)" }}>
                          {s}
                          {si < area.specialties.length - 1 && (
                            <span style={{ color: "var(--color-gold)", margin: "0 2px 0 10px" }}>·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <p className="eyebrow eyebrow-quiet mt-7">Levels</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {area.levels.map((lvl) => (
                        <span key={lvl} className="chip">{lvl}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px dashed var(--color-line-strong)" }} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Looking for a specialist we haven't listed?"
        subtext="If it sits within supply chain, operations, engineering, technology, or AI — we can help."
        cta="Ask Us"
      />
    </>
  );
}
