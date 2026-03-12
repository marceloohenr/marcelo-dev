import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { buildWhatsappUrl, getWhatsappBaseUrl } from '../utils/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const whatsappBaseUrl = getWhatsappBaseUrl(contactInfo.whatsappNumber);
  const isFormValid = Boolean(
    formData.name.trim() && formData.email.trim() && formData.message.trim()
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      return;
    }

    const whatsappMessage = [
      'Olá! Gostaria de falar sobre um novo projeto.',
      `Nome: ${name}`,
      `Email: ${email}`,
      `Mensagem: ${message}`,
    ].join('\n');

    window.open(
      buildWhatsappUrl(contactInfo.whatsappNumber, whatsappMessage),
      '_blank',
      'noopener,noreferrer'
    );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-shell section-anchor">
      <div className="content-shell">
        <Reveal>
          <header className="section-header">
            <div className="section-eyebrow">
              <MessageCircle size={16} aria-hidden="true" />
              <span>Contato direto e rápido</span>
            </div>
            <h2 id="contato-title" className="section-title">
              Vamos conversar sobre o seu projeto.
            </h2>
            <p className="section-subtitle text-pretty">
              Escolha o canal mais prático para você ou envie uma mensagem pelo formulário abaixo.
            </p>
          </header>
        </Reveal>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="space-y-4">
            <Reveal delay={80}>
              <a
                href={whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link flex flex-col gap-4 p-5 min-[520px]:flex-row min-[520px]:items-center min-[520px]:justify-between"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-button border border-brand-400/25 bg-brand-400/10">
                    <MessageCircle className="text-brand-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-caption uppercase tracking-[0.15em] text-text-muted">WhatsApp</p>
                    <p className="safe-break text-body font-semibold text-text-primary">
                      {contactInfo.displayPhone}
                    </p>
                  </div>
                </div>
                <span className="chip-base self-start min-[520px]:self-auto">Contato imediato</span>
              </a>
            </Reveal>

            <Reveal delay={150}>
              <a
                href={`mailto:${contactInfo.email}`}
                className="card-link flex items-start gap-4 p-5 min-[520px]:items-center"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-button border border-brand-400/25 bg-brand-400/10">
                  <Mail className="text-brand-400" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-caption uppercase tracking-[0.15em] text-text-muted">Email</p>
                  <p className="safe-break text-body font-semibold text-text-primary">{contactInfo.email}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link flex items-start gap-4 p-5 min-[520px]:items-center"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-button border border-brand-400/25 bg-brand-400/10">
                  <Linkedin className="text-brand-400" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-caption uppercase tracking-[0.15em] text-text-muted">LinkedIn</p>
                  <p className="safe-break text-body font-semibold text-text-primary">
                    {contactInfo.linkedinLabel}
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={290}>
              <div className="card-base p-5 sm:p-6">
                <h3 className="text-h3 text-text-primary">Briefing rápido</h3>
                <p className="mt-3 text-pretty text-body text-text-secondary">
                  O formulário monta a mensagem no WhatsApp com nome, e-mail e contexto do projeto para
                  agilizar o primeiro contato.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={130}>
            <div className="card-base p-5 sm:p-6 lg:p-7">
              <h3 className="text-h3 text-text-primary">Envie um resumo do projeto</h3>
              <p className="mt-3 text-pretty text-body text-text-secondary">
                Informe o que você precisa para eu entender melhor o objetivo do site e o tipo de solução
                ideal.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-caption font-semibold text-text-secondary">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-base"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-caption font-semibold text-text-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-base"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-caption font-semibold text-text-secondary"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-base resize-none"
                    placeholder="Descreva o tipo de site, objetivo e prazo ideal."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
                >
                  Enviar via WhatsApp
                  <Send size={18} aria-hidden="true" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
