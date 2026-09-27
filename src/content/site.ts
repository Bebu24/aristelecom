export const site = {
  name: "Aristelecom",
  legalName: "Aristelecom, S.A. de C.V.",
  // Placeholder: reemplazar por el correo real antes de publicar.
  email: "correo@ejemplo.com",
  description:
    "Empresa 100% mexicana de servicios de telecomunicaciones: gestión, infraestructura, instalación y mantenimiento para todo tipo de redes.",
} as const;

export const mailto = `mailto:${site.email}`;

export const facts = [
  { value: "+10", label: "años en el ramo de las telecomunicaciones" },
  { value: "24/7", label: "monitoreo y apoyo técnico, los 365 días del año" },
  { value: "100%", label: "empresa mexicana" },
  { value: "3G a 5G", label: "instalación y actualización de tecnología en redes celulares" },
];
