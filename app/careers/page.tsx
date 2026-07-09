import type { Metadata } from "next";
import Link from "next/link";
import { careers, jobs } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "Open Roles | Quintile Advisory",
  description:
    "Current searches run by Quintile Advisory — Supply Chain, Technology, Data & AI, and Consulting mandates. Reach out with your résumé or a referral.",
};

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" headline={careers.headline} subtext={careers.subtext} />

      <section className="section">
        <div className="wrap">
          <div className="flex flex-col">
            {jobs.map((job, i) => (
              <Reveal key={job.slug} delay={(i % 2) * 60}>
                <div
                  className="grid lg:grid-cols-[1.05fr_1.4fr] gap-6 lg:gap-14 py-12"
                  style={{ borderTop: "1px dashed var(--color-line-strong)" }}
                >
                  {/* Left: title + meta */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="num">{String(i + 1).padStart(2, "0")}</span>
                      {job.urgency && (
                        <span
                          className="font-mono"
                          style={{
                            fontSize: 11,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--color-gold-deep)",
                          }}
                        >
                          · {job.urgency}
                        </span>
                      )}
                      {job.confidential && (
                        <span
                          className="font-mono"
                          style={{
                            fontSize: 11,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--color-flint)",
                          }}
                        >
                          · Confidential Search
                        </span>
                      )}
                    </div>
                    <h2 className="h2 mt-4" style={{ fontSize: "clamp(1.5rem,2.6vw,2rem)" }}>{job.title}</h2>

                    <div className="flex flex-wrap gap-2 mt-5">
                      <span className="chip">{job.type}</span>
                      <span className="chip">{job.level}</span>
                      <span className="chip">{job.function}</span>
                    </div>

                    <dl className="mt-6 space-y-2">
                      <div className="flex gap-2 text-[14px]">
                        <dt style={{ color: "var(--color-flint)", minWidth: 76 }}>Location</dt>
                        <dd style={{ color: "var(--color-slate)" }}>{job.location}</dd>
                      </div>
                      {job.duration && (
                        <div className="flex gap-2 text-[14px]">
                          <dt style={{ color: "var(--color-flint)", minWidth: 76 }}>Duration</dt>
                          <dd style={{ color: "var(--color-slate)" }}>{job.duration}</dd>
                        </div>
                      )}
                    </dl>

                    <Link
                      href={`/contact?role=${encodeURIComponent(job.title)}`}
                      className="btn btn-primary mt-7"
                    >
                      {job.confidential ? "Start a Quiet Conversation" : "Apply Now"} <span className="arw">→</span>
                    </Link>
                  </div>

                  {/* Right: summary + requirements */}
                  <div>
                    <p className="text-[16px]" style={{ color: "var(--color-graphite)", lineHeight: 1.68 }}>
                      {job.summary}
                    </p>

                    <p className="eyebrow eyebrow-quiet mt-7">What We're Looking For</p>
                    <ul className="mt-4 space-y-3">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex gap-3 text-[15px]" style={{ color: "var(--color-slate)", lineHeight: 1.55 }}>
                          <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>—</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-x-2 gap-y-2 mt-6">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono"
                          style={{
                            fontSize: 11,
                            letterSpacing: "0.04em",
                            color: "var(--color-flint)",
                          }}
                        >
                          #{t.replace(/\s+/g, "")}
                        </span>
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
        heading="Don't see the right role?"
        subtext="Most of our searches are confidential and never posted. Send your résumé and we'll reach out when the right one opens."
        cta="Share Your Résumé"
        href="/contact"
      />
    </>
  );
}
