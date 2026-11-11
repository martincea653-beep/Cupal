/**
 * CUPAL RESTOBAR & CAFETERÍA - SCRIPT PRINCIPAL
 * =============================================
 * Lógica interactiva para la web de CUPAL:
 * - Sincronización con config.js
 * - Renderizado interactivo y filtrado de la carta digital
 * - Buscador en tiempo real de productos
 * - Galería fotográfica con Lightbox completo
 * - Turismo y servicios locales (datos en turismo-data.js)
 * - Generador de reservas y consultas vía WhatsApp (confirmación manual)
 * - Navegación móvil accesible y navbar sticky
 * - Animaciones sutiles de scroll reveal
 */

document.addEventListener("DOMContentLoaded", () => {
  initBusinessConfig();
  initNavigation();
  initMenu();
  initGallery();
  initTourism(); // IMPORTANTE: debe ir antes de initScrollAnimations()
  initReservationForm();
  initScrollAnimations();
  initDateConstraints();
});

/* ==========================================================================
   1. SINCRONIZACIÓN DE DATOS DEL NEGOCIO (CONFIG.JS)
   ========================================================================== */
function initBusinessConfig() {
  if (typeof CUPAL_CONFIG === "undefined") {
    console.warn("CUPAL_CONFIG no está definido.");
    return;
  }

  // Actualizar textos básicos
  document.querySelectorAll("[data-config='nombre']").forEach(el => el.textContent = CUPAL_CONFIG.nombre);
  document.querySelectorAll("[data-config='subtitulo']").forEach(el => el.textContent = CUPAL_CONFIG.subtitulo);
  document.querySelectorAll("[data-config='ciudad']").forEach(el => el.textContent = CUPAL_CONFIG.ciudad);
  document.querySelectorAll("[data-config='region']").forEach(el => el.textContent = CUPAL_CONFIG.region);
  document.querySelectorAll("[data-config='direccion']").forEach(el => el.textContent = CUPAL_CONFIG.direccion);
  document.querySelectorAll("[data-config='telefonoMostrar']").forEach(el => el.textContent = CUPAL_CONFIG.telefonoMostrar);

  // Enlaces de Google Maps
  document.querySelectorAll("[data-config-href='googleMapsUrl']").forEach(el => {
    el.href = CUPAL_CONFIG.googleMapsUrl;
  });

  // Enlaces de WhatsApp directo
  const defaultWaUrl = `https://wa.me/${CUPAL_CONFIG.whatsappNumero}?text=${encodeURIComponent(CUPAL_CONFIG.whatsappTextoDefault)}`;
  document.querySelectorAll("[data-config-href='whatsappUrl']").forEach(el => {
    el.href = defaultWaUrl;
  });

  // Horarios
  const hLunes = document.getElementById("horario-lunes");
  const hViernes = document.getElementById("horario-viernes");
  const hDomingo = document.getElementById("horario-domingo");
  const hNota = document.getElementById("horario-nota");

  if (hLunes) hLunes.textContent = CUPAL_CONFIG.horarios.lunesAJueves;
  if (hViernes) hViernes.textContent = CUPAL_CONFIG.horarios.viernesYSabado;
  if (hDomingo) hDomingo.textContent = CUPAL_CONFIG.horarios.domingo;
  if (hNota) hNota.textContent = CUPAL_CONFIG.horarios.nota;

  // Redes sociales
  const igLink = document.querySelectorAll("[data-config-href='instagram']");
  igLink.forEach(link => {
    link.href = CUPAL_CONFIG.redes.instagram.url;
  });

  const fbLink = document.querySelectorAll("[data-config-href='facebook']");
  fbLink.forEach(link => {
    link.href = CUPAL_CONFIG.redes.facebook.url;
  });
}

/* ==========================================================================
   2. NAVEGACIÓN Y NAVBAR STICKY
   ========================================================================== */
function initNavigation() {
  const navbar = document.querySelector(".cupal-navbar");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("navbar-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky navbar al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightActiveSection();
  }, { passive: true });

  // Toggle menú móvil
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("open");
      mobileToggle.classList.toggle("is-active");
      document.body.classList.toggle("no-scroll");
    });

    // Cerrar menú móvil al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("is-active");
        mobileToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      });
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("is-active");
        mobileToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      }
    });
  }

  // Resaltar sección activa al navegar
  function highlightActiveSection() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add("active");
        } else {
          correspondingLink.classList.remove("active");
        }
      }
    });
  }
}

/* ==========================================================================
   3. LOS MÁS VENDIDOS (datos en BEST_SELLERS, archivo menu-data.js)
   ========================================================================== */
