import Link from "next/link";

/* Concentric-diamond mark, recreated from the Quintile logo as clean vector. */
export function LogoMark({
  size = 34,
  stroke = "currentColor",
  center = "currentColor",
}: {
  size?: number;
  stroke?: string;
  center?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <rect x="6" y="6" width="88" height="88" rx="3" transform="rotate(45 50 50)" stroke={stroke} strokeWidth="3.2" />
      <rect x="24" y="24" width="52" height="52" rx="2.5" transform="rotate(45 50 50)" stroke={stroke} strokeWidth="3.2" />
      <rect x="39.5" y="39.5" width="21" height="21" rx="1.5" transform="rotate(45 50 50)" fill={center} />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  withTagline = false,
}: {
  variant?: "dark" | "light";
  withTagline?: boolean;
}) {
  const ink = variant === "dark" ? "var(--color-navy)" : "#f4f1e8";
  const sub = variant === "dark" ? "var(--color-gold-deep)" : "var(--color-gold)";
  return (
    <Link href="/" aria-label="Quintile Advisory — home" className="flex items-center gap-3 group">
      <span style={{ color: ink }}>
        <LogoMark size={30} stroke={ink} center={ink} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-serif"
          style={{ color: ink, fontSize: "20px", letterSpacing: "-0.01em", lineHeight: 1 }}
        >
          Quintile
        </span>
        {withTagline ? (
          <span
            className="font-mono"
            style={{ color: sub, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "3px" }}
          >
            Advisory
          </span>
        ) : (
          <span
            className="font-mono"
            style={{ color: sub, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "3px" }}
          >
            Advisory
          </span>
        )}
      </span>
    </Link>
  );
}
