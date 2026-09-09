/**
 * data.js
 * -----------------------------------------------------------------------
 * Fonte única de dados do site (serviços, categorias, destaques e galeria).
 *
 * IMPORTANTE — pensado para futura conexão com backend:
 * Cada objeto já usa os campos que um sistema real de agendamento vai
 * precisar (id, category, price, duration, image, description). Quando
 * o backend existir, basta trocar estes arrays por uma chamada de API
 * (fetch) que devolva o mesmo formato — nenhum outro arquivo precisa
 * mudar, pois todo o resto do site lê os dados a partir daqui.
 * -----------------------------------------------------------------------
 */

// Categorias usadas no filtro de "Escolha sua categoria" e na Galeria
const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "cortes", label: "Cortes" },
  { id: "escovas", label: "Escovas" },
  { id: "progressivas", label: "Progressivas" },
  { id: "mechas", label: "Mechas" },
  { id: "loiros", label: "Loiros" },
  { id: "penteados", label: "Penteados" },
];

// Serviços — usados nos cards da home, na categoria e no Passo 1 do agendamento
const SERVICES = [
  {
    id: "corte-feminino",
    category: "cortes",
    icon: "scissors",
    name: "Cortes",
    shortDescription: "Valorize seu estilo e personalidade.",
    longDescription: "Cortes desenhados para o formato do seu rosto e a textura do seu cabelo.",
    price: 90,
    durationMin: 45,
    image: "service-cortes.svg",
  },
  {
    id: "escova-modelada",
    category: "escovas",
    icon: "dryer",
    name: "Escovas",
    shortDescription: "Cabelos alinhados e cheios de vida.",
    longDescription: "Escova modelada com produtos de tratamento para brilho e movimento.",
    price: 70,
    durationMin: 40,
    image: "service-escovas.svg",
  },
  {
    id: "progressiva-alinhamento",
    category: "progressivas",
    icon: "straightener",
    name: "Progressivas",
    shortDescription: "Mais brilho, menos volume e muita praticidade.",
    longDescription: "Alinhamento e progressiva com foco na saúde da fibra capilar.",
    price: 280,
    durationMin: 150,
    image: "service-progressivas.svg",
  },
  {
    id: "mechas-tradicionais",
    category: "mechas",
    icon: "sparkle",
    name: "Mechas Tradicionais",
    shortDescription: "Iluminação clássica com técnica de papel alumínio.",
    longDescription: "Mechas tradicionais para quem busca um resultado clássico e elegante.",
    price: 250,
    durationMin: 180,
    image: "service-mechas.svg",
  },
  {
    id: "mechas-iluminadas",
    category: "mechas",
    icon: "sparkle",
    name: "Mechas Iluminadas",
    shortDescription: "Iluminação e dimensão para o seu cabelo.",
    longDescription: "Técnica livre de iluminação para um efeito natural de sol no cabelo.",
    price: 320,
    durationMin: 210,
    image: "service-mechas.svg",
  },
  {
    id: "morena-iluminada",
    category: "mechas",
    icon: "sparkle",
    name: "Morena Iluminada",
    shortDescription: "Contraste suave que ilumina o rosto.",
    longDescription: "Técnica pensada para bases morenas, com transição natural.",
    price: 300,
    durationMin: 200,
    image: "service-mechas.svg",
  },
  {
    id: "correcao-de-cor",
    category: "mechas",
    icon: "sparkle",
    name: "Correção de Cor",
    shortDescription: "Reequilíbrio de tom e correção de coloração.",
    longDescription: "Avaliação personalizada para corrigir tons indesejados com segurança.",
    price: 350,
    durationMin: 240,
    image: "service-mechas.svg",
  },
  {
    id: "loiro-perfeito",
    category: "loiros",
    icon: "sun",
    name: "Loiros",
    shortDescription: "Tons perfeitos para realçar sua beleza natural.",
    longDescription: "Loiros personalizados com tratamento para manter a fibra saudável.",
    price: 340,
    durationMin: 220,
    image: "service-loiros.svg",
  },
  {
    id: "penteado-especial",
    category: "penteados",
    icon: "flower",
    name: "Penteados",
    shortDescription: "Produções especiais para momentos inesquecíveis.",
    longDescription: "Penteados para festas, casamentos e ocasiões especiais.",
    price: 150,
    durationMin: 60,
    image: "service-penteados.svg",
  },
];

// Destaques — carrossel de resultados na home
const HIGHLIGHTS = [
  { id: "h1", label: "Progressiva", image: "destaque-1.svg" },
  { id: "h2", label: "Loiros", image: "destaque-2.svg" },
  { id: "h3", label: "Escova", image: "destaque-3.svg" },
  { id: "h4", label: "Mechas", image: "destaque-4.svg" },
  { id: "h5", label: "Penteados", image: "destaque-5.svg" },
];

// Galeria — grid com filtro por categoria
const GALLERY = [
  { id: "g1", category: "progressivas", image: "galeria-01.svg" },
  { id: "g2", category: "escovas", image: "galeria-02.svg" },
  { id: "g3", category: "progressivas", image: "galeria-03.svg" },
  { id: "g4", category: "mechas", image: "galeria-04.svg" },
  { id: "g5", category: "loiros", image: "galeria-05.svg" },
  { id: "g6", category: "penteados", image: "galeria-06.svg" },
  { id: "g7", category: "mechas", image: "galeria-07.svg" },
  { id: "g8", category: "cortes", image: "galeria-08.svg" },
];

// Horários possíveis (mock) — no backend real isso viria de uma API de agenda
const AVAILABLE_TIMES = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

// Dados de contato do Studio
const STUDIO_INFO = {
  name: "Studio Alcione Moraes",
  tagline: "Beleza que transforma.",
  whatsapp: "5561991365897",
  whatsappDisplay: "(61) 99136-5897",
  instagram: "@studioalcionemoraes",
  instagramUrl: "https://instagram.com/studioalcionemoraes",
};
