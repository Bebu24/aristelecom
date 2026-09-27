import type { CSSProperties } from "react";
import { swirl } from "@/content/logo";

export function Swirl({ className = "" }: { className?: string }) {
  const [x, y, w, h] = swirl.viewBox;
  const origin = { transformOrigin: `${swirl.center[0]}px ${swirl.center[1]}px` };
  return (
    <svg viewBox={`${x} ${y} ${w} ${h}`} aria-hidden="true" className={className}>
      <defs>
        {swirl.blades.map((blade, i) => (
          <linearGradient
            key={i}
            id={`swirl-${i}`}
            gradientUnits="userSpaceOnUse"
            x1={blade.g1[0]}
            y1={blade.g1[1]}
            x2={blade.g2[0]}
            y2={blade.g2[1]}
          >
            <stop offset="0" stopColor={blade.c1} />
            <stop offset="1" stopColor={blade.c2} />
          </linearGradient>
        ))}
      </defs>
      <g className="swirl-spin" style={origin}>
        {swirl.blades.map((blade, i) => (
          <g key={i} className="swirl-blade" style={{ ...origin, "--i": i } as CSSProperties}>
            <g transform={swirl.transform}>
              <path d={blade.d} fill={`url(#swirl-${i})`} />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}
