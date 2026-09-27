"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("es-MX", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "America/Mexico_City",
});

const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (!timer) timer = setInterval(() => listeners.forEach((listener) => listener()), 1000);
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

export function NocClock() {
  const seconds = useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / 1000),
    () => 0,
  );
  return (
    <p className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 ring-1 ring-line">
      <span aria-hidden="true" className="led led-live" />
      <span className="text-[14px] text-text-soft">Hora del centro de México</span>
      <span className="font-display text-lg font-semibold tabular-nums text-white">
        {seconds ? format.format(new Date(seconds * 1000)) : "--:--:--"}
      </span>
    </p>
  );
}
