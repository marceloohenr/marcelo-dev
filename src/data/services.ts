import type { LucideIcon } from 'lucide-react';
import { BookImage, Building2, Monitor } from 'lucide-react';

interface Service {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'sites-profissionais',
    eyebrow: 'Presença digital',
    title: 'Sites profissionais',
    description:
      'Sites para apresentar um serviço com mais clareza, passar confiança e facilitar o próximo passo de quem visita.',
    deliverables: ['Institucionais', 'Landing pages', 'Portfólios'],
    icon: Building2,
  },
  {
    id: 'catalogos-online',
    eyebrow: 'Produtos e vendas',
    title: 'Catálogos online',
    description:
      'Catálogos pensados para organizar produtos, valorizar categorias e tornar o atendimento comercial mais simples.',
    deliverables: ['Vitrines digitais', 'Catálogos por categoria', 'Listagens com busca'],
    icon: BookImage,
  },
  {
    id: 'sistemas-web',
    eyebrow: 'Operação e gestão',
    title: 'Sistemas web personalizados',
    description:
      'Sistemas e painéis para reunir rotinas internas em uma interface mais organizada e prática de usar.',
    deliverables: ['Áreas internas', 'Painéis administrativos', 'Fluxos sob medida'],
    icon: Monitor,
  },
];
