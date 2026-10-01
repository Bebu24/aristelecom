"use client";

import type { ReactNode } from "react";
import { openLead } from "@/components/lead-store";

export function LeadButton({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <a
      href="#contacto"
      className={className}
      onClick={(event) => {
        event.preventDefault();
        openLead();
      }}
    >
      {children}
    </a>
  );
}
