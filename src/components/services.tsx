import { NocClock } from "@/components/noc-clock";
import { ServiceIcon } from "@/components/service-icon";
import { ServiceRack } from "@/components/service-rack";
import { serviceGroups, unitLabel } from "@/content/services";

export function Services() {
  const rackGroups = serviceGroups.map((group) => ({
    name: group.name,
    units: group.services.map((service) => ({ slug: service.slug, name: service.name, label: unitLabel(service.slug) })),
  }));

  return (
    <section id="servicios" aria-labelledby="servicios-titulo">
      <div className="mx-auto max-w-[1760px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="servicios-titulo" className="font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
            Servicios
          </h2>
          <p className="max-w-[52ch] text-lg leading-relaxed text-text-soft">
            Proyectos llave en mano: contamos con el personal y la experiencia para llevar tus proyectos de inicio a fin.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <ServiceRack groups={rackGroups} />
            </div>
          </div>
          <div className="lg:col-span-7">
            {serviceGroups.map((group) => (
              <div key={group.name} className="mb-6 last:mb-0">
                <h3 className="text-[15px] font-medium text-text-soft">{group.name}</h3>
                {group.services.map((service) => (
                  <article key={service.slug} id={service.slug} aria-labelledby={`${service.slug}-titulo`} className="border-b border-line py-10 last:border-b-0 md:py-12">
                    <div className="flex items-start gap-5">
                      <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-surface ring-1 ring-line">
                        <ServiceIcon name={service.icon} className="size-7" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-[13px] font-medium tracking-[0.08em] text-text-soft">{unitLabel(service.slug)}</p>
                        <h4 id={`${service.slug}-titulo`} className="mt-1 font-display text-2xl font-semibold tracking-[-0.02em] text-white md:text-[2rem] md:leading-tight">
                          {service.title}
                        </h4>
                        <p className="mt-3 text-lg leading-relaxed text-text-soft">{service.lead}</p>
                        {service.items.length > 0 && (
                          <ul className="mt-5 grid gap-3">
                            {service.items.map((item) => (
                              <li key={item} className="flex gap-3 text-[17px] leading-snug text-text">
                                <span aria-hidden="true" className="gradient-dot mt-[0.45em] size-2 shrink-0 rounded-full" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {service.clock && <NocClock />}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
