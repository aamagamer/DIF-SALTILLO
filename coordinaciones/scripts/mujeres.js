
const progInfo = [
    
{
    "id": "m0",
    "titulo": "Lactarios Con Amor",
    "objetivo": "Promover, proteger y apoyar la lactancia materna como un derecho de las mujeres y sus bebés, ofreciendo espacios seguros y dignos en Saltillo.",
    "descripcion": "Lactarios Con Amor es una iniciativa del DIF Saltillo que impulsa la instalación de espacios de lactancia materna en lugares públicos y centros de trabajo. Estos espacios están diseñados para que las mujeres puedan amamantar o extraer leche en condiciones de higiene, comodidad y privacidad."
}
,

{
    "id": "m1",
    "titulo": "Mujer Escucha",
    "objetivo": "Brindar atención emocional, orientación y acompañamiento a mujeres en situación de vulnerabilidad o que enfrentan problemáticas personales, familiares o sociales.",
    "descripcion": "Mujer Escucha es un programa de atención psicológica y emocional que ofrece el DIF Saltillo como parte de su compromiso con la salud mental de las mujeres. A través de espacios de escucha activa, contención emocional y asesoría, se apoya a mujeres que viven violencia, duelo, ansiedad, crisis familiares u otras situaciones difíciles. El programa también canaliza a otras instituciones o programas cuando se requiere atención especializada. Es un espacio de confianza, empatía y respeto para las mujeres de Saltillo."
}
,

{
    "id": "m2",
    "titulo": "Campaña De Recolección De Trenzas",
    "objetivo": "Reunir donaciones de trenzas para la elaboración de pelucas oncológicas que beneficien a mujeres y niñas en tratamiento contra el cáncer.",
    "descripcion": "A través de la Campaña de Recolección de Trenzas, el DIF Saltillo convoca a la comunidad a donar su cabello para la elaboración de pelucas, para ayudar a mujeres y niñas que enfrentan la pérdida capilar derivada de tratamientos oncológicos. Esta campaña fomenta la solidaridad, el cuidado colectivo y la empatía, transformando un gesto sencillo en un acto de amor."
}
,

{
    "id": "m3",
    "titulo": "Entrega De Kits Para Pacientes Oncológicas",
    "objetivo": "Ofrecer apoyo emocional y práctico a mujeres diagnosticadas con cáncer, mediante la entrega de kits personalizados que acompañan su tratamiento.",
    "descripcion": "El DIF Saltillo entrega kits especiales a mujeres con diagnóstico oncológico como una forma de acompañar su proceso de tratamiento con empatía y cuidado. Cada kit contiene artículos de higiene, productos de cuidado personal y materiales pensados para brindar confort durante su recuperación. Este programa refuerza el mensaje de que ninguna mujer enfrenta sola su proceso de sanación, generando redes de apoyo y esperanza."
}
,

{
    "id": "m4",
    "titulo": "Apoyos Con Amor",
    "objetivo": "Apoyar a mujeres en situación vulnerable mediante la entrega de cheques y recursos económicos directos, como parte de una estrategia integral de bienestar y autonomía.",
    "descripcion": "Apoyos Con Amor es un programa del DIF Saltillo orientado a mujeres que enfrentan condiciones económicas adversas, brindándoles apoyos económicos para cubrir necesidades básicas, gastos médicos, educación, transporte u otras situaciones prioritarias. A través de la entrega directa de cheques y el seguimiento personalizado de cada caso, se busca fortalecer la autonomía, seguridad y calidad de vida de las mujeres beneficiadas."
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
                <p class="font-bold">Objetivo:</p>
                <p>${info.objetivo}</p>
                <br>
                <p class="font-bold">Descripción:</p>
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
