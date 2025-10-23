
const progInfo = [
    
{
    "id": "m0",
    "titulo": "Jornadas De Accesibilidad Para Personas Con Discapacidad",
    "objetivo": "Fomentar la inclusión social y el respeto a los derechos de las personas con discapacidad a través de actividades que promuevan entornos accesibles en Saltillo.",
    "descripcion": "Las Jornadas de Accesibilidad para Personas con Discapacidad son una iniciativa del DIF Saltillo que busca sensibilizar a la comunidad y promover espacios físicos y sociales más inclusivos. A través de talleres, actividades culturales, capacitaciones y ejercicios vivenciales, estas jornadas acercan a la ciudadanía a una visión más empática sobre la discapacidad. Este programa está dirigido a escuelas, empresas, instituciones públicas y privadas, y a toda persona interesada en aprender sobre accesibilidad e inclusión en Saltillo.",
    "imagen": "jornadas_de_accesibilidad.png"
}
,

{
    "id": "m1",
    "titulo": "Apoyos Para Personas Con Discapacidad",
    "objetivo": "Brindar apoyos funcionales, médicos y asistenciales a personas con discapacidad en situación de vulnerabilidad en Saltillo.",
    "descripcion": "El programa de Apoyos para Personas con Discapacidad del DIF Saltillo tiene como finalidad mejorar la calidad de vida de niñas, niños, adolescentes, personas adultas y personas mayores con alguna discapacidad. A través de este programa se otorgan diversos apoyos, que pueden incluir:<br> <ul class=\"in-ul\"><li class=\"in-li text-gray-600\">Sillas de ruedas</li><li class=\"in-li text-gray-600\">Bastones</li><li class=\"in-li text-gray-600\">Andaderas</li><li class=\"in-li text-gray-600\">Aparatos auditivos</li><li class=\"in-li text-gray-600\">Valoraciones médicas y canalizaciones </li></ul><br><p>Este servicio está disponible para personas con discapacidad que residan en Saltillo.</p>",
    "imagen": "apoyos_para_personas_con_discapacidad.png"
}
,

{
    "id": "m2",
    "titulo": "Programa Ponte Las Pilas",
    "objetivo": "Capacitar a personas con discapacidad en Saltillo, brindándoles herramientas prácticas para su desarrollo personal y profesional, con el fin de facilitar su inclusión en el mercado laboral.",
    "descripcion": "El programa Ponte las Pilas del DIF Saltillo está enfocado en formar a personas con discapacidad para que puedan integrarse activamente en puestos de trabajo. A través de cursos, talleres y capacitaciones, las y los participantes adquieren habilidades laborales, conocimientos técnicos y herramientas de desarrollo humano que les permiten mejorar su autonomía y empleabilidad. Este programa busca reducir barreras de acceso al empleo formal, promoviendo la inclusión laboral y la igualdad de oportunidades para personas con discapacidad en Saltillo. También se vincula con empresas socialmente responsables que abren espacios de trabajo inclusivos.",
    "imagen": "ponte_las_pilas.png"
}
,

{
    "id": "m3",
    "titulo": "Programa Para Cirugía De Implantes Cocleares",
    "objetivo": "Apoyar a niñas y niños con discapacidad auditiva profunda en Saltillo para acceder a una cirugía de implante coclear que mejore su calidad de vida y desarrollo.",
    "descripcion": "El Programa de Implantes Cocleares del DIF Saltillo está diseñado para beneficiar a menores con pérdida auditiva severa que no pueden ser beneficiados con auxiliares convencionales. El implante coclear les permite acceder a sonidos, desarrollarse emocional y socialmente, y facilitar su proceso de aprendizaje. A través de este programa, se brinda acompañamiento médico, canalización a instancias especializadas y apoyo en los trámites necesarios para acceder a la cirugía. El objetivo es lograr una inclusión auditiva y educativa efectiva.",
    "imagen": "cirugía_de_implantes_cocleares.png"
}
,

{
    "id": "m4",
    "titulo": "Sumando Con Amor",
    "objetivo": "Fomentar la empatía y la participación comunitaria mediante actividades de concientización y apoyo a personas con discapacidad en Saltillo.",
    "descripcion": "Sumando Con Amor es una iniciativa del DIF Saltillo que busca involucrar a la ciudadanía en acciones de concientización, voluntariado y apadrinamiento de personas con discapacidad. El programa genera puentes de solidaridad a través de eventos especiales, campañas de sensibilización y actividades donde el amor y el compromiso social son el eje principal. Está abierto a familias, estudiantes, empresas y toda persona que quiera contribuir al bienestar de quienes viven con discapacidad en Saltillo.",
    "imagen": "sumando_con_amor.png"
}
,

{
    "id": "m5",
    "titulo": "Deporte Para Personas Con Discapacidad",
    "objetivo": "Promover el desarrollo físico, emocional y social de personas con discapacidad a través de la práctica deportiva adaptada.",
    "descripcion": "El programa Deporte para Personas con Discapacidad del DIF Saltillo fomenta la inclusión a través del ejercicio físico. Ofrece espacios seguros y actividades deportivas adaptadas a las necesidades de niñas, niños, adolescentes y personas adultas con discapacidad.",
    "imagen": "deporte_para_personas_con_discapacidad.png"
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
