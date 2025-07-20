
const progInfo = [
    
{
    "id": "m0",
    "titulo": "Apoyos Económicos",
    "objetivo": "Brindar apoyos económicos a personas que requieren cubrir gastos médicos, medicamentos o servicios funerarios.",
    "descripcion": "Este programa está diseñado para apoyar a quienes enfrentan dificultades para costear servicios relacionados con la salud o emergencias familiares. Se otorgan apoyos económicos parciales para estudios de laboratorio, medicamentos, atención médica o gastos funerarios, de acuerdo con un estudio socioeconómico."
}
,

{
    "id": "m1",
    "titulo": "Apoyos En Especie",
    "objetivo": "Entregar insumos básicos a personas y familias en situación de vulnerabilidad a través de donaciones.",
    "descripcion": "A través de Apoyos en Especie, el DIF Saltillo entrega artículos esenciales como ropa, alimentos no perecederos, pañales (infantiles y de adulto), productos de higiene personal, leche, pan, juguetes y más. Estas donaciones representan un alivio inmediato para quienes atraviesan momentos difíciles."
}

];

// Crear modales dinámicamente
document.addEventListener('DOMContentLoaded', () => {
    progInfo.forEach(info => {
        // Clona el template
        const tpl = document.getElementById('progModalTemplate').content.cloneNode(true);
        
        // Personaliza el modal clonado con datos
        tpl.querySelector('.modal-toggle').id = info.id;
        
        // Agregar información detallada
        const infoDetalle = `
            <div class="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 class="font-bold mb-2">${info.titulo}</h4>
                <br>
                <p class="font-bold>Objetivo:</p>
                <p>${info.objetivo}</p>
                <br>
                <p class="font-bold>Descripción:</p>
                <p>${info.descripcion}</p>
            </div>
        `;
        
        tpl.querySelector('.info-detalle').innerHTML = infoDetalle;
        
        // Configurar botones de cierre
        tpl.querySelectorAll('.close-btn').forEach(btn => btn.setAttribute('for', info.id));
        
        // Agrega el modal al final del body
        document.body.appendChild(tpl);
    });
});

// Función para abrir modales
window.openModal = id => document.getElementById(id).checked = true;

// Mobile menu close function
function closeMobileMenu() {
    // Close the dropdown by removing focus
    document.activeElement.blur();
    // Also close any open submenu
    const submenu = document.querySelector('.coordinaciones-mobile-submenu');
    const chevron = document.querySelector('.coordinaciones-mobile-trigger i');
    if (submenu) {
        submenu.classList.add('hidden');
        chevron.classList.remove('rotate-90');
    }
}

function toggleSubmenu(menuId) {
            const submenu = document.getElementById(menuId + '-submenu');
            const chevron = document.getElementById(menuId + '-chevron');
            
            if (submenu.classList.contains('active')) {
                submenu.classList.remove('active');
                chevron.classList.remove('rotated');
            } else {
                submenu.classList.add('active');
                chevron.classList.add('rotated');
            }
        }

        function closeMobileMenu() {
            // Close the dropdown by removing focus
            document.activeElement.blur();
            
            // Also close any open submenus
            const submenus = document.querySelectorAll('.submenu');
            const chevrons = document.querySelectorAll('.chevron');
            
            submenus.forEach(submenu => submenu.classList.remove('active'));
            chevrons.forEach(chevron => chevron.classList.remove('rotated'));
        }

        // Close submenu when clicking on a submenu item
        document.querySelectorAll('.text-gray-700 hover:text-white hover:bg-[#e20d7b] rounded-lg font-medium transition-colors submenu-item').forEach(item => {
            item.addEventListener('click', closeMobileMenu);
        });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
