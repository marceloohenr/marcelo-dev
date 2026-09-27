# Repaginacao local: entrega e validacao

Data: 2026-09-25. Projeto: `marcelodev.online`.
Nenhum commit, push ou deploy foi realizado.

Atualizacao mais recente (2026-09-26): Hero centralizada com a foto real de
Marcelo e as duas logos preservadas. Os detalhes e resultados atuais estao
na ultima secao; as anteriores registram as etapas de showcase e identidade MH.

## Estado encontrado na retomada

A composicao editorial escura ja estava implementada no Hero, Sobre,
Tecnologias, Projetos, Servicos, Processo, Contato e Footer. Os cards de
projetos ja tinham recebido o layout compacto e o hook de empilhamento
adaptativo. A sessao anterior parou na validacao final, com a compatibilidade
do favicon ainda pendente. As alteracoes locais foram preservadas.

## Ajuste solicitado nesta retomada

- Removida a timeline de datas de dentro de Sobre.
- Os cinco projetos agora aparecem em um unico showcase, sem lista duplicada.
- Novo titulo: "Projetos que transformam ideias em produtos."
- Os cards mantem nome, descricao, objetivo, categoria, tecnologias e preview.
- A atuacao em design e desenvolvimento ficou visivel tambem no mobile.
- Todos os URLs, previews e recortes originais foram mantidos.
- A ancora `#experiencia` continua funcionando e leva ao cabecalho do showcase.
- Corrigido acesso inicial por fragmento depois da montagem React/fontes,
  sem substituir uma posicao de scroll ja restaurada pelo navegador.
- A navegacao passou de Trajetoria para Tecnologias, sem redesenhar a navbar.
- Acrescentados destaque do CTA por foco e feedback de borda ao pressionar.
- Favicon ICO de compatibilidade gerado a partir do SVG existente, sem alterar
  o desenho original nem o favicon SVG principal.

## Arquivos desta retomada

- `src/components/About.tsx`: retirada da timeline, restante de Sobre mantido.
- `src/components/Experience.tsx`: componente de timeline removido; era um
  arquivo local criado na etapa anterior, ainda nao versionado.
- `src/components/Projects.tsx`: cabecalho, ancora compativel e atuacao no card.
- `src/components/Navbar.tsx`: link desktop Tecnologias e acesso inicial por ancora.
- `src/components/Navbar.test.tsx`: testes de link direto e scroll restaurado.
- `src/data/site.ts`: textos do showcase e retirada do item Trajetoria.
- `src/index.css`: retirada dos estilos da timeline e estados de foco/clique.
- `src/components/Projects.test.tsx`: cobertura de showcase unico, ausencia de
  datas, ancora antiga, dados, imagens, URLs e atuacao de todos os projetos.
- `public/favicon.ico`: recurso de compatibilidade, 32 x 32, 663 bytes.
- `docs/repaginacao-validacao.md`: este relatorio.

Nao houve nova modificacao em Hero, Servicos, Processo, Contato, Footer ou
na logica de `useProjectStack` nesta retomada.

## Componentes da repaginacao acumulada

Novos componentes mantidos: About, TechnologyStack, Process, SectionHeading
e TechIcons (este ultimo ja era trabalho local existente na auditoria).
Os hooks useProjectStack e useReducedMotion concentram comportamento de
empilhamento e preferencia de movimento. Navbar, Hero, Projects, Services,
Differentials, Contact, Footer e WhatsAppButton foram integrados ao visual
editorial nas etapas anteriores. App organiza essas secoes.

## Movimento preservado

- `position: sticky`, offsets e a mesma formula de escala, inclinacao e recuo.
- Fundo opaco sob os reflexos: nenhum projeto fica transparente sobre outro.
- Hover com elevacao de 6 px, zoom de imagem de 1.03 e seta deslocada 2 px.
- Foco visivel eleva o card para permitir leitura e acesso por teclado.
- Em telas sem altura util suficiente, fluxo vertical com entrada progressiva.
- Mudanca de reduced motion durante a sessao remove empilhamento animado e
  transformacoes sem perder cards, filtros ou conteudo.
- Nenhuma biblioteca de animacao ou dependencia foi adicionada.

## Verificacoes realizadas

