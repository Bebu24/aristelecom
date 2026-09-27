import type { Metadata, Viewport } from "next";
import { onest, spaceGrotesk } from "@/lib/fonts";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} | Servicios de telecomunicaciones`,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#0b0d1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${spaceGrotesk.variable} ${onest.variable} antialiased`}>
      <body className="bg-ink font-sans text-text">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Saltar al contenido
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
