export const projectCategories = ['Sites', 'Catálogos', 'Sistemas'] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface ProjectRecord {
  id: string;
  title: string;
  category: ProjectCategory;
  projectType: 'Site profissional' | 'Catálogo online' | 'Sistema web';
  description: string;
  previewImage: string;
  projectUrl: string;
  technologies: string[];
  date: string;
  isFeatured?: boolean;
}

export const projects: ProjectRecord[] = [
  {
    id: 'cosme-racoes',
    title: 'Cosme Rações',
    category: 'Catálogos',
    projectType: 'Catálogo online',
    description:
      'Catálogo online com navegação clara para apresentação de produtos e contato comercial rápido.',
    previewImage: '/projects/cosme-preview.png',
    projectUrl: 'https://cosme-racoes.vercel.app',
    technologies: ['React', 'TypeScript', 'Vite'],
    date: '2026-03-11',
    isFeatured: true,
  },
  {
    id: 'nuvle',
    title: 'Nuvle',
    category: 'Catálogos',
    projectType: 'Catálogo online',
    description:
      'Vitrine digital para produtos com foco em organização visual, apresentação premium e conversão.',
    previewImage: '/projects/nuvle-preview.png',
    projectUrl: 'https://nuvle.vercel.app',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    date: '2026-02-14',
    isFeatured: true,
  },
  {
    id: 'gabriela-mendes',
    title: 'Gabriela Mendes',
    category: 'Sites',
    projectType: 'Site profissional',
    description:
      'Site profissional com posicionamento claro, imagem forte e foco em credibilidade para atendimento.',
    previewImage: '/projects/gabriela-preview.png',
    projectUrl: 'https://portifoliogabriela.vercel.app',
    technologies: ['React', 'TypeScript', 'SEO'],
    date: '2025-11-08',
  },
];