- Lint: passou.
- Typecheck: passou.
- Testes: 10 testes em 5 arquivos passaram.
- Build Vite: passou.
- `git diff --check`: passou; apenas avisos locais de normalizacao LF/CRLF.
- Console apos recarregamento: sem erros JavaScript ou warnings de runtime.
- Cinco links de projetos: HTTP GET 200. Uma consulta HEAD ao Monopolio
  retornou 404; a verificacao completa por GET respondeu 200, sem trocar o URL.
- Imagens e fontes carregadas; um unico H1 e ancoras internas existentes.
- Favicon ICO decodificado pelo navegador com 32 x 32 pixels.
- Menu mobile, Escape, retorno de foco, Tab e navegacao por ancoras conferidos.
- Botao Voltar do navegador conferido na etapa de validacao anterior.
- Filtros e contadores conferidos em testes e no navegador.
- Scroll de mouse, teclado e gesto touch emulado conferidos. Na emulacao
  touch anterior, um arraste deslocou a pagina de 3435 para 3850 px.
- Hover inspecionado no navegador: imagem 1.03 e seta em (2, -2) px.
- Base dos cards inspecionada durante sobreposicao: opacidade 1 e fundo solido.

## Responsividade

Medicoes de viewport, dimensoes internas e overflow feitas nas larguras:
320, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px. Nenhum overflow
horizontal encontrado na pagina nem nos cards/controles inspecionados.

Nas alturas usuais testadas (740 a 1080 px), os cards couberam na area util
e mantiveram empilhamento. Em 844 x 390 e 720 x 450, passaram corretamente
para fluxo vertical, sem esconder descricoes.

Inspecao visual direta de desktop, tablet e mobile, incluindo card completo
com foco em 320 px. Hero, Sobre, Tecnologias, Servicos, Processo, Contato e
Footer tambem foram inspecionados durante a validacao continuada.

720 x 450 foi usado como teste de reflow equivalente a uma janela 1440 x 900
com ampliacao de 200%; nao foi uma validacao do zoom real da interface do Chrome.

## Peso e limites da validacao

Referencia anterior: JS 62,36 kB gzip; CSS 13,20 kB gzip.
Build atual: JS 62,41 kB gzip; CSS 8,48 kB gzip.
Nao houve aumento acima do limite de 20% definido no plano.

O build ainda informa que a base caniuse-lite/Browserslist esta desatualizada.
As dependencias nao foram alteradas apenas para eliminar esse aviso preexistente.

A medicao de FPS pelo navegador automatizado ficou inconclusiva: as amostras
com scroll mostraram pausas proximas de 1 segundo inclusive com todas as
folhas de estilo temporariamente desligadas, enquanto amostras em repouso
tinham cadencia normal. Os estilos foram restaurados. Nao ha promessa de
FPS constante nem comparacao numerica valida antes/depois dessas animacoes.

Nao foram usados celular fisico, Safari/iOS, leitor de tela ou rede movel real.
As verificacoes locais nao substituem esses testes nem metricas em producao.

## Atualizacao: logos MH, paleta e movimento

Aplicadas as duas imagens fornecidas pelo usuario, sem redesenha-las e sem
alterar os arquivos originais em `D:/Imagens`:

- Simbolo MH na navbar e no footer, com enquadramento por CSS.
- Ilustracao circular no Hero; legenda fora da imagem para nao cobrir a marca.
- Preto quase puro, azul eletrico e violeta nos fundos, detalhes e CTAs.
- Fundo fixo decorativo com dez icones de tecnologia e luzes suaves. No mobile,
  quatro icones ficam visiveis. O fundo nao intercepta cliques ou cria overflow.
- Flutuacao CSS e parallax discreto de mouse/scroll. O listener de ponteiro
  ignora touch; calculos e escritas sao agrupados em requestAnimationFrame,
  sem render React a cada movimento e sem loop JavaScript permanente.
- Reflexo de luz acompanha o mouse nos cards de tecnologias, servicos e contato.
- Hover breve da marca, ilustracao, icones, botoes e setas.
- Botao fixo permite pausar/retomar o fundo. A aba oculta suspende o trabalho;
  voltar a aba respeita a pausa manual. Reduced motion reage durante a sessao.
- O link de pular conteudo continua sendo o primeiro controle no DOM. O novo
  botao fica inert junto ao conteudo quando o menu mobile esta aberto.

### Arquivos desta atualizacao

