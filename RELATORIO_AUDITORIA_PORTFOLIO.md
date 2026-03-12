# Relatório de Auditoria UX/UI e Estrutural do Portfólio

Data da análise: 12 de março de 2026

## Diagnóstico executivo

O portfólio atual já parte de uma base melhor do que a média: a estrutura em seções é clara, os componentes estão bem separados, os dados principais estão centralizados, os previews de projetos têm proporção consistente e a fundação técnica está saudável. `lint`, `typecheck`, `test` e `build` passam, o que reduz risco de retrabalho ao evoluir o site.

Os pontos que hoje mais limitam a força comercial do portfólio não são bugs visuais graves, e sim posicionamento, hierarquia e percepção de valor. O site comunica com clareza "o que você faz", mas ainda comunica pouco "por que contratar você", "para quem você entrega melhor resultado" e "qual prova concreta existe além do visual". O conjunto atual passa competência técnica, mas ainda não maximiza confiança comercial.

As fragilidades mais importantes são:

1. excesso de repetição entre hero, contato, CTA final e botão flutuante;
2. ausência de seção de credibilidade, processo ou sobre;
3. categoria `Sistemas` exposta sem nenhum case publicado;
4. diferenciais e serviços muito próximos em formato e função;
5. hierarquia visual boa, mas ainda pouco sofisticada para um portfólio que quer atrair clientes premium.

## Baseline técnico validado

- `npm run lint`: aprovado em 12/03/2026.
- `npm run typecheck`: aprovado em 12/03/2026.
- `npm run test`: aprovado em 12/03/2026.
- `npm run build`: aprovado em 12/03/2026.
- Assets inspecionados:
  - retrato principal em `900x1200`, proporção `4:5`, sem distorção;
  - previews de projetos em `960x600`, proporção `16:10`, consistentes entre si.

## Paleta de cores

### Leitura do estado atual

O tema escuro atual é coerente com um portfólio de desenvolvimento web. A base `#0f172a` e as superfícies escuras criam contraste suficiente para texto principal e secundário, e o verde do WhatsApp está funcionando bem como CTA de contato.

Contrastes relevantes medidos nos tokens atuais:

- `#0f172a` vs `#f1f5f9`: `16.3:1`
- `#111827` vs `#94a3b8`: `6.92:1`
- `#2563eb` vs `#ffffff`: `5.17:1`
- `#1e293b` vs `#3b82f6`: `3.98:1`
- `#0f172a` vs `#64748b`: `3.75:1`

### Achados

1. Problema encontrado: a base escura e o texto principal estão sólidos, mas o azul usado em labels pequenos, pills e destaques (`text-brand-400`) fica perto do limite quando aplicado sobre cards escuros.
Impacto na percepção/conversão: labels pequenos, badges e metainformação ficam menos legíveis do que deveriam, o que reduz refinamento visual e dificulta leitura rápida.
Melhoria recomendada: separar token de preenchimento do botão e token de texto de destaque. O azul do botão pode continuar mais saturado; o azul para texto pequeno deve ser mais claro.
Prioridade: Alta.

2. Problema encontrado: o token `text-text-muted` é escuro demais para parte das legendas pequenas sobre o fundo principal.
Impacto na percepção/conversão: algumas informações de apoio parecem apagadas em vez de discretas; isso passa menos cuidado editorial.
Melhoria recomendada: subir o `muted` para uma faixa próxima de `#7c8ca1` ou usar `text-secondary` sempre que a informação não for puramente decorativa.
Prioridade: Média.

3. Problema encontrado: o azul está presente em quase todos os níveis da interface ao mesmo tempo: glow, pills, eyebrow, botão principal, hover, bordas e gradientes.
Impacto na percepção/conversão: a hierarquia perde força porque quase tudo pede atenção ao mesmo tempo. O visual fica mais próximo de template técnico do que de apresentação comercial refinada.
Melhoria recomendada: reservar a cor principal para ações primárias, estados ativos e pequenos pontos de atenção. Reduzir a quantidade de brilho e de azul ornamental nas superfícies.
Prioridade: Média.

