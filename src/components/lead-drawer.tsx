"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { useLenis } from "lenis/react";
import { closeLead, isLeadOpen, subscribeLead } from "@/components/lead-store";

const PAISES = [
  { iso: "MX", nombre: "México", codigo: "52" },
  { iso: "US", nombre: "Estados Unidos", codigo: "1" },
  { iso: "CA", nombre: "Canadá", codigo: "1" },
  { iso: "GT", nombre: "Guatemala", codigo: "502" },
  { iso: "BZ", nombre: "Belice", codigo: "501" },
  { iso: "SV", nombre: "El Salvador", codigo: "503" },
  { iso: "HN", nombre: "Honduras", codigo: "504" },
  { iso: "NI", nombre: "Nicaragua", codigo: "505" },
  { iso: "CR", nombre: "Costa Rica", codigo: "506" },
  { iso: "PA", nombre: "Panamá", codigo: "507" },
  { iso: "CU", nombre: "Cuba", codigo: "53" },
  { iso: "DO", nombre: "República Dominicana", codigo: "1" },
  { iso: "PR", nombre: "Puerto Rico", codigo: "1" },
  { iso: "CO", nombre: "Colombia", codigo: "57" },
  { iso: "VE", nombre: "Venezuela", codigo: "58" },
  { iso: "EC", nombre: "Ecuador", codigo: "593" },
  { iso: "PE", nombre: "Perú", codigo: "51" },
  { iso: "BO", nombre: "Bolivia", codigo: "591" },
  { iso: "CL", nombre: "Chile", codigo: "56" },
  { iso: "AR", nombre: "Argentina", codigo: "54" },
  { iso: "UY", nombre: "Uruguay", codigo: "598" },
  { iso: "PY", nombre: "Paraguay", codigo: "595" },
  { iso: "BR", nombre: "Brasil", codigo: "55" },
  { iso: "ES", nombre: "España", codigo: "34" },
];

export type LeadStyles = {
  panel: string;
  header: string;
  title: string;
  subtitle: string;
  close: string;
  label: string;
  field: string;
  group: string;
  prefix: string;
  button: string;
  status: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export function LeadDrawer({ styles, company }: { styles: LeadStyles; company: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useSyncExternalStore(subscribeLead, isLeadOpen, () => false);
  const [status, setStatus] = useState<Status>("idle");
  const [pais, setPais] = useState("MX");
  const lenis = useLenis();
  const actual = PAISES.find((item) => item.iso === pais) ?? PAISES[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      dialog.querySelector<HTMLInputElement>('input[name="nombre"]')?.focus();
      lenis?.stop();
    }
    if (!open && dialog.open) dialog.close();
  }, [open, lenis]);

  function handleClose() {
    closeLead();
    lenis?.start();
    if (status !== "sending") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.get("nombre"),
          apellido: data.get("apellido"),
          correo: data.get("correo"),
          telefono: `+${actual.codigo} ${String(data.get("telefono") ?? "").trim()}`,
          empresa: data.get("empresa"),
          sitio: data.get("sitio"),
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="asesoria-titulo"
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      className={`lead-drawer ${styles.panel}`}
    >
      <div className="flex h-full flex-col">
        <div className={`flex items-start justify-between gap-4 px-6 py-7 md:px-8 ${styles.header}`}>
          <div>
            <h2 id="asesoria-titulo" className={styles.title}>
              Solicitar Asesoría
            </h2>
            <p className={styles.subtitle}>Déjanos tus datos y te contactaremos.</p>
          </div>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Cerrar" className={styles.close}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-8" data-lenis-prevent>
          {status === "sent" ? (
            <div role="status" className="grid gap-6">
              <p className={styles.status}>Gracias, recibimos tus datos.</p>
              <button type="button" onClick={() => dialogRef.current?.close()} className={styles.button}>
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative grid gap-5">
              <label className="grid gap-2">
                <span className={styles.label}>Nombre</span>
                <input name="nombre" type="text" autoComplete="given-name" required maxLength={80} className={styles.field} />
              </label>
              <label className="grid gap-2">
                <span className={styles.label}>Apellido</span>
                <input name="apellido" type="text" autoComplete="family-name" required maxLength={80} className={styles.field} />
              </label>
              <label className="grid gap-2">
                <span className={styles.label}>Correo</span>
                <input name="correo" type="email" autoComplete="email" required maxLength={160} className={styles.field} />
              </label>
              <div className="grid gap-2">
                <span id="telefono-etiqueta" className={styles.label}>
                  Número de Teléfono
                </span>
                <div className={`flex items-stretch ${styles.group}`}>
                  <label className="relative flex items-center gap-1.5 pl-4 pr-3">
                    <span className="sr-only">País</span>
                    <span aria-hidden="true" className="text-[15px] font-semibold">
                      {actual.iso}
                    </span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="currentColor">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                    <select
                      value={pais}
                      onChange={(event) => setPais(event.target.value)}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    >
                      {PAISES.map((item) => (
                        <option key={item.iso} value={item.iso}>
                          {item.nombre} (+{item.codigo})
                        </option>
                      ))}
                    </select>
                  </label>
                  <span aria-hidden="true" className={`flex items-center pl-3 ${styles.prefix}`}>
                    +{actual.codigo}
                  </span>
                  <input
                    name="telefono"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    required
                    pattern="[0-9 ()\-]{6,20}"
                    aria-labelledby="telefono-etiqueta"
                    className="min-w-0 flex-1 bg-transparent py-3.5 pl-2 pr-4 text-[17px] outline-none"
                  />
                </div>
              </div>
              <label className="grid gap-2">
                <span className={styles.label}>Empresa</span>
                <input name="empresa" type="text" autoComplete="organization" required maxLength={120} className={styles.field} />
              </label>
              <div aria-hidden="true" className="absolute -left-[9999px] top-0 size-px overflow-hidden">
                <label>
                  Sitio web
                  <input name="sitio" type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <button type="submit" disabled={status === "sending"} className={`mt-2 ${styles.button}`}>
                {status === "sending" ? "Enviando…" : "Enviar"}
              </button>
              <p className={styles.status}>
                {company} usa tus datos solo para responder tu solicitud. Consulta el{" "}
                <Link href="/aviso-de-privacidad" target="_blank" rel="noopener" className="font-semibold underline underline-offset-2">
                  Aviso de Privacidad
                </Link>
                .
              </p>
              <p aria-live="polite" className={styles.status}>
                {status === "error" && "No se pudo enviar. Intenta de nuevo."}
              </p>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
