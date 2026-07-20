import React from "react";
import LegalPage from "../pages/LegalPage.jsx";
const FECHA = "5 de julio de 2026";
const CORREO = "contacto@enlacelocal.mx";

const sections = [
  {
    title: "Aceptación de los Términos",
    intro: `El acceso y uso de la plataforma EnlaceLocal, disponible en enlacelocal.mx, implica la aceptación plena e incondicional de los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, debe abstenerse de usar la Plataforma.`,
    subsections: [
      {
        paragraphs: [
          "Estos Términos aplican a dos tipos de usuarios: (a) Empresas registradas que contratan una suscripción para publicar su perfil en el directorio; y (b) Usuarios visitantes que consultan el directorio o postulan a vacantes de empleo.",
        ],
      },
    ],
  },
  {
    title: "Descripción del servicio",
    intro:
      "EnlaceLocal es un directorio digital de negocios locales que permite a las empresas crear un perfil público con su información comercial y publicar vacantes de empleo.",
    subsections: [
      {
        paragraphs: [
          "EnlaceLocal actúa como plataforma de conexión y NO forma parte de ninguna relación laboral, contractual ni comercial entre las empresas registradas y los usuarios del directorio. Cualquier trato, acuerdo o contratación que surja del uso de la Plataforma es responsabilidad exclusiva de las partes involucradas.",
        ],
      },
    ],
  },
  {
    title: "Registro y cuenta de empresa",
    subsections: [
      {
        title: "Requisitos de registro",
        paragraphs: [
          "Para registrarse como empresa, el solicitante debe: (a) ser persona física con actividad empresarial o persona moral legalmente constituida en México; (b) proporcionar información verídica y actualizada; (c) contar con un método de pago válido para mantener la suscripción activa.",
        ],
      },
      {
        title: "Veracidad de la información",
        paragraphs: [
          "La empresa registrada es la única responsable de la exactitud, veracidad y actualización de toda la información publicada en su perfil, incluyendo: datos de contacto, horarios, dirección, sector, descripción del negocio, fotografías e imágenes, y descripciones de vacantes.",
          "EnlaceLocal no verifica, certifica ni garantiza la exactitud de la información publicada. Cualquier reclamación derivada de información incorrecta, desactualizada o falsa es responsabilidad exclusiva de la empresa registrada.",
        ],
      },
      {
        title: "Contenido prohibido",
        paragraphs: [
          "Las empresas se comprometen a NO publicar información que:",
        ],
        items: [
          "Sea falsa, engañosa o fraudulenta",
          "Sea discriminatoria por razón de género, edad, origen étnico, religión, discapacidad u orientación sexual",
          "Infrinja derechos de terceros, incluyendo derechos de autor o marcas registradas",
          "Promueva actividades ilícitas o contravenga la Ley Federal del Trabajo",
        ],
        note: "EnlaceLocal se reserva el derecho de suspender o eliminar sin previo aviso cualquier perfil que viole estas disposiciones.",
      },
    ],
  },
  {
    title: "Proceso de postulación a vacantes",
    subsections: [
      {
        title: "Intermediación técnica",
        paragraphs: [
          "EnlaceLocal facilita un sistema de postulación mediante el cual los candidatos pueden enviar su información y currículum vítae a las empresas anunciantes. EnlaceLocal actúa exclusivamente como intermediario técnico de mensajería: los datos del candidato son transmitidos directamente al correo electrónico de la empresa y NO son almacenados en los servidores de EnlaceLocal.",
        ],
      },
      {
        title: "Obligaciones de las empresas sobre datos de candidatos",
        paragraphs: [
          "Las empresas que reciban datos de candidatos a través de la Plataforma se obligan a:",
        ],
        items: [
          "Utilizar dichos datos exclusivamente para el proceso de selección de la vacante publicada",
          "Cumplir con la LFPDPPP en el tratamiento de datos personales de candidatos",
          "No compartir, vender ni ceder los datos recibidos a terceros no relacionados con el proceso",
          "Eliminar los datos de candidatos no seleccionados en un plazo razonable",
        ],
      },
      {
        title: "Deslinde del proceso de selección",
        paragraphs: [
          "EnlaceLocal no interviene en ninguna etapa del proceso de selección. No garantiza que la empresa anunciante responda a las postulaciones, realice entrevistas ni contrate a ningún candidato. Las decisiones de contratación son responsabilidad exclusiva de la empresa anunciante.",
        ],
      },
      {
        title: "Responsabilidad del candidato",
        paragraphs: [
          "El candidato declara que la información contenida en el currículum y formulario enviado es verídica. EnlaceLocal no asume responsabilidad alguna por información falsa proporcionada por candidatos ni por el uso que las empresas hagan de dicha información.",
        ],
      },
    ],
  },
  {
    title: "Planes de suscripción y pagos",
    subsections: [
      {
        title: "Planes disponibles",
        paragraphs: [
          "La Plataforma ofrece distintos planes de suscripción con características y precios publicados en el sitio. EnlaceLocal se reserva el derecho de modificar los planes y precios con previo aviso de 30 días naturales.",
        ],
      },
      {
        title: "Facturación y renovación",
        paragraphs: [
          "Las suscripciones tienen carácter mensual o anual según el plan contratado y se renuevan automáticamente al término de cada período, salvo cancelación previa. La empresa es responsable de mantener un método de pago válido durante toda la vigencia de su suscripción.",
        ],
      },
      {
        title: "Cancelación",
        paragraphs: [
          `La empresa puede cancelar su suscripción en cualquier momento desde su panel de administración o contactando a ${CORREO}. La cancelación surte efecto al término del período ya pagado. No se realizan reembolsos por períodos parciales, salvo error comprobable atribuible a EnlaceLocal.`,
        ],
      },
      {
        title: "Suspensión por falta de pago",
        paragraphs: [
          "En caso de fallo en el cobro, EnlaceLocal notificará a la empresa registrada y otorgará un período de gracia razonable. Si el pago no se regulariza, el perfil podrá ser suspendido o eliminado del directorio sin responsabilidad para EnlaceLocal.",
        ],
      },
    ],
  },
  {
    title: "Propiedad intelectual",
    intro:
      "El nombre EnlaceLocal, el logotipo, el diseño de la Plataforma y los contenidos generados por EnlaceLocal son propiedad de EnlaceLocal y están protegidos por las leyes de propiedad intelectual aplicables en México. Se prohíbe su reproducción total o parcial sin autorización escrita.",
    subsections: [
      {
        paragraphs: [
          "Las empresas registradas conservan la titularidad de las imágenes y contenidos que carguen a la Plataforma, pero otorgan a EnlaceLocal una licencia no exclusiva, gratuita y revocable para mostrar dicho contenido dentro de la Plataforma exclusivamente con fines de operación del servicio contratado.",
        ],
      },
    ],
  },
  {
    title: "Limitación de responsabilidad",
    intro:
      "En la máxima medida permitida por la legislación aplicable, EnlaceLocal no será responsable por:",
    items: [
      "Daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de la Plataforma",
      "La exactitud o completitud de la información publicada por las empresas registradas",
      "Cualquier relación laboral, comercial o contractual establecida entre empresas y candidatos",
      "Interrupciones del servicio por causas de fuerza mayor, mantenimiento programado o fallas de terceros proveedores",
      "El uso que las empresas hagan de los datos de candidatos recibidos a través de la Plataforma",
    ],
  },
  {
    title: "Modificaciones a los Términos",
    intro:
      "EnlaceLocal puede modificar estos Términos en cualquier momento. Los cambios sustanciales serán notificados con al menos 30 días de anticipación mediante correo electrónico o aviso en la Plataforma. El uso continuado de la Plataforma tras dicho aviso implica la aceptación de los nuevos términos.",
  },
  {
    title: "Legislación aplicable y jurisdicción",
    intro:
      "Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o cumplimiento, las partes se someten expresamente a la jurisdicción de los Tribunales competentes del Estado de Chihuahua, renunciando a cualquier otro fuero que pudiera corresponderles en razón de sus domicilios presentes o futuros.",
  },
];
export default function Terminos() {
  return (
    <LegalPage
      badge="Documento legal"
      title="Términos y Condiciones de Uso"
      subtitle="Reglas que rigen el uso de la plataforma para empresas registradas y usuarios visitantes."
      lastUpdated={FECHA}
      sections={sections}
    />
  );
}