4. Problema encontrado: há boa consistência entre fundo, card e CTA de WhatsApp, mas falta um nível intermediário mais claro para criar ritmo entre seções.
Impacto na percepção/conversão: a página escaneia como um bloco único escuro com poucas quebras narrativas.
Melhoria recomendada: introduzir um token de superfície intermediária e reforçar alternância entre seções estratégicas.
Prioridade: Média.

### Paleta sugerida

Mantendo a direção dark, a recomendação é evoluir para uma paleta com papéis mais definidos:

| Papel | Cor sugerida | Uso |
| --- | --- | --- |
| Fundo base | `#08111d` | fundo global |
| Fundo secundário | `#0f172a` | navbar, blocos neutros |
| Superfície/card | `#162033` | cards principais |
| Superfície elevada | `#1d2a40` | menus, painéis, elementos sobre imagem |
| Texto primário | `#f5f7fb` | títulos e corpo principal |
| Texto secundário | `#b6c2d2` | descrições e conteúdo de apoio |
| Texto muted | `#8696aa` | meta discreta, nunca para informação crítica |
| Borda | `#2a3a55` | divisórias e contornos |
| Primária | `#2563eb` | botão principal e estados ativos |
| Primária hover | `#1d4ed8` | hover/pressed do CTA principal |
| Accent para texto | `#93c5fd` | eyebrow, badge, pequenos destaques |
| WhatsApp/sucesso | `#22c55e` | CTA de contato |
| Aviso | `#f59e0b` | novidades, badges auxiliares |

## Layout

1. Problema encontrado: o hero só vira duas colunas em `xl`, então em `1024px` ele ainda permanece empilhado e muito alto.
Impacto na percepção/conversão: em notebook e tablet landscape o visitante vê menos conteúdo útil acima da dobra e demora mais para chegar aos projetos.
Melhoria recomendada: antecipar a quebra para duas colunas em `lg` ou reduzir a densidade vertical do hero nesse intervalo.
Prioridade: Alta.

2. Problema encontrado: a ordem atual `Hero > Projetos > Serviços > Diferenciais > Contato > CTA` funciona, mas há pouca construção de confiança entre prova visual e pedido de contato.
Impacto na percepção/conversão: o visitante entende a oferta, porém não recebe contexto suficiente sobre processo, perfil profissional, forma de trabalho ou segurança de contratação.
Melhoria recomendada: manter `Projetos` logo após o hero, mas inserir uma seção de `Sobre`, `Processo`, `Como eu desenvolvo` ou `Para quem eu entrego melhor resultado` antes da conversão final.
Prioridade: Alta.

3. Problema encontrado: `Contato` e `CTA` final cumprem praticamente a mesma função comercial.
Impacto na percepção/conversão: a reta final da página perde força porque a mensagem repete a mesma intenção com pouco ganho de informação.
Melhoria recomendada: fundir as duas seções em um fechamento único mais forte, ou transformar uma delas em prova de confiança/processo.
Prioridade: Alta.

4. Problema encontrado: a alternância visual entre `section-shell` e `section-shell-alt` é sutil demais.
Impacto na percepção/conversão: a navegação vertical fica correta, mas pouco memorável. A página parece longa e homogênea.
Melhoria recomendada: criar contrastes mais claros entre blocos estratégicos, com mudança real de fundo, ênfase tipográfica ou uma seção destaque mais editorial.
Prioridade: Média.

5. Problema encontrado: o botão flutuante do WhatsApp disputa atenção com CTAs já presentes na navbar, no hero, no contato e no CTA final.
Impacto na percepção/conversão: a ação principal fica presente demais e hierarquizada de menos.
Melhoria recomendada: manter o botão flutuante como CTA persistente e reduzir o peso de parte dos demais pontos de contato, ou vice-versa.
Prioridade: Média.

## Tipografia

1. Problema encontrado: o hero usa tipografia muito forte em duas camadas seguidas, com `h1` grande e um subtítulo também em escala de headline.
Impacto na percepção/conversão: a abertura fica impactante, mas menos escaneável e menos orientada a benefício concreto.
Melhoria recomendada: manter o `h1` como destaque e transformar a linha de apoio em texto `body-lg`, com foco em resultado comercial e não só em categoria de serviço.
Prioridade: Alta.

