"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export type ContactFormStyles = {
  label: string;
  field: string;
  button: string;
  status: string;
};

export function ContactForm({ styles }: { styles: ContactFormStyles }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={styles.label}>Nombre</span>
          <input name="nombre" type="text" autoComplete="name" required maxLength={120} className={styles.field} />
        </label>
        <label className="grid gap-2">
          <span className={styles.label}>Correo</span>
          <input name="correo" type="email" autoComplete="email" required maxLength={160} className={styles.field} />
        </label>
      </div>
      <label className="grid gap-2">
        <span className={styles.label}>Consulta</span>
        <textarea name="consulta" required rows={5} maxLength={4000} className={`${styles.field} resize-y`} />
      </label>
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 size-px overflow-hidden">
        <label>
          Sitio web
          <input name="sitio" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className={styles.button}>
          {status === "sending" ? "Enviando…" : "Enviar"}
        </button>
        <p role="status" aria-live="polite" className={styles.status}>
          {status === "sent" && "Gracias, tu consulta se envió."}
          {status === "error" && "No se pudo enviar. Intenta de nuevo."}
        </p>
      </div>
    </form>
  );
}
