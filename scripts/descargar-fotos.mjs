// Descarga las fotos de banco de imágenes a public/fotos.
// Todas son de Pexels: uso libre, también comercial, sin atribución obligatoria.
// Uso: npm run fotos (después, sube la carpeta public/fotos al repositorio).
// Las fotos que ya existen no se vuelven a descargar; para reemplazar una, bórrala y corre el comando otra vez.
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const pexels = (id, archivo = `pexels-photo-${id}.jpeg`) =>
  `https://images.pexels.com/photos/${id}/${archivo}?auto=compress&cs=tinysrgb&w=1600`;

const FOTOS = [
  ["gestion-proyectos.jpg", pexels(3862370)],
  ["switching.jpg", pexels(4818711)],
  ["cableado.jpg", pexels(5073493)],
  ["data-center.jpg", pexels(4508751)],
  ["monitoreo.jpg", pexels(4597280)],
  ["redes-inalambricas.jpg", pexels(33153, "raisting-sattelit-reception-signal.jpg")],
  ["redes-celulares.jpg", pexels(12003537)],
  ["infraestructura-civil.jpg", pexels(2849630)],
  ["respaldo-electrico.jpg", pexels(257736)],
  ["aire-acondicionado.jpg", pexels(27134985)],
  ["fibra-optica.jpg", pexels(4280702)],
];

const destino = path.join(process.cwd(), "public", "fotos");
await mkdir(destino, { recursive: true });

for (const [archivo, url] of FOTOS) {
  if (existsSync(path.join(destino, archivo))) {
    console.log(`Ya existe: ${archivo}`);
    continue;
  }
  const respuesta = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!respuesta.ok) {
    console.error(`No se pudo descargar ${archivo} (${respuesta.status})`);
    continue;
  }
  await writeFile(path.join(destino, archivo), Buffer.from(await respuesta.arrayBuffer()));
  console.log(`Listo: ${archivo}`);
}
