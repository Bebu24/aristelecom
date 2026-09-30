// Descarga las fotos de banco de imágenes a public/fotos.
// Pexels y Unsplash: uso libre, también comercial, sin atribución obligatoria.
// Uso: npm run fotos (después, sube la carpeta public/fotos al repositorio).
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const FOTOS = [
  ["switching.jpg", pexels(4818711)],
  ["cableado.jpg", pexels(5073493)],
  ["data-center.jpg", pexels(4508751)],
  ["monitoreo.jpg", pexels(4597280)],
  ["redes-celulares.jpg", pexels(12003537)],
  ["infraestructura-civil.jpg", pexels(2849630)],
  ["aire-acondicionado.jpg", "https://unsplash.com/photos/thIufsr8kwg/download?force=true&w=1600"],
  ["fibra-optica.jpg", pexels(4280702)],
];

const destino = path.join(process.cwd(), "public", "fotos");
await mkdir(destino, { recursive: true });

for (const [archivo, url] of FOTOS) {
  const respuesta = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!respuesta.ok) {
    console.error(`No se pudo descargar ${archivo} (${respuesta.status})`);
    continue;
  }
  await writeFile(path.join(destino, archivo), Buffer.from(await respuesta.arrayBuffer()));
  console.log(`Listo: ${archivo}`);
}
