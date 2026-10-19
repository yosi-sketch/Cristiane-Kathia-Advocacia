---
name: "Cristiane & Kathia — Advocacia Previdenciária"
description: "Ouro e bronze do logo, fundos escuros e marfim, serifas romanas e leitura clara."
colors:
  ink: "#211b14"
  ink-soft: "#675b4b"
  paper: "#fffdf8"
  ivory: "#f8f5ee"
  linen: "#eee7d9"
  gold: "#d8a848"
  dark-text: "#ded2be"
  brand-50: "#fbf5e8"
  brand-100: "#efe0bd"
  brand-200: "#e7cd91"
  brand-300: "#d8a848"
  brand-400: "#e4bb66"
  brand-500: "#c29137"
  brand-600: "#9c6c24"
  brand-700: "#75501b"
  brand-800: "#604116"
  brand-900: "#30261a"
  brand-950: "#211b14"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  display-desktop:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  headline-tablet:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  headline-desktop:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "28px"
  body-small:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "24px"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
rounded:
  none: "0"
  sheet: "4px 4px 0 0"
spacing:
  control-gap: "12px"
  content-gap: "16px"
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  gutter-desktop: "48px"
  panel-mobile: "28px"
  panel-tablet: "40px"
  section-mobile: "80px"
  section-tablet: "112px"
  section-desktop: "128px"
components:
  button-primary:
    backgroundColor: "{colors.brand-800}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-700}"
    textColor: "#ffffff"
  button-on-dark:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.brand-950}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  button-on-dark-hover:
    backgroundColor: "{colors.brand-100}"
    textColor: "{colors.brand-950}"
  navigation:
    backgroundColor: "{colors.brand-950}"
    textColor: "{colors.brand-100}"
    typography: "{typography.label}"
  dialog:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "28px"
---
# Design System: Cristiane & Kathia — Advocacia Previdenciária

## Overview

**Creative North Star: "Cuidado com a sua história"**

A identidade nasce do emblema dourado fornecido pelo cliente: ouro e bronze sobre fundos castanhos quase pretos, alternados com marfim para os trechos de leitura. A marca é preservada integralmente, com sua transparência e proporção original. As fotografias reais aproximam o atendimento das pessoas.

Libre Caslon Display acompanha as serifas romanas, a abertura das letras e a proporção do wordmark. Manrope diferencia a voz dos textos e controles, com leitura clara. Formas retas, linhas discretas e espaçamento generoso mantêm a composição sóbria.

**Key Characteristics:** logo e fotografias integrais; paleta amostrada; títulos serifados; ações visíveis; conteúdo acessível e responsivo.

## Colors

O ouro gold #d8a848 e o bronze brand-600 #9c6c24 representam agrupamentos de pixels opacos do logo, registrados em .impeccable/palette-source.json. As cores claras, médias e escuras são variações tonais da mesma família.

O ouro atende destaques e CTAs sobre fundo escuro; brand-700 #75501b e brand-800 #604116 atendem links e botões sobre fundos claros. ink #211b14 e brand-900 #30261a estruturam as superfícies escuras; ivory #f8f5ee e paper #fffdf8 sustentam a leitura. ink-soft #675b4b serve texto secundário claro; dark-text #ded2be serve texto secundário escuro. Branco puro é usado em textos de botões e títulos sobre fundos escuros.

Oito pares principais de texto foram testados entre 5,85:1 e 11,42:1; evidência em .impeccable/review/cristiane-kathia-contrast.json. O dourado claro de origem #fce478 é referência do logo, não um token usado em texto sobre marfim. O divisor do rodapé usa rgb(222 210 190 / 25%), variação translúcida de dark-text, documentada no sidecar.

**Regra do logo:** aplicar o arquivo original sobre fundo escuro, preservando dourado, transparência e proporções; não recolorir o emblema.

## Typography

Libre Caslon Display usa seu peso nativo 400; não simular negrito. Manrope atende corpo, navegação e controles; os dois arquivos são servidos pela aplicação via next/font.

