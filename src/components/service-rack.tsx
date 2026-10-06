"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type RackGroup = {
  name: string;
  units: { slug: string; name: string; label: string }[];
};

export function ServiceRack({ groups }: { groups: RackGroup[] }) {
  const [active, setActive] = useState<string | null>(null);
  // After a click, the clicked unit stays lit until the visitor scrolls by hand.
  const clicked = useRef<string | null>(null);

  useEffect(() => {
    const targets = groups
      .flatMap((group) => group.units)
      .map((unit) => document.getElementById(unit.slug))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (clicked.current) return;
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const el of targets) if (el.getBoundingClientRect().top <= line) current = el.id;
      const last = targets[targets.length - 1];
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && last.getBoundingClientRect().top < window.innerHeight) current = last.id;
      if (last.getBoundingClientRect().bottom < line / 2) current = null;
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const release = () => {
      if (!clicked.current) return;
      clicked.current = null;
      schedule();
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchstart", release, { passive: true });
    window.addEventListener("keydown", release);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchstart", release);
      window.removeEventListener("keydown", release);
    };
  }, [groups]);

  let index = 0;
  return (
    <nav aria-label="Servicios" className="rack">
      {groups.map((group) => (
        <div key={group.name} className="rack-group">
          <p className="rack-group-name">{group.name}</p>
          <ul className="space-y-1">
            {group.units.map((unit) => {
              const i = index++;
              return (
                <li key={unit.slug}>
                  <a
                    href={`#${unit.slug}`}
                    className="rack-unit"
                    data-active={active === unit.slug}
                    aria-current={active === unit.slug ? "true" : undefined}
                    style={{ "--i": i } as CSSProperties}
                    onClick={() => {
                      clicked.current = unit.slug;
                      setActive(unit.slug);
                    }}
                  >
                    <span className="rack-u">{unit.label}</span>
                    <span aria-hidden="true" className="rack-leds">
                      <i />
                      <i />
                    </span>
                    <span className="rack-label">{unit.name}</span>
                    <span aria-hidden="true" className="rack-ports">
                      <i />
                      <i />
                      <i />
                      <i />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
