/* Hero signature graphic: a talent network radiating from a central diamond.
   Deterministic layout (no hydration mismatch). Navy lines, gold + navy nodes. */

function node(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: 200 + Math.cos(a) * r, y: 200 + Math.sin(a) * r };
}

export function Constellation() {
  const cx = 200;
  const cy = 200;

  // Rings of nodes
  const rings = [
    { r: 78, count: 6, start: 12 },
    { r: 134, count: 10, start: 0 },
    { r: 186, count: 14, start: 20 },
  ];

  const nodes: { x: number; y: number; r: number; gold: boolean }[] = [];
  rings.forEach((ring, ri) => {
    for (let i = 0; i < ring.count; i++) {
      const angle = ring.start + (360 / ring.count) * i;
      const p = node(angle, ring.r);
      const gold = (i + ri) % 5 === 0;
      nodes.push({ x: p.x, y: p.y, r: gold ? 4.2 : ri === 2 ? 2 : 2.8, gold });
    }
  });

  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" aria-hidden="true">
      {/* connecting lines from center */}
      {nodes.map((n, i) => (
        <line
          key={`l${i}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke="var(--color-navy)"
          strokeOpacity={n.gold ? 0.42 : 0.2}
          strokeWidth={0.7}
        />
      ))}

      {/* faint inter-ring arcs */}
      {rings.map((ring, ri) => (
        <circle
          key={`c${ri}`}
          cx={cx}
          cy={cy}
          r={ring.r}
          stroke="var(--color-navy)"
          strokeOpacity={0.1}
          strokeWidth={0.7}
          strokeDasharray="2 5"
        />
      ))}

      {/* nodes */}
      {nodes.map((n, i) => (
        <circle
          key={`n${i}`}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.gold ? "var(--color-gold)" : "var(--color-navy)"}
        />
      ))}

      {/* central diamond mark */}
      <g>
        <circle cx="200" cy="200" r="34" fill="var(--color-gold)" opacity="0.16">
          <animate attributeName="opacity" values="0.08;0.22;0.08" dur="4s" repeatCount="indefinite" />
        </circle>
        <rect x="171" y="171" width="58" height="58" rx="2" transform="rotate(45 200 200)" fill="var(--color-paper)" stroke="var(--color-navy)" strokeWidth="3" />
        <rect x="185" y="185" width="30" height="30" rx="1.5" transform="rotate(45 200 200)" fill="var(--color-gold)" />
      </g>
    </svg>
  );
}
