import { slugify } from "@/lib/slugify";

export type ServiceIcon =
  | "gestion"
  | "switching"
  | "cableado"
  | "datacenter"
  | "noc"
  | "wireless"
  | "celular"
  | "civil"
  | "respaldo"
  | "aire"
  | "fibra";

export type Service = {
  slug: string;
  name: string;
  title: string;
  lead: string;
  items: string[];
  icon: ServiceIcon;
  clock?: boolean;
};

export type ServiceGroup = {
  name: string;
  services: Service[];
};

type ServiceInput = Omit<Service, "slug">;

const groups: { name: string; services: ServiceInput[] }[] = [
  {
    name: "Redes y gestión",
    services: [
      {
        name: "Gestión de proyectos",
        title: "Gestión de proyectos llave en mano",
        lead: "Gestión, coordinación, logística y control de proyectos en telecomunicaciones.",
        items: ["Personal y experiencia para llevar tus proyectos de inicio a fin"],
        icon: "gestion",
      },
      {
        name: "Switching y routing",
        title: "Switching, routing, WiFi, carrier ethernet y firewall",
        lead: "Ingeniería e instalación.",
        items: [
          "Desarrollo de redes ethernet, tanto de seguridad como de operación",
          "Certificaciones y experiencia en la instalación y configuración de las soluciones que nuestros clientes necesitan",
        ],
        icon: "switching",
      },
      {
        name: "Cableado estructurado",
        title: "Cableado estructurado",
        lead: "Ingeniería e instalación de cableado estructurado.",
        items: [
          "Instalación, administración y mantenimiento de tu infraestructura de cableado",
          "Resolvemos todo lo que se requiera para su perfecto funcionamiento",
        ],
        icon: "cableado",
      },
      {
        name: "Data center",
        title: "Data center",
        lead: "Construcción, operación y mantenimiento de data center.",
        items: ["Instalamos, administramos y desarrollamos todo lo necesario para generar las soluciones operativas de tu data center"],
        icon: "datacenter",
      },
      {
        name: "Monitoreo 24/7",
        title: "Monitoreo y apoyo técnico 24/7",
        lead: "Servicio de monitoreo y apoyo técnico 24/7, los 365 días del año.",
        items: ["Call center", "NOC (centro de operaciones de red)"],
        icon: "noc",
        clock: true,
      },
      {
        name: "Redes inalámbricas",
        title: "Soporte y mantenimiento a redes inalámbricas",
        lead: "Soporte y mantenimiento a redes inalámbricas en telecomunicaciones.",
        items: [
          "Personal certificado para instalación, transporte, maniobras y puesta en operación de los equipos",
          "Mantenimientos preventivos, correctivos y de emergencia",
        ],
        icon: "wireless",
      },
    ],
  },
  {
    name: "Infraestructura y sitios",
    services: [
      {
        name: "Redes celulares",
        title: "Redes celulares 3G, 4G y 5G",
        lead: "Instalación y actualización de tecnología en redes celulares 3G, 4G y 5G.",
        items: [
          "Certificaciones para la instalación y puesta en operación de redes celulares",
          "Actualización de sitios en sus diferentes tecnologías",
          "Llevamos la comunicación a las comunidades más alejadas del país",
        ],
        icon: "celular",
      },
      {
        name: "Infraestructura civil",
        title: "Infraestructura civil",
        lead: "Construcción de torres, sitios, contenedores, gabinetes, canalizaciones y sistemas de tierras.",
        items: [
          "Obra civil, sistemas de energía, sistemas de tierras y adecuaciones",
          "Sistemas de seguridad para la prevención de robos",
          "Todas las opciones para que tus sitios sean operativamente aptos, tanto en lo económico como en lo operativo",
        ],
        icon: "civil",
      },
      {
        name: "Respaldo eléctrico",
        title: "Equipos eléctricos de respaldo",
        lead: "Instalación y mantenimiento de plantas de emergencia y UPS.",
        items: [
          "Atención y prevención para plantas de energía de emergencia",
          "Equipos en varias capacidades de amperaje y voltaje",
          "Apoyo a situaciones emergentes, con traslados, seguimiento de operación y recargas de combustible en cualquier parte del país, hasta 2,000 por sitio",
        ],
        icon: "respaldo",
      },
      {
        name: "Aire acondicionado",
        title: "Aire acondicionado",
        lead: "Instalación y mantenimiento de servicios de aire acondicionado.",
        items: [],
        icon: "aire",
      },
      {
        name: "Fibra óptica",
        title: "Fibra óptica y planta externa",
        lead: "Instalación y mantenimiento de fibra óptica.",
        items: [
          "Equipo de planta externa e interna en redes principales, secundarias y ramales",
          "Pruebas de operación con medidores OTDR, analizadores de espectro óptico y medidores de potencia",
          "Personal certificado para mantenimientos preventivos, correctivos y emergencias",
        ],
        icon: "fibra",
      },
    ],
  },
];

export const serviceGroups: ServiceGroup[] = groups.map((group) => ({
  name: group.name,
  services: group.services.map((service) => ({ ...service, slug: slugify(service.name) })),
}));

export const allServices: Service[] = serviceGroups.flatMap((group) => group.services);

export function unitLabel(slug: string): string {
  const index = allServices.findIndex((service) => service.slug === slug);
  return `U${String(index + 1).padStart(2, "0")}`;
}
