export type Dato = { termino: string; valor: string; pendiente?: boolean };

export const HERO = {
  eyebrow: 'Cardiología · Ecocardiografía',
  titulo: 'Diagnóstico cardiológico de alta precisión.',
  lead: 'Agenda tu estudio hoy mismo con la tranquilidad de estar en manos de un especialista. Combinamos calidez humana y excelencia técnica para entregar resultados rápidos y confiables que facilitan el trabajo de los médicos tratantes y cuidan la salud de nuestros pacientes.  ',
  ctaPrimario: 'Agendar estudio',
  ctaSecundario: 'Ver servicios'  
} as const;

export const SOBRE = {
  eyebrow: 'Sobre el Dr. Torres',
  titulo: '',
  nombre: 'Dr. Ulises Torres Aguiñaga',
  especialidades: 'Medicina Interna · Cardiología · Ecocardiografía',
  parrafos: [
    'Médico Internista y Cardiólogo, con formación especializada en Ecocardiografía de adultos, con dedicación al diagnóstico integral y al tratamiento de enfermedades cardiovasculares y metabólicas.',
    'La práctica se centra en brindar una atención basada en evidencia científica, utilizando herramientas diagnósticas de alta precisión para ofrecer un tratamiento personalizado a cada persona.',
    'Considero que una buena consulta y un buen estudio no consiste únicamente en establecer un diagnóstico, con interés en que cada persona entienda su padecimiento y sea partícipe de su tratamiento, conozca alternativas y el por qué de cada recomendación. ',
    'Mi objetivo principal es ofrecer no solo un estudio, sino una guía para toma de decisiones de forma adecuada, cercana y actualizada, individualizada a cada caso y cada persona.',
  ],
  retrato: {
    pendiente: true,
    leyenda: 'Retrato profesional · imagen de alta resolución pendiente',
    alt: 'Espacio reservado para el retrato profesional del Dr. Torres',
  },
} as const;

export const SERVICIOS = {
  eyebrow: 'Servicios',
  titulo: 'Estudios de imagen',
  lead: 'Estudio diagnóstico.',
  cta: 'Agendar estudio',
  items: [
    {
      icono: 'trazo',
      titulo: 'Ecocardiograma transtorácico',
      texto: 'Ultrasonido del corazón que muestra en tiempo real su tamaño, la fuerza con la que bombea y el funcionamiento de sus válvulas. No duele, no usa radiación y no requiere preparación especial. Dura entre 30 y 45 minutos.',
    },
    {
      icono: 'corazon',
      titulo: 'Ecocardiograma bidimensional',
      texto: 'Estudio de ultrasonido que obtiene imágenes del corazón en cortes, para valorar su estructura y movimiento. Es la base de la evaluación cardiológica y se usa para revisión inicial o seguimiento.',
    },
    {
      icono: 'corazon',
      titulo: 'Ecocardiograma de esfuerzo',
      texto: 'Compara el corazón en reposo y durante el ejercicio en banda o bicicleta. Cuando el paciente no puede ejercitarse, se usa un medicamento que simula el esfuerzo. Ayuda a detectar si el corazón recibe suficiente sangre cuando trabaja más (enfermedad coronaria) y a valorar algunas enfermedades de las válvulas. Requiere indicaciones previas sobre ayuno, ropa cómoda y medicamentos.',
    },
    {
      icono: 'trazo',
      titulo: 'Ecocardiograma contrastado',
      texto: 'Durante el ultrasonido se aplica en la vena una solución con microburbujas que mejora la nitidez de las imágenes. Sirve cuando la imagen convencional no es clara, o para buscar comunicaciones anormales entre las cavidades del corazón, como el foramen oval permeable. Es un procedimiento seguro y bien tolerado.',
    }
  ],
} as const;

export const CONFIANZA = {
  eyebrow: 'Confianza',
  titulo: 'Mi formación como medico y mi práctica clínica.',
  lead: 'Mi formación es continua, mi experiencia profesional abarca la práctica en hospitales públicos y privados.',
  credenciales: [
    {
      icono: 'birrete',
      titulo: 'Formación académica',
      datos: [
        { termino: 'Licenciatura', valor: 'Médico Cirujano - Facultad de Medicina, UNAM.' },
        { termino: 'Especialidad', valor: 'Medicina Interna - Hospital Adolfo López Mateos, ISSSTE.' },
        { termino: 'Subespecialidad', valor: 'Cardiología - Instituto Nacional de Cardiología Ignacio Chávez.' },
        { termino: 'Alta especialidad', valor: 'Ecocardiografía - Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán.' },
      ] as Dato[],
    },
    {
      icono: 'credencial',
      titulo: 'Cédulas profesionales',
      datos: [
        { termino: 'Cédula general', valor: '10985964' },
        { termino: 'Cédula de especialidad', valor: '13241376' },
        { termino: 'Cédula de subespecialidad', valor: '15116917' },
      ] as Dato[],
    },
    {
      icono: 'hospital',
      titulo: 'Práctica hospitalaria',
      datos: [
        { termino: 'Hospital', valor: 'Hospital Adolfo López Mateos ISSSTE, Unidad Coronaria y Terapia Postquirúrgica Cardiaca' },
        { termino: 'Hospital', valor: 'Hospital Polar San José. Unidad de Terapia Intensiva' },
        { termino: 'Atención', valor: 'Centro de Alta Especialidad Cardiovascular | CardioVID®' },
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
