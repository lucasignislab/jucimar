# PRD — Site Institucional Jucimar JS

> **Status:** Rascunho v1 — aguardando validação
> **Data:** 2026-10-19
> **Modelo de referência:** aireserv.com (captura em `../arcondicionado_1`)

---

## 1. Visão Geral

Criar o site institucional da **Jucimar JS**, empresa de serviços de ar-condicionado (instalação, manutenção e reparo), usando como modelo de estrutura e experiência o site da Aire Serv (aireserv.com) — referência em sites de serviços HVAC.

O site deve transmitir confiança, facilitar o contato/agendamento e converter visitantes em clientes.

### Objetivos

1. **Conversão:** gerar pedidos de orçamento/agendamento via formulário e WhatsApp.
2. **Credibilidade:** exibir avaliações de clientes, diferenciais e garantias.
3. **SEO local:** ser encontrado em buscas como "instalação de ar condicionado + cidade".
4. **Educar:** seção de dicas/conteúdo que reforça autoridade.

---

## 2. Público-Alvo

| Perfil | Descrição |
|---|---|
| Residencial | Proprietários e moradores que precisam instalar, limpar ou consertar ar-condicionado |
| Comercial | Pequenos e médios comércios, escritórios e condomínios (PMOC, contratos de manutenção) |

---

## 3. Escopo

### 3.1 Dentro do escopo (v1)

Site **one-page** (página única com âncoras) em português (pt-BR), responsivo, com as seções abaixo — espelhando a estrutura do modelo:

| # | Seção (modelo Aire Serv) | Adaptação Jucimar JS |
|---|---|---|
| 1 | Header fixo com navegação + CTA "Schedule Service" + telefone | Header fixo: nav + botão **"Agendar Serviço"** + telefone/WhatsApp em destaque |
| 2 | Hero com banner, headline, avaliações e formulário "Schedule Online" | Hero com foto, headline de proposta de valor (ex.: "Preço fechado — você paga pelo serviço, não pela hora"), selo de avaliações e **formulário de agendamento** (nome, e-mail, telefone, CEP, tipo de serviço) |
| 3 | Customer reviews | Avaliações de clientes (nota média + depoimentos em carrossel/grid) |
| 4 | Image + title cards | Cards de serviços com imagem (instalação, manutenção, limpeza, reparo) |
| 5 | Coupons / special offers | **Ofertas** (ex.: "10% off na primeira manutenção", "Desconto em instalação de split") com botão "Resgatar oferta" |
| 6 | Why choose us (50/50) | "Por que escolher a Jucimar JS" — texto + imagem, lista de diferenciais |
| 7 | Residential block | Bloco Residencial × Comercial |
| 8 | Blog / expert section | "Dicas do Especialista" — cards de artigos |
| 9 | Replacement / two-column | Bloco de plano de manutenção / contrato |
| 10 | FAQs (accordion) | Perguntas frequentes em acordeão |
| 11 | Team section | Equipe / quem somos |
| 12 | Short form (secondary CTA) | Segundo formulário curto de contato |
| 13 | Footer completo | Rodapé: contato, endereço, redes sociais, links, copyright |

### 3.2 Fora do escopo (v1)

- Área do cliente / login
- Pagamento online
- Blog com CMS (artigos serão estáticos)
- Multi-idioma
- Agendamento com calendário em tempo real

---

## 4. Requisitos Funcionais

| ID | Requisito | Prioridade |
|---|---|---|
| RF-01 | Formulário de agendamento com validação (nome, e-mail, telefone, CEP, serviço) enviando para WhatsApp/e-mail | Alta |
| RF-02 | Botão flutuante e links de WhatsApp com mensagem pré-preenchida | Alta |
| RF-03 | FAQ em acordeão expansível | Alta |
| RF-04 | Carrossel/grid de avaliações de clientes | Média |
| RF-05 | Header fixo que se comprime ao rolar (como o modelo) | Média |
| RF-06 | Menu mobile (hambúrguer) | Alta |
| RF-07 | Âncoras suaves (scroll suave) entre seções | Média |
| RF-08 | Animações de entrada ao rolar (fade/slide) | Baixa |

## 5. Requisitos Não Funcionais

- **Responsivo:** mobile-first; breakpoints 640 / 768 / 1024 / 1280 / 1440px
- **Performance:** Lighthouse ≥ 90 em Performance e SEO
- **SEO:** meta tags, Open Graph, heading hierarchy correta, dados estruturados LocalBusiness
- **Acessibilidade:** contraste AA, navegação por teclado, alt text
- **Stack:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui

---

## 6. Identidade Visual

Seguindo o padrão do modelo (azul + vermelho de destaque), adaptado:

| Elemento | Valor proposto |
|---|---|
| Cor primária (CTA incluso) | Azul escuro `#0033A0` |
| Cor destrutiva/erro | Vermelho `#D62828` (nunca em CTAs) |
| Neutros | Cinzas `#111827 / #4B5563 / #E5E7EB`, branco |
| Tipografia | **Outfit** (títulos/headings, 600–800) + **Questrial** (corpo, 400) — Google Fonts |
| Estilo | Limpo, profissional, muito espaço em branco, cards com sombra suave |

> ⚠️ **Pendente:** logo da Jucimar JS, fotos reais da equipe/serviços e paleta oficial, se existir.

---

## 7. Conteúdo — Dados Necessários (pendentes do cliente)

- [ ] Nome completo da empresa e slogan
- [ ] Telefone / WhatsApp
- [ ] E-mail de contato
- [ ] Endereço / região de atendimento (cidade/UF)
- [ ] Horário de atendimento (atende 24h? emergências?)
- [ ] Lista oficial de serviços e ofertas vigentes
- [ ] Avaliações reais (Google?) e nota média
- [ ] Redes sociais (Instagram, Facebook…)
- [ ] Logo e fotos

Enquanto não houver dados reais, o site será construído com **conteúdo placeholder** claramente substituível.

---

## 8. Métricas de Sucesso

- Taxa de conversão do formulário / cliques no WhatsApp
- Posição em buscas locais de ar-condicionado
- Tempo de carregamento < 2,5s (LCP)

---

## 9. Cronograma Sugerido

| Etapa | Entrega |
|---|---|
| 1 | PRD validado ✅ |
| 2 | Estrutura do projeto + layout de todas as seções (sem animações) |
| 3 | Conteúdo real (textos, fotos, contatos) |
| 4 | Animações, polish responsivo, SEO |
| 5 | Build de produção + deploy |

---

## 10. Decisões Abertas

1. ~~Site one-page ou multipáginas?~~ → **Decidido: site institucional multipáginas** (Home, Serviços, Sobre, Dicas, FAQ, Contato) com React Router.
2. Ofertas/cupons serão reais ou apenas ilustrativos?
3. O formulário envia para onde (WhatsApp, e-mail, backend futuro)?
