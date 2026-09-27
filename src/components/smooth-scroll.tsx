"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export function SmoothScroll() {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => true,
  );
  if (reduced) return null;
  return <ReactLenis root options={{ anchors: { offset: -96 } }} />;
}
