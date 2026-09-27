# SEO e idiomas - validacao local

Data: 2026-09-26. Projeto: E:/Repositorios/portifolio, dominio marcelodev.online.
Nenhum commit, push, acesso a VPS ou deploy realizado.

## Implementacao

- Conteudo comercial focado em landing pages, sites profissionais, catalogos,
  desenvolvimento web, sistemas personalizados, UI/UX e SEO tecnico.
- Removidas referencias a Recife/Pernambuco do conteudo proprio, metadados,
  schemas, manifest e capa social. Atendimento online no Brasil e no mundo.
  Previews dos projetos de clientes continuam originais.
- Portugues em `/`; ingles em `/en/`. Link PT/EN na navbar, mantendo query e
  ancora. Navegacao nativa, sem geolocalizacao ou redirecionamento automatico.
- Traducao de secoes, filtros, objetivos, descricoes, alt/aria, menu, rodape
  e mensagens pre-preenchidas no WhatsApp. Nomes proprios e tecnologias mantidos.
- Canonical proprio, hreflang pt/en/x-default reciproco, metadados sociais
  e dados estruturados por idioma. Sem endereco fisico inventado.
- HTML completo dos dois idiomas gerado no build, incluindo projetos e servicos.
  Verificador automatico confere canonical, H1, idiomas, schemas, assets,
  links atualizados e ausencia do direcionamento regional antigo.
- Sitemap com as duas URLs. Nenhuma dependencia adicionada.
- Ronaldo: https://ronaldoleaonutri.online/; Monopolio: https://monopoliopods.com/.
- Pontos da barra dos previews restaurados em vermelho, amarelo e verde.
  Tamanhos, recortes, glass, hover, escala e profundidade do stack mantidos.
- Botao de pausa removido. Efeitos ativos por padrao; preferencia de movimento
  reduzido do sistema e suspensao em aba oculta continuam respeitadas.

## Arquivos

- `src/i18n/{language,LanguageContext,messages}.ts`: idioma e traducao.
- `src/i18n/Language.test.tsx`: cobertura dos idiomas, filtros, menu e SEO.
- `src/components/LanguageSwitcher.tsx`: link PT/EN.
- `src/data/seo.ts`, `src/components/SiteHead.tsx`: metadados compartilhados.
- `src/entry-server.tsx`, `scripts/prerender.mjs`, `scripts/verify-build.mjs`,
  `vite.config.ts`, `package.json`, `index.html`: HTML estatico e validacao.
- `src/main.tsx`, `src/App.tsx`: contexto de idioma e link de acessibilidade.
- `src/components/{Navbar,Hero,About,TechnologyStack,Projects,Services,Process,
  Differentials,Contact,Footer,WhatsAppButton}.tsx`: textos e rotulos traduzidos.
- `src/data/{site,services,projects}.ts`: posicionamento global e URLs.
- `src/components/AmbientBackground.tsx`, seu teste e `Navbar.test.tsx`:
  remocao da pausa manual, preservando acessibilidade e limpeza de listeners.
- `src/index.css`: seletor de idioma, ajuste da navbar mobile e pontos coloridos.
- `public/{sitemap.xml,site.webmanifest,og-cover.svg,og-cover-en.svg}`: busca e compartilhamento.
- Removido `src/components/SeoSupportContent.tsx`, componente nao utilizado
  que ainda continha SEO regional oculto.
- `README.md` e documentacao de validacao atualizados.

## Verificacoes

- Lint e typecheck aprovados; 20 testes em 9 arquivos aprovados.
- Build e verificacao dos dois HTMLs estaticos aprovados.
- JS: 67,32 kB gzip; CSS: 9,41 kB gzip. JS +5,5% sobre a etapa imediatamente
  anterior (63,82 kB), sem ultrapassar a referencia de aumento de 20%.
- HTML final: 70.763 bytes (PT) e 69.942 bytes (EN), antes de compressao HTTP.
- Inspecao visual do build em desktop, tablet e mobile, incluindo 320 px.
- Medidas nas duas linguas em 320, 375, 390, 430, 768, 1024, 1280, 1440 e
  1920 px: sem overflow horizontal da pagina ou da navbar.
- Menu ingles, Escape e retorno do foco ao botao conferidos. Filtros e
  contadores exercitados nos testes; links dos cinco projetos preservados.
- PT/EN via link real conferido no navegador. Conteudo ingles acessivel
  com JavaScript desativado temporariamente na aba de teste.
- Reduced motion: zero animacoes, fundo sem movimento, projetos em fluxo.
- Em 844 x 390, projetos passam ao fluxo vertical e nao ha overflow horizontal.
- Console do build sem erros/warnings de runtime nos estados inspecionados.
- `git diff --check` aprovado. Avisos locais de LF/CRLF sao preexistentes.

## Limites e proximo passo

- Nenhuma garantia de indexacao, prazo ou posicao no Google. As alteracoes
  so ficam publicas depois de um deploy autorizado; a verificacao DNS da
  propriedade e a submissao do sitemap no Search Console nao foram executadas.
- Sem teste fisico em celular, Safari/iOS ou leitor de tela nesta etapa.
  Previews dos sites clientes nao foram traduzidos, pois sao capturas reais.
