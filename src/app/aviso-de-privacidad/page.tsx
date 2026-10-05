import type { Metadata } from "next";
import { PrivacyNotice } from "@/components/privacy-notice";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Aviso de Privacidad | ${site.name}`,
};

export default function AvisoDePrivacidad() {
  return (
    <PrivacyNotice
      company={{ legalName: site.legalName, domicilio: site.domicilio, email: site.privacyEmail }}
      related={["Grupo Punto Castillo, S. de R.L. de C.V.", "Grupo MyNetics, S.A. de C.V."]}
      classes={{
        back: "text-[15px] font-semibold text-cyan hover:underline",
        title: "font-display text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl",
        meta: "text-[15px] text-text-soft",
        h2: "font-display text-xl font-semibold text-white",
        p: "text-[17px] leading-relaxed text-text-soft",
        link: "font-semibold text-cyan underline underline-offset-4",
      }}
    />
  );
}
