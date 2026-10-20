export const CONTACTO = {
  whatsapp: '525519494848',
  correo: 'drtorres.cardioeco@gmail.com',
  mensajeWhatsapp: 'Hola Dr. Torres, me gustaría agendar una consulta.',
  asuntoCorreo: 'Solicitud de consulta',
} as const;

/** Consultorio. La dirección alimenta a la vez la ficha de contacto, el
 *  mapa y el domicilio del Responsable en el aviso de privacidad, así que
 *  se escribe una sola vez aquí. */
export const CONSULTORIO = {
  calle: 'Tuxpan 54, interior 702',
  colonia: 'Col. Roma Sur',
  ciudad: 'Ciudad de México',
  cp: '06760',
  get consulta() {
    return [this.calle, this.colonia, this.cp, this.ciudad].filter(Boolean).join(', ');
  },
  get completa() {
    return [this.calle, this.colonia, this.cp, this.ciudad].filter(Boolean).join(', ');
  },
} as const;

/** Datos del Responsable para la Ley Federal de Protección de Datos
 *  Personales en Posesión de los Particulares. */
export const AVISO = {
  responsable: 'Dr. Ulises Torres Aguiñaga',
  correoArco: 'drtorres.cardioeco@gmail.com',
  /** Última revisión del texto legal. Actualizar al modificarlo. */
  actualizado: '2026-10-20',
} as const;

export const META = {
  titulo: 'Dr. Ulises Torres Aguiñaga — Medicina Interna, Cardiología y Ecocardiografía',
  descripcion:
    'Dr. Ulises Torres Aguiñaga. Medicina interna, cardiología y ecocardiografía.',
  indexable: true,
  /** Vista previa al compartir el enlace. Ruta relativa: Base.astro la
   *  vuelve absoluta contra `site`, que es lo que exige Open Graph. */
  imagen: '/img/og-dr-ulises-torres.png',
  imagenAncho: 1200,
  imagenAlto: 630,
  imagenAlt: 'Logotipo del Dr. Ulises Torres Aguiñaga',
} as const;

export const enlaceWhatsapp = () =>
  `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(CONTACTO.mensajeWhatsapp)}`;

export const enlaceDoctorialia = () => `https://www.doctoralia.com.mx/nova/profiles/doctor/540022#doctor-profile-services`;
export const enlaceCorreo = () =>
  `mailto:${CONTACTO.correo}?subject=${encodeURIComponent(CONTACTO.asuntoCorreo)}`;
export const SECCIONES = [
  { id: 'inicio',    largo: 'Inicio',              corto: 'Inicio',    aria: 'Inicio' },
  { id: 'sobre',     largo: 'Sobre el Dr. Torres', corto: 'Perfil',    aria: 'Sobre el Dr. Torres' },
  { id: 'servicios', largo: 'Servicios',           corto: 'Servicios', aria: 'Servicios' },
  { id: 'confianza', largo: 'Credenciales',        corto: 'Confianza', aria: 'Credenciales' },
  { id: 'contacto',  largo: 'Agendar',             corto: 'Agendar',   aria: 'Agendar consulta' },
] as const;
