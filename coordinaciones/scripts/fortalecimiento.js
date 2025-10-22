
const progInfo = [
    
{
    "id": "m0",
    "titulo": "Apoyos De Corazón",
    "objetivo": "Brindar apoyos económicos a personas en situación de vulnerabilidad para atender necesidades que afectan su bienestar.",
    "descripcion": "Apoyos de Corazón es un programa del DIF Saltillo que tiene como prioridad atender a quienes más lo necesitan. A través de apoyos económicos directos que representan un acto de solidaridad y empatía, fortaleciendo la red de protección social en nuestra comunidad.",
    "imagen": "apoyos_de_corazón.png"
}
,

{
    "id": "m1",
    "titulo": "Alimentos De Corazón",
    "objetivo": "Contribuir a la seguridad alimentaria de familias en situación de vulnerabilidad mediante la entrega de insumos alimenticios.",
    "descripcion": "A través de Alimentos de Corazón, el DIF Saltillo entrega paquetes alimentarios a familias que atraviesan momentos complicados. Esta iniciativa busca asegurar que nadie en nuestra ciudad se quede sin lo más básico: una alimentación digna y suficiente. Además de cubrir una necesidad urgente, este programa fortalece el tejido comunitario y promueve el acceso equitativo a una vida más saludable.",
    "imagen": "alimentos_de_corazón.png"
}
,

{
    "id": "m2",
    "titulo": "Jornadas Dif",
    "objetivo": "Acercar los servicios del DIF Saltillo a las colonias y comunidades que más lo necesitan mediante brigadas comunitarias.",
    "descripcion": "Las Jornadas DIF son brigadas integrales que llevan servicios gratuitos directamente a colonias y sectores con alta vulnerabilidad. A través de estas jornadas, las personas pueden acceder a atención médica, psicológica, asesoría legal, cortes de cabello, entrega de apoyos y más, sin salir de su comunidad. El objetivo es eliminar barreras de acceso, estar cerca y al servicio de todas las familias.",
    "imagen": "jornadas_dif.png"
}
,

{
    "id": "m3",
    "titulo": "Mercadito Dif",
    "objetivo": "Fomentar la cultura del reciclaje y el intercambio responsable, a través de la entrega de productos de limpieza a cambio de materiales reciclables.",
    "descripcion": "El Mercadito DIF es una iniciativa que une dos causas fundamentales: el cuidado del medio ambiente y el apoyo al hogar. Las personas pueden llevar materiales reciclables como botellas de plástico, papel o cartón, y recibir a cambio productos de limpieza para su casa. Este programa impulsa la economía circular, busca promover la conciencia ecológica y genera bienestar directo a las familias que participan.",
    "imagen": "marcadito_dif.png"
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
