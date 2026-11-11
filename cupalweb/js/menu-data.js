/**
 * CARTA / MENÚ DIGITAL - CUPAL RESTAURANTE
 * ==================================================
 * CARTA REAL (extraída de la carta digital oficial del local)
 *
 * Para editar un producto:
 * - Modifica nombre, descripción, precio o categoría en la línea correspondiente.
 * - Para agregar una foto, pon el enlace/ruta en el campo 'imagen'.
 *   Si 'imagen' está vacío (""), el producto se muestra sin foto.
 *
 * Formato de cada producto, mediante la función p():
 *   p(id, categoria, nombre, descripcion, precio, imagen)
 */

/**
 * LOS MÁS VENDIDOS (lo que se muestra hoy en la web)
 * ===================================================
 * Cada producto: nombre, descripción y (opcional) imagen. Sin precio.
 * Para agregar la foto de un plato, pon la ruta en 'imagen',
 * las fotos están en assets/img/menu/
 */
const BEST_SELLERS = [
  {
    id: 1,
    nombre: "Ñoquis Caseros",
    descripcion: "Ñoquis caseros con un toque de nuez moscada y acompañados de salsa boloñesa o pesto (según disponibilidad). Incluye agregado a elección: arroz, papas fritas o ensalada.",
    imagen: "assets/img/menu/noquis-caseros.jpg"
  },
  {
    id: 2,
    nombre: "Cazuela",
    descripcion: "Cazuela de vacuno. Incluye agregado a elección: arroz, papas fritas o ensalada.",
    imagen: "assets/img/menu/cazuela.jpg"
  },
  {
    id: 3,
    nombre: "Carne al Jugo",
    descripcion: "Trozos tiernos de carne de res cocidos lentamente en un sabroso caldo de vino tinto con hierbas aromáticas. Incluye agregado a elección: arroz, papas fritas o ensalada.",
    imagen: "assets/img/menu/carne-al-jugo.jpg"
  },
  {
    id: 4,
    nombre: "Pizza Napolitana",
    descripcion: "Base de salsa casera de tomates, queso mozzarella, jamón cocido, tomates en rodajas, perejil picado y ajo fresco.",
    imagen: "assets/img/menu/pizza-napolitana.jpg"
  },
  {
    id: 5,
    nombre: "Pizza Pollo y Champiñón",
    descripcion: "Base de salsa casera de tomate, queso mozzarella, trozos de pollo salteado, láminas de champiñón, choclo y orégano.",
    imagen: "assets/img/menu/pizza-pollo-champinon.jpg"
  },
  {
    id: 6,
    nombre: "Gin Tonic Berries",
    descripcion: "Gin tonic con frambuesa y arándanos.",
    imagen: "assets/img/menu/gin-tonic-berries.jpg"
  },
  {
    id: 7,
    nombre: "Sándwich Clásico",
    descripcion: "Tomate, lechuga, palta, queso fundido y mayonesa. Escoge: Burger Casera, Churrasco u Hamburguesa de Garbanzo. Incluye papas fritas.",
    imagen: "assets/img/menu/sandwich-clasico.jpg"
  }
];

/* ---------------------------------------------------------------------------
   CARTA COMPLETA (YA NO SE MUESTRA EN LA WEB)
   Se deja aquí como respaldo por si más adelante se quiere volver a usar.
   --------------------------------------------------------------------------- */
const MENU_CATEGORIES = [
  { id: "todos", nombre: "Toda la Carta", icono: "fas fa-utensils" },
  { id: "platos", nombre: "Platos Principales", icono: "fas fa-concierge-bell" },
  { id: "infantil", nombre: "Menú Infantil", icono: "fas fa-child" },
  { id: "picoteos", nombre: "Picoteos", icono: "fas fa-cheese" },
  { id: "sandwiches", nombre: "Sándwich & Hamburguesas", icono: "fas fa-hamburger" },
  { id: "ensaladas", nombre: "Ensaladas", icono: "fas fa-leaf" },
  { id: "pizzas", nombre: "Pizzas Caseras", icono: "fas fa-pizza-slice" },
  { id: "cafeteria", nombre: "Cafés & Infusiones", icono: "fas fa-mug-hot" },
  { id: "jugos", nombre: "Jugos & Sin Alcohol", icono: "fas fa-glass-whiskey" },
  { id: "cervezas", nombre: "Cervezas", icono: "fas fa-beer" },
  { id: "vinos", nombre: "Vinos", icono: "fas fa-wine-glass-alt" },
  { id: "tragos", nombre: "Tragos", icono: "fas fa-cocktail" }
];

