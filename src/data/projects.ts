export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfólio Gabriela Mendes',
    client: 'Nutricionista',
    description: 'Site institucional premium desenvolvido para profissional da saúde, com foco em autoridade e conversão.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    link: '#',
  },
  {
    id: 2,
    title: 'Landing Page Comercial',
    client: 'E-commerce',
    description: 'Landing page de alta conversão com foco em vendas e captação de leads qualificados.',
    technologies: ['React', 'Tailwind CSS', 'Performance Otimizada'],
    link: '#',
  },
  {
    id: 3,
    title: 'Site Corporativo',
    client: 'Consultoria',
    description: 'Plataforma institucional completa com múltiplas páginas e integração com formulários.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
];
