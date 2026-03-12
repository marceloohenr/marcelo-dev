import {
  ArrowUpRight,
  BadgeCheck,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl, getWhatsappBaseUrl } from '../utils/contact';

const contactChannels = [
  {
    id: 'github',
    label: 'GitHub',
    value: contactInfo.githubLabel,
    href: contactInfo.githubUrl,
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: contactInfo.linkedinLabel,
    href: contactInfo.linkedinUrl,
    icon: Linkedin,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: contactInfo.instagramLabel,
    href: contactInfo.instagramUrl,
    icon: Instagram,
  },
  {
    id: 'email',
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
] as const;

const Contact = () => {
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-shell section-anchor">
      <div className="content-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <div className="min-w-0">
            <Reveal>
              <header className="max-w-2xl">
                <div className="section-eyebrow">
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>{siteMetadata.contactEyebrow}</span>
                </div>
                <h2 id="contato-title" className="section-title text-left">
                  {siteMetadata.contactTitle}
                </h2>
                <p className="section-subtitle mx-0 max-w-[36rem] text-left text-pretty">
                  {siteMetadata.contactDescription}
                </p>
              </header>
            </Reveal>

            <Reveal delay={90}>
              <div className="card-balanced mt-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-state-success/35 bg-state-success/12 text-state-success">
                  <BadgeCheck size={22} aria-hidden="true" />
                </div>
                <p className="mt-5 text-caption uppercase tracking-[0.18em] text-state-success">
                  Canal principal
                </p>
                <h3 className="mt-3 text-balance font-display text-h3 text-text-primary">
                  Atendimento rápido pelo WhatsApp para alinhar escopo, prazo e próximos passos.
                </h3>
                <p className="card-copy mt-3 text-pretty text-body text-text-secondary">
                  Ideal para quem quer tirar um projeto do papel com mais clareza e iniciar a conversa
                  sem fricção.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp sm:min-w-[15rem]"
                  >
                    {siteMetadata.budgetLabel}
                    <MessageCircle size={18} aria-hidden="true" />
                  </a>

                  <a
                    href={getWhatsappBaseUrl(contactInfo.whatsappNumber)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill text-text-primary"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    {contactInfo.displayPhone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              const isExternal = !channel.href.startsWith('mailto:');

              return (
                <Reveal key={channel.id} className="h-full" delay={120 + index * 70}>
                  <a
                    href={channel.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="card-link flex h-full min-w-0 flex-col justify-between gap-5 p-5 sm:p-6"
                  >
                    <div className="space-y-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/25 bg-brand-500/10 text-brand-400">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                          {channel.label}
                        </p>
                        <p className="safe-break mt-2 text-body font-semibold text-text-primary">
                          {channel.value}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-caption font-semibold uppercase tracking-[0.14em] text-brand-400">
                        Abrir
                      </span>
                      <ArrowUpRight size={18} aria-hidden="true" className="text-brand-400" />
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
