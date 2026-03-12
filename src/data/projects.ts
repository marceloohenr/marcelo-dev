export const projectCategoryOrder = ['Portfólio', 'Catálogos', 'Sistemas'] as const;

export type ProjectCategory = (typeof projectCategoryOrder)[number];

export interface ProjectRecord {
  id: string;
  title: string;
  category: ProjectCategory;
  projectType: 'Portfólio profissional' | 'Catálogo online' | 'Sistema web';
  description: string;
  previewImage: string;
  projectUrl: string;
  segment: string;
  focus: string;
  technologies: string[];
  date: string;
  isFeatured?: boolean;
  imageObjectPosition?: string;
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
    segment: 'Pet shop e rações',
    focus: 'Consulta rápida de produtos e categorias',
    technologies: ['React', 'TypeScript', 'Vite'],
    date: '2026-03-11',
    isFeatured: true,
    imageObjectPosition: 'center top',
  },
  {
    id: 'nuvle',
    title: 'Nuvle',
    category: 'Catálogos',
    projectType: 'Catálogo online',
    description:
      'Vitrine digital para produtos com foco em organização visual, identidade forte e jornada de compra mais clara.',
    previewImage: '/projects/nuvle-preview.png',
    projectUrl: 'https://nuvle.vercel.app',
    segment: 'Moda streetwear',
    focus: 'Valorizar produto e facilitar a compra',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    date: '2026-02-14',
    isFeatured: true,
    imageObjectPosition: 'center 18%',
  },
  {
    id: 'gabriela-mendes',
    title: 'Gabriela Mendes',
    category: 'Portfólio',
    projectType: 'Portfólio profissional',
    description:
      'Portfólio profissional com posicionamento claro, imagem forte e foco em credibilidade para atendimento.',
    previewImage: '/projects/gabriela-preview.png',
    projectUrl: 'https://portifoliogabriela.vercel.app',
    segment: 'Nutrição infantil',
    focus: 'Transmitir confiança e incentivar agendamentos',
    technologies: ['React', 'TypeScript', 'SEO'],
    date: '2025-11-08',
    imageObjectPosition: 'left top',
  },
];

export const getAvailableProjectCategories = (items: ProjectRecord[]) =>
  projectCategoryOrder.filter((category) =>
    items.some((project) => project.category === category)
  );
