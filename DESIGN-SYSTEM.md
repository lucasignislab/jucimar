---
name: Jucimar JS
description: Site institucional da Jucimar JS — serviços de ar-condicionado. Service Trust Modern.
colors:
  azul-jucimar: "#0033A0"
  azul-profundo: "#002677"
  azul-vivo: "#1A52C4"
  azul-nuvem: "#E8EEFA"
  azul-gelo: "#F3F7FD"
  vermelho-alerta: "#D62828"
  vermelho-profundo: "#B01F1F"
  tinta-900: "#111827"
  tinta-700: "#374151"
  tinta-500: "#6B7280"
  tinta-300: "#D1D5DB"
  cinza-200: "#E5E7EB"
  cinza-50: "#F9FAFB"
  surface: "#FFFFFF"
  success: "#16A34A"
  warning-star: "#F59E0B"
  info: "#0E7490"
  border-hairline: "rgba(17, 24, 39, 0.08)"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Questrial, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  none: "0"
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  "2xl": "64px"
  "3xl": "96px"
  section: "clamp(64px, 8vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.azul-jucimar}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.azul-profundo}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.azul-jucimar}"
    borderColor: "{colors.azul-jucimar}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-whatsapp:
    backgroundColor: "#25D366"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-destructive:
    backgroundColor: "{colors.vermelho-alerta}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tinta-900}"
    rounded: "{rounded.lg}"
    padding: "0"
  card-offer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tinta-900}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-review:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tinta-900}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-faq:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tinta-900}"
    rounded: "{rounded.sm}"
    padding: "24px 32px"
  input-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tinta-900}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: Jucimar JS

## Overview

**Creative North Star: "Ar Puro, Confiança Visível"**

O Service Trust Modern trata o site como a recepção de uma empresa de serviços exemplar: tudo limpo, claro e no lugar — o visitante deve sentir **confiança, transparência e agilidade** antes mesmo de ligar. A interface é um técnico bem-apresentado: uniforme impecável, preço na mão, sem enrolação.

O sistema nunca deve parecer um template genérico de franquia nem um site de startup SaaS. Nada de gradientes neon, ilustrações abstratas de "pessoas felizes com gráficos", ou glassmorphism decorativo: a linguagem aqui é azul profissional, branco generoso e fotografia real de serviço bem feito.

**Key Characteristics:**
- Outfit pesada e geométrica comanda os títulos; Questrial serve a leitura com leveza e clareza.
- Fundos limpos alternando branco e cinza-gelo: ritmo visual sem ruído.
- Azul Jucimar como voz institucional **e** voz de ação — positivo, confiável, sempre para frente.
- Vermelho existe, mas apenas para alertar: erro, cancelamento, destruição.
- Profundidade honesta: sombras suaves e ambientes em cards, nunca efeitos decorativos.
- Raios contidos (6–16px) e bordas-fio: a precisão de quem mede duas vezes antes de furar a parede.

## Colors

A paleta é fria e confiável: azul e branco dominam todas as interações positivas; vermelho é o único acento quente — e significa "atenção, pare e verifique".

### Primary
- **Azul Jucimar** (`#0033A0`, anchor 700 da rampa Azul): a voz da marca — headings, links, ícones, footer — **e a cor de todos os CTAs positivos**: "Agendar Serviço", "Resgatar Oferta", "Enviar", "Confirmar".
- **Azul Profundo** (`#002677`): hover dos CTAs e elementos primários; fundos de seções escuras institucionais.
- **Azul Vivo** (`#1A52C4`): hover de links e anel de foco em inputs.
- **Azul Nuvem** (`#E8EEFA`) / **Azul Gelo** (`#F3F7FD`): fundos de destaque suave, círculos de ícone, badges. Nunca competem com o branco — apenas separam.

**The Blue Means Go Rule.** Toda ação positiva do visitante é azul — agendar, enviar, confirmar, resgatar oferta. O azul acumula significado a cada clique: é a cor em que o cliente aprende a confiar.

### Destructive
- **Vermelho Alerta** (`#D62828`): reservado a ações negativas e irreversíveis — "Excluir", "Cancelar agendamento" — e a erros de validação em formulários (borda + mensagem auxiliar).
- **Vermelho Profundo** (`#B01F1F`): hover de ações destrutivas.

