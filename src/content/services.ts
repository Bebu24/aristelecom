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
  lead?: string;
  items: string[];
  icon: ServiceIcon;
  clock?: boolean;
  photo?: { file: string; alt: string };
};

export type ServiceGroup = {
  name: string;
  services: Service[];
};

type ServiceInput = Omit<Service, "slug">;

// En los textos, un número entre llaves ({2000}) se muestra con animación de contador.
const groups: { name: string; services: ServiceInput[] }[] = [
  {
    name: "Redes y Gestión",
    services: [
      {
        name: "Gestión de Proyectos",
        title: "Gestión de Proyectos Llave en Mano",
        lead: "Coordinación, logística y control de proyectos en telecomunicaciones.",
        items: ["Personal y experiencia para llevar tus proyectos de inicio a fin"],
        icon: "gestion",
        photo: { file: "gestion-proyectos.jpg", alt: "Equipo de trabajo planeando un proyecto en un pizarrón" },
      },
      {
        name: "Switching y Routing",
        title: "Switching, Routing, WiFi, Carrier Ethernet y Firewall",
        lead: "Ingeniería e instalación.",
        items: [
          "Desarrollo de redes ethernet, tanto de seguridad como de operación",
          "Certificaciones y experiencia en la instalación y configuración de las soluciones que nuestros clientes necesitan",
        ],
        icon: "switching",
        photo: { file: "switching.jpg", alt: "Switch de red con cables ethernet conectados" },
      },
      {
        name: "Cableado Estructurado",
        title: "Cableado Estructurado",
        lead: "Ingeniería, instalación, administración y mantenimiento de tu infraestructura de cableado.",
        items: ["Resolvemos todo lo que se requiera para su perfecto funcionamiento"],
        icon: "cableado",
        photo: { file: "cableado.jpg", alt: "Cables de red montados en un patch panel" },
      },
      {
        name: "Data Center",
        title: "Data Center",
        lead: "Construcción, operación y mantenimiento.",
        items: ["Instalamos, administramos y desarrollamos todo lo necesario para generar las soluciones operativas de tu data center"],
        icon: "datacenter",
        photo: { file: "data-center.jpg", alt: "Gabinetes con servidores y equipo de red en un data center" },
      },
      {
        name: "Monitoreo 24/7",
        title: "Monitoreo y Apoyo Técnico 24/7",
        lead: "Los 365 días del año.",
        items: ["Call center", "NOC (centro de operaciones de red)"],
        icon: "noc",
        photo: { file: "monitoreo.jpg", alt: "Estación de monitoreo entre racks de telecomunicaciones" },
        clock: true,
      },
      {
        name: "Redes Inalámbricas",
        title: "Soporte y Mantenimiento a Redes Inalámbricas",
        items: [
          "Personal certificado para instalación, transporte, maniobras y puesta en operación de los equipos",
          "Mantenimientos preventivos, correctivos y de emergencia",
        ],
        icon: "wireless",
        photo: { file: "redes-inalambricas.jpg", alt: "Antena parabólica de comunicaciones al atardecer" },
      },
    ],
  },
  {
    name: "Infraestructura y Sitios",
    services: [
      {
        name: "Redes Celulares",
        title: "Redes Celulares 3G, 4G y 5G",
        lead: "Instalación, puesta en operación y actualización de sitios en sus diferentes tecnologías.",
        items: ["Contamos con las certificaciones necesarias", "Llevamos la comunicación a las comunidades más alejadas del país"],
        icon: "celular",
        photo: { file: "redes-celulares.jpg", alt: "Torre celular con antenas y equipo" },
      },
      {
        name: "Infraestructura Civil",
        title: "Infraestructura Civil",
        lead: "Construcción de torres, sitios, contenedores, gabinetes, canalizaciones y sistemas de tierras.",
        items: [
          "Obra civil, sistemas de energía y adecuaciones",
          "Sistemas de seguridad para la prevención de robos",
          "Todas las opciones para que tus sitios sean operativamente aptos, tanto en lo económico como en lo operativo",
        ],
        icon: "civil",
        photo: { file: "infraestructura-civil.jpg", alt: "Torre de telecomunicaciones" },
      },
      {
        name: "Respaldo Eléctrico",
        title: "Equipos Eléctricos de Respaldo",
        lead: "Instalación y mantenimiento de plantas de emergencia y UPS.",
        items: [
          "Servicios de atención y prevención",
          "Equipos en varias capacidades de amperaje y voltaje",
          "Apoyo a situaciones emergentes, con traslados, seguimiento de operación y recargas de combustible en cualquier parte del país, hasta {2000} por sitio",
        ],
        icon: "respaldo",
        photo: { file: "respaldo-electrico.jpg", alt: "Técnico trabajando en un tablero eléctrico" },
      },
      {
        name: "Aire Acondicionado",
        title: "Aire Acondicionado",
        lead: "Instalación y mantenimiento.",
        items: [],
        icon: "aire",
        photo: { file: "aire-acondicionado.jpg", alt: "Unidad de aire acondicionado instalada en el muro de un edificio" },
      },
      {
        name: "Fibra Óptica",
        title: "Fibra Óptica y Planta Externa",
        lead: "Instalación y mantenimiento de equipo de planta externa e interna, en redes principales, secundarias y ramales.",
        items: ["Pruebas de operación con medidores OTDR, analizadores de espectro óptico y medidores de potencia"],
        icon: "fibra",
        photo: { file: "fibra-optica.jpg", alt: "Switch óptico con cables de fibra conectados" },
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