2. Problema encontrado: há uso frequente de `text-caption` em uppercase com tracking amplo em várias partes da interface.
Impacto na percepção/conversão: o visual ganha consistência, mas parte da microtipografia fica repetitiva e um pouco cansativa no mobile.
Melhoria recomendada: reservar uppercase para eyebrow, labels realmente secundárias e badges. Reduzir esse padrão em excesso dentro de cards.
Prioridade: Média.

3. Problema encontrado: a hierarquia entre títulos e descrições está boa, mas muitos textos de seção ainda são genéricos e pouco específicos sobre valor.
Impacto na percepção/conversão: a leitura fica agradável, porém menos persuasiva. O visitante entende a forma, mas não sente tanto o posicionamento.
Melhoria recomendada: reescrever títulos e subtítulos para linguagem orientada a problema, nicho e resultado.
Prioridade: Alta.

4. Problema encontrado: os parágrafos principais têm boa largura máxima, porém algumas descrições dentro de cards poderiam ser ainda mais objetivas.
Impacto na percepção/conversão: quando o texto do card não é muito específico, ele ocupa espaço sem aumentar prova ou clareza.
Melhoria recomendada: encurtar descrições de card e trocar parte do texto por sinais concretos de contexto, objetivo ou tipo de cliente.
Prioridade: Média.

## Boxes e cards

1. Problema encontrado: a base de cards está consistente e com padding suficiente, o que é um ponto forte real do projeto.
Impacto na percepção/conversão: o site já passa organização visual e evita a sensação de conteúdo colado nas bordas.
Melhoria recomendada: preservar a base atual de `p-5/p-6`, bordas suaves e alturas equilibradas; a melhoria agora é mais de sofisticação do que de correção.
Prioridade: Baixa.

2. Problema encontrado: `Serviços` e `Diferenciais` usam quase o mesmo formato de card e a mesma lógica de leitura.
Impacto na percepção/conversão: as duas seções parecem mais repetição do que progressão narrativa.
Melhoria recomendada: manter uma seção em grid de cards e converter a outra em processo, comparação, checklist de entrega ou prova objetiva.
Prioridade: Alta.

3. Problema encontrado: o card da foto no hero acumula glow, badges, overlay escuro e card interno de texto.
Impacto na percepção/conversão: a composição fica rica, mas um pouco carregada. O rosto perde parte do protagonismo para os efeitos.
Melhoria recomendada: simplificar a coluna direita para um retrato forte com um único bloco de prova, ou deslocar parte das badges para fora da imagem.
Prioridade: Média.

4. Problema encontrado: no card de projeto, o rodapé traz `Acessar projeto` e `Ver online`, que comunicam a mesma ação.
Impacto na percepção/conversão: há redundância de informação sem ganho real de clareza.
Melhoria recomendada: manter apenas um CTA textual claro no rodapé ou confiar na card inteira como área clicável, deixando o ícone superior como reforço visual.
Prioridade: Baixa.

5. Problema encontrado: a seção de contato mistura um card principal grande com uma grade de cards menores, o que funciona, mas gera dois níveis de densidade visual diferentes lado a lado.
Impacto na percepção/conversão: em algumas larguras o bloco esquerdo pesa mais e o direito parece complementar demais.
Melhoria recomendada: alinhar melhor a linguagem visual do card principal com os cards laterais, ou simplificar o bloco principal para reduzir diferença de massa.
Prioridade: Média.

## Projetos e mídia

1. Problema encontrado: os previews reais estão bem enquadrados, sem distorção e com proporção consistente. Isso é um acerto importante.
Impacto na percepção/conversão: o visitante vê que há trabalho real e não mockup genérico, o que aumenta confiança.
Melhoria recomendada: manter a proporção `16:10` e a consistência técnica atual.
Prioridade: Baixa.

