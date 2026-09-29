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
  { value: 10, prefix: "+", suffix: "", label: "años en el ramo" },
  { value: 100, prefix: "", suffix: "%", label: "mexicana" },
];
