"use client";

import type { ReactNode } from "react";
import { openLead } from "@/components/lead-store";

export function LeadButton({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" className={`cursor-pointer ${className}`} onClick={openLead}>
      {children}
    </button>
  );
}
