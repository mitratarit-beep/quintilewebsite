"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3">
      <nav
        className="w-full max-w-[1180px] flex items-center justify-between transition-all duration-300"
        style={{
          borderRadius: 82,
          padding: "10px 12px 10px 20px",
          background: scrolled ? "rgba(251,250,246,0.78)" : "rgba(251,250,246,0.55)",
          border: "1px solid var(--color-line)",
          backdropFilter: "blur(14px) saturate(1.6)",
          WebkitBackdropFilter: "blur(14px) saturate(1.6)",
          boxShadow: scrolled
            ? "0 10px 30px -18px rgba(4,34,83,0.35), inset 0 0 10px rgba(4,34,83,0.05)"
            : "inset 0 0 10px rgba(4,34,83,0.04)",
        }}
      >
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[14px] font-medium rounded-full transition-colors"
                style={{
                  color: active ? "var(--color-navy)" : "var(--color-graphite)",
                  background: active ? "var(--color-sand)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 20px" }}>
            Start a Search
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ color: "var(--color-navy)" }}
        >
          <div className="flex flex-col gap-[5px] items-center">
            <span className="block h-[1.5px] w-5 bg-current transition-transform" style={{ transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }} />
            <span className="block h-[1.5px] w-5 bg-current transition-opacity" style={{ opacity: open ? 0 : 1 }} />
            <span className="block h-[1.5px] w-5 bg-current transition-transform" style={{ transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden fixed inset-x-4 top-[76px] z-40 p-4"
          style={{
            borderRadius: 20,
            background: "rgba(251,250,246,0.97)",
            border: "1px solid var(--color-line-strong)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 24px 50px -24px rgba(4,34,83,0.4)",
          }}
        >
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 px-2 text-[16px] border-b"
                style={{ borderColor: "var(--color-line)", color: "var(--color-ink)" }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-4 justify-center">
              Start a Search
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
