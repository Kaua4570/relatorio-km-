# Studio Alcione Moraes — Site

Site completo, responsivo e funcional (mobile-first), construído em HTML, CSS e JavaScript puro — sem necessidade de build ou instalação de dependências.

## Como abrir

1. Extraia o arquivo .zip mantendo a estrutura de pastas.
2. Dê duplo clique em `index.html` para abrir no navegador.
   (Ou, melhor ainda: abra a pasta com a extensão "Live Server" no VS Code, ou rode `python3 -m http.server` dentro da pasta e acesse `http://localhost:8000`.)

## Estrutura do projeto

Tudo em uma única pasta, sem subpastas — é só extrair e abrir:

```
studio-alcione-moraes/
├── index.html                 → página inicial completa
├── variables.css               → cores, tipografia, espaçamentos (tokens)
├── base.css                     → reset e estilos globais
├── animations.css                → todas as animações e microanimações dos ícones
├── header.css                     → cabeçalho e menu fullscreen mobile
├── hero.css                        → seção hero e botões
├── services.css                     → cards de serviço
├── categories.css                    → seção "escolha sua categoria"
├── highlights.css                     → carrossel de destaques
├── about-gallery.css                   → sobre, diferenciais, galeria, whatsapp flutuante
├── booking.css                          → modal de agendamento (5 passos)
├── footer-nav.css                        → rodapé e barra inferior mobile
├── responsive.css                         → ajustes para tablet e desktop
├── icons.js                                → ícones SVG (com partes nomeadas para animação)
├── data.js                                  → SERVIÇOS, CATEGORIAS, DESTAQUES, GALERIA, CONTATO
├── render.js                                 → gera o HTML dos cards/listas a partir de data.js
├── navigation.js                              → menu, header, barra inferior
├── hero.js                                     → slideshow e animação de entrada do hero
├── reveal.js                                    → fade-in dos elementos ao rolar a página
├── gallery.js                                    → lightbox da galeria
├── booking.js                                     → fluxo completo de agendamento
├── main.js                                         → inicializa tudo
└── hero-1.svg, service-cortes.svg, destaque-1.svg,
    sobre-proprietaria.svg, galeria-01.svg, etc.       → imagens (ver observação abaixo)
```

## Imagens — IMPORTANTE

Como o Studio ainda não me enviou as fotos reais (do cabelo, dos trabalhos e da proprietária) como **arquivos de imagem separados**, o site está usando placeholders elegantes, no tom do site, claramente identificados com o texto "SUBSTITUIR".

Para trocar por fotos reais, basta substituir os arquivos **mantendo o mesmo nome de arquivo** (todos ficam soltos na mesma pasta, junto do `index.html`). Nenhum outro código precisa mudar.

Arquivos a substituir:
- `hero-1.svg`, `hero-2.svg`, `hero-3.svg` — fotos grandes do hero
- `service-cortes.svg`, `service-escovas.svg`, `service-progressivas.svg`, `service-mechas.svg`, `service-loiros.svg`, `service-penteados.svg`
- `destaque-1.svg` a `destaque-5.svg` — carrossel de resultados
- `sobre-proprietaria.svg` — foto real da Alcione
- `galeria-01.svg` a `galeria-08.svg` — fotos de trabalhos

## O que já funciona

- Header com scroll elegante + menu fullscreen mobile / menu horizontal no desktop
- Hero com slideshow, overlay e animação de entrada sequencial
- Ícones de serviço com microanimações discretas (tesoura, secador, chapinha, brilhos, sol, penteado)
- Seção "Escolha sua categoria" com filtro dinâmico
- Carrossel de destaques com swipe e indicadores
- Seção Sobre com diferenciais
- Galeria com filtro por categoria + lightbox
- **Agendamento completo em 5 passos** (serviço → data → horário → dados → resumo) + tela de confirmação com link direto para o WhatsApp
- Barra inferior mobile / menu horizontal desktop, botão flutuante de WhatsApp
- Respeita `prefers-reduced-motion`
- Responsivo de 360px até desktop grande

## Próximos passos (quando quiser conectar um backend real)

Tudo já foi estruturado pensando nisso:
- `data.js` é a única fonte de dados — troque os arrays por chamadas `fetch()` para sua API e todo o resto do site continua funcionando sem alterações.
- Em `booking.js`, os pontos marcados com `TODO(backend)` indicam exatamente onde entram as chamadas reais (dias/horários indisponíveis vindos da agenda, e o envio do agendamento confirmado).
- O número de WhatsApp e Instagram estão centralizados em `STUDIO_INFO` (dentro de `data.js`).

## Sobre o design

Segui a referência visual enviada: fundo creme, marrom café nos destaques, dourado/champagne só em detalhes, tipografia serifada + manuscrita + sans-serif, hierarquia e sensação de salão premium. As animações são propositalmente lentas e discretas, como pedido.
