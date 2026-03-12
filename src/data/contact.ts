import type { LucideIcon } from 'lucide-react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export const contactInfo = {
  email: 'marcelohabm@gmail.com',
  whatsappNumber: '5581998916570',
  githubUrl: 'https://github.com/marceloohenr',
  githubLabel: 'github.com/marceloohenr',
  instagramUrl: 'https://instagram.com/marceloohenr',
  instagramLabel: '@marceloohenr',
  linkedinUrl: 'https://www.linkedin.com/in/marcelo-henrique-malagueta-64b35224a/',
  linkedinLabel: 'Marcelo Henrique Malagueta',
} as const;

interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: contactInfo.linkedinLabel,
    href: contactInfo.linkedinUrl,
    icon: Linkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: contactInfo.githubLabel,
    href: contactInfo.githubUrl,
    icon: Github,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: contactInfo.instagramLabel,
    href: contactInfo.instagramUrl,
    icon: Instagram,
  },
];
