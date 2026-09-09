/**
 * icons.js
 * Ícones em SVG inline (usam currentColor). Os grupos internos têm
 * classes específicas (blade-top, airflow-1, sun-rays, etc.) que são
 * animadas pelo css/animations.css — mantendo animação e marcação
 * de ícone no lugar certo, sem misturar responsabilidades.
 */
const ICONS = {
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M16 3v4M8 3v4M3.5 10h17"/></svg>`,

  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"/></svg>`,

  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>`,

  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.83 14.24c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.43.27-.29.6-.36.8-.36h.57c.18 0 .43-.07.67.51.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.08.13.08.73-.16 1.41Z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>`,

  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9.5h12V10"/></svg>`,

  gallery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 15.5 8 11l3.5 3.5L15 11l5 5"/><circle cx="8.2" cy="8.5" r="1.3" fill="currentColor" stroke="none"/></svg>`,

  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8.2" r="3.4"/><path d="M5 19.2c1.2-3.3 3.8-5 7-5s5.8 1.7 7 5"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,

  // Ícones de serviço, com partes nomeadas para as microanimações
  scissors: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="6.5" r="2.1"/>
      <circle cx="6" cy="17.5" r="2.1"/>
      <path class="blade-top" d="M7.6 7.8 20 17.5"/>
      <path class="blade-bottom" d="M7.6 16.2 20 6.5"/>
    </svg>`,

  dryer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 7.5h5.2c2.6 0 4.3 1.9 4.3 4.1S16.8 15.7 14.2 15.7H12v3.8a1.6 1.6 0 0 1-3.2 0z"/>
      <path d="M9 7.5H5.5c-1 0-1.8.8-1.8 1.8v.9c0 1 .8 1.8 1.8 1.8H9"/>
      <path class="airflow-1" d="M19.5 9.5h2.2"/>
      <path class="airflow-2" d="M19.9 12h2.4"/>
      <path class="airflow-3" d="M19.5 14.5h2.2"/>
    </svg>`,

  straightener: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 15.5 15 5c1-1 2.6-1 3.6 0s1 2.6 0 3.6L8.1 19"/>
      <path class="plate-top" d="M6 13.8 4.6 17.4a1 1 0 0 0 1.3 1.3L9.4 17"/>
      <path d="M14 6.2l3.3 3.3"/>
    </svg>`,

  sparkle: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path class="spark-a" d="M8 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
      <path class="spark-b" d="M17 10l0.8 2.2L20 13l-2.2 0.8L17 16l-0.8-2.2L14 13l2.2-0.8L17 10z"/>
      <path class="spark-c" d="M10.5 15l0.7 1.8L13 17.5l-1.8 0.7L10.5 20l-0.7-1.8L8 17.5l1.8-0.7L10.5 15z"/>
    </svg>`,

  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="12" cy="12" r="4.3" fill="currentColor" stroke="none"/>
      <g class="sun-rays">
        <path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3 5.5 5.5"/>
      </g>
    </svg>`,

  flower: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
      <path d="M12 10c0-2.4-1.2-4-3-5"/>
      <path d="M14 10c0-2.4 1.2-4 3-5"/>
      <path d="M10 12.5c-2.4 0-4 1.2-5 3"/>
      <path d="M10 13.7c-2 1.4-2.8 3.3-2.6 5.3"/>
      <path d="M14 12.5c2.4 0 4 1.2 5 3"/>
      <path class="petal-shine" d="M14 13.7c2 1.4 2.8 3.3 2.6 5.3"/>
    </svg>`,

  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5l1.6 3.3 3.6.4-2.6 2.5.6 3.6L12 10.6 8.8 12.3l.6-3.6-2.6-2.5 3.6-.4L12 2.5z"/><path d="M9 13.5 8 21l4-2 4 2-1-7.5"/></svg>`,

  heartUsers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-6.5-4-6.5-8.6A3.9 3.9 0 0 1 12 8.4a3.9 3.9 0 0 1 6.5 3c0 4.6-6.5 8.6-6.5 8.6z"/></svg>`,

  sparkleSingle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>`,
};
