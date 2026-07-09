import type { Metadata } from "next";
import { contact, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Quintile Advisory | Start a Search",
  description:
    "Start a search or talk through a hiring challenge. Chicago-based, recruiting nationally. Email quintileadvisory@quintileadvisory.com or call +1 630 864 0591.",
};

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;

  const details = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
    { label: "Location", value: `${site.location} — Recruiting nationally across the US` },
    { label: "LinkedIn", value: "Quintile Advisory ↗", href: site.linkedin },
  ];

  return (
    <>
      <section className="relative overflow-hidden" style={{ paddingTop: 148, paddingBottom: 8 }}>
        <div className="absolute inset-0 grid-lines opacity-70 pointer-events-none" aria-hidden />
        <div className="wrap relative">
          <Reveal>
            <p className="eyebrow">{role ? "Job Application" : "Contact"}</p>
            <h1 className="display mt-5" style={{ maxWidth: "18ch" }}>
              {role ? `Apply for ${role}.` : contact.headline}
            </h1>
            <p className="lede mt-6 max-w-2xl">
              {role
                ? "Send your résumé and a short note — every application reaches the founder directly."
                : contact.subtext}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
            {/* Details */}
            <Reveal>
              <div>
                <p className="eyebrow eyebrow-quiet">Contact Details</p>
                <div className="mt-6 flex flex-col">
                  {details.map((d) => (
                    <div key={d.label} className="py-5" style={{ borderTop: "1px dashed var(--color-line-strong)" }}>
                      <p className="font-mono text-[11px]" style={{ color: "var(--color-flint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="ulink font-serif break-words"
                          style={{ fontSize: 19, display: "inline-block", marginTop: 6 }}
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-serif" style={{ fontSize: 19, color: "var(--color-ink)", marginTop: 6 }}>{d.value}</p>
                      )}
                    </div>
                  ))}
                  <div style={{ borderTop: "1px dashed var(--color-line-strong)" }} />
                </div>

                <div
                  className="mt-8 p-6"
                  style={{ background: "var(--color-cream)", borderRadius: 8, border: "1px solid var(--color-line)" }}
                >
                  <p className="font-serif" style={{ fontSize: 18, color: "var(--color-ink)", lineHeight: 1.3 }}>
                    Prefer a direct, confidential conversation?
                  </p>
                  <p className="mt-2 text-[14.5px]" style={{ color: "var(--color-graphite)", lineHeight: 1.6 }}>
                    Every enquiry reaches the founder directly. Discretion is the baseline — not an upgrade.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100}>
              <ContactForm applyingFor={role} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