2. Problema encontrado: a categoria `Sistemas` está disponível no filtro, mas não existe nenhum projeto nessa categoria na base atual.
Impacto na percepção/conversão: clicar em um filtro vazio faz o portfólio parecer incompleto ou antecipado demais.
Melhoria recomendada: esconder categorias vazias até existir pelo menos um case, ou publicar um case enxuto de sistema antes de expor essa categoria.
Prioridade: Alta.

3. Problema encontrado: os cards apresentam bem título, tipo, tecnologias e link, mas quase não trazem contexto de negócio.
Impacto na percepção/conversão: o portfólio prova execução visual, mas ainda prova pouco sobre entendimento de objetivo, segmento, desafio e resultado.
Melhoria recomendada: incluir um microcampo como `Objetivo`, `Cliente`, `Segmento`, `Resultado` ou `Foco do projeto`.
Prioridade: Alta.

4. Problema encontrado: com apenas três projetos, o filtro por categoria adiciona mais interface do que valor real.
Impacto na percepção/conversão: a interação existe, mas o volume atual não justifica totalmente o componente de filtragem.
Melhoria recomendada: se a quantidade continuar pequena, considerar trocar o filtro por `Projetos em destaque` + `Todos os projetos`, ou por chips que também mostrem contagem.
Prioridade: Média.

5. Problema encontrado: o preview do projeto `Nuvle` é visualmente mais escuro e mais carregado do que os demais.
Impacto na percepção/conversão: em miniatura, o card perde legibilidade mais rápido e o foco visual fica menos imediato.
Melhoria recomendada: criar capas de portfólio mais editoriais para os cases, com recorte mais controlado, ponto focal claro e consistência de leitura entre thumbnails.
Prioridade: Média.

## Ícones

1. Problema encontrado: a biblioteca escolhida é consistente. O uso de `lucide-react` cria unidade visual no projeto.
Impacto na percepção/conversão: isso ajuda a evitar mistura de estilos e melhora acabamento geral.
Melhoria recomendada: manter a mesma biblioteca.
Prioridade: Baixa.

2. Problema encontrado: há ícones demais distribuídos por eyebrow, botões, cards, social links, métricas e badges.
Impacto na percepção/conversão: o site fica mais “UI kit” do que “apresentação comercial”. Parte da sofisticação se perde pelo excesso de sinalização visual.
Melhoria recomendada: reduzir ícones onde o texto já comunica sozinho, principalmente em alguns cards e labels.
Prioridade: Média.

3. Problema encontrado: os tamanhos e containers dos ícones variam bastante entre seções.
Impacto na percepção/conversão: a consistência ainda é boa, mas o sistema visual poderia parecer mais intencional.
Melhoria recomendada: padronizar 2 ou 3 tamanhos de ícone e 2 tamanhos de container para todo o site.
Prioridade: Baixa.

## Responsividade

1. Problema encontrado: a arquitetura de grid está bem escolhida para `Projetos`, `Serviços` e `Diferenciais`.
Impacto na percepção/conversão: a malha tende a escalar bem entre mobile, tablet e desktop largo.
Melhoria recomendada: manter a lógica atual de `1 / 2 / 3 / 4` colunas para projetos.
Prioridade: Baixa.

2. Problema encontrado: o hero permanece empilhado até `xl`, o que prejudica principalmente `1024px`.
Impacto na percepção/conversão: existe perda de eficiência no primeiro viewport, especialmente em notebooks.
Melhoria recomendada: antecipar a divisão em colunas ou reduzir altura do bloco de prova.
Prioridade: Alta.

3. Problema encontrado: o `background-attachment: fixed` no `body` é visualmente interessante, mas costuma ser problemático em mobile.
Impacto na percepção/conversão: pode gerar scroll menos suave, repaint excessivo ou comportamento inconsistente em navegadores móveis.
Melhoria recomendada: remover o `fixed` em telas menores ou substituir por composição estática.
Prioridade: Média.

4. Problema encontrado: o botão flutuante do WhatsApp tem boa adaptação para desktop, mas pode competir com elementos fixos e com conteúdo próximo ao rodapé no mobile.
Impacto na percepção/conversão: risco de obstruir leitura ou tap targets em telas menores.
Melhoria recomendada: reservar espaço inferior nas seções finais, revisar distância do botão em telas pequenas e avaliar esconder o label em mais breakpoints.
Prioridade: Média.

