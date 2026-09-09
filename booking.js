/**
 * booking.js
 * Fluxo de agendamento em 5 passos + confirmação. Hoje funciona com
 * dados mock (js/data.js). Pensado para, no futuro, trocar apenas as
 * funções marcadas com "TODO(backend)" por chamadas reais de API,
 * sem precisar mexer no restante do site.
 */
const WEEKDAY_LABELS = ["D", "S", "T", "Q", "Q", "S", "S"];
const MONTH_LABELS = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

const bookingState = {
  step: 1,
  service: null,
  date: null, // objeto Date
  time: null,
  name: "",
  whatsapp: "",
  calendarViewMonth: new Date().getMonth(),
  calendarViewYear: new Date().getFullYear(),
};

function initBooking() {
  const overlay = document.querySelector(".booking-overlay");
  if (!overlay) return;

  const modal = overlay.querySelector(".booking-modal");
  const closeButtons = overlay.querySelectorAll("[data-booking-close]");
  const steps = overlay.querySelectorAll(".booking-step");
  const progressSteps = overlay.querySelectorAll(".booking-progress-step");

  // Abre o modal a partir de qualquer gatilho de agendamento na página
  document.querySelectorAll('[data-open-booking], a[href="#agendamento"]').forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const preselectId = trigger.closest("[data-service-id]")?.dataset.serviceId;
      openBooking(preselectId);
    });
  });

  function openBooking(preselectServiceId) {
    resetBooking();
    if (preselectServiceId) {
      bookingState.service = SERVICES.find((s) => s.id === preselectServiceId) || null;
      bookingState.step = bookingState.service ? 2 : 1;
    }
    renderBookingServiceOptions();
    renderCalendar();
    goToStep(bookingState.step);
    overlay.classList.add("is-open");
    document.body.classList.add("menu-open");
  }

  function closeBooking() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  closeButtons.forEach((btn) => btn.addEventListener("click", closeBooking));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeBooking();
  });

  function resetBooking() {
    bookingState.step = 1;
    bookingState.service = null;
    bookingState.date = null;
    bookingState.time = null;
    bookingState.name = "";
    bookingState.whatsapp = "";
    const now = new Date();
    bookingState.calendarViewMonth = now.getMonth();
    bookingState.calendarViewYear = now.getFullYear();
  }

  function goToStep(n) {
    bookingState.step = n;
    steps.forEach((s) => s.classList.toggle("is-active", Number(s.dataset.step) === n));
    progressSteps.forEach((p, i) => {
      p.classList.toggle("is-done", i + 1 < n);
      p.classList.toggle("is-active", i + 1 <= n);
    });
    modal.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- PASSO 1: SERVIÇO ----------
  function renderBookingServiceOptions() {
    const list = overlay.querySelector("[data-booking-service-list]");
    list.innerHTML = SERVICES.map(
      (s) => `
      <button class="booking-service-option${bookingState.service?.id === s.id ? " is-selected" : ""}" data-service-id="${s.id}">
        <div>
          <div class="booking-service-option-name">${s.name}</div>
          <div class="booking-service-option-meta">${s.durationMin} min</div>
        </div>
        <div class="booking-service-option-price">${formatPrice(s.price)}</div>
      </button>`
    ).join("");

    list.querySelectorAll(".booking-service-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        bookingState.service = SERVICES.find((s) => s.id === btn.dataset.serviceId);
        list.querySelectorAll(".booking-service-option").forEach((b) => b.classList.remove("is-selected"));
        btn.classList.add("is-selected");
      });
    });
  }

  overlay.querySelector('[data-step-next="1"]')?.addEventListener("click", () => {
    if (!bookingState.service) return;
    goToStep(2);
  });

  // ---------- PASSO 2: DATA ----------
  // TODO(backend): dias indisponíveis devem vir de uma API de agenda real.
  // Por enquanto, mock: domingos e os dias 10, 11 e 22 do mês corrente.
  function isDateDisabled(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return true;
    if (date.getDay() === 0) return true; // domingo fechado
    const mockBlocked = [10, 11, 22];
    return mockBlocked.includes(date.getDate());
  }

  function renderCalendar() {
    const title = overlay.querySelector("[data-calendar-title]");
    const grid = overlay.querySelector("[data-calendar-grid]");
    const weekdaysRow = overlay.querySelector("[data-calendar-weekdays]");

    weekdaysRow.innerHTML = WEEKDAY_LABELS.map((w) => `<span>${w}</span>`).join("");

    const y = bookingState.calendarViewYear;
    const m = bookingState.calendarViewMonth;
    title.textContent = `${MONTH_LABELS[m]} de ${y}`;

    const firstDay = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();

    let cells = "";
    for (let i = 0; i < firstDay; i++) cells += `<span class="booking-day is-empty"></span>`;

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(y, m, d);
      const disabled = isDateDisabled(date);
      const isSelected =
        bookingState.date &&
        bookingState.date.getFullYear() === y &&
        bookingState.date.getMonth() === m &&
        bookingState.date.getDate() === d;

      cells += `<button class="booking-day${disabled ? " is-disabled" : ""}${isSelected ? " is-selected" : ""}" data-day="${d}" ${disabled ? "disabled" : ""}>${d}</button>`;
    }

    grid.innerHTML = cells;

    grid.querySelectorAll(".booking-day:not(.is-disabled):not(.is-empty)").forEach((btn) => {
      btn.addEventListener("click", () => {
        bookingState.date = new Date(bookingState.calendarViewYear, bookingState.calendarViewMonth, Number(btn.dataset.day));
        renderCalendar();
      });
    });
  }

  overlay.querySelector("[data-calendar-prev]")?.addEventListener("click", () => {
    bookingState.calendarViewMonth -= 1;
    if (bookingState.calendarViewMonth < 0) {
      bookingState.calendarViewMonth = 11;
      bookingState.calendarViewYear -= 1;
    }
    renderCalendar();
  });

  overlay.querySelector("[data-calendar-next]")?.addEventListener("click", () => {
    bookingState.calendarViewMonth += 1;
    if (bookingState.calendarViewMonth > 11) {
      bookingState.calendarViewMonth = 0;
      bookingState.calendarViewYear += 1;
    }
    renderCalendar();
  });

  overlay.querySelector('[data-step-back="2"]')?.addEventListener("click", () => goToStep(1));
  overlay.querySelector('[data-step-next="2"]')?.addEventListener("click", () => {
    if (!bookingState.date) return;
    renderTimeOptions();
    goToStep(3);
  });

  // ---------- PASSO 3: HORÁRIO ----------
  // TODO(backend): horários ocupados devem vir da agenda real por dia.
  function renderTimeOptions() {
    const wrap = overlay.querySelector("[data-time-grid]");
    const mockBooked = ["10:30", "16:00"]; // exemplo de horários já ocupados
    wrap.innerHTML = AVAILABLE_TIMES.map((t) => {
      const disabled = mockBooked.includes(t);
      const selected = bookingState.time === t;
      return `<button class="booking-time-option${disabled ? " is-disabled" : ""}${selected ? " is-selected" : ""}" data-time="${t}" ${disabled ? "disabled" : ""}>${t}</button>`;
    }).join("");

    wrap.querySelectorAll(".booking-time-option:not(.is-disabled)").forEach((btn) => {
      btn.addEventListener("click", () => {
        bookingState.time = btn.dataset.time;
        wrap.querySelectorAll(".booking-time-option").forEach((b) => b.classList.remove("is-selected"));
        btn.classList.add("is-selected");
      });
    });
  }

  overlay.querySelector('[data-step-back="3"]')?.addEventListener("click", () => goToStep(2));
  overlay.querySelector('[data-step-next="3"]')?.addEventListener("click", () => {
    if (!bookingState.time) return;
    goToStep(4);
  });

  // ---------- PASSO 4: DADOS ----------
  const nameInput = overlay.querySelector("#booking-name");
  const whatsInput = overlay.querySelector("#booking-whatsapp");

  overlay.querySelector('[data-step-back="4"]')?.addEventListener("click", () => goToStep(3));
  overlay.querySelector('[data-step-next="4"]')?.addEventListener("click", () => {
    bookingState.name = nameInput.value.trim();
    bookingState.whatsapp = whatsInput.value.trim();
    if (!bookingState.name || !bookingState.whatsapp) return;
    renderSummary();
    goToStep(5);
  });

  // ---------- PASSO 5: RESUMO ----------
  function renderSummary() {
    const wrap = overlay.querySelector("[data-booking-summary]");
    wrap.innerHTML = `
      <div class="booking-summary-row"><span>Serviço</span><span>${bookingState.service.name}</span></div>
      <div class="booking-summary-row"><span>Data</span><span>${formatDate(bookingState.date)}</span></div>
      <div class="booking-summary-row"><span>Horário</span><span>${bookingState.time}</span></div>
      <div class="booking-summary-row"><span>Nome</span><span>${bookingState.name}</span></div>
      <div class="booking-summary-row"><span>WhatsApp</span><span>${bookingState.whatsapp}</span></div>
    `;
  }

  overlay.querySelector('[data-step-back="5"]')?.addEventListener("click", () => goToStep(4));
  overlay.querySelector('[data-step-next="5"]')?.addEventListener("click", () => {
    // TODO(backend): aqui entraria o POST criando o agendamento de verdade.
    renderConfirmation();
    goToStep(6);
  });

  // ---------- PASSO 6: CONFIRMAÇÃO ----------
  function renderConfirmation() {
    const wrap = overlay.querySelector("[data-booking-confirmation]");
    const msg = encodeURIComponent(
      `Olá! Acabei de agendar: ${bookingState.service.name}, dia ${formatDate(bookingState.date)} às ${bookingState.time}. Nome: ${bookingState.name}`
    );
    wrap.querySelector("[data-confirm-service]").textContent = bookingState.service.name;
    wrap.querySelector("[data-confirm-date]").textContent = formatDate(bookingState.date);
    wrap.querySelector("[data-confirm-time]").textContent = bookingState.time;
    wrap.querySelector("[data-whatsapp-link]").href = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${msg}`;
  }

  overlay.querySelector("[data-booking-restart]")?.addEventListener("click", closeBooking);
}

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}
