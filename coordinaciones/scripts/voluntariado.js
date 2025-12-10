const progInfo = [
  {
    id: "m0",
    titulo: "Corazones Voluntarios",
    objetivo:
      "Invitar a la comunidad a sumarse al voluntariado del DIF Saltillo, fomentando la participación ciudadana en acciones que transforman vidas.",
    descripcion:
      "Corazones Voluntarios es un espacio abierto para todas las personas que desean aportar un poco de su tiempo y energía para hacer la diferencia en la vida de quienes más lo necesitan. Ya sea colaborando en campañas, eventos o actividades diarias, cada voluntario es una pieza fundamental que impulsa el bienestar social en Saltillo. Si tienes el deseo de ayudar y quieres ser parte de algo que transforma, en DIF Saltillo encontrarás un lugar para crecer y contribuir con amor y compromiso. ¡Tu apoyo puede cambiar muchas historias!",
    imagen: "corazones_voluntarios.png",
  },

  {
    id: "m1",
    titulo: "Servicio Social Comunitario",
    objetivo:
      "Facilitar espacios para que estudiantes de preparatoria y universidad realicen su servicio social, promoviendo el aprendizaje práctico y la responsabilidad social.",
    descripcion:
      "El programa de Servicio Social Comunitario del DIF Saltillo ofrece a estudiantes la oportunidad de cumplir con su requisito académico mientras contribuyen activamente al bienestar de la comunidad. Participar aquí significa involucrarse en proyectos sociales que fortalecen habilidades y valores, además de crear redes de apoyo y solidaridad en Saltillo. Si eres estudiante y buscas una experiencia significativa que complemente tu formación, este programa es ideal para ti.",
    imagen: "servicio_social_comunitario.png",
  },

  {
    id: "m2",
    titulo: "Vinculación Empresarial",
    objetivo:
      "Establecer alianzas con empresas locales para sumar esfuerzos y recursos en beneficio de los programas sociales del DIF Saltillo.",
    descripcion:
      "La Coordinación de Vinculación Empresarial conecta a empresas comprometidas con la responsabilidad social con las iniciativas del DIF Saltillo. A través de colaboraciones estratégicas, se potencian recursos y se amplifica el impacto positivo en la comunidad, especialmente en sectores vulnerables. Buscamos a empresas que deseen ser parte de un movimiento que transforma vidas en Saltillo. ¡Aquí encontrarás la oportunidad perfecta para contribuir con tu apoyo y compromiso social!",
    imagen: "vinculación_empresarial.png",
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
