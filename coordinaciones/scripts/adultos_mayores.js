
const progInfo = [
    
{
    "id": "m0",
    "titulo": "Centro De Los Grandes Con Amor A Saltillo",
    "objetivo": "Brindar un espacio integral de atención, desarrollo y convivencia para adultos mayores de Saltillo, donde se promueve el bienestar físico, emocional y social.",
    "descripcion": "El Centro de los Grandes Con Amor a Saltillo es un lugar diseñado especialmente para personas adultas mayores, donde se ofrecen actividades recreativas, talleres, servicios de salud y espacios de convivencia diaria. Este centro del DIF Saltillo busca que las y los adultos mayores se mantengan activos, acompañados y valorados. Con un enfoque de respeto y dignidad, el centro promueve el envejecimiento activo, el aprendizaje continuo y la inclusión de los adultos mayores en la vida comunitaria."
}
,

{
    "id": "m1",
    "titulo": "Grupos Cercanos Con Amor",
    "objetivo": "Fomentar la integración social y emocional de adultos mayores a través de grupos de convivencia y apoyo comunitario en diferentes sectores de Saltillo.",
    "descripcion": "Grupos Cercanos Con Amor es una red de grupos comunitarios para adultos mayores organizada por el DIF Saltillo en distintas colonias y comunidades. En estos espacios se realizan actividades culturales, recreativas, deportivas y de reflexión, fortaleciendo el sentido de pertenencia, la autoestima y los vínculos afectivos. Los grupos son liderados por promotores voluntarios y forman parte de una estrategia de prevención del aislamiento social en las personas mayores, promoviendo la empatía, el cuidado mutuo y la cercanía intergeneracional."
}
,

{
    "id": "m2",
    "titulo": "Recorridos Con Amor: Rutas Culturales",
    "objetivo": "Acercar a los adultos mayores a la riqueza cultural de la ciudad y el estado, mediante visitas guiadas y recorridos organizados por espacios históricos, culturales y naturales.",
    "descripcion": "Recorridos Con Amor: Rutas Culturales es una experiencia organizada por el DIF Saltillo para que los adultos mayores disfruten de visitas culturales a museos, parques, teatros, sitios históricos y eventos artísticos. Además de promover el derecho al esparcimiento, estos recorridos contribuyen al aprendizaje, la socialización y la construcción de memorias compartidas entre los participantes. Es una forma de reconocer la vida, la historia y la presencia activa de las personas mayores en la comunidad."
}
,

{
    "id": "m3",
    "titulo": "Jornadas Con Amor En Los Asilos Y Comedores",
    "objetivo": "Llevar acompañamiento, servicios, entretenimiento y cuidado a personas adultas mayores que viven en asilos o que asisten a comedores comunitarios en Saltillo.",
    "descripcion": "Con las Jornadas Con Amor, el DIF Saltillo visita asilos y comedores comunitarios para ofrecer actividades recreativas, sesiones informativas, atención médica y emocional, así como momentos de compañía y alegría a quienes más lo necesitan. Estas jornadas fortalecen la dignidad y calidad de vida de las personas adultas mayores, especialmente de aquellas que viven en situación de vulnerabilidad o soledad. Cada jornada es un recordatorio de que en Saltillo nadie envejece solo."
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
