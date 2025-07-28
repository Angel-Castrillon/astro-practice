const contenidos = {
  "1": {
    titulo: "Labrador Retriever",
    contenido: "Inteligente, amigable y enérgico.",
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
    contenido: "Leal, protector y muy entrenable.",
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
    contenido: "Sociable, juguetón y tranquilo.",
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
    contenido: "Cariñoso, equilibrado y confiable.",
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
    contenido: "Inteligente, elegante y activo.",
    color: "bg-sky-500",
    descripcion: "Inteligente, elegante y activo.",
    tamaño: "Toy, mediano o grande",
    origen: "Alemania/Francia",
    usoComun: "Compañía, concursos",
    hechos: "Su pelaje rizado es hipoalergénico.",
    imagen: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll("[data-id]");
  const sectionTitle = document.getElementById("section-title");
  const sectionContent = document.getElementById("section-content");
  const description = document.getElementById("description");
  const size = document.getElementById("size");
  const origin = document.getElementById("origin");
  const commonUse = document.getElementById("common-use");
  const facts = document.getElementById("facts");
  const section = document.getElementById("section-2");
  const image = document.getElementById("image");

  // Set initial content
  if (sectionTitle && sectionContent) {
    sectionTitle.textContent = "Selecciona una imagen";
    sectionContent.textContent = "Haz clic en cualquiera de las imágenes para ver su contenido aquí.";
  }

  imageContainers.forEach((div) => {
    const id = div.dataset.id ?? "";
    div.addEventListener("click", () => {
      const data = contenidos[id];
      if (data && sectionTitle && sectionContent && section) {
        sectionTitle.textContent = data.titulo;
        sectionContent.textContent = data.contenido;
        description.textContent = data.descripcion;
        size.textContent = data.tamaño;
        origin.textContent = data.origen;
        commonUse.textContent = data.usoComun;
        facts.textContent = data.hechos;
        image.src = data.imagen;

        // Remove all background color classes
        section.className = section.className
          .split(' ')
          .filter(cls => !cls.startsWith('bg-'))
          .join(' ');

        // Add the new background color
        section.classList.add(data.color);

        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

