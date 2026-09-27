"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { logoHorizontal } from "@/content/logo";
import { site, mailto } from "@/content/site";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const link = "rounded-lg px-2.5 py-2 sm:px-3 text-text-soft transition-colors hover:bg-white/5 hover:text-white";

export function SiteHeader() {
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > 8,
    () => false,
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-line bg-ink/85" : "border-transparent bg-ink/40"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1760px] items-center justify-between gap-4 px-5 md:h-24 md:px-10 lg:px-16">
        <a href="#inicio" className="shrink-0">
          <Image
            src="/logo/logo-horizontal-blanco.svg"
            alt={site.legalName}
            width={logoHorizontal.width}
            height={logoHorizontal.height}
            loading="eager"
            className="h-7 w-auto sm:h-10 md:h-12"
          />
        </a>
        <nav aria-label="Principal" className="flex items-center gap-1 text-[15px] font-medium md:gap-2 md:text-base">
          <a href="#nosotros" className={`hidden sm:block ${link}`}>
            Nosotros
          </a>
          <a href="#servicios" className={`max-[379px]:hidden ${link}`}>
            Servicios
          </a>
          <a href="#contacto" className={link}>
            Contacto
          </a>
          <a
            href={mailto}
            className="ml-2 hidden rounded-xl bg-white px-5 py-3 font-semibold text-ink transition-colors hover:bg-cyan lg:inline-block"
          >
            Escribir un correo
          </a>
        </nav>
      </div>
    </header>
  );
}