function initMenu() {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid || typeof BEST_SELLERS === "undefined") return;

  menuGrid.innerHTML = BEST_SELLERS.map(item => `
    <article class="menu-card reveal ${item.imagen ? "" : "menu-card--no-img"}">
      ${item.imagen ? `
      <div class="menu-card-img-wrap">
        <img
          src="${item.imagen}"
          alt="${item.nombre}"
          loading="lazy"
          class="menu-card-img"
          onerror="this.closest('.menu-card-img-wrap').remove()"
        />
      </div>
      ` : ""}
      <div class="menu-card-body">
        <div class="menu-card-header">
          <h3 class="menu-card-title">${item.nombre}</h3>
        </div>
        ${item.descripcion ? `<p class="menu-card-desc">${item.descripcion}</p>` : ""}
      </div>
    </article>
  `).join("");

  initCardReveals();
}

/* ==========================================================================
   4. GALERÍA FOTOGRÁFICA Y LIGHTBOX
   ========================================================================== */
let activeLightboxIndex = 0;

function initGallery() {
  const galleryGrid = document.getElementById("gallery-grid");
  const galleryFilterBtns = document.querySelectorAll(".gallery-filter-btn");

  if (!galleryGrid || typeof GALLERY_ITEMS === "undefined") return;

  function renderGallery(filter = "todos") {
    const items = filter === "todos" 
      ? GALLERY_ITEMS 
      : GALLERY_ITEMS.filter(it => it.categoria === filter);

    galleryGrid.innerHTML = items.map((item, idx) => `
      <div class="gallery-item reveal" data-category="${item.categoria}" data-index="${idx}">
        <div class="gallery-item-inner">
          <img src="${item.thumb || item.imagen}" alt="${item.titulo}" loading="lazy" class="gallery-img" />
          <div class="gallery-overlay">
            <span class="gallery-zoom-icon"><i class="fas fa-expand-alt"></i></span>
            <div class="gallery-info">
              <h4 class="gallery-item-title">${item.titulo}</h4>
              <p class="gallery-item-desc">${item.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    // Click listener para abrir lightbox
    const cards = galleryGrid.querySelectorAll(".gallery-item");
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        openLightbox(index, items);
      });
    });

    initCardReveals();
  }

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      galleryFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery("todos");
  setupLightboxListeners();
}

function openLightbox(index, items = GALLERY_ITEMS) {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;

  activeLightboxIndex = index;
  window.currentLightboxItems = items;

  updateLightboxContent();
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function updateLightboxContent() {
  const items = window.currentLightboxItems || GALLERY_ITEMS;
  const currentItem = items[activeLightboxIndex];
  if (!currentItem) return;

  const lbImg = document.getElementById("lightbox-img");
  const lbTitle = document.getElementById("lightbox-title");
  const lbDesc = document.getElementById("lightbox-desc");
  const lbCounter = document.getElementById("lightbox-counter");

  if (lbImg) {
    lbImg.src = currentItem.imagen;
    lbImg.alt = currentItem.titulo;
  }
  if (lbTitle) lbTitle.textContent = currentItem.titulo;
  if (lbDesc) lbDesc.textContent = currentItem.descripcion;
  if (lbCounter) lbCounter.textContent = `${activeLightboxIndex + 1} de ${items.length}`;
}

function closeLightbox() {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function setupLightboxListeners() {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;

  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const items = window.currentLightboxItems || GALLERY_ITEMS;
      activeLightboxIndex = (activeLightboxIndex - 1 + items.length) % items.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const items = window.currentLightboxItems || GALLERY_ITEMS;
      activeLightboxIndex = (activeLightboxIndex + 1) % items.length;
      updateLightboxContent();
    });
  }

  // Cerrar al hacer clic en el backdrop
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-backdrop")) {
      closeLightbox();
    }
  });

  // Navegación por teclado
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") {
      const items = window.currentLightboxItems || GALLERY_ITEMS;
      activeLightboxIndex = (activeLightboxIndex - 1 + items.length) % items.length;
      updateLightboxContent();
    }
    if (e.key === "ArrowRight") {
      const items = window.currentLightboxItems || GALLERY_ITEMS;
      activeLightboxIndex = (activeLightboxIndex + 1) % items.length;
      updateLightboxContent();
    }
  });
}

/* ==========================================================================
   5. TURISMO Y SERVICIOS LOCALES (datos en turismo-data.js)
   ========================================================================== */
function initTourism() {
  const escapeHtml = (str = "") =>
    String(str).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  const renderCard = (item) => {
    const waLink = item.whatsapp
      ? `https://wa.me/${encodeURIComponent(item.whatsapp)}`
      : "";

    const actions = [
      waLink
        ? `<a href="${waLink}" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Contactar</a>`
        : "",
      item.web
        ? `<a href="${escapeHtml(item.web)}" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer"><i class="fas fa-arrow-up-right-from-square"></i> Ver más</a>`
        : ""
    ].join("");

    return `
      <article class="tourism-card reveal">
        ${item.imagen ? `<img src="${escapeHtml(item.imagen)}" alt="${escapeHtml(item.nombre)}" loading="lazy" class="tourism-card-img" onerror="this.remove()" />` : ""}
        <div class="tourism-card-icon"><i class="${escapeHtml(item.icono || "fas fa-location-dot")}"></i></div>
        ${item.etiqueta ? `<span class="tourism-card-tag">${escapeHtml(item.etiqueta)}</span>` : ""}
        <h4>${escapeHtml(item.nombre)}</h4>
        ${item.descripcion ? `<p>${escapeHtml(item.descripcion)}</p>` : ""}
        ${item.dato ? `<span class="tourism-meta"><i class="${escapeHtml(item.datoIcono || "fas fa-circle-info")}"></i> ${escapeHtml(item.dato)}</span>` : ""}
        ${actions}
      </article>`;
  };

  const fill = (id, data) => {
    const el = document.getElementById(id);
    if (!el || !Array.isArray(data)) return;
    el.innerHTML = data.map(renderCard).join("");
  };

  fill("turismo-atractivos", typeof TURISMO_ATRACTIVOS !== "undefined" ? TURISMO_ATRACTIVOS : []);
  fill("turismo-alojamientos", typeof TURISMO_ALOJAMIENTOS !== "undefined" ? TURISMO_ALOJAMIENTOS : []);
}

/* ==========================================================================
   6. RESERVAS Y CONSULTAS (WHATSAPP CON CONFIRMACIÓN MANUAL)
   ========================================================================== */
function initReservationForm() {
  const form = document.getElementById("reservation-form");
  const feedback = document.getElementById("reservation-feedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("res-nombre")?.value.trim();
    const telefono = document.getElementById("res-telefono")?.value.trim();
    const personas = document.getElementById("res-personas")?.value;
    const fecha = document.getElementById("res-fecha")?.value;
    const hora = document.getElementById("res-hora")?.value;
    const mensaje = document.getElementById("res-mensaje")?.value.trim() || "Sin observaciones adicionales";

    if (!nombre || !telefono || !personas || !fecha || !hora) {
      showFeedback("Por favor completa los campos obligatorios del formulario.", "error");
      return;
    }

    // Formatear fecha legible (DD/MM/AAAA)
    const fechaParts = fecha.split("-");
    const fechaFormateada = fechaParts.length === 3 ? `${fechaParts[2]}/${fechaParts[1]}/${fechaParts[0]}` : fecha;

    // Crear mensaje estructurado y profesional
    const textoWhatsApp = 
      `¡Hola equipo de CUPAL!\n\n` +
      `Quisiera consultar disponibilidad de mesa para una reserva:\n` +
      `──────────────────────────\n` +
      `👤 Nombre: ${nombre}\n` +
      `👥 Personas: ${personas}\n` +
      `📅 Fecha: ${fechaFormateada}\n` +
      `⏰ Hora preferida: ${hora}\n` +
      `📱 Teléfono de contacto: ${telefono}\n` +
      `💬 Mensaje: ${mensaje}\n` +
      `──────────────────────────\n` +
      `¿Tienen disponibilidad para ese horario? Quedo atento/a a su confirmación manual. ¡Muchas gracias!`;

    const waNumero = (typeof CUPAL_CONFIG !== "undefined" && CUPAL_CONFIG.whatsappNumero) 
      ? CUPAL_CONFIG.whatsappNumero 
      : "56900000000";

    const url = `https://wa.me/${waNumero}?text=${encodeURIComponent(textoWhatsApp)}`;

    // Mostrar feedback claro de redirección
    showFeedback("¡Generando tu mensaje! Abriendo WhatsApp para enviar la consulta directamente a CUPAL...", "success");

    setTimeout(() => {
      window.open(url, "_blank");
    }, 700);
  });

  function showFeedback(msg, type = "info") {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.className = `reservation-feedback ${type}`;
    feedback.style.display = "block";
  }
}

// Configurar restricción de fecha mínima (hoy) en el selector
function initDateConstraints() {
  const dateInput = document.getElementById("res-fecha");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }
}

/* ==========================================================================
   7. ANIMACIONES DE SCROLL (REVEAL SUTIL)
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function initCardReveals() {
  const observerOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px -20px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".menu-card.reveal:not(.revealed), .gallery-item.reveal:not(.revealed)").forEach(el => {
    observer.observe(el);
  });
}