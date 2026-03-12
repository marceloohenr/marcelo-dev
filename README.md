# Marcelo Henrique | Home Comercial

Landing page em React + TypeScript criada para captação de clientes interessados em sites, catálogos online e sistemas web.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Estrutura principal

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Differentials.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── data/
│   ├── site.ts
│   ├── contact.ts
│   ├── projects.ts
│   ├── services.ts
│   └── differentials.ts
└── index.css
```

## Personalização rápida

- `src/data/site.ts`: copy principal da página, labels dos CTAs e itens da navegação.
- `src/data/contact.ts`: WhatsApp, e-mail e LinkedIn.
- `src/data/projects.ts`: vitrine dinâmica de projetos. Novos cards entram automaticamente no grid.
- `src/data/services.ts`: três serviços principais exibidos na home.
- `src/data/differentials.ts`: diferenciais curtos da entrega.

## Projetos dinâmicos

Cada projeto usa a estrutura abaixo:

```ts
{
  id: 'slug-do-projeto',
  name: 'Nome do projeto',
  category: 'Portfólio profissional',
  previewImage: '/projects/capa-do-projeto.svg',
  projectUrl: 'https://url-do-projeto.com',
  date: '2026-03-12',
}
```

Campos:

- `category`: `Portfólio profissional`, `Catálogo online`, `Site institucional` ou `Sistema web`.
- `previewImage`: capa usada no card; se falhar, o componente gera fallback visual.
- `projectUrl`: opcional. Sem ele, o card continua visível, mas não clicável.

## Direção visual

- Fundo base: `#0f172a`
- Azul primário: `#2563eb`
- Azul destaque: `#3b82f6`
- Texto principal: `#f1f5f9`
- Texto secundário: `#94a3b8`
- Tipografia: `Sora` para títulos e `Manrope` para texto

## Deploy

Deploy padrão com Vercel ou Netlify usando:

- Build command: `npm run build`
- Output directory: `dist`
