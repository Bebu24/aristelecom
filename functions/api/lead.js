// Cloudflare Pages Function: guarda la solicitud de asesoría en el CRM (base de datos D1).
// Binding requerido en Pages > Settings > Bindings: D1 database con nombre de variable CRM_DB.

const SITIO = "Aristelecom";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFONO = /^\+\d{1,4} [0-9 ()-]{6,20}$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const clean = (value, max) => String(value ?? "").trim().slice(0, max);

export async function onRequestPost({ request, env }) {
  if (!env.CRM_DB) return json({ ok: false, error: "config" }, 500);

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid" }, 400);
  }

  if (data.sitio) return json({ ok: true });

  const nombre = clean(data.nombre, 80);
  const apellido = clean(data.apellido, 80);
  const correo = clean(data.correo, 160);
  const telefono = clean(data.telefono, 30);
  const empresa = clean(data.empresa, 120);

  if (!nombre || !apellido || !empresa || !EMAIL.test(correo) || !TELEFONO.test(telefono)) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  await env.CRM_DB.prepare(
    "INSERT INTO leads (sitio, nombre, apellido, correo, telefono, empresa) VALUES (?, ?, ?, ?, ?, ?)",
  )
    .bind(SITIO, nombre, apellido, correo, telefono, empresa)
    .run();

  return json({ ok: true });
}
