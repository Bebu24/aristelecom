import { site, mailto } from "@/content/site";

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo">
      <div className="mx-auto max-w-[1760px] px-5 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="gradient-border rounded-[36px] p-px">
          <div className="relative isolate overflow-hidden rounded-[35px] bg-surface px-6 py-16 md:px-14 md:py-24 lg:px-20">
            <div aria-hidden="true" className="swirl-glow absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full opacity-60 blur-3xl" />
            <h2 id="contacto-titulo" className="font-display text-5xl font-semibold tracking-[-0.03em] text-white md:text-7xl">
              Contacto
            </h2>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-text-soft md:text-xl">
              Escríbenos para solicitar información sobre cualquiera de nuestros servicios.
            </p>
            <a
              href={mailto}
              className="mt-10 inline-block break-all font-display text-[1.6rem] font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-[10px] transition-colors hover:decoration-cyan sm:text-5xl"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
