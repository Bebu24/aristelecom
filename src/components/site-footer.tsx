import Image from "next/image";
import { logoHorizontal } from "@/content/logo";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <Image
          src="/logo/logo-horizontal-blanco.svg"
          alt={site.legalName}
          width={logoHorizontal.width}
          height={logoHorizontal.height}
          className="h-10 w-auto self-start md:self-auto"
        />
        <nav aria-label="Pie de página" className="flex gap-6 text-[15px] font-medium text-white">
          <a href="#nosotros" className="transition-colors hover:text-cyan">
            Nosotros
          </a>
          <a href="#servicios" className="transition-colors hover:text-cyan">
            Servicios
          </a>
          <a href="#contacto" className="transition-colors hover:text-cyan">
            Contacto
          </a>
        </nav>
        <p className="text-[14px] text-text-soft">{site.legalName}</p>
      </div>
    </footer>
  );
}