**The Red Means Stop Rule.** O vermelho nunca vende, nunca convida, nunca decora. Ele existe para sinalizar erro, risco ou consequência. Um CTA vermelho é proibido: confundiria a ação mais desejada do site com um aviso de perigo.

### Neutral
- **Tinta 900** (`#111827`): texto principal; quase-preto com respiro.
- **Tinta 700** (`#374151`): texto secundário e corpo de cards.
- **Tinta 500** (`#6B7280`): legendas, metadados, placeholders.
- **Cinza 200** (`#E5E7EB`): bordas de inputs e divisórias.
- **Cinza 50** (`#F9FAFB`): fundo alternado de seções (ritmo branco ↔ gelo).
- **Borda-fio** (`rgba(17,24,39,0.08)`): divisórias discretas em cards e header.

### Functional
- **Success** (`#16A34A`): confirmação de formulário, selo de garantia, "agendamento enviado".
- **Warning Star** (`#F59E0B`): exclusivo das estrelas de avaliação. Não usar como alerta — para isso, `info` ou texto explicativo.
- **Info** (`#0E7490`): avisos informativos em formulários e FAQ.

## Typography

**Display/Headline Font:** Outfit (fallback system-ui, sans-serif) — pesos 600/700/800
**Body Font:** Questrial (fallback sans-serif) — peso 400

**Character:** A Outfit dá autoridade técnica aos títulos — geométrica, firme, sem arrogância. A Questrial cuida da leitura: leve, aberta, honesta. Nenhuma terceira fonte entra no site.

### Hierarchy
- **Display** (Outfit 800, 36px → 56px fluido, line-height 1.1, tracking -0.02em): headline do hero. Aparece uma vez por página.
- **Headline** (Outfit 700, 28px → 40px, line-height 1.15): títulos de seção, sempre precedidos por eyebrow label.
- **Title** (Outfit 600, 18–24px, line-height 1.3): cards de serviço, ofertas, perguntas do FAQ.
- **Body Large** (Questrial 400, 18px, line-height 1.6): introduções de seção e texto do hero.
- **Body** (Questrial 400, 16px, line-height 1.6): texto corrido; largura confortável (60–70ch).
- **Label** (Outfit 700, 13px, uppercase, letter-spacing 0.08em, Azul Jucimar): eyebrow labels, categorias, selos.
- **Button** (Outfit 600, 15–16px): texto de todos os botões.

**The Two Voices Rule.** Apenas duas famílias tipográficas existem: Outfit fala pela empresa, Questrial serve o cliente. Uma terceira fonte é regressão, não variação.

## Layout

Grade estrita de 8px: todos os paddings, gaps e margens são múltiplos de 8 (8/16/24/32/48/64/96px). Padding vertical de seção fluido (`clamp(64px, 8vw, 96px)`). Container central de `1280px` com padding lateral de 16px (mobile) / 32px (desktop). Composições alternam blocos de texto+imagem (50/50) com grids de 3–4 cards, como no modelo de referência — simetria profissional, nunca assimetria de galeria de arte. Header fixo com compressão (96px → 64px) e wrapper de altura reservada para impedir saltos de layout.

## Elevation & Depth

Sistema de sombras suaves e honestas: cards em repouso flutuam levemente (`0 2px 12px rgba(17,24,39,0.08)`); no hover, elevam-se (`0 8px 24px rgba(17,24,39,0.14)`). O formulário do hero carrega a sombra mais forte da página — é o elemento de maior hierarquia funcional.

**The Honest Shadow Rule.** Sombras existem para indicar interatividade e hierarquia funcional — cards clicáveis, formulários, header fixo. Nunca como decoração. Toda sombra responde a um propósito; drop shadows dramáticas são proibidas.

## Shapes

Linguagem de cantos contidos e profissionais: raio pequeno (6px) em inputs, badges e cards de FAQ; raio médio (10px) em botões; raio grande (16px) reservado aos cards de serviço, oferta e avaliação; `rounded-full` apenas para pílulas de filtro, ícones circulares de serviço e avatares de clientes. Bordas sempre finas (borda-fio de 8% de opacidade).

**The Reserved Pill Rule.** A forma totalmente redonda é especial: só pílulas, chips e avatares a usam. Um botão em formato de pílula é sinal de template, não de empresa de serviços.

## Components

