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
      /* Los dos folios son idénticos a propósito y están confirmados: el
         Consejo ampara ambas certificaciones con un mismo número. No es un
         copy-paste, no hay que "corregirlo". */
      datos: [
        { termino: 'Consejo', valor: 'Consejo Mexicano de Cardiología' },
        { termino: 'Cardiología clínica', valor: 'CMC2025-5612' },
        { termino: 'Ecocardiografía en adultos', valor: 'CMC2025-5612' },
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
    { termino: 'Horario', valor: HORARIO.texto },
    { termino: 'Primera consulta', valor: 'Traiga estudios previos, electrocardiogramas y la lista de medicamentos que toma.' },
  ],
} as const;

/* =========================================================================
   AVISO DE PRIVACIDAD (LFPDPPP)

   ⚠ REVISIÓN LEGAL PENDIENTE. Este texto se adaptó de un aviso de otra
   consulta médica. Se cambió el Responsable, su domicilio y el correo para
   derechos ARCO, y se retiraron las cláusulas de recabado de datos de
   menores —madre, padre y hermanos del paciente—, que no aplican a una
   práctica de ecocardiografía de adultos. El resto se conservó.

   Falta: el código postal del domicilio (CONSULTORIO.cp) y que un abogado
   o el propio Dr. Torres valide el alcance antes de publicarlo.

   Los datos del Responsable se leen de sitio.ts para que no haya dos
   verdades sobre la dirección o el correo.
   ========================================================================= */
import { CONSULTORIO, AVISO, HORARIO } from './sitio';

export const AVISO_PRIVACIDAD = {
  titulo: 'Aviso de privacidad',
  secciones: [
    {
      titulo: 'Responsable del tratamiento de datos personales',
      parrafos: [
        `${AVISO.responsable} es el Responsable para efectos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la "Ley de Datos"), con domicilio en ${CONSULTORIO.completa}, de conformidad con lo establecido en el Artículo 17, fracción II de la Ley de Datos.`,
      ],
    },
    {
      titulo: 'Finalidad del tratamiento de los datos personales',
      parrafos: ['Se le informa que los datos personales en posesión del Responsable serán utilizados para:'],
      lista: [
        'Prestación del servicio médico que requiere.',
        'Remitir sus datos, en su caso, a otros médicos tratantes, hospitales y servicios clínicos.',
        'Transferir sus datos, en su caso, a la aseguradora o empresa de convenio de atención médica con quien tenga contratada una póliza de seguro de gastos médicos, o bien sea derechohabiente.',
        'Creación, estudio, análisis, actualización y conservación del expediente clínico.',
        'Estudios, registros, estadísticas y análisis de información de salud.',
        'Facturación y cobranza por servicios.',
        'Determinar si requiere ser tratado como paciente vulnerable y de alto riesgo.',
        'Otorgar un tratamiento correcto.',
        'Conservar registros para una correcta prestación de servicios en el futuro.',
        'Realizar encuestas de satisfacción de servicios, y promoción de los servicios ofrecidos por el Responsable.',
        'Contactarlo para concertar citas o informarle de cambios de fecha, hora y ubicación de los estudios y consultas.',
      ],
    },
    {
      titulo: 'Datos personales recabados',
      parrafos: [
        'Para alcanzar las finalidades antes expuestas, se recabarán los siguientes datos personales: nombre completo, fecha de nacimiento, género, domicilio de casa o trabajo, teléfonos de casa, oficina y móvil, ocupación, correo electrónico, datos de su seguro médico, RFC, CURP, datos fiscales de facturación, datos de un contacto en caso de emergencia, datos de su representante legal y persona que lo refiere.',
      ],
    },
    {
      titulo: 'Datos sensibles',
      parrafos: [
        'A fin de poder brindar la atención médica y conforme a la legislación en salud aplicable, le serán solicitados los siguientes datos personales sensibles: antecedentes heredofamiliares, antecedentes personales patológicos, antecedentes personales no patológicos, estado de salud actual, procedimientos pasados y presentes, medicamentos pasados y presentes, información sobre alergias y antecedentes relevantes de salud.',
        'En relación con los datos personales y sensibles que se recaben, el Responsable se compromete a recabar solo los datos indispensables para las finalidades mencionadas y a tratarlos bajo las medidas de seguridad adecuadas para proteger su confidencialidad.',
        'En caso de que exista algún cambio en este aviso de privacidad, se lo comunicaremos enviando un correo electrónico a la cuenta que nos haya proporcionado. No seremos responsables si usted no recibe la notificación debido a algún problema con su cuenta de correo electrónico.',
      ],
    },
    {
      titulo: 'Transferencia',
      parrafos: [
        'Para la prestación de servicios, el Responsable puede transferir dentro y fuera del país los datos personales en su posesión a terceros subcontratados para fines relacionados con los señalados en este aviso. Entre esos terceros se incluyen, sin limitar: laboratorios, clínicas, hospitales, centros de investigación, aseguradoras y proveedores de programas de cómputo usados por el Responsable, o aquellos que el Responsable considere necesario o conveniente para comunicar los datos personales.',
      ],
    },
    {
      titulo: 'Limitación de uso y divulgación de datos personales',
      parrafos: [
        `Para limitar el uso de sus datos personales, conforme a lo establecido en la Ley de Datos, podrá solicitar a través del correo electrónico ${AVISO.correoArco} el ejercicio de sus Derechos ARCO: acceso a sus datos personales, rectificación, cancelación u oposición a su tratamiento para fines específicos. El Responsable dará seguimiento a su solicitud y le dará respuesta en los siguientes 20 (veinte) días hábiles. Asimismo, podrá revocar su consentimiento al presente aviso de privacidad.`,
      ],
    },
    {
      titulo: 'Medios para ejercer sus derechos ARCO',
      parrafos: [
        'Para el ejercicio de sus Derechos ARCO o la revocación de su consentimiento, deberá presentar una solicitud al correo electrónico mencionado, acompañada de la siguiente información:',
      ],
      lista: [
        'Nombre completo.',
        'Fecha de nacimiento.',
        'Domicilio completo.',
        'Identificación vigente con la que acredite su personalidad (INE, pasaporte, cédula profesional o documento migratorio).',
        'Si no es el titular quien presenta la solicitud: el documento que acredite la representación (instrumento público firmado ante dos testigos), junto con la identificación del titular y del representante.',
        'Una descripción clara y precisa de los datos personales respecto de los cuales busca ejercer alguno de los Derechos ARCO, cuál es el derecho a ejercer y las razones para hacerlo.',
      ],
    },
    {
      titulo: 'Cambios al aviso de privacidad',
      parrafos: [
        'El Responsable se reserva el derecho de enmendar o modificar el presente aviso de privacidad como estime conveniente, por ejemplo para cumplir con cambios en la legislación sobre protección de datos o de salud. El Responsable informará y pondrá a su disposición el aviso actualizado cuando se hagan cambios significativos, así como cuando se requiera recabar su consentimiento.',
      ],
    },
  ],
  cierre:
    'Al proporcionar sus datos personales al Responsable, usted reconoce haber leído este aviso de privacidad y otorga su consentimiento para que sus datos personales, incluidos los sensibles, sean tratados conforme a lo aquí establecido.',
} as const;
