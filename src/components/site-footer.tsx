import Link from "next/link";
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
        <nav aria-label="Pie de página" className="text-[15px] font-medium text-white">
          <Link href="/aviso-de-privacidad" className="transition-colors hover:text-cyan">
            Aviso de Privacidad
          </Link>
        </nav>
        <p className="text-[14px] text-text-soft">{site.legalName}</p>
      </div>
    </footer>
  );
}
