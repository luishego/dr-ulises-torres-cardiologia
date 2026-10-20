export const FONDO: 'atardecer' | 'tejido' | 'ambos' = 'atardecer';

/** Cuánto pesa el tejido sobre el atardecer cuando FONDO es 'ambos'. */
export const MEZCLA_TEJIDO = 0.55;

export const CONTACTO = {
  // PENDIENTE: lada de país + número, sin espacios ni signos.
  whatsapp: '520000000000',
  // PENDIENTE
  correo: 'contacto@ejemplo.mx',
  mensajeWhatsapp: 'Hola Dr. Torres, me gustaría agendar una consulta.',
  asuntoCorreo: 'Solicitud de consulta',
} as const;

export const META = {
  titulo: 'Dr. Ulises Torres Aguiñaga — Medicina Interna, Cardiología y Ecocardiografía',
  descripcion:
    'Dr. Ulises Torres Aguiñaga. Medicina interna, cardiología y ecocardiografía.',
  indexable: false,
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
