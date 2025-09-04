let slideIndex = 0;
let slideTimer;
let img_dur = 5000;

document.addEventListener("DOMContentLoaded", () => {
  showSlides();

  const toggleBtn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
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
  clearTimeout(slideTimer);
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

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