// Genera un producto con la misma estructura de siempre.
function p(id, categoria, nombre, descripcion, precio, imagen = "") {
  return {
    id,
    categoria,
    nombre,
    descripcion,
    precio,
    precioFormateado: "$" + precio.toLocaleString("es-CL"),
    imagen,
    etiquetas: [],
    alergenos: "",
    provisional: false
  };
}

const AGREGADO = " Incluye agregado a elección: arroz, papas fritas o ensalada.";

const MENU_ITEMS = [
  // --- PLATOS PRINCIPALES (plato de fondo + agregado) ---
  p(1, "platos", "Ñoquis Caseros", "Ñoquis caseros con un toque de nuez moscada y acompañados de salsa boloñesa o pesto (según disponibilidad)." + AGREGADO, 11500),
  p(2, "platos", "Cazuela Vacuno", "De vacuno." + AGREGADO, 11500),
  p(3, "platos", "Pollo Asado", AGREGADO.trim(), 12500),
  p(4, "platos", "Costillar de Cerdo Asado al Horno", "Jugoso y dorado costillar de cerdo al horno condimentado con especias tradicionales." + AGREGADO, 12500),
  p(5, "platos", "Carne al Jugo", "Trozos tiernos de carne de res cocidos lentamente en un sabroso caldo de vino tinto con hierbas aromáticas." + AGREGADO, 12500),
  p(6, "platos", "Milanesa Pollo", AGREGADO.trim(), 12500),
  p(7, "platos", "Milanesa Vacuno", AGREGADO.trim(), 13500),
  p(8, "platos", "Bistec al Plato", "250 grs." + AGREGADO, 12500),
  p(9, "platos", "Salmón a la Plancha", "Filete de salmón 250 gr." + AGREGADO, 15000),
  p(10, "platos", "Milanesa Cupal", "Jamón cocido, queso fundido y salsa Florencia (de autor: yogurt natural, ciboulette y zumo de limón)." + AGREGADO, 16500),
  p(11, "platos", "Milanesa Napolitana", "Vacuno o pollo. Salsa de tomate casera, tiras de jamón cocido, queso fundido y orégano." + AGREGADO, 17000),
  p(12, "platos", "Bistec a lo Pobre", "Base de cebolla caramelizada y dos huevos fritos." + AGREGADO, 17500),

  // --- MENÚ INFANTIL ---
  p(13, "infantil", "Vienesas al Plato", "3 unidades de vienesas.", 7500),
  p(14, "infantil", "Nuggets de Pollo", "8 unidades de nuggets.", 8500),

  // --- PICOTEOS ---
  p(15, "picoteos", "Empanada Frita de Queso", "1 unidad.", 1800),
  p(16, "picoteos", "Empanada Frita de Carne", "1 unidad cóctel.", 2200),
  p(17, "picoteos", "Papas Fritas (1p/p)", "", 3500),
  p(18, "picoteos", "Papas Fritas (2p/p)", "", 5900),
  p(19, "picoteos", "Salchipapas (2p/p)", "Papas fritas y trozos de vienesas salteadas.", 7500),
  p(20, "picoteos", "Papas Cupal (2p/p)", "Papas fritas, queso fundido y salsa Florencia (de autor: yogurt natural, ciboulette y zumo de limón).", 9000),
  p(21, "picoteos", "Papas Fritas Grandes (4p/p)", "", 11500),
  p(22, "picoteos", "Papas Súper Cupal (4p/p)", "", 13500),
  p(23, "picoteos", "Chorrillana para 2-3 personas", "Papas fritas rústicas, carne mechada, pollo, vienesas, cebolla caramelizada y huevos fritos.", 19500),

  // --- SÁNDWICH - HAMBURGUESAS ---
  // Se escoge entre Burger Casera, Churrasco o Hamburguesa de Garbanzo. Incluyen papas fritas.
  p(24, "sandwiches", "Barros Luco", "Queso fundido y mayonesa. Escoge: Burger Casera, Churrasco u Hamburguesa de Garbanzo. Incluye papas fritas.", 9500),
  p(25, "sandwiches", "Chacarero", "Tomate, porotos verdes, ají verde y mayonesa. Escoge: Burger Casera, Churrasco u Hamburguesa de Garbanzo. Incluye papas fritas.", 10500),
  p(26, "sandwiches", "Tradicional Italiano", "Tomate, palta y mayonesa. Escoge: Burger Casera, Churrasco u Hamburguesa de Garbanzo. Incluye papas fritas.", 10500),
  p(27, "sandwiches", "Clásico", "Tomate, lechuga, palta, queso fundido y mayonesa. Escoge: Burger Casera, Churrasco u Hamburguesa de Garbanzo. Incluye papas fritas.", 12500),

  // --- ENSALADAS ---
  p(28, "ensaladas", "Ensalada a la Chilena", "Tomate en rodajas, cebolla cortada en pluma y cilantro picado.", 6500),
  p(29, "ensaladas", "Ensalada Botánica", "Zanahoria rallada, cebolla, porotos verdes, tomates en cubitos y ají verde.", 7500),
  p(30, "ensaladas", "Ensalada Clásica", "Tomate, palta, lechuga, choclo y cebolla.", 9000),

  // --- PIZZAS CASERAS ---
  p(31, "pizzas", "Pizza Fugazzetta", "Queso mozzarella, cebollas salteadas, aceite de oliva y orégano.", 11000),
  p(32, "pizzas", "Pizza Mozzarella", "Base de salsa casera de tomates, queso mozzarella, aceite de oliva y orégano.", 11000),
  p(33, "pizzas", "Pizza Jamón", "Base de salsa casera de tomates, queso mozzarella, jamón cocido y orégano.", 14500),
  p(34, "pizzas", "Pizza Pepperoni", "Base de salsa casera de tomate, queso mozzarella, pepperoni y orégano.", 14500),
  p(35, "pizzas", "Pizza Champiñón", "Base de salsa de tomate casera, queso mozzarella, champiñón en láminas y orégano.", 15000),
  p(36, "pizzas", "Pizza Napolitana", "Base de salsa casera de tomates, queso mozzarella, jamón cocido, tomates en rodajas, perejil picado y ajo fresco.", 16000),
  p(37, "pizzas", "Pizza Pollo y Champiñón", "Base de salsa casera de tomate, queso mozzarella, trozos de pollo salteado, láminas de champiñón, choclo y orégano.", 16500),
  p(38, "pizzas", "Pizza Mechada", "Base de salsa casera de tomate, queso mozzarella, carne mechada, cebolla caramelizada, choclo y orégano.", 17000),
  p(39, "pizzas", "Pizza Camarón", "Base de salsa casera de tomate, queso mozzarella, camarones ecuatorianos salteados en zumo de limón con ajo y pesto de albahaca.", 17500),

  // --- CAFETERÍA & INFUSIONES ---
  p(40, "cafeteria", "Espresso", "", 2200),
  p(41, "cafeteria", "Americano Tradicional", "", 2500),
  p(42, "cafeteria", "Capuccino Tradicional", "", 3000),
  p(43, "cafeteria", "Espresso Doppio", "", 3200),
  p(44, "cafeteria", "Capuccino Doppio", "Doble espresso con espuma de leche.", 3500),
  p(45, "cafeteria", "Chocolate Caliente", "", 3500),
  p(46, "cafeteria", "Latte Armonioso", "", 3500),
  p(47, "cafeteria", "Latte Doble", "", 4500),
  p(48, "cafeteria", "Té Orjas", "Esencias: clásico, limón o canela.", 1500),
  p(49, "cafeteria", "Té Especiales", "Mundo de infusiones de distintos sabores.", 2000),
  p(50, "cafeteria", "Mate (se lleva el mate y la bombilla)", "Combo mate + bombilla + yerba + tetera con agua caliente.", 6000),

  // --- JUGOS & SIN ALCOHOL ---
  p(51, "jugos", "Jugo de Melón", "", 3500),
  p(52, "jugos", "Jugo de Piña", "", 3500),
  p(53, "jugos", "Limonada", "", 3500),
  p(54, "jugos", "Limonada Menta", "", 3500),
  p(55, "jugos", "Limonada Menta Jengibre", "", 4200),
  p(56, "jugos", "Jugo de Arándanos", "", 3500),
  p(57, "jugos", "Jugo de Frutilla", "", 3500),
  p(58, "jugos", "Agua Mineral", "Con o sin gas.", 2000),
  p(59, "jugos", "Néctar Watt's", "300 ml.", 2500),
  p(60, "jugos", "Bebida Individual", "350 ml. Coca-Cola, Coca-Cola Zero, Fanta, Sprite o Kem Piña.", 2500),
  p(61, "jugos", "Cerveza Heineken Sin Alcohol", "", 3000),
  p(62, "jugos", "Tepache Bebida Saludable", "Probiótico endulzado con miel de bosque y azúcar de caña, con aroma profundo de canela y clavo.", 3500),
  p(63, "jugos", "Ginger Chai", "Bebida natural de jengibre y limón.", 3500),
  p(64, "jugos", "Mojito Tradicional (sin alcohol)", "", 4800),

  // --- CERVEZAS ---
  p(65, "cervezas", "Schop Cerveza Artesanal", "500 ml.", 5500),
  p(66, "cervezas", "Schop Chico Cerveza Artesanal", "300 ml.", 4500),
  p(67, "cervezas", "Corona", "330 cc.", 3000),
  p(68, "cervezas", "My Own Summer - Cerveza Artesanal La Sepultura", "Botella 500 ml.", 6000),
  p(69, "cervezas", "Blonde (Rubia) - Cerveza Artesanal La Sepultura", "Botella 500 ml.", 6000),
  p(70, "cervezas", "NEIPA - Cerveza Artesanal Puesco", "Botella 500 cc.", 6000),
  p(71, "cervezas", "Porter - Cerveza Artesanal Puesco", "Botella 500 cc.", 6000),
  p(72, "cervezas", "Vaso Michelado / Chelado", "Con zumo de limón.", 1500),

  // --- VINOS ---
  p(73, "vinos", "Vino Blanco Tres Medallas 120 (187,5 ml)", "Sauvignon Blanc.", 3800),
  p(74, "vinos", "Misiones de Rengo (187,5 ml)", "Cabernet Sauvignon.", 3800),
  p(75, "vinos", "Misiones de Rengo (750 ml)", "Cabernet Sauvignon, Merlot, Carmenere o Sauvignon Blanc.", 9500),
  p(76, "vinos", "Casillero del Diablo Reserva (750 ml)", "Carmenere o Merlot.", 12500),
  p(77, "vinos", "Toro de Piedra Gran Reserva", "Cabernet Sauvignon o Carmenere.", 15000),
  p(78, "vinos", "Casa Silva Gran Reserva", "", 20000),

  // --- TRAGOS ---
  p(79, "tragos", "Pisco Sour", "", 5000),
  p(80, "tragos", "Pisco Sour Peruano", "Tabernero 40°.", 5500),
  p(81, "tragos", "Gin Sour", "Gin Elixir.", 4500),
  p(82, "tragos", "Piña Cupal", "Espumosa piña colada con canela espolvoreada.", 4500),
  p(83, "tragos", "Piscolaso", "Pisco Alto del Carmen o Mistral (35°).", 4500),
  p(84, "tragos", "Fernet", "", 4500),
  p(85, "tragos", "Fernetazo", "Vaso 560 ml.", 5500),
  p(86, "tragos", "Aperol Spritz", "", 5500),
  p(87, "tragos", "Ramazzotti Rosato / Violetto", "", 5500),
  p(88, "tragos", "Gin Tonic", "Pepino o naranja (según stock).", 5500),
  p(89, "tragos", "Mojito Tradicional", "Ron blanco, menta, limón y azúcar flor.", 6000),
  p(90, "tragos", "Gin Tonic Berries", "Con frambuesa y arándanos.", 6500),
  p(91, "tragos", "Whisky Johnnie Walker Etiqueta Roja", "", 5800),
  p(92, "tragos", "Whisky Jack Daniel's Old No.7", "", 6200)
];

