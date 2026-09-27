import type { ServiceIcon as IconName } from "@/content/services";

const PATHS: Record<IconName, string> = {
  gestion: "M11 12l9-9 M17 6l2 2 M14.5 8.5l1.5 1.5 M4 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
  switching: "M3 14h18v6H3z M7 17h2 M11 17h2 M15 17h2 M5 9h14 M16 6l3 3-3 3 M8 6L5 9l3 3",
  cableado: "M7 3h10v7l-2 3H9l-2-3z M10 3v4 M12 3v4 M14 3v4 M12 13v8",
  datacenter: "M4 4h16v5H4z M4 11h16v5H4z M4 18h16v3H4z M7 6.5h.01 M7 13.5h.01 M11 6.5h6 M11 13.5h6",
  noc: "M3 4h18v12H3z M8 20h8 M12 16v4 M6 10h3l2-3 2 6 2-3h3",
  wireless: "M4.5 10a11 11 0 0 1 15 0 M7.5 13.5a6.5 6.5 0 0 1 9 0 M10.5 17a2.2 2.2 0 0 1 3 0 M12 20h.01",
  celular: "M12 10v11 M9 21l3-11 3 11 M10 16h4 M8.5 7.5a5 5 0 0 1 7 0 M6 5a8.5 8.5 0 0 1 12 0",
  civil: "M6 21L9 3l3 18 M7.2 14h3.6 M8 9h2 M14 21v-6h7v6 M14 18h7",
  respaldo: "M3 7h16v10H3z M19 10h2v4h-2 M11.5 8.5L8.5 12.5h4l-3 4",
  aire: "M3 5h18v14H3z M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M12 8v8 M8 12h8",
  fibra: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18 M12 9h.01 M9 12.5h.01 M15 12.5h.01 M12 15.5h.01",
};

export function ServiceIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="url(#ari-stroke)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={PATHS[name]} />
    </svg>
  );
}
