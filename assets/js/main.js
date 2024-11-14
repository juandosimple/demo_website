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
