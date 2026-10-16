/* =========================================================================
   Contenido de las cinco secciones.
   PENDIENTE: este texto lo redactó la agencia para la sesión de validación.
   NO está aprobado por el Dr. Torres. Revisar con él antes de publicar.

   Los valores marcados con `pendiente: true` se pintan en cursiva con
   subrayado punteado. Es deliberado: en un sitio que enseña credenciales
   médicas, un dato inventado que parezca real es peor que un hueco visible.
   ========================================================================= */

export type Dato = { termino: string; valor: string; pendiente?: boolean };

export const HERO = {
  eyebrow: 'Medicina Interna · Cardiología',
  titulo: 'El corazón se entiende mejor cuando se mira al paciente completo.',
  lead: 'Consulta de medicina interna, cardiología y ecocardiografía transesofágica. Estudio a fondo cada caso antes de proponer un tratamiento: primero entender, después indicar.',
  ctaPrimario: 'Agendar consulta',
  ctaSecundario: 'Ver servicios',
  // PENDIENTE: retrato profesional, 4:5, lado mayor ≥ 1600 px.
  retrato: {
    pendiente: true,
    leyenda: 'Retrato profesional · imagen de alta resolución pendiente',
    alt: 'Espacio reservado para el retrato profesional del Dr. Torres',
  },
} as const;

export const SOBRE = {
  eyebrow: 'Sobre el Dr. Torres',
  titulo: 'Primero internista. Después cardiólogo.',
  nombre: 'Dr. Ulises Torres Aguiñaga',
  especialidades: 'Medicina Interna · Cardiología · Ecocardiografía Transesofágica',
  datos: [
    { sigla: 'UNAM', texto: 'Formación de licenciatura y especialidad' },
    { sigla: '00', siglaPendiente: true, texto: 'Años de práctica clínica', textoPendiente: 'pendiente de confirmar' },
    { sigla: 'ETE', texto: 'Ecocardiografía transesofágica realizada por el propio médico tratante' },
  ],
  parrafos: [
    'Mi formación empezó en medicina interna: la especialidad que obliga a mirar al paciente completo antes de mirar un solo órgano. Sobre esa base construí la cardiología.',
    'Por eso, cuando alguien llega con dolor de pecho, palpitaciones o presión alta, la pregunta no es únicamente qué le está pasando al corazón, sino qué está pasando en el resto del cuerpo para que el corazón responda así. Riñón, tiroides, control de la glucosa y medicamentos previos forman parte del mismo diagnóstico.',
    'Trabajo con estudios, no con suposiciones. La ecocardiografía transesofágica permite ver estructuras que un ecocardiograma convencional no alcanza —válvulas, aurícula izquierda, prótesis— y decidir con evidencia en lugar de probabilidad.',
    'Cada consulta termina con tres cosas claras: qué tiene, qué vamos a hacer y cuándo nos volvemos a ver.',
  ],
} as const;

export const SERVICIOS = {
  eyebrow: 'Servicios',
  titulo: 'Tres frentes, un mismo criterio clínico.',
  lead: 'Consulta privada y estudio diagnóstico, con seguimiento del mismo médico de principio a fin.',
  items: [
    {
      icono: 'estetoscopio',
      titulo: 'Medicina Interna',
      texto: 'Diagnóstico integral del paciente adulto, incluido el manejo de varias condiciones a la vez sin que un tratamiento estorbe al otro.',
      puntos: ['Hipertensión, diabetes y dislipidemia', 'Enfermedad tiroidea y renal', 'Valoración preoperatoria', 'Interpretación de estudios de laboratorio'],
    },
    {
      icono: 'corazon',
      titulo: 'Cardiología',
      texto: 'Atención del corazón y los vasos, desde el síntoma agudo hasta el control del riesgo a largo plazo.',
      puntos: ['Dolor torácico y palpitaciones', 'Insuficiencia cardiaca', 'Hipertensión de difícil control', 'Seguimiento posterior a infarto'],
    },
    {
      icono: 'trazo',
      titulo: 'Ecocardiografía Transesofágica',
      texto: 'El estudio que ve lo que el ecocardiograma convencional no alcanza. Se realiza con sedación y toma alrededor de 30 minutos.',
      puntos: ['Valvulopatías y prótesis valvulares', 'Búsqueda de trombos en aurícula izquierda', 'Sospecha de endocarditis infecciosa', 'Estudio previo a cardioversión o ablación'],
    },
  ],
} as const;

export const CONFIANZA = {
  eyebrow: 'Confianza',
  titulo: 'Formación verificable, práctica hospitalaria.',
  lead: 'Toda credencial mostrada aquí puede comprobarse en registros públicos.',
  credenciales: [
    {
      icono: 'birrete',
      titulo: 'Universidad Nacional Autónoma de México',
      datos: [
        { termino: 'Licenciatura', valor: 'Médico Cirujano — Facultad de Medicina' },
        { termino: 'Especialidad', valor: 'Medicina Interna' },
        { termino: 'Subespecialidad', valor: 'Cardiología' },
      ] as Dato[],
    },
    {
      icono: 'credencial',
      titulo: 'Cédulas profesionales',
      datos: [
        { termino: 'Cédula general', valor: 'pendiente de documentación', pendiente: true },
        { termino: 'Cédula de especialidad', valor: 'pendiente de documentación', pendiente: true },
        { termino: 'Cédula de subespecialidad', valor: 'pendiente de documentación', pendiente: true },
      ] as Dato[],
    },
    {
      icono: 'hospital',
      titulo: 'Práctica hospitalaria',
      datos: [
        { termino: 'Hospital', valor: 'nombre pendiente de confirmar', pendiente: true },
        { termino: 'Consultorio', valor: 'dirección pendiente de confirmar', pendiente: true },
        { termino: 'Atención', valor: 'Consulta externa y valoración hospitalaria' },
      ] as Dato[],
    },
    {
      icono: 'medalla',
      titulo: 'Certificación de consejo',
      datos: [
        { termino: 'Consejo', valor: 'Consejo Mexicano de Cardiología' },
        { termino: 'Vigencia', valor: 'pendiente de confirmar', pendiente: true },
        { termino: 'Verificación', valor: 'Registro Nacional de Profesionistas (SEP)' },
      ] as Dato[],
    },
  ],
} as const;

export const CONTACTO_SECCION = {
  eyebrow: 'Contacto',
  titulo: 'Agendar consulta',
  lead: 'Escriba por WhatsApp con su nombre y el motivo de consulta. Se le responde con los horarios disponibles de la semana en curso.',
  ctaWhatsapp: 'Escribir por WhatsApp',
  ctaCorreo: 'Enviar correo',
  urgencias: {
    titulo: 'Esto no es un servicio de urgencias.',
    texto: 'Ante dolor de pecho intenso, desmayo o dificultad para respirar, acuda de inmediato al servicio de urgencias más cercano o llame al 911.',
  },
  datos: [
    { termino: 'Consultorio', valor: 'dirección pendiente', pendiente: true },
    { termino: 'Teléfono / WhatsApp', valor: 'número pendiente', pendiente: true },
    { termino: 'Horario', valor: 'Lunes a viernes', cola: 'horario pendiente de confirmar' },
    { termino: 'Primera consulta', valor: 'Traiga estudios previos, electrocardiogramas y la lista de medicamentos que toma.' },
  ],
} as const;