5. Problema encontrado: a navegação móvel fecha por overlay, `Esc` e resize, o que é bom, mas não há evidência de focus trap dentro do menu.
Impacto na percepção/conversão: para teclado e acessibilidade, o comportamento pode ficar menos robusto do que o restante do cuidado visual sugere.
Melhoria recomendada: adicionar controle de foco no menu móvel se a navegação continuar crescendo.
Prioridade: Baixa.

## Experiência do usuário

1. Problema encontrado: a proposta de valor fala repetidamente em `sites`, `catálogos` e `sistemas`, mas fala pouco de transformação para o cliente.
Impacto na percepção/conversão: a mensagem informa serviço, mas ainda diferencia pouco seu posicionamento.
Melhoria recomendada: ajustar o copy para responder mais cedo a perguntas como `para quem`, `com que objetivo` e `qual ganho`.
Prioridade: Alta.

2. Problema encontrado: não existe seção de prova de confiança além dos projetos.
Impacto na percepção/conversão: clientes que precisam de segurança comercial podem sentir falta de contexto humano e operacional.
Melhoria recomendada: incluir `Sobre mim`, `Como eu trabalho`, `Etapas do projeto`, `Resultados` ou `Depoimentos`.
Prioridade: Alta.

3. Problema encontrado: a ação principal está clara, mas aparece em muitos lugares.
Impacto na percepção/conversão: em vez de conduzir, a página repete o mesmo pedido com pouco aumento de convicção.
Melhoria recomendada: concentrar a conversão em 2 ou 3 momentos fortes e usar os demais como apoio leve.
Prioridade: Média.

4. Problema encontrado: o empty state da categoria sem projetos é elegante do ponto de vista de interface, mas ruim do ponto de vista de venda.
Impacto na percepção/conversão: o usuário não quer descobrir ausência de material em um portfólio comercial.
Melhoria recomendada: evitar que o visitante chegue a estados vazios em áreas de prova.
Prioridade: Alta.

5. Problema encontrado: os elementos de acessibilidade existentes são bons e acima da média para um portfólio pessoal.
Impacto na percepção/conversão: foco visível, skip link, reduced motion e navegação por seção melhoram a usabilidade e passam sensação de capricho técnico.
Melhoria recomendada: preservar esses cuidados em qualquer redesign.
Prioridade: Baixa.

## Organização das seções

1. Problema encontrado: a home não possui seção `Sobre`, embora esse seja um bloco importante para negócios baseados em serviço.
Impacto na percepção/conversão: o visitante vê o que você entrega, mas conhece pouco quem entrega e como trabalha.
Melhoria recomendada: inserir uma seção curta de credibilidade entre `Projetos` e `Contato`, ou após `Serviços`.
Prioridade: Alta.

2. Problema encontrado: `Serviços` e `Diferenciais` aparecem como duas grades conceitualmente próximas.
Impacto na percepção/conversão: o visitante tende a ler a segunda seção como continuação pouco necessária da anterior.
Melhoria recomendada: manter `Serviços` como oferta e transformar `Diferenciais` em `Processo`, `Garantias de entrega` ou `Por que meus projetos convertem melhor`.
Prioridade: Alta.

3. Problema encontrado: o fechamento da página está longo em termos de intenção comercial, porque `Contato`, `CTA` e `Footer` seguem empilhados com mensagens parecidas.
Impacto na percepção/conversão: o encerramento perde tensão e autoridade.
Melhoria recomendada: encurtar a reta final e fazer o último bloco ter função clara e única.
Prioridade: Média.

4. Problema encontrado: `Projetos` logo após o hero é uma boa decisão e deve ser mantida.
Impacto na percepção/conversão: a prova visual aparece cedo, o que ajuda na venda.
Melhoria recomendada: manter a posição dos projetos e melhorar o que vem depois, em vez de jogar os cases para baixo.
Prioridade: Baixa.

## Organização de código

