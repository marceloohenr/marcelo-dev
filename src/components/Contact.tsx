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

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-shell section-anchor">
      <div className="content-shell">
        <Reveal>
          <div className="card-base relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_40%),radial-gradient(circle_at_90%_18%,rgba(96,165,250,0.14),transparent_22%),linear-gradient(135deg,rgba(37,99,235,0.06),rgba(8,17,29,0.1))]" />
            <div className="surface-grid absolute inset-0 opacity-[0.05]" />

            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
              <div className="min-w-0 text-center lg:text-left">
                <div className="section-eyebrow">
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>{siteMetadata.contactEyebrow}</span>
                </div>

                <h2
                  id="contato-title"
                  className="mx-auto mt-5 max-w-[18ch] text-balance font-display text-h1 text-text-primary lg:mx-0"
                >
                  {siteMetadata.contactTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-[38rem] text-pretty text-body-lg text-text-secondary lg:mx-0">
                  {siteMetadata.contactDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
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

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                  <span className="social-pill">
                    {siteMetadata.finalAvailabilityLabel}
                  </span>
                </div>
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
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-500/10 text-brand-300">
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
                          <span className="text-caption font-semibold uppercase tracking-[0.14em] text-brand-300">
                            Abrir
                          </span>
                          <ArrowUpRight size={18} aria-hidden="true" className="text-brand-300" />
                        </div>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
