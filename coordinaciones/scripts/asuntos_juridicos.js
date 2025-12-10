const progInfo = [
  {
    id: "m0",
    titulo: "Procuraduría Municipal",
    objetivo:
      "Ofrecer asesoría jurídica gratuita a personas que enfrentan situaciones legales que afectan su estabilidad personal o familiar.",
    descripcion:
      "La Procuraduría Municipal en DIF Saltillo brinda orientación legal gratuita y acompañamiento jurídico en temas familiares, civiles y sociales. Este servicio está pensado para personas que requieren resolver situaciones legales, pero no cuentan con los recursos para contratar un abogado. Nuestro compromiso es garantizar el acceso a la justicia de forma humana, cercana y profesional.",
    imagen: "procuraduría_municipal.webp",
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