// Datos de la Galería Fotográfica (sin cambios respecto al prototipo)
const GALLERY_ITEMS = [
  {
    id: 1,
    categoria: "bebidas",
    titulo: "Cerveza Artesanal y Amistad",
    descripcion: "Cerveza bien helada para compartir, reflejada en el corazón del logo de CUPAL.",
    imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    categoria: "comida",
    titulo: "Sándwiches y Preparaciones Caseras",
    descripcion: "Platos contundentes preparados al momento con ingredientes frescos.",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    categoria: "cafeteria",
    titulo: "Café y Arte Latte",
    descripcion: "Aroma y calidez para acompañar las mañanas y tardes en Curarrehue.",
    imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    categoria: "ambiente",
    titulo: "Ambiente Cálido y Acogedor",
    descripcion: "Madera noble, iluminación cálida y un espacio pensado para sentirse como en casa.",
    imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    categoria: "comida",
    titulo: "Tablas para Compartir",
    descripcion: "Variedad de sabores ideales para acompañar con un trago o una buena conversación.",
    imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    categoria: "comida",
    titulo: "Repostería y Dulces Tradicionales",
    descripcion: "Kuchenes y pasteles con el toque dulce casero característico de la zona sur.",
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    categoria: "bebidas",
    titulo: "Coctelería y Refrescantes",
    descripcion: "Opciones para brindar y disfrutar al finalizar la jornada cordillerana.",
    imagen: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    categoria: "ambiente",
    titulo: "Rincón Gastronómico en Curarrehue",
    descripcion: "Un punto de encuentro que reúne lo mejor del descanso, la buena mesa y la naturaleza.",
    imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
  }
];

if (typeof window !== "undefined") {
  window.BEST_SELLERS = BEST_SELLERS;
  window.MENU_CATEGORIES = MENU_CATEGORIES;
  window.MENU_ITEMS = MENU_ITEMS;
  window.GALLERY_ITEMS = GALLERY_ITEMS;
}