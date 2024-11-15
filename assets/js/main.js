window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// TITLE ANIMATION
const texts = document.querySelectorAll(".animated-text");
let index = 0;

function changeText() {
  if (index > 0) {
    texts[index - 1].classList.remove("show"); // Oculta la palabra anterior
  }
  
  texts[index].classList.add("show"); // Muestra la palabra actual
  index++;
  
  if (index < texts.length) {
    setTimeout(changeText, 2000); // Cambia cada 2 segundos
  }
}

setTimeout(changeText, 000); // Espera antes de iniciar el primer cambio

// Boxes ANIMATION
// document.querySelectorAll("#platform .box").forEach((box) => {
//   box.addEventListener("mouseenter", () => {
//     const heading = box.querySelector("h1");

//     // Calcular el ancho necesario para que el h1 quepa completamente
//     const requiredWidth = heading.scrollWidth + 50; // Margen adicional
//     box.style.maxWidth = `${requiredWidth}px`;

//     // Rotar el h1
//     heading.style.transform = "rotate(360deg)";

//     // Mostrar el párrafo
//     const paragraph = box.querySelector("p");
//     paragraph.style.opacity = "1";
//     paragraph.style.transform = "translateY(0)";
//     paragraph.style.bottom = "10px";
//   });

//   box.addEventListener("mouseleave", () => {
//     // Restaurar la columna
//     box.style.maxWidth = "150px";

//     // Rotar el h1 nuevamente
//     const heading = box.querySelector("h1");
//     heading.style.transform = "rotate(270deg)";

//     // Ocultar el párrafo
//     const paragraph = box.querySelector("p");
//     paragraph.style.opacity = "0";
//     paragraph.style.transform = "translateY(20px)";
//     paragraph.style.bottom = "-50px";
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.box');
  let lastExpandedBox = null;  // Variable para almacenar el último box expandido

  boxes.forEach(box => {
    // Al pasar el mouse sobre un box
    box.addEventListener('mouseenter', () => {
      // Si hay un box expandido y no es el mismo, lo cerramos
      if (lastExpandedBox && lastExpandedBox !== box) {
        lastExpandedBox.classList.remove('expanded');
      }
      // Expande el box actual
      box.classList.add('expanded');
      // Guarda el box expandido
      lastExpandedBox = box;
    });
  });
});