H1: 36px no celular, 48px em 640px e 56px em 1024px, entrelinha 1,18. Heading compartilhado: 32/40/48px. Títulos de serviço: 1,55/1,8rem. Diálogos: 1,7/1,875rem. Tracking dos elementos serifados: −0,025em; títulos com quebra balanceada.

Corpo principal: 15px/28px, com hero em 16px/32px após 640px. Apoio: 13px/24px e 14px/28px. Navegação: 14px semibold. Ações: 12–16px, peso 600; o botão compartilhado mantém altura mínima de 44px.

## Layout

Contêiner de 80rem com margens internas de 20/32/48px. Seções principais usam 80/112/128px de espaço vertical. Cabeçalho sticky de 88px no celular e 96px após 640px; logo de 210px abaixo de 360px, 235px a partir de 360px e 280px em 640px.

Hero com uma coluna até 1024px e duas colunas de 1,05fr/0,95fr após esse ponto. O conjunto de fotos tem largura máxima de 460px; a grade respeita as larguras originais de 341 e 287px, e a primeira fotografia sobe 32px sem corte. Fotos entram abaixo do texto no celular. Navegação desktop aparece em 1024px.

Serviços são linhas com ícone, conteúdo e ação em 640px; empilham antes disso. Rodapé usa uma, duas e três colunas. As larguras 320, 390, 518, 768, 1024 e 1440px foram verificadas sem rolagem horizontal.

## Elevation & Depth

A profundidade vem das superfícies e das fotografias. Apenas o diálogo usa sombra estrutural: 0 18px 48px rgb(33 27 20 / 18%). Seu backdrop usa ink a 55% e desfoque de 8px para separar o contexto. Demais componentes permanecem planos.

## Shapes

Cantos retos em botões, fotos, linhas de serviço e painel de endereço. Diálogo com cantos superiores de 4px no celular e retos em 640px. Linhas finas separam conteúdo; não há máscaras ou cortes sobre os anexos.

## Components

PrimaryButton usa brand-800 e branco sobre fundo claro, passando a brand-700 no hover. Em cabeçalho, hero e contextos escuros, usa ouro e texto escuro, passando a brand-100 no hover. Variantes de tamanho preservam altura mínima de 44px. A chamada final usa botão branco com texto bronze.

Cabeçalho escuro, navegação clara, sublinhado dourado no hover. Menu móvel abre sobre superfície marfim e fecha por Escape ou escolha de seção. FAQ usa details/summary nativos. O painel de endereço oferece mapa, telefone e WhatsApp centralizados em app/lib/brand.ts.

Quatro frentes de atuação abrem diálogos com descrição, quatro tópicos e CTA contextual. O foco inicial vai para fechar, Tab permanece no diálogo, Escape fecha e o foco retorna ao acionador. O fundo fica inerte e a página bloqueia rolagem durante a abertura.

Uma revelação por clip-path de 900ms apresenta o conjunto de fotografias. Conteúdo permanece visível por padrão; MotionConfig e CSS respeitam movimento reduzido. Seleção de texto, caret, foco e barra de rolagem usam a paleta.

A seção do Google exibe nota agregada 5,0, 54 avaliações e seis trechos literais com autoria, conforme o material enviado em 18/10/2026. A grade tem uma coluna no celular, duas em 640px e três em 1024px, com divisórias finas, corpo Manrope 16px/32px e autores 14px semibold em bronze. O link ao perfil continua disponível. A estrela acompanha somente a nota agregada; notas individuais não foram fornecidas. Não atribuir identidades individuais às fotos sem confirmação. E-mail, registros OAB e domínio não foram informados.

## Do's and Don'ts

### Do:

- Do preservar integralmente o logo, as fotografias, as proporções e a transparência dos arquivos.
- Do usar ouro sobre fundo escuro e bronze escuro para ações sobre marfim.
- Do centralizar tokens no tema Tailwind 4 em app/globals.css.
- Do preservar foco visível, teclado, retorno de foco e preferência por movimento reduzido.

### Don't:

- Don't aplicar dourado claro em texto pequeno sobre marfim.
- Don't inventar depoimentos, nota média, credenciais, e-mail ou garantias de resultado.
- Don't vincular nomes individuais às fotos sem identificação confirmada.
- Don't exigir animação para acessar o conteúdo.
