const contenidos = {
  "1": {
    titulo: "Título 1",
    contenido: "Contenido para la imagen 1.",
    color: "neutral-500",
  },
  "2": {
    titulo: "Título 2",
    contenido: "Contenido para la imagen 2.",
    color: "green-500",
  },
  "3": {
    titulo: "Título 3",
    contenido: "Contenido para la imagen 3.",
    color: "yellow-500",
  },
  "4": {
    titulo: "Título 4",
    contenido: "Contenido para la imagen 4.",
    color: "red-500",
  },
  "5": {
    titulo: "Título 5",
    contenido: "Contenido para la imagen 5.",
    color: "sky-500",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll("[data-id]");
  const sectionTitle = document.getElementById("section-title");
  const sectionContent = document.getElementById("section-content");
  const section = document.getElementById("section-2");

  imageContainers.forEach((div) => {
    const id = div.dataset.id ?? "";
    div.addEventListener("click", () => {
      const data = contenidos[id];
      if (data && sectionTitle && sectionContent && section) {
        sectionTitle.textContent = data.titulo;
        sectionContent.textContent = data.contenido;

        section.className = section.className
        .replace(/bg-\w+-\d{2,3}/g, "")
        .trim();

        section.classList.add(`bg-${data.color}`);

        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});