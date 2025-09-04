let slideIndex = 0;
let slideTimer;

let img_dur = 5000; // EDITAR: 5 segundos por imagem

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});

function plusSlides(n) {
  slideIndex += n;
  showSlides();
  resetTimer();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  resetTimer();
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  if (slides.length === 0) return;

  // clear any existing timer before scheduling a new one
  clearTimeout(slideTimer);

  // wrap around
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // show current slide + activate dot
  slides[slideIndex].style.display = "block";

  // auto-advance
  slideTimer = setTimeout(() => {
    slideIndex++;
    showSlides();
  }, img_dur); 
}

function resetTimer() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => {
    slideIndex++;
    showSlides();
  }, img_dur);
}

// Menu
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
  
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  });