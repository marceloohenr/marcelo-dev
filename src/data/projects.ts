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
  previewImage?: string;
  projectUrl?: string;
  date: string;
}

export const projects: ProjectRecord[] = [
  {
    id: 'cosme-racoes',
    name: 'Cosme Rações',
    category: 'Catálogo online',
    previewImage: '/projects/cosme-preview.svg',
    projectUrl: 'https://cosme-racoes.vercel.app',
    date: '2026-03-11',
  },
  {
    id: 'nuvle',
    name: 'Nuvle',
    category: 'Catálogo online',
    previewImage: '/projects/nuvle-preview.svg',
    projectUrl: 'https://nuvle.vercel.app',
    date: '2026-02-14',
  },
  {
    id: 'gabriela-mendes',
    name: 'Gabriela Mendes',
    category: 'Portfólio profissional',
    previewImage: '/projects/gabriela-preview.svg',
    projectUrl: 'https://portifoliogabriela.vercel.app',
    date: '2025-11-08',
  },
  {
    id: 'site-institucional-comercial',
    name: 'Site Institucional Comercial',
    category: 'Site institucional',
    previewImage: '/projects/site-preview.svg',
    date: '2025-05-27',
  },
];
