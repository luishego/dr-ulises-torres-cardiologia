/* =========================================================================
   Configuración del sitio.
   Todo lo que hay que cambiar antes de publicar vive en este archivo.
   ========================================================================= */

/** Fondo a sangre completa. Cambiar esta constante es todo lo que hace falta.
 *  - 'atardecer' · degradado de cielo. Atmosférico y ligero (3 KB), pero sin
 *    contraste local: la refracción del cristal casi no se percibe.
 *  - 'tejido'    · obra de tejido espejeado. Mucho contraste local, la
 *    refracción se lee muy bien; el motivo es más literal.
 *  - 'ambos'     · el tejido sobre el atardecer. El cielo pone el color y la
 *    atmósfera; el tejido, los bordes que el vidrio necesita para refractar.
 */
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
  titulo: 'Dr. Ulises Torres Aguiñaga — Medicina Interna y Cardiología',
  descripcion:
    'Dr. Ulises Torres Aguiñaga. Medicina interna, cardiología y ecocardiografía.',
  // El sitio aún no es público: no debe indexarse hasta validar el copy y
  // completar las credenciales. Ver README.
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
