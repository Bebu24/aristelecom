// Cloudflare Pages Function: recibe el formulario de contacto y lo envía por correo con Resend.
// Variables de entorno (Pages > Settings > Environment variables): RESEND_API_KEY, CONTACT_TO, CONTACT_FROM.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid" }, 400);
  }

  if (data.sitio) return json({ ok: true });

  const nombre = String(data.nombre ?? "").trim().slice(0, 120);
  const correo = String(data.correo ?? "").trim().slice(0, 160);
  const consulta = String(data.consulta ?? "").trim().slice(0, 4000);

  if (!nombre || !consulta || !EMAIL.test(correo)) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO.split(",").map((address) => address.trim()),
      reply_to: correo,
      subject: `Nueva consulta de ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\n${consulta}`,
    }),
  });

  if (!response.ok) return json({ ok: false, error: "send" }, 502);
  return json({ ok: true });
}
