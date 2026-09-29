import type { CSSProperties } from "react";
import { Swirl } from "@/components/swirl";

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

const CHIPS = [
  { label: "3G, 4G y 5G", className: "left-0 top-[12%]" },
  { label: "Fibra Óptica", className: "right-0 top-[38%]" },
  { label: "Data Center", className: "bottom-[14%] left-[4%]" },
  { label: "Monitoreo 24/7", className: "bottom-[2%] right-[10%]" },
];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-[1760px] grid-cols-1 items-center gap-14 px-5 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:px-16">
        <div className="lg:col-span-7">
          <h1
            id="inicio-titulo"
            className="rise font-display text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.2rem] lg:text-[4.2rem]"
            style={delay(0.05)}
          >
            Servicios de Telecomunicaciones para Todo Tipo de Redes
          </h1>
          <p className="rise mt-7 max-w-[44ch] text-lg leading-relaxed text-text-soft md:text-xl" style={delay(0.15)}>
            Gestión, infraestructura, instalación y mantenimiento.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={delay(0.25)}>
            <a href="#contacto" className="rounded-xl bg-white px-6 py-4 text-[17px] font-semibold text-ink transition-colors hover:bg-cyan">
              Solicitar Asesoría
            </a>
            <a
              href="#servicios"
              className="rounded-xl px-6 py-4 text-[17px] font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/5"
            >
              Ver Servicios
            </a>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[540px] lg:col-span-5">
          <div aria-hidden="true" className="swirl-glow absolute inset-[12%] -z-10 rounded-full blur-3xl" />
          <Swirl className="absolute inset-[14%] h-[72%] w-[72%]" />
          {CHIPS.map((chip, i) => (
            <p
              key={chip.label}
              className={`rise absolute inline-flex items-center gap-2 rounded-full bg-surface/80 px-3.5 py-2 text-[14px] font-medium text-white ring-1 ring-line backdrop-blur ${chip.className}`}
              style={delay(0.6 + i * 0.1)}
            >
              <span aria-hidden="true" className="led" />
              {chip.label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
