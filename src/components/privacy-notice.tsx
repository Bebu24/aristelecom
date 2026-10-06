import Link from "next/link";

type PrivacyClasses = {
  back: string;
  title: string;
  meta: string;
  h2: string;
  p: string;
  link: string;
};

type PrivacyNoticeProps = {
  company: { legalName: string; domicilio: string; email: string };
  related: string[];
  classes: PrivacyClasses;
};

export function PrivacyNotice({ company, related, classes }: PrivacyNoticeProps) {
  const h2 = `mt-10 ${classes.h2}`;
  const p = `mt-3 ${classes.p}`;
  return (
    <main id="contenido" className="mx-auto max-w-[760px] px-5 pb-24 pt-10 md:pt-16">
      <Link href="/" className={classes.back}>
        ← Volver al inicio
      </Link>
      <h1 className={`mt-8 ${classes.title}`}>Aviso de Privacidad</h1>
      <p className={`mt-3 ${classes.meta}`}>Última actualización: 6 de octubre de 2026</p>

      <h2 className={h2}>Responsable</h2>
      <p className={p}>
        {company.legalName}, con domicilio en {company.domicilio}, es responsable del tratamiento de los datos personales que nos
        proporcionas a través de este sitio web.
      </p>

      <h2 className={h2}>Datos que Recabamos</h2>
      <p className={p}>
        Cuando envías una solicitud desde la ventana “Solicitar Asesoría”, recabamos tu nombre, apellido, correo electrónico, número de
        teléfono y empresa. No recabamos datos personales sensibles.
      </p>

      <h2 className={h2}>Para Qué Usamos tus Datos</h2>
      <p className={p}>
        Usamos tus datos únicamente para atender tu solicitud de asesoría y contactarte para darle respuesta. No los usamos
        para enviarte publicidad ni para ninguna otra finalidad.
      </p>

      <h2 className={h2}>Con Quién Compartimos tus Datos</h2>
      <p className={p}>
        Las solicitudes se registran en un sistema que compartimos con {related.join(" y ")}, empresas relacionadas, únicamente para
        atenderlas. No vendemos tus datos ni los compartimos con otros terceros.
      </p>

      <h2 className={h2}>Proveedores</h2>
      <p className={p}>
        Este sitio y la base de datos donde se guardan las solicitudes están alojados con Cloudflare. Este proveedor trata los datos solo
        para prestarnos sus servicios, y sus servidores pueden ubicarse fuera de México.
      </p>

      <h2 className={h2}>Cookies</h2>
      <p className={p}>
        Este sitio no utiliza cookies ni otras tecnologías de rastreo para recabar datos personales. Nuestro proveedor de alojamiento puede
        usar cookies técnicas de seguridad que no se usan para identificarte.
      </p>

      <h2 className={h2}>Tus Derechos</h2>
      <p className={p}>
        Puedes solicitar el acceso, la rectificación, la cancelación o la oposición al tratamiento de tus datos (derechos ARCO), así como
        revocar tu consentimiento o limitar el uso o la divulgación de tus datos, escribiendo a{" "}
        <a href={`mailto:${company.email}`} className={classes.link}>
          {company.email}
        </a>
        .
      </p>
      <p className={p}>
        Tu solicitud debe incluir tu nombre, un medio para responderte, la descripción de lo que solicitas y, en su caso, un documento que
        acredite tu identidad. Te responderemos en los plazos que establece la Ley Federal de Protección de Datos Personales en Posesión de
        los Particulares.
      </p>

      <h2 className={h2}>Cambios al Aviso</h2>
      <p className={p}>Cualquier cambio a este aviso se publicará en esta página con su fecha de actualización.</p>

      <h2 className={h2}>Autoridad</h2>
      <p className={p}>
        Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir a la Secretaría Anticorrupción y
        Buen Gobierno.
      </p>
    </main>
  );
}
