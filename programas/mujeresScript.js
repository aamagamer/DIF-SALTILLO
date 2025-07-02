const progInfo = [
    {
        "id": "p1",
        "titulo": "Programa de Mujeres Emprendedoras",
        "descripcion": "Programa diseñado para apoyar a mujeres en el desarrollo de sus emprendimientos, proporcionando herramientas y recursos para su crecimiento económico.",
        "info": {
            "direccion": "Coordinación de Mujeres",
            "objetivo": "Empoderamiento económico de mujeres a través de la creación y fortalecimiento de microempresas.",
            "poblacion": "Mujeres mayores de 18 años en situación de vulnerabilidad económica.",
            "acciones": ["Capacitación en negocios", "Financiamiento inicial", "Asesoría contable y legal"]
        },
        "tramites": {
            "responsable": "Lic. Ana Pérez",
            "telefono": "844 123 4567",
            "horario": "Lunes a Viernes de 9:00 am a 2:00 pm"
        }
    },
    {
        "id": "p2",
        "titulo": "Programa de Salud Integral",
        "descripcion": "Atención médica especializada para mujeres, incluyendo consultas ginecológicas, mastografías y atención psicológica.",
        "info": {
            "direccion": "Coordinación de Salud",
            "objetivo": "Garantizar el acceso a servicios de salud de calidad para mujeres.",
            "poblacion": "Mujeres de todas las edades.",
            "acciones": ["Consultas médicas", "Estudios diagnósticos", "Talleres de prevención"]
        },
        "tramites": {
            "responsable": "Dra. Laura Martínez",
            "telefono": "844 234 5678",
            "horario": "Lunes a Viernes de 8:00 am a 3:00 pm"
        }
    },
    {
        "id": "p3",
        "titulo": "Programa de Capacitación",
        "descripcion": "Talleres y cursos para el desarrollo profesional y personal de las mujeres.",
        "info": {
            "direccion": "Coordinación de Desarrollo Social",
            "objetivo": "Brindar herramientas para la inserción laboral y el crecimiento personal.",
            "poblacion": "Mujeres mayores de 16 años.",
            "acciones": ["Talleres de oficios", "Cursos de computación", "Desarrollo de habilidades blandas"]
        },
        "tramites": {
            "responsable": "Lic. Carmen Rodríguez",
            "telefono": "844 345 6789",
            "horario": "Lunes a Sábado de 10:00 am a 6:00 pm"
        }
    }
];

// Crear modales dinámicamente
document.addEventListener('DOMContentLoaded', () => {
    progInfo.forEach(info => {
        // Clona el template
        const tpl = document.getElementById('progModalTemplate').content.cloneNode(true);
        
        // Personaliza el modal clonado con datos
        tpl.querySelector('.modal-toggle').id = info.id;
        tpl.querySelector('.modal-title').textContent = info.titulo;
        tpl.querySelector('.modal-text').textContent = info.descripcion;
        
        // Agregar información detallada
        const infoDetalle = `
            <div class="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 class="font-semibold mb-2">Información del Programa:</h4>
                <p><span class="font-medium">Dirección:</span> ${info.info.direccion}</p>
                <p><span class="font-medium">Objetivo:</span> ${info.info.objetivo}</p>
                <p><span class="font-medium">Población objetivo:</span> ${info.info.poblacion}</p>
                <p class="font-medium mt-2">Acciones principales:</p>
                <ul class="list-disc pl-5">
                    ${info.info.acciones.map(accion => `<li>${accion}</li>`).join('')}
                </ul>
            </div>
        `;
        
        // Agregar información de trámites
        const tramitesInfo = `
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Información para trámites:</h4>
                <p><span class="font-medium">Responsable:</span> ${info.tramites.responsable}</p>
                <p><span class="font-medium">Teléfono:</span> ${info.tramites.telefono}</p>
                <p><span class="font-medium">Horario de atención:</span> ${info.tramites.horario}</p>
            </div>
        `;
        
        tpl.querySelector('.info-detalle').innerHTML = infoDetalle;
        tpl.querySelector('.tramites-info').innerHTML = tramitesInfo;
        
        // Configurar botones de cierre
        tpl.querySelectorAll('.close-btn').forEach(btn => btn.setAttribute('for', info.id));
        
        // Agrega el modal al final del body
        document.body.appendChild(tpl);
    });
});

// Función para abrir modales
window.openModal = id => document.getElementById(id).checked = true;

// Cierre al hacer clic fuera del modal
document.addEventListener('click', e => {
    document.querySelectorAll('.dynamic-toggle').forEach(t => {
        const box = t.nextElementSibling.querySelector('.modal-box');
        if(t.checked && !box.contains(e.target) && !e.target.closest('.programas-item')) {
            t.checked = false;
        }
    });
});