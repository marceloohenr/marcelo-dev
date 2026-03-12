# Marcelo Henrique | Portfólio Web

Portfólio em React + TypeScript voltado para captação de clientes interessados em sites, catálogos online e sistemas web.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Vitest
- Testing Library

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

## Estrutura principal

```text
src/
├── components/
│   ├── SiteHead.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── data/
│   ├── site.ts
│   ├── hero.ts
│   ├── process.ts
│   ├── contact.ts
│   ├── projects.ts
│   └── services.ts
├── test/
│   └── setup.ts
└── index.css
```

## Fonte de verdade

- [src/data/site.ts](src/data/site.ts): copy principal, labels, navegação e metadados usados pelo `SiteHead`.
- [src/data/hero.ts](src/data/hero.ts): provas rápidas e bloco de credibilidade do hero.
- [src/data/process.ts](src/data/process.ts): checklist de entrega, etapas e destaques do processo.
- [src/data/contact.ts](src/data/contact.ts): e-mail, WhatsApp e redes profissionais.
- [src/data/projects.ts](src/data/projects.ts): catálogo dinâmico de projetos com filtros por categoria.
- [src/data/services.ts](src/data/services.ts): serviços principais exibidos na home.

## Projetos dinâmicos

Cada projeto usa a estrutura abaixo:

```ts
{
  id: 'slug-do-projeto',
  title: 'Nome do projeto',
  category: 'Sites',
  projectType: 'Site profissional',
  description: 'Resumo curto do projeto',
  previewImage: '/projects/capa-do-projeto.jpg',
  projectUrl: 'https://url-do-projeto.com',
  segment: 'Segmento do cliente',
  focus: 'Objetivo central do projeto',
  technologies: ['React', 'TypeScript'],
  date: '2026-03-12',
  isFeatured: true,
}
```

Campos:

- `category`: usada pelos filtros (`Sites`, `Catálogos`, `Sistemas`).
- `projectType`: rótulo exibido no card.
- `previewImage`: imagem real usada no preview do projeto.
- `segment`: contexto de negócio mostrado dentro do card.
- `focus`: objetivo principal comunicado no case.
- `technologies`: lista curta de tecnologias mostrada no card.
- `isFeatured`: badge opcional para destacar projetos.

## SEO e metadados

O componente [src/components/SiteHead.tsx](src/components/SiteHead.tsx) sincroniza título, descrição, OG, Twitter, canonical e JSON-LD a partir de [src/data/site.ts](src/data/site.ts).

## Direção visual

- Fundo base: `#08111d`
- Fundo secundário: `#0f172a`
- Superfície: `#162033`
- Azul primário: `#2563eb`
- Azul destaque: `#93c5fd`
- Verde de ação: `#22c55e`
- Texto principal: `#f5f7fb`
- Texto secundário: `#b6c2d2`

## Deploy

Deploy padrão com Vercel ou Netlify usando:

- Build command: `npm run build`
- Output directory: `dist`
