import { useState } from 'react';
import { Mail, Linkedin, Send, Instagram, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const whatsappBaseUrl = `https://wa.me/${contactInfo.whatsappNumber}`;
  const isFormValid = Boolean(
    formData.name.trim() && formData.email.trim() && formData.message.trim()
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      return;
    }

    const whatsappMessage = `Olá! Meu nome é ${name}. Email: ${email}. ${message}`;
    const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-shell section-anchor">
      <div className="content-shell">
        <header className="section-header">
          <h2 id="contato-title" className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Vamos conversar sobre seu projeto.</p>
        </header>

        <div className="grid gap-7 sm:gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-h3 text-text-primary">Informações de Contato</h3>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="card-link flex items-center gap-4 p-4"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-brand-500/25 bg-brand-600/10">
                  <Mail className="text-brand-400" size={20} />
                </div>
                <div>
                  <p className="text-caption text-text-muted">Email</p>
                  <p className="text-body font-semibold text-text-primary">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link flex items-center gap-4 p-4"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-brand-500/25 bg-brand-600/10">
                  <MessageCircle className="text-brand-400" size={20} />
                </div>
                <div>
                  <p className="text-caption text-text-muted">WhatsApp</p>
                  <p className="text-body font-semibold text-text-primary">{contactInfo.displayPhone}</p>
                </div>
              </a>

              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link flex items-center gap-4 p-4"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-brand-500/25 bg-brand-600/10">
                  <Linkedin className="text-brand-400" size={20} />
                </div>
                <div>
                  <p className="text-caption text-text-muted">LinkedIn</p>
                  <p className="text-body font-semibold text-text-primary">Marcelo Henrique Malagueta</p>
                </div>
              </a>

              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link flex items-center gap-4 p-4"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-brand-500/25 bg-brand-600/10">
                  <Instagram className="text-brand-400" size={20} />
                </div>
                <div>
                  <p className="text-caption text-text-muted">Instagram</p>
                  <p className="text-body font-semibold text-text-primary">@{contactInfo.instagramHandle}</p>
                </div>
              </a>
            </div>

            <div className="card-base mt-6 p-6">
              <h4 className="text-body-lg font-semibold text-text-primary">Pronto para começar?</h4>
              <p className="mt-2 text-body text-text-secondary">
                Preencha o formulário ao lado ou fale comigo direto no WhatsApp. Vamos transformar suas ideias
                em um site profissional.
              </p>
            </div>
          </div>

          <div className="card-base p-5 sm:p-6 md:p-7">
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <label htmlFor="email" className="mb-2 block text-caption font-semibold text-text-secondary">
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
                <label htmlFor="message" className="mb-2 block text-caption font-semibold text-text-secondary">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-base resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className="btn-secondary w-full disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
              >
                Enviar Mensagem
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
