export const projectCategories = [
  'Portfólio profissional',
  'Catálogo online',
  'Site institucional',
  'Sistema web',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface ProjectRecord {
  id: string;
  name: string;
  category: ProjectCategory;
  previewImage: string;
  projectUrl?: string;
  date: string;
  isNew?: boolean;
  ctaLabel?: string;
}

export const projects: ProjectRecord[] = [
  {
    id: 'cosme-racoes',
    name: 'Cosme Rações',
    category: 'Catálogo online',
    previewImage: '/projects/cosme-preview.png',
    projectUrl: 'https://cosme-racoes.vercel.app',
    date: '2026-03-11',
    isNew: true,
    ctaLabel: 'Ver projeto',
  },
  {
    id: 'nuvle',
    name: 'Nuvle',
    category: 'Catálogo online',
    previewImage: '/projects/nuvle-preview.png',
    projectUrl: 'https://nuvle.vercel.app',
    date: '2026-02-14',
    isNew: true,
    ctaLabel: 'Ver projeto',
  },
  {
    id: 'gabriela-mendes',
    name: 'Gabriela Mendes',
    category: 'Portfólio profissional',
    previewImage: '/projects/gabriela-preview.png',
    projectUrl: 'https://portifoliogabriela.vercel.app',
    date: '2025-11-08',
    ctaLabel: 'Ver projeto',
  },
];
