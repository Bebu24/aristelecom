import { CountUp } from "@/components/count-up";
import { facts } from "@/content/site";

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-titulo" className="border-y border-line bg-surface/40">
      <div className="mx-auto grid max-w-[1760px] grid-cols-1 items-center gap-12 px-5 py-20 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-16 lg:px-16">
        <div className="lg:col-span-5">
          <h2 id="nosotros-titulo" className="font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Nosotros
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-text-soft md:text-2xl md:leading-relaxed">Empresa innovadora en telecomunicaciones.</p>
        </div>
        <dl className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse rounded-3xl bg-surface p-6 ring-1 ring-line md:p-8">
              <dt className="mt-3 text-[16px] leading-snug text-text-soft">{fact.label}</dt>
              <dd className="gradient-text font-display text-6xl font-semibold tracking-[-0.03em] md:text-7xl">
                <CountUp value={fact.value} prefix={fact.prefix} suffix={fact.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
