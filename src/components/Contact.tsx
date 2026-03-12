import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from 'lucide-react';
import Reveal from './Reveal';
import { contactChannels, contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';

const Contact = () => {
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);
  const primaryChannels = contactChannels.slice(0, 2);
  const secondaryChannels = contactChannels.slice(2);

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-shell section-anchor">
      <div className="content-shell">
        <Reveal>
          <div className="card-base relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_40%),radial-gradient(circle_at_90%_18%,rgba(96,165,250,0.14),transparent_22%),linear-gradient(135deg,rgba(37,99,235,0.06),rgba(8,17,29,0.1))]" />
            <div className="surface-grid absolute inset-0 opacity-[0.05]" />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,24rem)] lg:gap-12">
              <div className="min-w-0 text-center lg:text-left">
                <div className="flex flex-col gap-6 lg:gap-7">
                  <div className="section-eyebrow self-center lg:self-start">
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>{siteMetadata.contactEyebrow}</span>
                  </div>

                  <div className="space-y-5">
                    <h2
                      id="contato-title"
                      className="mx-auto max-w-[18ch] text-balance font-display text-h1 text-text-primary lg:mx-0"
                    >
                      {siteMetadata.contactTitle}
                    </h2>
                    <p className="mx-auto max-w-[34rem] text-pretty text-[1.02rem] leading-[1.82] text-text-secondary lg:mx-0">
                      {siteMetadata.contactDescription}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp min-h-14 px-7 text-body-lg sm:min-w-[16rem]"
                    >
                      {siteMetadata.budgetLabel}
                      <MessageCircle size={18} aria-hidden="true" />
                    </a>

                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="btn-secondary min-h-14 px-7 text-body-lg sm:min-w-[14rem]"
                    >
                      {siteMetadata.emailCtaLabel}
                      <Mail size={18} aria-hidden="true" />
                    </a>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                    <span className="social-pill">{siteMetadata.finalAvailabilityLabel}</span>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[24rem] lg:ml-auto lg:mr-0">
                <div className="card-base p-6 sm:p-7">
                  <div className="space-y-3">
                    <p className="text-caption uppercase tracking-[0.16em] text-brand-300">
                      Canais profissionais
                    </p>
                    <p className="text-[0.96rem] leading-[1.72] text-text-muted">
                      Email e perfis para contato, referência e acompanhamento.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col divide-y divide-white/10">
                    {primaryChannels.map((channel, index) => {
                      const Icon = channel.icon;
                      const isExternal = !channel.href.startsWith('mailto:');

                      return (
                        <Reveal
                          key={channel.id}
                          delay={120 + index * 70}
                          className="py-5 first:pt-0 last:pb-4"
                        >
                          <a
                            href={channel.href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            className="focus-ring group flex items-center gap-4"
                          >
                            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-500/10 text-brand-300">
                              <Icon size={18} aria-hidden="true" />
                            </div>

                            <div className="min-w-0 flex-1 text-left">
                              <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                                {channel.label}
                              </p>
                              <p className="safe-break mt-1.5 text-body font-semibold text-text-primary">
                                {channel.value}
                              </p>
                            </div>

                            <ArrowUpRight
                              size={18}
                              aria-hidden="true"
                              className="shrink-0 text-brand-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </a>
                        </Reveal>
                      );
                    })}
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                      {secondaryChannels.map((channel, index) => {
                        const Icon = channel.icon;

                        return (
                          <Reveal key={channel.id} delay={260 + index * 60}>
                            <a
                              href={channel.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-pill"
                            >
                              <Icon size={16} aria-hidden="true" />
                              {channel.label}
                            </a>
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
