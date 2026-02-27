export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nuvle',
    client: 'Marca de roupa',
    description:
      'E-commerce desenvolvido para a marca Nuvle, com foco em apresentação estratégica dos produtos, fortalecimento da identidade visual e otimização da conversão em vendas.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://nuvle.vercel.app',
  },
  {
    id: 2,
    title: 'Portfólio Gabriela Mendes',
    client: 'Nutricionista',
    description:
      'Portfólio institucional desenvolvido para fortalecer o posicionamento da nutricionista Gabriela Mendes, ampliar sua autoridade no mercado e gerar novos contatos comerciais.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://portifoliogabriela.vercel.app',
  },
  {
    id: 3,
    title: 'Landing Page Comercial',
    client: 'E-commerce',
    description:
      'Landing page de alta conversão com foco em vendas e captação de leads qualificados.',
    technologies: ['React', 'Tailwind CSS', 'Performance Otimizada'],
  },
];

