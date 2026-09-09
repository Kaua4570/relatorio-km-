/**
 * hero.js
 * Slideshow discreto do Hero (troca de imagem lenta) + disparo da
 * sequência de entrada (fade/rise) assim que a página carrega.
 */
function initHero() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Dispara a animação de entrada
  requestAnimationFrame(() => {
    setTimeout(() => hero.classList.add("is-loaded"), 80);
  });

  const slides = hero.querySelectorAll(".hero-slide");
  const dots = hero.querySelectorAll(".hero-dot");
  if (slides.length <= 1) return;

  let current = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  setInterval(() => {
    slides[current].classList.remove("is-active");
    dots[current]?.classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
    dots[current]?.classList.add("is-active");
  }, 6000);
}
