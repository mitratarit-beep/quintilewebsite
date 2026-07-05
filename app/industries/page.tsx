import type { Metadata } from "next";
import { industries } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "Industries We Serve — CPG, Industrial, Life Sciences, PE, Consulting",
  description:
    "Specialist recruitment across consulting, private equity, industrial and heavy manufacturing, aerospace & defense, CPG, life sciences, technology, logistics, automotive, and retail.",
};

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" headline={industries.headline} subtext={industries.subtext} />

      <section className="section">
        <div className="wrap">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.segments.map((seg, i) => (
              <Reveal key={seg.title} delay={(i % 3) * 70}>
                <div className="card card-hover h-full flex flex-col" style={{ padding: "30px 28px" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h3 mt-4" style={{ fontSize: 20, minHeight: "2.4em", display: "flex", alignItems: "flex-start" }}>{seg.title}</h3>
                  <div className="mb-4" style={{ width: 24, borderTop: "1px solid var(--color-gold)" }} />
                  <p className="text-[14.5px]" style={{ color: "var(--color-graphite)", lineHeight: 1.62 }}>
                    {seg.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Hiring in a sector we know well?"
        subtext="From mid-market to global enterprise, we bring the same depth to every search."
        cta="Get in Touch"
      />
    </>
  );
}