- `src/assets/mh-avatar.webp`: imagem 768 x 768, 76.164 bytes.
- `src/assets/mh-logo.webp`: imagem 384 x 384, 3.728 bytes.
- `src/components/BrandMark.tsx`: identidade reutilizada na navegacao e rodape.
- `src/components/AmbientBackground.tsx`: decoracao e controle dos efeitos.
- `src/hooks/usePointerMotion.ts`: parallax, luz interativa e limpeza dos listeners.
- `src/components/AmbientBackground.test.tsx`: quatro novos testes comportamentais.
- `src/App.tsx`: integracao do fundo, sem wrapper transformado no conteudo.
- `src/components/Hero.tsx`: ilustracao, descricao da imagem e legenda.
- `src/components/Navbar.tsx`: marca e isolamento do controle no menu mobile.
- `src/components/Navbar.test.tsx`: teste do estado inert do novo controle.
- `src/components/Footer.tsx`: marca MH.
- `src/components/TechnologyStack.tsx`, `src/components/Services.tsx` e
  `src/components/Contact.tsx`: alvos do reflexo de luz.
- `src/index.css`: paleta, enquadramento das logos, decoracao, hover e responsividade.
- `src/data/site.ts`: themeColor alinhado ao fundo.
- `index.html`: theme-color e preload da nova imagem do Hero.
- `docs/repaginacao-validacao.md`: registro desta entrega local.

### Preservacao e verificacao

A logica de `useProjectStack`, os cinco projetos, URLs, previews e recortes
nao foram alterados nesta etapa. A base dos cards continua opaca, agora
`rgb(12, 11, 24)`, com opacidade 1 durante a sobreposicao. O navegador confirmou
escala 0.9910 e inclinacao 0.336deg no card que recua durante uma transicao.
Hover confirmado: imagem 1.03, elevacao -6 px e seta em (2, -2) px.

- Lint, typecheck, build e `git diff --check`: aprovados.
- Testes: 14 testes em 6 arquivos aprovados.
- Novos testes: pausa/retomada, reduced motion ao vivo, aba oculta, preservacao
  da pausa, ignorar touch e limpeza de efeitos/listeners ao desmontar.
- Repetidas medicoes nas larguras 320, 375, 390, 430, 768, 1024, 1280, 1440 e
  1920 px. Sem overflow horizontal na pagina ou conteudo dos cards inspecionados.
- Em 844 x 390 e 720 x 450, o empilhamento volta ao fluxo vertical.
- Inspecao visual de Hero desktop/tablet/mobile, tecnologias, contato e cards
  mobile completos/durante sobreposicao, incluindo o build em localhost:4173.
- Menu mobile: Escape e foco retornando ao botao; ancora Projetos alinhada
  abaixo da navbar. Filtros atualizam 2/5 e 5/5; teclado chega ao projeto com
  outline visivel. Controle de movimento nao interfere no menu.
- Pausa confirmada no navegador: doze animacoes CSS em estado paused e nenhum
  reflexo ativo. Reduced motion: zero animacoes, controle desativado e cards em fluxo.
- Console do build sem erros/warnings de runtime; recursos observados sem HTTP
  >= 400, imagens carregadas, um H1 e canonical https://marcelodev.online/ mantidos.
- Nenhuma dependencia adicionada ao projeto. Conversao de imagem executada
  com sharp-cli temporario do npm, sem alterar package.json/package-lock.json.

### Peso atual e limites

Build atual: JavaScript 68,45 kB gzip; CSS 9,39 kB gzip. Comparado a etapa anterior
(62,41 / 8,48), aumentos de aproximadamente 9,7% e 10,7%, abaixo de 20%.
As duas imagens otimizadas somam cerca de 80 kB; a logo pequena e incorporada
ao JavaScript pelo Vite. A ilustracao tem preload e dimensoes explicitas.

O aviso preexistente de Browserslist/caniuse-lite continua. A pausa por
visibilidade foi validada por teste automatizado; nao houve teste fisico de
bateria/GPU. As limitacoes de FPS, zoom real, Safari/iOS, aparelho fisico e
leitor de tela descritas acima continuam aplicaveis. Nenhum resultado de
performance em producao e afirmado nesta entrega.

## Atualizacao: retrato real e Hero centralizada (2026-09-26)

Pedido: destacar `D:/Imagens/Perfil.png` numa composicao centralizada e com
borda circular, sem retirar as outras logos. Implementacao apenas local.

- Foto real centralizada acima do nome, titulo, descricao e acoes.
- Enquadramento circular por CSS, com borda azul/violeta e brilho discreto.
  A imagem original nao foi alterada; apenas uma copia WebP foi redimensionada.
