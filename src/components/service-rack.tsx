"use client";

import { useEffect, useState, type CSSProperties } from "react";

type RackGroup = {
  name: string;
  units: { slug: string; name: string; label: string }[];
};

export function ServiceRack({ groups }: { groups: RackGroup[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = groups
      .flatMap((group) => group.units)
      .map((unit) => document.getElementById(unit.slug))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [groups]);

  let index = 0;
  return (
    <nav aria-label="Servicios" className="rack">
      {groups.map((group) => (
        <div key={group.name} className="rack-group">
          <p className="rack-group-name">{group.name}</p>
          <ul className="space-y-1.5">
            {group.units.map((unit) => {
              const i = index++;
              return (
                <li key={unit.slug}>
                  <a
                    href={`#${unit.slug}`}
                    className="rack-unit"
                    data-active={active === unit.slug}
                    style={{ "--i": i } as CSSProperties}
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
