/**
 * render.js
 * Constrói o HTML dinâmico a partir de js/data.js — cards de serviço,
 * pills e lista de categoria, carrossel de destaques e grid da galeria.
 * Se um dia os dados vierem de uma API, só este arquivo lê SERVICES /
 * CATEGORIES / HIGHLIGHTS / GALLERY; o resto do site não muda.
 */

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderServiceCards() {
  const grid = document.querySelector("[data-services-grid]");
  if (!grid) return;

  // Mostra um card por categoria principal na home (visão geral)
  const featured = ["cortes", "escovas", "progressivas", "mechas", "loiros", "penteados"]
    .map((cat) => SERVICES.find((s) => s.category === cat))
    .filter(Boolean);

  grid.innerHTML = featured
    .map(
      (s) => `
    <a class="service-card reveal" href="#agendamento" data-service-id="${s.id}">
      <div class="service-card-img"><img src="${s.image}" alt="${s.name}" loading="lazy"></div>
      <div class="service-card-scrim"></div>
      <div class="service-card-body">
        <span class="service-icon icon-${s.icon}">${ICONS[s.icon]}</span>
        <h3 class="service-card-name">${s.name}</h3>
        <p class="service-card-desc">${s.shortDescription}</p>
        <span class="service-card-arrow">${ICONS.arrowRight}</span>
      </div>
    </a>`
    )
    .join("");
}

function renderCategoryPills() {
  const wrap = document.querySelector("[data-category-pills]");
  if (!wrap) return;

  wrap.innerHTML = CATEGORIES.map(
    (c, i) => `<button class="category-pill${i === 0 ? " is-active" : ""}" data-category="${c.id}">${c.label}</button>`
  ).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-pill");
    if (!btn) return;
    wrap.querySelectorAll(".category-pill").forEach((p) => p.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderCategoryList(btn.dataset.category);
  });

  renderCategoryList("todos");
}

function renderCategoryList(categoryId) {
  const list = document.querySelector("[data-category-list]");
  if (!list) return;

  const items = categoryId === "todos" ? SERVICES : SERVICES.filter((s) => s.category === categoryId);

  list.innerHTML = items
    .map(
      (s, i) => `
    <div class="category-item" style="animation-delay:${i * 60}ms">
      <div>
        <div class="category-item-name">${s.name}</div>
        <div class="category-item-desc">${s.shortDescription}</div>
      </div>
      <div class="category-item-price">
        ${formatPrice(s.price)}
        <span class="category-item-duration">${s.durationMin} min</span>
      </div>
    </div>`
    )
    .join("");
}

function renderHighlights() {
  const track = document.querySelector("[data-highlights-track]");
  const dotsWrap = document.querySelector("[data-highlights-dots]");
  if (!track) return;

  track.innerHTML = HIGHLIGHTS.map(
    (h) => `
    <div class="highlight-card reveal">
      <img src="${h.image}" alt="Resultado: ${h.label}" loading="lazy">
      <span class="highlight-tag">${h.label.toUpperCase()}</span>
    </div>`
  ).join("");

  if (dotsWrap) {
    dotsWrap.innerHTML = HIGHLIGHTS.map((_, i) => `<span class="hero-dot${i === 0 ? " is-active" : ""}"></span>`).join("");
    const dots = dotsWrap.querySelectorAll(".hero-dot");
    const cardWidth = () => track.querySelector(".highlight-card").offsetWidth + 12;
    track.addEventListener(
      "scroll",
      () => {
        const index = Math.round(track.scrollLeft / cardWidth());
        dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
      },
      { passive: true }
    );
  }
}

function renderGallery() {
  const grid = document.querySelector("[data-gallery-grid]");
  const pillsWrap = document.querySelector("[data-gallery-pills]");
  if (!grid) return;

  grid.innerHTML = GALLERY.map(
    (g) => `
    <button class="gallery-item reveal" data-category="${g.category}" data-full="${g.image}">
      <img src="${g.image}" alt="Trabalho: ${g.category}" loading="lazy">
      <span class="gallery-item-tag">${g.category}</span>
    </button>`
  ).join("");

  if (pillsWrap) {
    pillsWrap.innerHTML = CATEGORIES.map(
      (c, i) => `<button class="category-pill${i === 0 ? " is-active" : ""}" data-filter="${c.id}">${c.label}</button>`
    ).join("");

    pillsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".category-pill");
      if (!btn) return;
      pillsWrap.querySelectorAll(".category-pill").forEach((p) => p.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.dataset.filter;
      grid.querySelectorAll(".gallery-item").forEach((item) => {
        const show = filter === "todos" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !show);
      });
    });
  }
}

function renderAll() {
  renderServiceCards();
  renderCategoryPills();
  renderHighlights();
  renderGallery();
}
