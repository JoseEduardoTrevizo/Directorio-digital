// AvisoPrivacidad.jsx
// Ruta sugerida: /privacidad
// Requiere: LegalPage.jsx + LegalPage.css en el mismo directorio
// Google Fonts en index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />

import LegalPage from "./LegalPage";

const FECHA = "5 de julio de 2026";
const CORREO_PRIVACIDAD = "privacidad@enlacelocal.mx";

const sections = [
  {
    title: "Identidad del Responsable",
    intro:
      "EnlaceLocal, con presencia digital en enlacelocal.mx, es el responsable del tratamiento de los datos personales que usted nos proporcione, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.",
    subsections: [
      {
        paragraphs: [
          `Para cualquier asunto relacionado con este Aviso de Privacidad, contáctenos en: ${CORREO_PRIVACIDAD}`,
        ],
      },
    ],
  },
  {
    title: "Datos personales que recabamos",
    subsections: [
      {
        title: "Empresas registradas",
        items: [
          "Nombre comercial y/o razón social",
          "Nombre y correo electrónico del responsable de la cuenta",
          "Dirección física del establecimiento",
          "Número(s) de teléfono y correo electrónico de contacto empresarial",
          "Sector o industria y horarios de atención",
          "URL de sitio web y redes sociales (opcionales)",
          "Datos de pago (procesados por terceros; ver sección V)",
          "Fotografías e imágenes del negocio",
        ],
      },
      {
        title: "Usuarios visitantes (candidatos)",
        paragraphs: [
          "EnlaceLocal NO almacena los datos personales de candidatos que postulan a vacantes. Los currículums vitae, formularios de postulación y cualquier dato personal enviado a través del módulo de vacantes son transmitidos directamente al correo electrónico de la empresa anunciante sin ser retenidos en nuestros servidores.",
        ],
        note: "EnlaceLocal actúa exclusivamente como intermediario técnico en el proceso de postulación. No conservamos ninguna copia de su información.",
      },
      {
        title: "Datos de navegación",
        items: [
          "Dirección IP y datos generales del dispositivo",
          "Páginas visitadas y tiempo de permanencia (analytics anónimos y agregados)",
          "Cookies técnicas de sesión",
        ],
      },
    ],
  },
  {
    title: "Finalidades del tratamiento",
    subsections: [
      {
        title: "Finalidades primarias — necesarias para el servicio",
        items: [
          "Crear y gestionar el perfil de la empresa en el directorio digital",
          "Mostrar la información de la empresa a los usuarios del directorio",
          "Procesar pagos de suscripción y gestionar la facturación",
          "Enviar notificaciones relacionadas al servicio (confirmaciones, renovaciones, alertas técnicas)",
          "Atender solicitudes de soporte técnico y servicio al cliente",
        ],
      },
      {
        title: "Finalidades secundarias — opcionales",
        items: [
          "Envío de comunicaciones comerciales y novedades de la plataforma",
          "Elaboración de estadísticas internas de uso agregado",
        ],
        note: `Para oponerse al tratamiento de sus datos para finalidades secundarias, envíe un correo a ${CORREO_PRIVACIDAD} indicando su nombre y la finalidad a la que se opone.`,
      },
    ],
  },
  {
    title: "Derechos ARCO",
    intro:
      "Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales.",
    subsections: [
      {
        title: "Cómo ejercer sus derechos",
        items: [
          `Envíe su solicitud a ${CORREO_PRIVACIDAD}`,
          "Identifíquese con nombre completo y correo registrado en la plataforma",
          "Describa el derecho que desea ejercer y los datos a los que se refiere",
        ],
        note: "Responderemos en un plazo máximo de 20 días hábiles contados a partir de la recepción de su solicitud, conforme a lo establecido por la LFPDPPP.",
      },
    ],
  },
  {
    title: "Transferencia de datos a terceros",
    intro:
      "EnlaceLocal no vende, renta ni comercializa sus datos personales. Los datos pueden ser compartidos únicamente con:",
    items: [
      "Procesadores de pago para gestionar suscripciones — regidos por sus propias políticas de privacidad",
      "Proveedores de infraestructura tecnológica (servidores, CDN) bajo acuerdos de confidencialidad",
      "Autoridades competentes cuando así lo requiera la ley mexicana aplicable",
    ],
  },
  {
    title: "Medidas de seguridad",
    intro:
      "EnlaceLocal implementa medidas técnicas y organizativas para proteger sus datos personales: cifrado HTTPS en todas las comunicaciones, almacenamiento en servidores con acceso restringido y autenticado, y revisión periódica de controles de acceso.",
    subsections: [
      {
        paragraphs: [
          "No obstante, ningún sistema de transmisión por internet puede garantizar seguridad absoluta. En caso de una vulneración de seguridad que afecte sus datos, le notificaremos conforme a lo establecido por la LFPDPPP.",
        ],
      },
    ],
  },
  {
    title: "Modificaciones al Aviso",
    intro: `Este Aviso de Privacidad puede ser modificado para reflejar cambios en nuestros servicios o en la legislación aplicable. Cualquier cambio sustancial será notificado mediante publicación en enlacelocal.mx con al menos 30 días de anticipación. La fecha de última actualización aparece al inicio de este documento.`,
  },
  {
    title: "Autoridad competente",
    intro:
      "Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede presentar una queja ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).",
    subsections: [
      {
        paragraphs: ["Sitio web del INAI: www.inai.org.mx"],
      },
    ],
  },
];

export default function Politicas() {
  return (
    <LegalPage
      badge="Documento legal"
      title="Aviso de Privacidad"
      subtitle="Información sobre cómo EnlaceLocal recopila, usa y protege sus datos personales conforme a la LFPDPPP."
      lastUpdated={FECHA}
      sections={sections}
    />
  );
}
