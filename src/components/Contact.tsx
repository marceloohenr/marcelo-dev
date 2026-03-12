import {
  ArrowUpRight,
  BadgeCheck,
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
    id: 'whatsapp',
    label: 'WhatsApp',
    value: contactInfo.displayPhone,
    href: getWhatsappBaseUrl(contactInfo.whatsappNumber),
    icon: MessageCircle,
    badge: 'Contato imediato',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: contactInfo.instagramLabel,
    href: contactInfo.instagramUrl,
    icon: Instagram,
    badge: 'Rede ativa',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: contactInfo.linkedinLabel,
    href: contactInfo.linkedinUrl,
    icon: Linkedin,
    badge: 'Perfil profissional',
  },
  {
    id: 'email',
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
    badge: 'Orçamento detalhado',
  },
] as const;

const Contact = () => {
  const budgetUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-shell section-anchor">
      <div className="content-shell">
        <Reveal>
          <header className="section-header">
            <div className="section-eyebrow">
              <MessageCircle size={16} aria-hidden="true" />
              <span>{siteMetadata.contactEyebrow}</span>
            </div>
            <h2 id="contato-title" className="section-title">
              {siteMetadata.contactTitle}
            </h2>
            <p className="section-subtitle text-pretty">{siteMetadata.contactDescription}</p>
          </header>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <Reveal className="h-full">
            <div className="card-balanced">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-state-success/[0.35] bg-state-success/[0.12] text-state-success">
                <BadgeCheck size={22} aria-hidden="true" />
              </div>
              <p className="mt-5 text-caption uppercase tracking-[0.18em] text-state-success">
                Atendimento
              </p>
              <h3 className="mt-3 text-balance font-display text-h3 text-text-primary">
                Comunicação direta para alinhar objetivo, prazo e formato do projeto.
              </h3>
              <p className="card-copy mt-3 text-pretty text-body text-text-secondary">
                WhatsApp para retorno rápido e redes sociais para acompanhar meu trabalho e facilitar
                o primeiro contato.
              </p>

              <div className="mt-6 rounded-[1.15rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                  Serviço oferecido
                </p>
                <p className="mt-2 text-body text-text-primary">
                  Desenvolvimento de sites e sistemas para profissionais e empresas.
                </p>
              </div>

              <a
                href={budgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 sm:min-w-[15rem]"
              >
                {siteMetadata.heroPrimaryCtaLabel}
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              const isExternal = !channel.href.startsWith('mailto:');

              return (
                <Reveal key={channel.id} className="h-full" delay={100 + index * 70}>
                  <a
                    href={channel.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="card-link flex h-full min-w-0 flex-col justify-between gap-5 p-5 sm:p-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300/25 bg-brand-400/10 text-brand-300">
                          <Icon size={20} aria-hidden="true" />
                        </div>
                        <span className="status-pill-primary">{channel.badge}</span>
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

                    <div className="flex items-center justify-end border-t border-white/10 pt-4 text-brand-300">
                      <ArrowUpRight size={18} aria-hidden="true" />
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
