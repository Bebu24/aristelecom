import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";

const formStyles = {
  label: "text-[15px] font-medium text-text-soft",
  field:
    "w-full rounded-xl bg-ink/70 px-4 py-3.5 text-[17px] text-white outline-none ring-1 ring-inset ring-line transition-shadow focus:ring-2 focus:ring-cyan",
  button:
    "rounded-xl bg-white px-7 py-4 text-[17px] font-semibold text-ink transition-colors hover:bg-cyan disabled:cursor-wait disabled:opacity-60",
  status: "text-[15px] text-text-soft",
};

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo">
      <div className="mx-auto max-w-[1760px] px-5 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="gradient-border rounded-[36px] p-px">
          <div className="relative isolate overflow-hidden rounded-[35px] bg-surface px-6 py-16 md:px-14 md:py-20 lg:px-16">
            <div aria-hidden="true" className="swirl-glow absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full opacity-60 blur-3xl" />
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 id="contacto-titulo" className="font-display text-5xl font-semibold tracking-[-0.03em] text-white md:text-7xl">
                  Contacto
                </h2>
                <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-text-soft md:text-xl">
                  Escríbenos para solicitar información sobre cualquiera de nuestros servicios.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ContactForm styles={formStyles} />
              <p className="mt-6 text-[14px] leading-relaxed text-text-soft">
                {site.legalName} usa tus datos solo para responder tu solicitud. Consulta el{" "}
                <Link href="/aviso-de-privacidad" target="_blank" rel="noopener" className="font-semibold text-white underline underline-offset-2">
                  Aviso de Privacidad
                </Link>
                .
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
