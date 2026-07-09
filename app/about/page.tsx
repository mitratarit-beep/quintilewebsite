import type { Metadata } from "next";
import { about } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "About Quintile Advisory — Specialist Supply Chain, Technology & AI Recruitment",
  description:
    "A boutique specialist recruitment practice built for the functions that are hardest to hire for. Founded and run by Sanghamitra Mitra, MBA, PHR.",
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" headline={about.headline} subtext={about.subtext} />

      {/* Our Story */}
      <section className="section">
        <div className="wrap">
          <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-10 md:gap-16">
            <Reveal>
              <div>
                <p className="eyebrow">Our Story</p>
                <div className="mt-8 flex flex-col gap-4">
                  {["Depth over volume", "Principal-led execution", "Coast-to-coast reach", "High-touch partnership"].map((t, i) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="num">0{i + 1}</span>
                      <span className="font-serif text-[18px]" style={{ color: "var(--color-ink)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                {about.story.map((p, i) => (
                  <p
                    key={i}
                    className={`text-[17px] ${i === 0 ? "dropcap" : ""}`}
                    style={{ color: "var(--color-slate)", lineHeight: 1.7, marginBottom: 20 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section" style={{ background: "var(--color-cream)" }}>
        <div className="wrap">
          <div className="grid md:grid-cols-[0.85fr_1.4fr] gap-10 md:gap-14">
            <Reveal>
              <div className="md:sticky md:top-28">
                <p className="eyebrow">Founder</p>
                <h2 className="h2 mt-5">{about.founder.name}</h2>
                <p className="mt-2 text-[15px]" style={{ color: "var(--color-graphite)" }}>{about.founder.title}</p>

                <a
                  href={about.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 btn btn-ghost"
                  style={{ padding: "10px 18px" }}
                >
                  View LinkedIn Profile <span className="arw">↗</span>
                </a>

                <div className="mt-8 pt-6" style={{ borderTop: "1px dashed var(--color-line-strong)" }}>
                  <p className="eyebrow eyebrow-quiet">Previously at</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {about.founder.firms.map((f) => (
                      <span key={f} className="chip">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                {about.founder.bio.map((p, i) => (
                  <p key={i} className="text-[16.5px]" style={{ color: "var(--color-slate)", lineHeight: 1.72, marginBottom: 20 }}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <p className="eyebrow text-center">What Our Clients Say</p>
              <span className="font-serif block text-center mt-6" style={{ fontSize: 72, color: "var(--color-gold)", lineHeight: 0.4 }}>&ldquo;</span>
              <blockquote className="serif text-center mt-6" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.35 }}>
                {about.testimonial.quote}
              </blockquote>
              <p className="text-center mt-8 font-mono text-[12px]" style={{ color: "var(--color-graphite)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {about.testimonial.attribution}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section" style={{ background: "var(--color-cream)" }}>
        <div className="wrap">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow eyebrow-gold">What Makes Us Different</p>
              <h2 className="h1 mt-5">Six reasons clients trust us.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {about.differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full flex flex-col" style={{ padding: "30px 28px" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h3 mt-4" style={{ minHeight: "2.4em", display: "flex", alignItems: "flex-start" }}>{d.title}</h3>
                  <div className="mb-4" style={{ width: 24, borderTop: "1px solid var(--color-gold)" }} />
                  <p className="text-[15px]" style={{ color: "var(--color-graphite)", lineHeight: 1.65 }}>
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Let's talk about your next critical hire."
        subtext="Every engagement is managed personally, end to end."
        cta="Start a Conversation"
      />
    </>
  );
}
