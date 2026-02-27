import { Code2, Rocket, Briefcase, Zap, Wrench } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Desenvolvimento de Site Institucional',
    description: 'Sites profissionais completos para empresas e negócios que buscam autoridade digital.',
    icon: Code2,
  },
  {
    id: 2,
    title: 'Landing Pages',
    description: 'Páginas de alta conversão focadas em captação de leads e vendas online.',
    icon: Rocket,
  },
  {
    id: 3,
    title: 'Portfólio Profissional',
    description: 'Portfólios elegantes para profissionais que querem se destacar no mercado.',
    icon: Briefcase,
  },
  {
    id: 4,
    title: 'Otimização de Performance',
    description: 'Análise e otimização de sites existentes para melhor velocidade e experiência.',
    icon: Zap,
  },
  {
    id: 5,
    title: 'Manutenção e Suporte',
    description: 'Suporte contínuo para manter seu site sempre atualizado e funcionando perfeitamente.',
    icon: Wrench,
  },
];
