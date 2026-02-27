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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. Email: ${formData.email}. ${formData.message}`;
    const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Entre em Contato
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-slate-100 font-medium">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <MessageCircle className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">WhatsApp</p>
                  <p className="text-slate-100 font-medium">{contactInfo.displayPhone}</p>
                </div>
              </a>

              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">LinkedIn</p>
                  <p className="text-slate-100 font-medium">Marcelo Henrique Malagueta</p>
                </div>
              </a>

              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Instagram className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Instagram</p>
                  <p className="text-slate-100 font-medium">@{contactInfo.instagramHandle}</p>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-100 mb-2">
                Pronto para começar?
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Preencha o formulário ao lado ou fale comigo direto no WhatsApp.
                Vamos transformar suas ideias em um site profissional.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

