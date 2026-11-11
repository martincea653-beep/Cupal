/**
 * DATOS DE TURISMO Y SERVICIOS LOCALES
 * ====================================================
 * Edita este archivo para agregar, quitar o corregir tarjetas.
 * No hace falta tocar el HTML.
 *
 * Campos de cada tarjeta:
 *   nombre       (obligatorio)
 *   etiqueta     texto corto sobre el título (Termas, Hostal, etc.)
 *   descripcion  frase breve
 *   icono        clase de Font Awesome, ej: "fas fa-tree"
 *   dato         línea inferior (distancia, ubicación, aviso)
 *   datoIcono    ícono de esa línea (opcional)
 *   imagen       ruta de foto, ej: "assets/img/turismo/panqui.jpg" (opcional)
 *   whatsapp     número con código país, sin + ni espacios (opcional, solo alojamientos)
 *   web          enlace a sitio, Instagram o Facebook (opcional)
 *
 * IMPORTANTE: verifica distancias, teléfonos y enlaces antes de publicar.
 */

const TURISMO_ATRACTIVOS = [
  {
    nombre: "Termas Angostura",
    etiqueta: "Termas",
    descripcion: "Termas rústicas a pocos kilómetros del pueblo, ideales para una pausa de relajo.",
    icono: "fas fa-hot-tub-person",
    dato: "Aprox. 5 km de Curarrehue",
    datoIcono: "fas fa-route"
  },
  {
    nombre: "Termas de Panqui",
    etiqueta: "Termas",
    descripcion: "Centro termal en entorno de bosque nativo, con piscinas y tinas al aire libre.",
    icono: "fas fa-hot-tub-person",
    dato: "Aprox. 13 km de Curarrehue",
    datoIcono: "fas fa-route"
  },
  {
    nombre: "Termas Arrekolawen",
    etiqueta: "Termas",
    descripcion: "Otra opción termal de la comuna, para quienes buscan algo tranquilo y de ambiente local.",
    icono: "fas fa-hot-tub-person",
    dato: "Consulta horarios y valores directamente",
    datoIcono: "fas fa-circle-info"
  },
  {
    nombre: "Aldea Intercultural Trawupeyüm",
    etiqueta: "Cultura mapuche",
    descripcion: "Espacio cultural en el centro del pueblo, a una cuadra de la plaza, para conocer la herencia mapuche-pehuenche.",
    icono: "fas fa-landmark",
    dato: "En el centro de Curarrehue",
    datoIcono: "fas fa-person-walking"
  },
  {
    nombre: "Cooperativas de la calle principal",
    etiqueta: "Artesanía",
    descripcion: "Productos elaborados por artesanos y productores locales: un buen recuerdo para llevar.",
    icono: "fas fa-store",
    dato: "A pasos de CUPAL",
    datoIcono: "fas fa-person-walking"
  },
  {
    nombre: "Parque Nacional Villarrica · Sector Puesco",
    etiqueta: "Naturaleza",
    descripcion: "Bosques de araucarias, senderos y vistas al volcán dentro de la comuna.",
    icono: "fas fa-tree",
    dato: "Confirma accesos y temporada con CONAF",
    datoIcono: "fas fa-circle-info"
  },
  {
    nombre: "Paso Mamuil Malal y Parque Nacional Lanín",
    etiqueta: "Frontera",
    descripcion: "Paso fronterizo hacia Argentina, rodeado de paisaje cordillerano y araucarias.",
    icono: "fas fa-flag",
    dato: "Revisa el estado del paso antes de ir",
    datoIcono: "fas fa-circle-info"
  }
];

const TURISMO_ALOJAMIENTOS = [
  {
    nombre: "Hostal Treile",
    etiqueta: "Hostal",
    descripcion: "Alojamiento en Curarrehue para quienes buscan quedarse cerca del centro.",
    icono: "fas fa-house",
    dato: "Curarrehue",
    datoIcono: "fas fa-location-dot"
    // whatsapp: "569XXXXXXXX",
    // web: "https://..."
  },
  {
    nombre: "Cabañas Tierra Nueva",
    etiqueta: "Cabañas",
    descripcion: "Cabañas en Curarrehue, una buena opción para grupos y familias.",
    icono: "fas fa-house-chimney",
    dato: "Curarrehue",
    datoIcono: "fas fa-location-dot"
    // whatsapp: "569XXXXXXXX",
    // web: "https://..."
  }
];