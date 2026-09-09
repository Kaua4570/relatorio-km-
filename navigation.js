/**
 * navigation.js
 * Cuida do header (estado ao rolar), do menu fullscreen mobile,
 * do link ativo na barra inferior e da rolagem suave até as seções.
 */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".mobile-menu-close");
  const mobileMenu = document.querySelector(".mobile-menu");
  const allNavLinks = document.querySelectorAll('a[href^="#"]');

  // Header ganha sombra ao rolar
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
    updateActiveBottomNav();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Abrir/fechar menu fullscreen
  function openMenu() {
    mobileMenu.classList.add("is-open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);

  // Rolagem suave + fecha o menu ao clicar em um link interno
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          closeMenu();
          const offset = window.innerWidth >= 1024 ? 84 : 72;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });

  // Fecha o menu com a tecla Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Marca o item ativo na barra inferior conforme a seção visível
  const sections = ["#inicio", "#servicos", "#agendamento", "#galeria", "#sobre"];
  const bottomItems = document.querySelectorAll(".bottom-nav-item[data-target]");

  function updateActiveBottomNav() {
    let currentId = "#inicio";
    const scrollPos = window.scrollY + 140;
    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (el && el.offsetTop <= scrollPos) currentId = id;
    });
    bottomItems.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.target === currentId);
    });
  }
}
