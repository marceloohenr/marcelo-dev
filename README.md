# Portfólio

Este repositório reúne o meu portfólio pessoal como desenvolvedor web. Montei esse projeto para apresentar meu trabalho, mostrar alguns projetos publicados e deixar os canais de contato mais acessíveis para quem quiser conversar sobre uma ideia, site ou sistema.

A aplicação foi feita com React, TypeScript, Vite e Tailwind CSS.

## Como rodar

```bash
npm install
npm run dev
```

## Scripts disponíveis

- `npm run dev` inicia o ambiente de desenvolvimento
- `npm run build` gera e valida o HTML estático em português e inglês
- `npm run lint` verifica o código com ESLint
- `npm run typecheck` valida os tipos com TypeScript
- `npm run test` roda os testes do projeto
- `npm run preview` serve o build local para revisão

## Estrutura

Os componentes ficam em `src/components`, os dados principais em `src/data` e os estilos globais em `src/index.css`.

Sempre que eu precisar atualizar textos, links, projetos ou informações de contato, a maior parte disso está centralizada na pasta `src/data`.

## Idiomas e SEO

Português usa `/` e inglês usa `/en/`. O botão de idioma é um link real e
preserva os parâmetros e a seção atual. Não há redirecionamento por localização.

Textos em português ficam nos componentes/dados; as traduções ficam em
`src/i18n/messages.ts`. Novos textos precisam de uma tradução correspondente.
Títulos, descrições, canonical, hreflang e dados estruturados são centralizados
em `src/data/seo.ts`. O sitemap fica em `public/sitemap.xml`.

O build executa `scripts/prerender.mjs` e `scripts/verify-build.mjs`, gerando
`dist/index.html` e `dist/en/index.html` com conteúdo legível sem JavaScript.
React continua responsável pelos filtros, menu e animações no navegador.

## Publicação

O destino deste portfólio é `marcelodev.online`. Quando a publicação for
autorizada, servir toda a pasta `dist`, incluindo `en/index.html`, assets e
sitemap. Nenhum comando de build faz commit, push ou deploy.

Configuração de build:

- build command: `npm run build`
- output directory: `dist`

Os redirecionamentos em `vercel.json` são dos domínios legados e devem ser
preservados. Depois do deploy, conferir `/` e `/en/` e enviar o sitemap no
Search Console. SEO técnico não garante indexação ou posição nas buscas.
