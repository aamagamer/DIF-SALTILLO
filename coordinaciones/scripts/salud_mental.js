const progInfo = [
  {
    id: "m0",
    titulo: "Atención Psicológica",
    objetivo:
      "Brindar atención psicológica gratuita a personas de todas las edades que necesiten acompañamiento emocional, contención o canalización especializada.",
    descripcion:
      "En DIF Saltillo creemos que la salud mental es tan importante como la salud física. Por eso ofrecemos atención psicológica gratuita con profesionales capacitados, en espacios seguros, empáticos y confidenciales. Este servicio está abierto a niñas, niños, adolescentes, personas adultas y adultas mayores que estén atravesando situaciones emocionales complejas, crisis familiares, ansiedad, tristeza, duelo o cualquier otro reto emocional.",
    imagen: "atención_psicológica.png",
  },

  {
    id: "m1",
    titulo: "Justicia Cívica",
    objetivo:
      "Promover la reinserción social, el desarrollo personal y la responsabilidad comunitaria de jóvenes que han cometido una falta administrativa o delito menor.",
    descripcion:
      "Justicia Cívica es un programa del DIF Saltillo enfocado en brindar atención psicosocial a adolescentes y jóvenes. A través de trabajo social, acompañamiento psicológico y actividades formativas, se busca que los jóvenes reconozcan sus acciones, fortalezcan su autoestima y construyan un nuevo proyecto de vida. Este programa se enfoca en el aprendizaje y crecimiento porque creemos que toda persona merece una segunda oportunidad, y que el cambio es posible con apoyo, orientación y escucha.",
    imagen: "justicia_cívica.png",
  },

  {
    id: "m2",
    titulo: "Cerca De Ti",
    objetivo:
      "Acercar los servicios de salud mental del DIF Saltillo a las colonias y comunidades, para que más personas puedan recibir atención sin importar dónde vivan.",
    descripcion:
      "Cerca de Ti es un programa de brigadas itinerantes que lleva servicios de salud mental y bienestar emocional directamente a la comunidad. En estas jornadas se ofrece atención psicológica, orientación, canalización y actividades de autocuidado para personas de todas las edades. Con este programa, DIF Saltillo busca romper barreras de acceso y estigmas en torno a la salud mental, construyendo una ciudad más empática, solidaria y consciente.",
    imagen: "cerca_de_ti.png",
  },

  {
    id: "m3",
    titulo: "Espacio Seguro",
    objetivo:
      "Brindar un entorno protegido y confidencial donde las personas puedan expresarse, ser escuchadas y recibir apoyo emocional.",
    descripcion:
      "Espacio Seguro es una iniciativa de la Coordinación de Salud Mental del DIF Saltillo que busca crear lugares de contención emocional y escucha activa, especialmente para personas que viven momentos de vulnerabilidad, ansiedad o estrés. Está abierto a todas las personas, con un enfoque especial en adolescentes y jóvenes. Aquí se privilegia la empatía, la dignidad y la protección emocional. Porque sentirse en paz, acompañado y respetado... es una forma de sanar.",
    imagen: "espacio_seguro.png",
  },

  {
    id: "m4",
    titulo: "Talleres Y Pláticas De Bienestar Emocional",
    objetivo:
      "Promover la prevención en salud mental y fortalecer el bienestar emocional a través de herramientas prácticas, dinámicas y accesibles para toda la población.",
    descripcion:
      "En DIF Saltillo creemos que prevenir es cuidar, y por eso organizamos talleres y pláticas de bienestar emocional en escuelas, centros comunitarios, espacios públicos y colonias de la ciudad. Estos espacios están pensados para ofrecer información, ejercicios y estrategias para gestionar emociones, manejar el estrés, fomentar la autoestima y fortalecer los vínculos familiares. Todo desde un enfoque accesible, cálido y adaptado a cada grupo de edad.",
    imagen: "talleres_y_pláticas_de_bienestar_emocional.png",
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
                <img src="Programas_Media/sin_color/${info.imagen}" alt="${info.titulo}" class="rounded-lg max-h-90 object-cover">
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
