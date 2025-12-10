const progInfo = [
  {
    id: "m0",
    titulo: "Farmacias Dif Saltillo",
    objetivo:
      "Ofrecer medicamentos de calidad a bajo costo en diferentes puntos de la ciudad, con atención cercana y humana.",
    descripcion:
      "Las Farmacias DIF Saltillo están ubicadas estratégicamente en distintos sectores de la ciudad para brindar acceso a medicamentos a precios bajos para todas las familias. Estas farmacias forman parte del compromiso del DIF Saltillo con el bienestar y la salud de la población, especialmente para quienes más lo necesitan. Además de ofrecer medicamentos genéricos y de patente, las farmacias cuentan con personal capacitado para brindar orientación y un trato digno a cada persona.",
    imagen: "farmacias_dif_saltillo.webp",
  },

  {
    id: "m1",
    titulo: "Te Cuidamos Con Amor",
    objetivo:
      "Ofrecer servicios de salud visual y dental de calidad, a bajo costo y con enfoque preventivo, para mejorar la calidad de vida de niñas, niños, adolescentes, personas adultas y adultas mayores.",
    descripcion:
      "Te Cuidamos Con Amor es un programa integral del DIF Saltillo que brinda atención óptica y dental accesible. A través de nuestras clínicas, las personas pueden acceder a estudios de la vista, lentes a bajo costo, limpiezas dentales, extracciones, resinas, entre otros servicios, con enfoque preventivo y humano. Este programa busca que más personas puedan cuidar su salud sin barreras económicas.",
    imagen: "te_cuidamos_con_amor.webp",
  },

  {
    id: "m2",
    titulo: "Con Amor A Las Sonrisas Sanas",
    objetivo:
      "Fomentar la prevención y el cuidado de la salud bucal en niñas y niños de Saltillo desde las primeras etapas de su vida.",
    descripcion:
      "El programa Con Amor a las Sonrisas Sanas está enfocado en la atención dental infantil. A través de brigadas y visitas a centros educativos, se realizan revisiones, limpiezas, talleres de higiene bucal y actividades para promover el cuidado dental desde la infancia. Esta iniciativa del DIF Saltillo busca generar hábitos de prevención, reducir la incidencia de enfermedades bucales en niñas y niños, y sembrar la importancia del autocuidado en la salud.",
    imagen: "con_amor_a_las_sonrisas_sanas.webp",
  },

  {
    id: "m3",
    titulo: "Visión Con Amor: Cirugía De Cataratas",
    objetivo:
      "Identificar, valorar, canalizar y realizar operaciones a personas adultas mayores candidatas a cirugía de cataratas, con el objetivo de recuperar su visión y calidad de vida.",
    descripcion:
      "Visión Con Amor es un programa del DIF Saltillo que brinda acceso gratuito a cirugías de cataratas para adultos mayores. A través de un proceso de valoración médica, se identifican candidatos aptos y se les brinda seguimiento hasta su operación y recuperación. Recuperar la vista es recuperar independencia, dignidad y esperanza. Por eso, este programa es una forma de ver la vida con nuevos ojos y con amor.",
    imagen: "vision_con_amor.webp",
  },

  {
    id: "m4",
    titulo: "Operación De Labio Y Paladar Hendido",
    objetivo:
      "Ofrecer cirugías correctivas gratuitas a niñas, niños y adolescentes con labio y/o paladar hendido, para mejorar su salud, su desarrollo y su inclusión social.",
    descripcion:
      "A través de alianzas con especialistas y hospitales, el DIF Saltillo impulsa este programa que brinda atención médica integral, cirugías y acompañamiento a familias con niñas y niños que presentan labio y/o paladar hendido. Además del procedimiento quirúrgico, se acompaña a cada caso con seguimiento emocional, terapias del lenguaje y orientación médica, en un proceso lleno de empatía y compromiso.",
    imagen: "labio_paladar_hendido.webp",
  },

  {
    id: "m5",
    titulo: "Unidad Básica De Rehabilitación (Ubr)",
    objetivo:
      "Brindar atención terapéutica y rehabilitación física a personas con alguna discapacidad o lesión temporal, promoviendo su recuperación e inclusión.",
    descripcion:
      "La Unidad Básica de Rehabilitación (UBR) es parte fundamental del sistema DIF Saltillo. En ella se ofrecen servicios de fisioterapia, estimulación temprana, mecanoterapia, electroterapia, terapia ocupacional y más. Está dirigida a personas con discapacidad o en procesos de recuperación física, incluyendo infancias, adultos y adultos mayores. La atención es profesional, accesible y siempre enfocada en mejorar la autonomía y calidad de vida de cada paciente.",
    imagen: "unidad_basica_de_rehabilitacion.webp",
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
                    <img src="../media/COORDINACIONES/programas/sin_color/${info.imagen}" alt="${info.titulo}" class="rounded-lg max-h-90 object-cover">
                </div>
            </div>
        `;

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