- Aviso preexistente de Browserslist/caniuse-lite desatualizado permanece.
- Referencias oficiais: [versoes localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions)
  e [metatags suportadas](https://developers.google.com/search/docs/crawling-indexing/special-tags).
  Conteudo visivel e URLs por idioma foram priorizados, nao listas artificiais
  de palavras-chave em meta keywords.

## Complemento: buscas comerciais, somente PT e EN

Validacao complementar em 2026-09-26. Esta etapa substitui as contagens e
metricas anteriores, sem invalidar o historico de verificacoes acima.

- Apenas portugues (`/`) e ingles (`/en/`) no seletor, sitemap, hreflang,
  metadados sociais e HTML gerado. Experimentos locais com outros idiomas
  foram removidos antes da entrega; nao houve publicacao.
- Titulos e descricoes de busca mais claros sobre criacao de sites,
  landing pages e desenvolvimento web freelancer. Conteudo Sobre e Servicos
  reforca atendimento remoto para o Brasil e o mundo, sem segmentacao regional.
- Seis perguntas uteis em Servicos abordam tipo de site, orcamento,
  React/TypeScript, responsividade/SEO, catalogos com WhatsApp e contratacao
  remota. Respostas visiveis ao abrir controles nativos, disponiveis no HTML
  mesmo sem JavaScript, sem precos, prazos ou resultados inventados.
- Termos editoriais em PT: criacao de sites, landing page profissional,
  desenvolvedor web freelancer, sistemas web personalizados e orcamento de site.
  Em EN: freelance web developer, website and landing page development,
  custom web applications, responsive websites e hire a web developer.
  Sao termos alinhados aos servicos, nao uma pesquisa de volume ou promessa
  de posicao. Nao foram adicionadas listas ocultas nem meta keywords.
- Schema WebPage vinculado a WebSite/Organization; servicos apontam para
  ancoras reais de cada idioma. Canonicals proprios e alternates reciprocos
  permanecem. FAQ nao e apresentada como garantia de rich result.
- Seletor compacto com somente duas opcoes, links reais preservando query e
  ancora, fechamento externo/Escape e retorno de foco. Animacoes dos projetos
  e preferencias de movimento reduzido preservadas.

Arquivos desta etapa: `src/data/{site,services,seo,serviceFaq}.ts`,
`src/components/{About,Services,ServiceFaq,LanguageSwitcher,SiteHead,Projects,Hero}.tsx`,
`src/i18n/{locales,language,messages}.ts`, `src/i18n/Language.test.tsx`,
`src/index.css`, `src/main.tsx`, `src/entry-server.tsx`, `vite.config.ts`,
`scripts/{prerender,verify-build}.mjs`, `public/sitemap.xml`, `index.html`
e este documento. Nenhuma dependencia adicionada.

### Verificacoes complementares

- Lint, TypeScript e 24 testes em 9 arquivos aprovados.
- Build gera HTML completo somente para PT/EN; verificador cobre H1,
  canonical, hreflang, schemas, assets, links, perguntas, seletor e sitemap.
- JS: 70,54 kB gzip; CSS aproximadamente 9,73 kB gzip. Variacao em relacao
  a etapa PT/EN anterior: aproximadamente +4,8% JS e +3,4% CSS.
- Perguntas abertas em PT por clique e EN por teclado; foco visivel.
  Troca real PT para EN preservou `#duvidas`; somente duas opcoes no seletor.
- Medidas responsivas complementares em 320, 390, 768 e 1280 px: sem overflow
  horizontal da pagina; perguntas em uma coluna no mobile, duas areas no
  tablet/desktop, alvos de toque maiores que 56 px. Folga lateral adicionada
  para que o icone rotacionado da pergunta nao ultrapasse o controle.
- Console sem erros ou warnings de runtime nos estados inspecionados.
- A captura de screenshots do navegador falhou nesta rodada. As medidas DOM
  e interacoes foram verificadas, mas nao houve nova comparacao visual por
  screenshots; a inspecao visual registrada acima pertence a etapa anterior.
- Sem teste fisico em celular ou novas medicoes de Core Web Vitals reais.

### Estado publico e proximo passo

Consulta publica somente leitura: HTTPS principal responde 200; HTTP e www
redirecionam ao HTTPS sem www. Robots e sitemap respondem 200. O site publico
ainda apresenta o titulo antigo com Recife e HTML inicial com root vazio,
dependendo de JavaScript para renderizar o conteudo. Isso nao significa que o
Google seja incapaz de renderiza-lo; o build local passa a entregar o conteudo
diretamente no HTML. O sitemap publico ainda lista somente a raiz.

Nenhum commit, push, acesso SSH ou deploy feito. As melhorias locais nao alteram
o site publico nem demonstram aumento de ranking. Depois de um deploy autorizado:

1. Conferir `/` e `/en/`, seus canonicals, robots e sitemap na VPS.
2. Enviar o sitemap e inspecionar as duas URLs no Google Search Console.
3. Acompanhar consultas, impressoes e cliques reais por idioma para priorizar
   melhorias de conteudo; nao repetir pedidos de indexacao como estrategia.

Referencias: [guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide),
[versoes localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions)
e [politicas contra spam](https://developers.google.com/search/docs/essentials/spam-policies).
Conteudo util e rastreavel pode melhorar a descoberta; nenhuma alteracao isolada
garante indexacao ou posicoes especificas.
