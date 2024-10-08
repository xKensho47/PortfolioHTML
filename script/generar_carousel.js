async function loadProjects() {
    try {
        const response = await fetch('../data/proyectos.json');
        if (!response.ok) throw new Error('Error al cargar los proyectos');

        const proyectos = await response.json();
        generateCarousel(proyectos);
    } catch (error) {
        console.error('Error:', error);
    }
}

function generateCarousel(proyectos) {
    const carouselContainer = document.querySelector('.carousel'); // Selecciona el contenedor del carrusel

    proyectos.forEach(proyecto => {
        const carouselItem = `
            <div class="carousel-item">
                <h2 class="project-title">${proyecto.titulo}
                    <a href="${proyecto.link_github}" target="_BLANK">
                        <i class="fa-brands fa-github fa" style="color: #2d314d;"></i>>
                    </a>
                </h2>
                <a class="link-project" href="${proyecto.link}" target="_BLANK">
                    <img src="../images/projects/${proyecto.img}" alt="Imagen del proyecto">
                </a>
                <p class="project-des">${proyecto.desc}</p>
            </div>
        `;

        carouselContainer.insertAdjacentHTML('beforeend', carouselItem); // Añade el item al carrusel
    });

    // Mostrar solo el primer item al cargar
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        carouselItems[0].style.display = 'block'; // Muestra solo el primer item
    }

    // Inicializa el carrusel después de agregar los elementos
    moveCarousel(0);
}
  
document.addEventListener('DOMContentLoaded', loadProjects);
