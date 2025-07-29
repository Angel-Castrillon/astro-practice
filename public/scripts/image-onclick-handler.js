const contenidos = {
  "1": {
    titulo: "Labrador Retriever",
    contenido: "Amado por su lealtad y energía equilibrada.",
    color: "bg-neutral-500",
    descripcion: "Inteligente, amigable y enérgico.",
    tamaño: "Grande",
    origen: "Canadá",
    usoComun: "Perro familiar, guía y de terapia",
    hechos: "Ama el agua y es excelente nadador.",
    imagen: "https://images.unsplash.com/photo-1516383074327-ac4841225abf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  "2": {
    titulo: "Pastor Alemán",
    contenido: "Imponente y obediente, ideal para tareas exigentes",
    color: "bg-green-500",
    descripcion: "Leal, protector y muy entrenable.",
    tamaño: "Grande",
    origen: "Alemania",
    usoComun: "Policía, guardia, rescate",
    hechos: "Aprende órdenes complejas con rapidez.",
    imagen: "https://images.unsplash.com/photo-1662939092439-67d3d9d733b4?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  "3": {
    titulo: "Bulldog Francés",
    contenido: "Compacto y expresivo, se adapta a cualquier hogar.",
    color: "bg-yellow-500",
    descripcion: "Sociable, juguetón y tranquilo.",
    tamaño: "Pequeño",
    origen: "Francia/Inglaterra",
    usoComun: "Compañía urbana",
    hechos: "Su ronquido es muy característico por su nariz chata.",
    imagen: "https://images.unsplash.com/photo-1521907236370-15adf2297445?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  "4": {
    titulo: "Golden Retriever",
    contenido: "Siempre dispuesto a agradar y brindar compañía.",
    color: "bg-red-500",
    descripcion: "Cariñoso, equilibrado y confiable.",
    tamaño: "Grande",
    origen: "Escocia",
    usoComun: "Guía, asistencia, compañía",
    hechos: "Famoso por su paciencia con niños.",
    imagen: "https://images.unsplash.com/photo-1588022274642-f238f77ec193?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  "5": {
    titulo: "Poodle (Caniche)",
    contenido: "Un compañero brillante con estilo único.",
    color: "bg-sky-500",
    descripcion: "Inteligente, elegante y activo.",
    tamaño: "Toy, mediano o grande",
    origen: "Alemania/Francia",
    usoComun: "Compañía, concursos",
    hechos: "Su pelaje rizado es hipoalergénico.",
    imagen: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
};

// Function to update content based on data ID
function updateContent(id) {
  const sectionTitle = document.getElementById("section-title");
  const sectionContent = document.getElementById("section-content");
  const description = document.getElementById("description");
  const size = document.getElementById("size");
  const origin = document.getElementById("origin");
  const commonUse = document.getElementById("common-use");
  const facts = document.getElementById("facts");
  const section = document.getElementById("section-2");
  const image = document.getElementById("image");
  const imageContainer = document.getElementById("image-container");

  const data = contenidos[id];
  if (!data) return;

  // Update all text content
  if (sectionTitle) sectionTitle.textContent = data.titulo;
  if (sectionContent) sectionContent.textContent = data.contenido;
  if (description) description.textContent = data.descripcion;
  if (size) size.textContent = data.tamaño;
  if (origin) origin.textContent = data.origen;
  if (commonUse) commonUse.textContent = data.usoComun;
  if (facts) facts.textContent = data.hechos;
  
  // Update image
  if (image) {
    image.src = data.imagen;
    image.alt = `Imagen de ${data.titulo}`;
    imageContainer.style.display = 'flex';
    image.style.display = 'block';
  }

  // Update background color
  if (section) {
    // Remove all background color classes
    section.className = section.className
      .split(' ')
      .filter(cls => !cls.startsWith('bg-'))
      .join(' ');

    // Add the new background color
    section.classList.add(data.color);
  }

  // Scroll to section
  requestAnimationFrame(() => {
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all clickable elements (both grid items and swiper slides)
  const clickableElements = document.querySelectorAll('[data-id]');
  
  // Set initial content
  const sectionTitle = document.getElementById("section-title");
  const sectionContent = document.getElementById("section-content");
  if (sectionTitle && sectionContent) {
    sectionTitle.textContent = "Selecciona una imagen";
    sectionContent.textContent = "Haz clic en cualquiera de las imágenes para ver su contenido aquí.";
  }

  // Add click event to all elements with data-id
  clickableElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = element.getAttribute('data-id');
      updateContent(id);
    });
  });

  // Add event delegation for dynamically added swiper slides
  document.addEventListener('click', (e) => {
    // Check if the clicked element or its parent has a data-id
    const clickedElement = e.target.closest('[data-id]');
    if (clickedElement && clickableElements) {
      const id = clickedElement.getAttribute('data-id');
      updateContent(id);
    }
  });
});
