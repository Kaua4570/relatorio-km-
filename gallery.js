/**
 * gallery.js
 * Lightbox simples: abre a foto da galeria em destaque ao tocar/clicar.
 */
function initLightbox() {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox?.querySelector("img");
  const closeBtn = lightbox?.querySelector(".lightbox-close");
  const galleryGrid = document.querySelector("[data-gallery-grid]");

  if (!lightbox || !galleryGrid) return;

  galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = item.querySelector("img").alt;
    lightbox.classList.add("is-open");
    document.body.classList.add("menu-open");
  });

  function close() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  closeBtn?.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
