"use client";

import { useLayoutEffect, useRef } from "react";

const DURATION = 4000;

function formatValue(value: number, prefix: string, suffix: string) {
  return `${prefix}${new Intl.NumberFormat("es-MX").format(value)}${suffix}`;
}

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
};

export function CountUp({ value, prefix = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.textContent = formatValue(0, prefix, suffix);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = formatValue(Math.round(value * eased), prefix, suffix);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, prefix, suffix]);

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {formatValue(value, prefix, suffix)}
      </span>
      <span className="sr-only">{formatValue(value, prefix, suffix)}</span>
    </>
  );
}