- Logo ilustrada mantida como um selo junto ao retrato, sem cobrir o rosto.
- Simbolo MH mantido na navbar e no footer, sem alterar esses componentes.
- Tecnologias deslocadas para a faixa inferior da Hero; textos, links e
  botao principal de WhatsApp preservados.
- Entrada escalonada concluida em aproximadamente 870 ms; zoom de foto 1.035
  e movimento breve do selo no hover com mouse. Reduced motion remove ambos.
- Fundo interativo, animacoes de outras secoes e empilhamento dos projetos
  nao foram modificados nesta etapa.

Arquivos desta etapa:

- `src/components/Hero.tsx`: nova composicao e imagens.
- `src/index.css`: alinhamento, circulo, selo e ajustes responsivos da Hero.
- `index.html`: preload atualizado para a foto real.
- `src/assets/marcelo-perfil.webp`: 640 x 853, 58.910 bytes.
- `src/assets/mh-avatar-seal.webp`: selo 192 x 192, 11.306 bytes.
- `src/components/Hero.test.tsx`: retrato, logo, H1 unico e acoes preservadas.
- `docs/repaginacao-validacao.md`: registro de validacao.

Validacao:

- Lint e typecheck aprovados; 15 testes em 7 arquivos aprovados.
- Build aprovado: JS 68,39 kB gzip; CSS 9,40 kB gzip.
- `git diff --check` aprovado; avisos locais de LF/CRLF permanecem.
- Inspecao visual desktop, tablet (768 px) e mobile (390 px), incluindo o
  build de producao em localhost:4173.
- Medicoes nas larguras 320, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px:
  retrato circular e centralizado (desvio < 0,01 px), sem overflow horizontal.
  Acoes da Hero visiveis na primeira dobra nas alturas usuais testadas.
- Em 844 x 390, conteudo acessivel por scroll e projetos em fluxo vertical.
- Hover confirmado no navegador: foto 1.035 e selo em (2, -3) px / 4 graus.
  Ao ativar reduced motion, transformacoes retornam a none e animacoes a zero.
- Imagens do retrato e das logos carregadas; console do build sem erros ou
  warnings de runtime, recursos observados sem HTTP >= 400 e um unico H1.
- Continuam os limites anteriores: sem aparelho fisico, Safari/iOS, leitor
  de tela ou afirmacao de FPS constante. Aviso de Browserslist preexistente.

Nenhum commit, push ou deploy nesta etapa.

## Atualizacao: logo transparente, SEO global e idiomas (2026-09-26)

Esta etapa substitui a pausa manual e o posicionamento regional descritos
nos registros anteriores. Ver [relatorio SEO e idiomas](seo-idiomas.md) para
arquivos, verificacoes e limites atuais.

- Navbar e footer usam `src/assets/mh-logo-transparent.webp` (384 x 384,
  13.886 bytes), com canal alpha real e sem mix-blend-mode. Inspecao visual
  confirmou a ausencia do retangulo preto, inclusive no rodape.
- A remocao do fundo usou a ferramenta imagegen integrada, nao a CLI.
  Prompt aplicado: remover somente o fundo preto, inclusive espacos negativos;
  preservar geometria, proporcoes, posicao e gradiente azul/violeta do monograma
  MH e simbolo de codigo; sem redesenho, bordas, sombras ou novos elementos;
  saida PNG com transparencia real. O resultado foi otimizado para WebP.
- Portugues em `/` e ingles em `/en/`, com HTML estatico, canonical proprio,
  hreflang reciproco, sitemap e rotulos/mensagens traduzidos.
- Posicionamento Brasil/mundo, links Ronaldo/Monopolio corrigidos e pontos
  vermelho/amarelo/verde dos previews restaurados, sem mudar suas dimensoes.
- Animacoes continuam ativas por padrao, sem botao de pausa. Movimento
  reduzido do sistema e aba oculta continuam limitando trabalho desnecessario.
- Lint, TypeScript, 20 testes, build e verificacao dos dois HTMLs aprovados.
  JS 67,32 kB gzip; CSS 9,41 kB gzip. Build com aviso antigo de Browserslist.
- Desktop, tablet e mobile conferidos localmente, incluindo troca de idioma,
  ancora preservada, Voltar do navegador, menu, Escape e foco.

Nenhum commit, push ou deploy nesta etapa.