1. Problema encontrado: a organização geral do código é boa, com componentes por seção, tokens de Tailwind e dados centralizados.
Impacto na percepção/conversão: facilita iteração rápida e reduz risco de inconsistência ao evoluir a interface.
Melhoria recomendada: manter a arquitetura atual como base.
Prioridade: Baixa.

2. Problema encontrado: parte relevante do copy comercial ainda está hardcoded dentro dos componentes.
Impacto na percepção/conversão: ajustes de posicionamento, A/B de copy e refinamento do conteúdo ficam mais lentos do que poderiam.
Melhoria recomendada: mover textos fixos de cards, hero proofs, blocos internos e CTAs auxiliares para `src/data`.
Prioridade: Média.

3. Problema encontrado: existem muitos valores visuais arbitrários diretamente nas classes dos componentes, especialmente gradientes, raios e overlays.
Impacto na percepção/conversão: o resultado visual é bom, mas a consistência futura depende mais de memória do que de sistema.
Melhoria recomendada: transformar os padrões recorrentes em tokens ou variantes nomeadas para reduzir dispersão visual.
Prioridade: Média.

4. Problema encontrado: `projectCategories` é manual e pode divergir do catálogo real, o que já está acontecendo com `Sistemas`.
Impacto na percepção/conversão: a camada de apresentação expõe estados não sustentados pelo conteúdo.
Melhoria recomendada: derivar categorias do array de projetos ou criar uma regra explícita para esconder categorias vazias.
Prioridade: Alta.

5. Problema encontrado: a cobertura de testes ainda valida pouco da experiência principal.
Impacto na percepção/conversão: mudanças futuras podem quebrar navegação, CTAs ou conteúdo sem proteção automatizada suficiente.
Melhoria recomendada: adicionar testes de renderização das seções principais, presença dos CTAs centrais e coerência entre categorias exibidas e projetos disponíveis.
Prioridade: Média.

6. Problema encontrado: há classes utilitárias definidas para elementos que não existem na UI atual, como `input-base`.
Impacto na percepção/conversão: não afeta a experiência agora, mas indica que parte do sistema visual pode estar mais amplo do que o uso real.
Melhoria recomendada: manter apenas tokens usados de fato ou documentar os que são reservados para evolução futura.
Prioridade: Baixa.

## Quick wins

1. Esconder o filtro `Sistemas` até existir pelo menos um case nessa categoria.
2. Fundir `Contato` e `CTA` final em um único fechamento mais forte.
3. Reduzir o hero em `lg` para mostrar mais prova acima da dobra.
4. Reescrever hero e subtítulos de seção com foco em benefício, nicho e resultado.
5. Clarear o token de texto azul usado em labels pequenos e badges.
6. Simplificar a coluna da foto no hero, removendo uma camada de efeito e uma redundância de badge/copy.
7. Criar capas de portfólio mais editoriais para os projetos, especialmente para o case `Nuvle`.

## Melhorias estruturais

1. Inserir uma seção `Sobre / Processo / Como eu trabalho` para elevar confiança.
2. Reposicionar `Diferenciais` para um formato menos parecido com `Serviços`.
3. Concentrar a estratégia de conversão em menos pontos e com mais força narrativa.
4. Evoluir a paleta atual para um sistema dark mais editorial e menos dependente de azul ornamental.
5. Centralizar todo o copy comercial em arquivos de dados para facilitar iteração.
6. Criar regras de exibição baseadas no conteúdo real do catálogo, evitando filtros ou estados vazios.

## Direção recomendada para a próxima iteração

Se o objetivo é atrair clientes para sites, catálogos e sistemas web, a próxima versão não precisa necessariamente de mais efeitos visuais. Ela precisa de mais autoridade comercial. O caminho mais forte é:

1. manter a base dark e a organização técnica atual;
2. enxugar redundâncias;
3. adicionar prova de confiança;
4. tornar os projetos mais orientados a contexto e resultado;
5. deixar a interface menos “coleção de cards” e mais “apresentação estratégica de serviço”.

Essa combinação tem mais potencial de elevar percepção profissional do que apenas trocar cores ou aumentar animações.
