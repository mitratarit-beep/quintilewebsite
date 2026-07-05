import Link from "next/link";
import { site, nav } from "@/lib/content";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="dark-section on-dark">
      <div className="wrap" style={{ paddingBlock: "72px 40px" }}>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={34} stroke="#f4f1e8" center="var(--color-gold)" />
              <span className="font-serif" style={{ color: "#f4f1e8", fontSize: 24, letterSpacing: "-0.01em" }}>
                Quintile Advisory
              </span>
            </div>
            <p className="font-serif mt-5" style={{ color: "#e7d6a3", fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              We find the exceptional.
            </p>
            <p className="mt-5 text-[13px] font-mono" style={{ color: "#9aa6b4", letterSpacing: "0.04em" }}>
              {site.disciplines.join("  ·  ")}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow" style={{ color: "#c9a84c" }}>Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] transition-colors" style={{ color: "#c4c9d1" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow" style={{ color: "#c9a84c" }}>Contact</p>
            <ul className="mt-5 space-y-3 text-[15px]" style={{ color: "#c4c9d1" }}>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" style={{ borderColor: "#ffffff1f" }} />
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[13px]" style={{ color: "#8b96a4" }}>
          <p>© {new Date().getFullYear()} Quintile Advisory LLC. All rights reserved.</p>
          <p className="font-mono" style={{ letterSpacing: "0.06em" }}>Chicago, Illinois — Recruiting nationally across the US</p>
        </div>
      </div>
    </footer>
  );
}
