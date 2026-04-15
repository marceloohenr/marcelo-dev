# Portfólio pessoal

Este é o meu portfólio web, feito para apresentar meus serviços, mostrar projetos publicados e facilitar o contato de quem quiser tirar uma ideia do papel.

O projeto foi desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: inicia o ambiente de desenvolvimento
- `npm run build`: gera a versão de produção
- `npm run lint`: verifica o código com ESLint
- `npm run typecheck`: valida os tipos com TypeScript
- `npm run test`: roda os testes

## Organização

Os componentes ficam em `src/components`, os textos e dados principais em `src/data` e os estilos globais em `src/index.css`.

Se eu precisar atualizar textos, links, projetos ou informações de contato, a maior parte disso está centralizada na pasta `src/data`.

## Publicação

O deploy pode ser feito em serviços como Vercel ou Netlify usando:

- build command: `npm run build`
- output directory: `dist`
