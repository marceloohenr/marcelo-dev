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
                <p className="section-subtitle mx-0 max-w-2xl text-left text-pretty">
                  {siteMetadata.contactDescription}
                </p>
              </header>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 card-base p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-state-success/[0.35] bg-state-success/[0.12] text-state-success">
                    <BadgeCheck size={22} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-caption uppercase tracking-[0.18em] text-state-success">
                      Atendimento
                    </p>
                    <p className="mt-2 text-pretty text-body text-text-secondary">
                      Foco em resposta rápida, comunicação clara e direcionamento direto para o tipo
                      de projeto que você precisa.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              const isExternal = !channel.href.startsWith('mailto:');

              return (
                <Reveal key={channel.id} delay={120 + index * 70}>
                  <a
                    href={channel.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="card-link flex min-w-0 flex-col gap-4 p-5 min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-300/25 bg-brand-400/10 text-brand-300">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                          {channel.label}
                        </p>
                        <p className="safe-break mt-1 text-body font-semibold text-text-primary">
                          {channel.value}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="status-pill-primary">{channel.badge}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-bg-base/[0.72] text-brand-300">
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={420}>
              <div className="card-base p-5 sm:p-6">
                <p className="text-caption uppercase tracking-[0.18em] text-brand-300">
                  Canal principal
                </p>
                <h3 className="mt-3 text-balance font-display text-h3 text-text-primary">
                  WhatsApp para acelerar briefing, prazo e próximos passos.
                </h3>
                <p className="mt-3 text-pretty text-body text-text-secondary">
                  Se quiser uma conversa mais objetiva, o WhatsApp é o melhor caminho para alinhar o
                  tipo de site, catálogo ou sistema com mais rapidez.
                </p>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
