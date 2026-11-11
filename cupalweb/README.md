# CUPAL Restobar & Cafetería · Curarrehue, Araucanía

Sitio web oficial, moderno, responsive y de alto nivel gastronómico desarrollado para **CUPAL**, resto bar y cafetería ubicado en **Curarrehue, Región de La Araucanía, Chile**.

---

## 🌲 Identidad Visual & Logotipo Oficial

El diseño web fue concebido respetando rigurosamente el **logotipo oficial de CUPAL**:
- **Copa de cerveza dorada** y **ramas de araucaria con piñones** (símbolo de la cordillera de Curarrehue).
- **Plato de madera torneada** con tonos cálidos, ámbar, tostado y verde bosque.
- **Tipografía clásica serif** para títulos y estilo limpio sans-serif para máxima legibilidad en dispositivos móviles.
- El archivo del logotipo original se encuentra en: `assets/img/cupal-logo.jpg` y se utiliza sin modificaciones ni deformaciones en:
  - Barra de navegación superior
  - Emblema central de la portada hero
  - Pie de página (footer)
  - Favicon y Apple Touch Icon
  - Metadatos para compartir en redes sociales (Open Graph y Twitter Card)

---

## 📂 Estructura del Proyecto

```text
cupal-restobar/
├── assets/
│   └── img/
│       └── cupal-logo.jpg      # Logotipo oficial original de CUPAL
├── css/
│   └── styles.css              # Estilos visuales gastronómicos y diseño responsive
├── js/
│   ├── config.js               # Variables del negocio (WhatsApp, horarios, dirección, redes)
│   ├── menu-data.js            # Carta digital y galería fotográfica (editable)
│   └── main.js                 # Lógica interactiva, filtros, lightbox y reservas WhatsApp
├── index.html                  # Estructura semántica HTML5 con SEO y Schema.org
├── netlify.toml                # Configuración de despliegue y caché para Netlify
└── README.md                   # Esta guía
```

---

## 📋 Checklist: Datos Pendientes por Confirmar por el Establecimiento

El sitio web está completamente funcional con una estructura demostrativa de alta calidad. Antes de la publicación oficial, solo se deben actualizar los siguientes datos:

1. **Número de WhatsApp de CUPAL**:
   - Abrir el archivo `js/config.js`
   - Modificar la variable `whatsappNumero: "56900000000"` colocando el número chileno real sin signo `+` ni espacios (ej: `"56912345678"`).
2. **Dirección exacta en Curarrehue**:
   - Modificar la variable `direccion` en `js/config.js` con la calle y número o referencia conocida del local.
   - En `googleMapsUrl`, si tienen ficha de Google Business, pegar la URL directa de la ficha.
3. **Horarios de atención**:
   - Actualizar los campos `lunesAJueves`, `viernesYSabado`, `domingo` en `js/config.js`.
4. **Redes Sociales**:
   - Pegar las URLs reales de los perfiles de **Instagram** y **Facebook** en `js/config.js`.
5. **Carta o Menú Real**:
   - En `js/menu-data.js`, agregar, eliminar o ajustar los platos, precios en pesos chilenos ($ CLP), ingredientes y alérgenos.
6. **Fotografías Reales**:
   - A medida que se tomen fotos del local en Curarrehue y sus platos, colocarlas en `assets/img/` y actualizar las rutas en `js/menu-data.js`.

---

## 🚀 Cómo Publicar en Netlify (Gratis y en 2 Minutos)

### Opción 1: Arrastrar y soltar (Netlify Drop - Recomendada sin código)
1. Ingresa a [https://app.netlify.com/drop](https://app.netlify.com/drop) e inicia sesión con tu cuenta gratuita.
2. Arrastra la carpeta completa `cupal-restobar` sobre la zona de carga.
3. ¡Listo! Netlify te entregará de inmediato una URL segura con certificado SSL HTTPS (ejemplo: `https://cupal-curarrehue.netlify.app/`).
4. Si compras un dominio propio (como `cupal.cl`), puedes vincularlo con un clic desde el panel de Netlify.

### Opción 2: Desde GitHub / GitLab / Bitbucket
1. Sube esta carpeta a tu repositorio de GitHub.
2. En Netlify, selecciona **"Add new site"** -> **"Import an existing project"**.
3. Selecciona tu repositorio.
4. El archivo `netlify.toml` incluido ya contiene la configuración automática.
5. Cada vez que hagas un cambio en la carta o los horarios, el sitio se actualizará solo.

---

## 📱 Funcionalidades Destacadas

- **Navegación Sticky & Menú Móvil**: Barra con efecto vidrio (backdrop-blur) que se adapta con fluidez en smartphones, tablets y pantallas de escritorio.
- **Carta Digital Interactiva**:
  - Filtro por categorías: Cafetería, Desayunos, Sándwiches & Tablas, Platos Principales, Restobar & Cervezas, Postres.
  - Buscador en tiempo real de platos e ingredientes.
  - Formato de precios en CLP y etiquetas dietéticas (favoritos, casero, vegetariano, alérgenos).
- **Galería con Lightbox**: Visualización en pantalla completa con navegación por teclado (flechas y tecla Esc), botones siguiente/anterior y captions descriptivos.
- **Reservas y Consultas por WhatsApp**:
  - Formulario que **no inventa reservas falsas** ni calendarios ficticios.
  - Valida comensales, fecha y hora preferida.
  - Genera un mensaje limpio y estructurado que se envía directo al WhatsApp oficial de CUPAL para confirmación manual humana.
- **Botón Flotante de WhatsApp**: Acceso rápido permanente en la esquina inferior derecha con animación de atención sutil.
- **SEO & Accesibilidad**:
  - Encabezados semánticos (`h1`, `h2`, `h3`).
  - Datos estructurados de restaurante (`Schema.org Restaurant JSON-LD`).
  - Metadatos Open Graph y Twitter Cards listos para compartir en WhatsApp, Facebook e Instagram.
  - Modo accesible para usuarios con reducción de movimiento (`prefers-reduced-motion`).
