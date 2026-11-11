/**
 * CONFIGURACIÓN GENERAL DE CUPAL RESTAURANTE
 * ====================================================
 * Este archivo permite editar fácilmente la información del negocio
 * sin necesidad de modificar el código HTML.
 * 
 * Los datos de dirección, teléfono, Instagram y Facebook salen de la carta
 * digital oficial del local. Confirmar con CUPAL que sean los definitivos.
 */

const CUPAL_CONFIG = {
  // Información básica
  nombre: "CUPAL",
  subtitulo: "Restaurante",
  eslogan: "Un lugar para disfrutar en Curarrehue",
  
  // Ubicación
  ciudad: "Curarrehue",
  region: "Región de La Araucanía",
  pais: "Chile",
  direccion: "Av. Bernardo O'Higgins, Curarrehue, Región de La Araucanía, Chile",
  direccionNota: "",
  
  // Enlace a la ficha exacta de CUPAL en Google Maps
  googleMapsUrl: "https://www.google.com/maps/place/Cupal+Restaurant/@-39.3685026,-71.5823411,17z/data=!4m6!3m5!1s0x96147f5ac1db4795:0x49192952db3829ff!8m2!3d-39.3690269!4d-71.5819511!16s%2Fg%2F11vs88m6j3",
  
  // Contacto y WhatsApp
  // IMPORTANTE: Ingresar número con código de país sin signo + ni espacios (Ej: 56912345678)
  whatsappNumero: "56953080413",
  whatsappTextoDefault: "¡Hola CUPAL! Me gustaría hacer una consulta sobre su restaurante.",
  telefonoMostrar: "+56 9 5308 0413",
  email: " restocupal@gmail.com", // Reemplazar con el correo oficial si aplica
  
  // Horarios de atención
  horarios: {
    lunesAJueves: "12:00 - 20:00 hrs",
    viernesYSabado: "12:00 - 22:30 hrs",
    domingo: "12:00 - 20:00 hrs",
    nota: ""
  },
  
  // Redes sociales
  redes: {
    instagram: {
      url: "https://www.instagram.com/resto_cupal",
      usuario: "@resto_cupal"
    },
    facebook: {
      url: "https://www.facebook.com/profile.php?id=61555531841301",
      usuario: "CUPAL Curarrehue"
    }
  }
};

if (typeof window !== "undefined") {
  window.CUPAL_CONFIG = CUPAL_CONFIG;
}