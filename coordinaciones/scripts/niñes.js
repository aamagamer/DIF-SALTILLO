const progInfo = [
  {
    id: "m0",
    titulo: "Centros De Atención Infantil (Cai)",
    objetivo:
      "Brindar atención integral, cuidado y educación inicial a niñas y niños en etapa preescolar, priorizando el bienestar y desarrollo de hijos e hijas de madres, padres o tutores que trabajan o estudian en Saltillo.",
    descripcion:
      "El DIF Saltillo cuenta con cinco Centros de Atención Infantil (CAI) distribuidos estratégicamente en la ciudad, donde se atiende a niñas y niños de entre 1 y 5 años. Estos centros ofrecen servicios de cuidado diario, alimentación balanceada, estimulación temprana, actividades pedagógicas y atención emocional, en un entorno seguro y afectivo. Los CAI están pensados para apoyar a familias, promoviendo un desarrollo integral en la primera infancia bajo un modelo de atención cálido y profesional.",
    imagen: "centros_de_atención_infantil.webp",
  },

  {
    id: "m1",
    titulo: "Programa Alimentario Para Niñas Y Niños De 1 A 5 Años",
    objetivo:
      "Garantizar el acceso a una alimentación nutritiva y adecuada para niñas y niños de 1 a 5 años en situación de vulnerabilidad en Saltillo.",
    descripcion:
      "Este programa alimentario del DIF Saltillo busca combatir la desnutrición infantil y mejorar la calidad de vida de las niñas y los niños en la primera infancia. A través de la entrega de dotaciones alimenticias diseñadas por personal capacitado en nutrición, se apoya directamente a familias que requieren apoyo para cubrir las necesidades básicas de sus hijas e hijos. El programa también promueve hábitos de alimentación saludable y brinda seguimiento nutricional para asegurar un crecimiento adecuado en los primeros años de vida.",
    imagen: "programa_alimentario.webp",
  },

  {
    id: "m2",
    titulo: "Juego Y Aprendo Con Amor",
    objetivo:
      "Fortalecer el desarrollo emocional, social y cognitivo de niñas y niños a través del juego guiado y actividades afectivas.",
    descripcion:
      "Juego y Aprendo Con Amor es un programa del DIF Saltillo que reconoce al juego como una herramienta esencial en el desarrollo de niñas y niños. A través de dinámicas lúdicas, actividades sensoriales y ejercicios de estimulación, se refuerzan habilidades como la comunicación, la motricidad, la empatía y la autoestima. Este programa está dirigido principalmente a madres, padres y cuidadores, quienes también reciben orientación sobre cómo promover el juego significativo en casa. Todo bajo un enfoque de crianza con amor, respeto y participación.",
    imagen: "juego_y_aprendo_con_amor.webp",
  },

  {
    id: "m3",
    titulo: "Crianza Con Amor",
    objetivo:
      "Ofrecer espacios de formación emocional, familiar y social para niñas, niños, adolescentes y sus familias a través de pláticas, talleres y actividades participativas.",
    descripcion:
      "Cultivando Con Amor es una estrategia educativa del DIF Saltillo que promueve la reflexión y el crecimiento personal en infancias y juventudes. Mediante pláticas, talleres, dinámicas grupales y actividades vivenciales: ○  Pláticas y Talleres de Sensibilización ○  Amor Responsable ○  Unidos Somos Útiles ○  Crianza Con Amor ○  Niños Seguros, No en la Calle ○ Este programa también trabaja con madres, padres y docentes para fortalecer entornos afectivos, seguros y participativos.",
    imagen: "crianza_con_amor.webp",
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