### Buttons
Diretos e confiantes: altura de toque generosa, peso Outfit 600, transição de 200ms.
- **Shape:** cantos 10px.
- **Primary (CTA positivo):** Azul Jucimar sobre texto branco (padding 14px 28px); hover escurece para Azul Profundo. Usado em "Agendar Serviço", "Resgatar Oferta", "Enviar".
- **Secondary (Outline):** contorno azul sobre transparente; texto Azul Jucimar; hover ganha fundo Azul Nuvem.
- **WhatsApp:** verde `#25D366` sobre branco — exceção deliberada: a cor de marca do WhatsApp é reconhecível demais para ser trocada.
- **Destructive:** Vermelho Alerta sobre branco; hover Vermelho Profundo. Apenas para "Excluir", "Cancelar agendamento" e confirmações irreversíveis.
- **Com ícone:** ícone Lucide à esquerda, gap de 8px (📅 Agendar Serviço).
- **Estados documentados:** Normal, Hover, Active, Disabled, Loading.

### Chips
- **Style:** pílulas de filtro e selos de categoria com contorno fino; selecionada ganha preenchimento Azul Nuvem.

### Cards / Containers
- **Serviço:** imagem 16:10 no topo, título Outfit 600, descrição Questrial, link "Saiba mais →" em azul; hover eleva a sombra.
- **Oferta:** valor do desconto em Outfit 800 azul, miolo em Tinta 500, botão CTA azul full-width.
- **Avaliação:** estrelas Warning Star no topo, depoimento, avatar circular + nome e bairro.
- **FAQ (acordeão):** borda esquerda de 4px em Azul Jucimar, pergunta em Outfit 600, resposta expande com animação de 250ms.
- **Border:** fio de 8% de opacidade em todos os cards.

### Inputs / Fields
- **Style:** fundo branco, borda Cinza 200, raio 6px, altura 48px, label Outfit 600 (14px) acima do campo.
- **Focus:** anel azul (`outline` Azul Vivo).
- **Error:** borda Vermelho Alerta + mensagem auxiliar em vermelho.
- **Disabled:** opacidade reduzida, sem interação.

### Navigation
- **Header:** fixo, 96px expandido → 64px comprimido com sombra ao rolar; logo à esquerda, nav central, telefone em Outfit 700 azul + CTA azul à direita. Mobile: hambúrguer com drawer branco.
- **Footer:** fundo Azul Profundo, texto branco/azul-nuvem; colunas de links, contato, redes sociais circulares que acendem em hover.

### Hero Form (assinatura)
O formulário de agendamento sobre o banner do hero — card branco com raio 16px e a sombra mais forte do sistema — é o gesto visual mais reconhecível do site (herdado do modelo). Preservá-lo: é onde a conversão acontece.

### Scroll Reveal
Texto e cards surgem por deslocamento + opacidade (`translateY(16px)`, 400ms, ease-out) via IntersectionObserver ao rolar. Respeitar `prefers-reduced-motion`.

### WhatsApp Float
Botão flutuante circular (`rounded-full`) verde WhatsApp, fixo no canto inferior direito, com mensagem pré-preenchida. Exceção deliberada à paleta: a cor de marca do WhatsApp é reconhecível demais para ser trocada.

## Do's and Don'ts

### Do:
- **Do** usar o grid de 8px em todo espaçamento (8/16/24/32/48/64/96px).
- **Do** manter Outfit para títulos e Questrial para corpo — somente essas duas famílias.
- **Do** usar azul em todos os CTAs positivos (The Blue Means Go Rule).
- **Do** reservar o vermelho a erros e ações destrutivas (The Red Means Stop Rule).
- **Do** alternar fundos branco ↔ cinza-50 entre seções para ritmo visual.
- **Do** usar fotos reais de serviço (técnicos, instalação, equipamentos) com overlay de leitura quando sob texto.
- **Do** manter o formulário do hero como o elemento de maior hierarquia visual.

### Don't:
- **Don't** usar vermelho em CTAs, decoração ou texto corrido — vermelho é alerta, não convite.
- **Don't** criar gradientes coloridos, glassmorphism ou ilustrações abstratas de startup.
- **Don't** adicionar uma terceira família tipográfica.
- **Don't** aplicar sombras dramáticas ou múltiplas camadas de elevação; sombras são funcionais.
- **Don't** arredondar botões além de 10px; pílulas são reservadas a chips e avatares.
- **Don't** inventar avaliações, números de clientes ou fotos — apenas conteúdo real fornecido pelo proprietário (placeholders sinalizados até lá).
