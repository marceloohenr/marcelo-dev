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
- `npm run build` gera a versão de produção
- `npm run lint` verifica o código com ESLint
- `npm run typecheck` valida os tipos com TypeScript
- `npm run test` roda os testes do projeto

## Estrutura

Os componentes ficam em `src/components`, os dados principais em `src/data` e os estilos globais em `src/index.css`.

Sempre que eu precisar atualizar textos, links, projetos ou informações de contato, a maior parte disso está centralizada na pasta `src/data`.

## Deploy

O projeto pode ser publicado normalmente em Vercel ou Netlify usando:

- build command: `npm run build`
- output directory: `dist`
