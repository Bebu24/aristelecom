import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <svg aria-hidden="true" className="absolute size-0 overflow-hidden">
        <defs>
          <linearGradient id="ari-stroke" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2fb4ea" />
            <stop offset="0.55" stopColor="#8a5ae0" />
            <stop offset="1" stopColor="#e0348f" />
          </linearGradient>
        </defs>
      </svg>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
