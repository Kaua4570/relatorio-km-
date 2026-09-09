/**
 * main.js
 * Ponto de entrada: espera o DOM carregar e inicializa cada módulo.
 * A ordem importa — render.js precisa rodar antes de booking.js
 * (que depende dos cards e gatilhos já existirem no DOM).
 */
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  initNavigation();
  initHero();
  initReveal();
  initLightbox();
  initBooking();

  // Preenche os links de WhatsApp e Instagram a partir de data.js
  document.querySelectorAll("[data-whatsapp-href]").forEach((el) => {
    el.href = `https://wa.me/${STUDIO_INFO.whatsapp}`;
  });
  document.querySelectorAll("[data-instagram-href]").forEach((el) => {
    el.href = STUDIO_INFO.instagramUrl;
  });
  document.querySelectorAll("[data-instagram-handle]").forEach((el) => {
    el.textContent = STUDIO_INFO.instagram;
  });
  document.querySelectorAll("[data-whatsapp-display]").forEach((el) => {
    el.textContent = STUDIO_INFO.whatsappDisplay;
  });
});
