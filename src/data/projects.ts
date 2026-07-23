const projectCategoryOrder = ['Portfólio', 'Catálogos', 'Sistemas'] as const;

export type ProjectCategory = (typeof projectCategoryOrder)[number];

interface ProjectRecord {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  previewImage: string;
  projectUrl: string;
  segment: string;
  focus: string;
  technologies: string[];
  date: string;
  imageObjectPosition?: string;
}

export const projects: ProjectRecord[] = [
  {
    id: 'ronaldo-leao-nutri',
    title: 'Ronaldo Leão',
    category: 'Portfólio',
    description:
      'Landing page profissional criada para apresentar atendimento nutricional, especialidades e caminho direto para agendamento.',
    previewImage: '/projects/ronaldo-leao-preview.webp',
    projectUrl: 'https://ronaldoleao-nutri.vercel.app',
    segment: 'Nutrição',
    focus: 'Transmitir autoridade profissional e facilitar novos agendamentos',
    technologies: ['React', 'TypeScript', 'SEO'],
    date: '2026-07-22',
    imageObjectPosition: 'center top',
  },
  {
    id: 'monopolio-pods',
    title: 'Monopólio Pods',
    category: 'Catálogos',
    description:
      'Catálogo online criado para organizar os modelos, destacar sabores e facilitar o pedido direto pelo WhatsApp.',
    previewImage: '/projects/monopolio-preview.webp',
    projectUrl: 'https://monopoliopods.vercel.app',
    segment: 'Pods e acessórios',
    focus: 'Deixar a consulta mais rápida e simplificar o contato para pedido',
    technologies: ['React', 'Tailwind', 'Vite'],
    date: '2026-03-31',
    imageObjectPosition: 'center center',
  },
  {
    id: 'cosme-racoes',
    title: 'Cosme Rações',
    category: 'Catálogos',
    description:
      'Catálogo com navegação simples para apresentar produtos, separar categorias e agilizar o contato comercial.',
    previewImage: '/projects/cosme-preview.webp',
    projectUrl: 'https://cosme-racoes.vercel.app',
    segment: 'Pet shop',
    focus: 'Organizar os produtos para a busca ficar mais direta',
    technologies: ['React', 'TypeScript', 'Vite'],
    date: '2026-03-11',
    imageObjectPosition: 'center top',
  },
  {
    id: 'nuvle',
    title: 'Nuvle',
    category: 'Catálogos',
    description:
      'Vitrine digital pensada para valorizar as peças, reforçar identidade visual e deixar a navegação mais fluida.',
    previewImage: '/projects/nuvle-preview.webp',
    projectUrl: 'https://nuvle.vercel.app',
    segment: 'Moda streetwear',
    focus: 'Valorizar produto e facilitar a compra',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    date: '2026-02-14',
    imageObjectPosition: 'center 18%',
  },
  {
    id: 'gabriela-mendes',
    title: 'Gabriela Mendes',
    category: 'Portfólio',
    description:
      'Portfólio profissional desenvolvido para apresentar o trabalho com mais clareza e transmitir confiança já no primeiro acesso.',
    previewImage: '/projects/gabriela-preview.webp',
    projectUrl: 'https://portifoliogabriela.vercel.app',
    segment: 'Nutrição infantil',
    focus: 'Fortalecer a presença profissional e incentivar novos agendamentos',
    technologies: ['React', 'TypeScript', 'SEO'],
    date: '2025-11-08',
    imageObjectPosition: 'left top',
  },
];

export const getAvailableProjectCategories = (items: ProjectRecord[]) =>
  projectCategoryOrder.filter((category) =>
    items.some((project) => project.category === category)
  );
