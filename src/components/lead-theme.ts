import type { LeadStyles } from "@/components/lead-drawer";

export const leadStyles: LeadStyles = {
  panel: "bg-surface text-text",
  header: "border-b border-line",
  title: "font-display text-2xl font-semibold tracking-[-0.02em] text-white",
  subtitle: "mt-2 text-[15px] text-text-soft",
  close: "grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-line transition-colors hover:bg-white/10",
  label: "text-[15px] font-medium text-text-soft",
  field:
    "w-full rounded-xl bg-ink/70 px-4 py-3.5 text-[17px] text-white outline-none ring-1 ring-inset ring-line transition-shadow focus:ring-2 focus:ring-cyan",
  group: "rounded-xl bg-ink/70 text-white ring-1 ring-inset ring-line transition-shadow focus-within:ring-2 focus-within:ring-cyan",
  prefix: "text-[17px] text-text-soft",
  button:
    "w-full rounded-xl bg-white px-7 py-4 text-[17px] font-semibold text-ink transition-colors hover:bg-cyan disabled:cursor-wait disabled:opacity-60",
  status: "text-[15px] text-text-soft",
};
