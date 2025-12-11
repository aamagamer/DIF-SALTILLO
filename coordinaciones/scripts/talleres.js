const progInfo = [
  {
    id: "m0",
    titulo: "Amor Por Aprender",
    objetivo:
      "Ofrecer talleres prácticos y accesibles que permitan a personas adultas adquirir o fortalecer habilidades en distintos oficios, con el fin de mejorar sus oportunidades de empleo o emprendimiento.",
    descripcion:
      'El programa Amor por Aprender es una iniciativa del DIF Saltillo que brinda talleres para todas las personas que deseen aprender, desarrollarse o iniciar un proyecto laboral propio. Se imparten cursos como corte y confección, cocina, repostería, belleza, cartonería y más. Los talleres están pensados para impulsar la autonomía para personas en situación de vulnerabilidad, brindándoles herramientas reales para generar ingresos, crecer profesionalmente y transformar su realidad.<br><ul class="in-ul"><li class="in-li text-gray-600">Belleza – $385.00</li><li class="in-li text-gray-600">Colorimetría – $640.00</li><li class="in-li text-gray-600">Maquillaje – $385.00</li><li class="in-li text-gray-600">Uñas – $640.00</li><li class="in-li text-gray-600">Barbería – $385.00</li><li class="in-li text-gray-600">Carpintería – $395.00</li><li class="in-li text-gray-600">Chocolatería – $385.00</li><li class="in-li text-gray-600">Pastelería – $640.00</li><li class="in-li text-gray-600">Dulces regionales – $385.00</li><li class="in-li text-gray-600">Postres – $385.00</li><li class="in-li text-gray-600">Guitarra – $125.00</li><li class="in-li text-gray-600">Cartonería – $125.00</li><li class="in-li text-gray-600">Electricidad – $260.00</li><li class="in-li text-gray-600">Soldadura – $260.00</li><li class="in-li text-gray-600">Computación – $260.00</li><li class="in-li text-gray-600">Pintura – $385.0</li><li class="in-li text-gray-600">Pincelada – $125.00</li><li class="in-li text-gray-600">Vitromosaico – $640.00</li><li class="in-li text-gray-600">Corte y confección – $385.00</li><li class="in-li text-gray-600">Mecánica – $385.00</li><li class="in-li text-gray-600">Bisutería – $385.00</li><li class="in-li text-gray-600">Reciclado – $260.00</li><li class="in-li text-gray-600">Huertos familiares – $260.00</li></ul>',
    imagen: "amor_por_aprender.webp",
  },

  {
    id: "m1",
    titulo: "Estética Dif",
    objetivo:
      "Ofrecer cortes de cabello a bajo costo para las familias saltillenses y dignificar la imagen personal de quienes más lo necesitan.",
    descripcion:
      "La Estética DIF es un programa social que brinda cortes de cabello gratuitos en las instalaciones del DIF Saltillo, así como en diferentes colonias de la ciudad mediante las Jornadas DIF en tu colonia. Este servicio es atendido por personas capacitadas en nuestros talleres y forma parte de una red de apoyo pensada para ayudar, cuidar y acompañar.",
    imagen: "estética_dif.webp",
  },
];

// Crear modales dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  progInfo.forEach((info) => {
    // Clona el template
    const tpl = document
      .getElementById("progModalTemplate")
      .content.cloneNode(true);

    // Personaliza el modal clonado con datos
    tpl.querySelector(".modal-toggle").id = info.id;

    // Agregar información detallada
    const infoDetalle = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left side (text) -->
            <div class="bg-gray-100 p-4 rounded-lg">
                <h3 class="font-bold mb-2 text-xl">${info.titulo}</h3>
                <p class="mb-3">${info.objetivo}</p>
                <p class="font-bold">Descripción:</p>
                <p>${info.descripcion}</p>
            </div>

            <!-- Right side (image placeholder) -->
            <div class="flex items-center justify-center">
                <img src="../Media/COORDINACIONES/programas/sin_color/${info.imagen}" alt="${info.titulo}" class="rounded-lg max-h-90 object-cover">
            </div>
        </div>`;

    tpl.querySelector(".info-detalle").innerHTML = infoDetalle;

    // Configurar botones de cierre
    tpl
      .querySelectorAll(".close-btn")
      .forEach((btn) => btn.setAttribute("for", info.id));

    // Agrega el modal al final del body
    document.body.appendChild(tpl);
  });
});

// Función para abrir modales
window.openModal = (id) => (document.getElementById(id).checked = true);

// Mobile menu close function
function closeMobileMenu() {
  // Close the dropdown by removing focus
  document.activeElement.blur();
  // Also close any open submenu
  const submenu = document.querySelector(".coordinaciones-mobile-submenu");
  const chevron = document.querySelector(".coordinaciones-mobile-trigger i");
  if (submenu) {
    submenu.classList.add("hidden");
    chevron.classList.remove("rotate-90");
  }
}

function toggleSubmenu(menuId) {
  const submenu = document.getElementById(menuId + "-submenu");
  const chevron = document.getElementById(menuId + "-chevron");

  if (submenu.classList.contains("active")) {
    submenu.classList.remove("active");
    chevron.classList.remove("rotated");
  } else {
    submenu.classList.add("active");
    chevron.classList.add("rotated");
  }
}

function closeMobileMenu() {
  // Close the dropdown by removing focus
  document.activeElement.blur();

  // Also close any open submenus
  const submenus = document.querySelectorAll(".submenu");
  const chevrons = document.querySelectorAll(".chevron");

  submenus.forEach((submenu) => submenu.classList.remove("active"));
  chevrons.forEach((chevron) => chevron.classList.remove("rotated"));
}

// Close submenu when clicking on a submenu item
document
  .querySelectorAll(
    ".text-gray-700 hover:text-white hover:bg-[#e20d7b] rounded-lg font-medium transition-colors submenu-item",
  )
  .forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
