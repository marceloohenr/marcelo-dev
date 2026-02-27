# Marcelo Henrique - Desenvolvedor Web

Site profissional completo para captação de clientes e apresentação de portfólio.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🔧 Instalação

```bash
# Instalar dependências
npm install
```

## 🏃 Executando o projeto

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Navbar.tsx      # Navegação fixa
│   ├── Hero.tsx        # Seção principal
│   ├── Problem.tsx     # Problema que resolve
│   ├── Projects.tsx    # Portfólio de projetos
│   ├── Services.tsx    # Serviços oferecidos
│   ├── Differentials.tsx # Diferenciais
│   ├── About.tsx       # Sobre
│   ├── CTA.tsx         # Call to Action
│   ├── Contact.tsx     # Contato e formulário
│   ├── Footer.tsx      # Rodapé
│   └── WhatsAppButton.tsx # Botão flutuante
├── data/               # Dados da aplicação
│   ├── projects.ts     # Lista de projetos
│   └── services.ts     # Lista de serviços
├── App.tsx             # Componente principal
├── main.tsx           # Entrada da aplicação
└── index.css          # Estilos globais
```

## ✏️ Personalizando o Conteúdo

### Adicionar Novos Projetos

Edite o arquivo `src/data/projects.ts`:

```typescript
{
  id: 4,
  title: 'Nome do Projeto',
  client: 'Tipo de Cliente',
  description: 'Descrição do projeto...',
  technologies: ['React', 'Tailwind CSS'],
  link: 'https://url-do-projeto.com',
}
```

### Atualizar Informações de Contato

No arquivo `src/components/Contact.tsx`, atualize:
- Email
- LinkedIn
- Número do WhatsApp

No arquivo `src/components/WhatsAppButton.tsx`, atualize:
- Número do WhatsApp

### Personalizar Cores

As cores principais estão definidas no Tailwind CSS:
- Fundo: `bg-slate-900`, `bg-slate-950`
- Azul primário: `bg-blue-600`
- Azul destaque: `bg-blue-500`, `text-blue-400`

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça login na [Vercel](https://vercel.com)
2. Importe o repositório
3. Configure build:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Netlify

1. Faça login na [Netlify](https://netlify.com)
2. Arraste a pasta `dist` após rodar `npm run build`
3. Site no ar!

## 📱 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Animações sutis
- ✅ Botão flutuante WhatsApp
- ✅ Formulário de contato integrado
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Código limpo e organizado

## 🎨 Paleta de Cores

- **Fundo:** `#0f172a` (slate-900)
- **Azul Primário:** `#2563eb` (blue-600)
- **Azul Destaque:** `#3b82f6` (blue-500)
- **Texto Principal:** `#f1f5f9` (slate-100)
- **Texto Secundário:** `#94a3b8` (slate-400)

## 📝 Licença

© 2026 Marcelo Henrique - Todos os direitos reservados

## 💡 Dicas de Uso

1. Mantenha a lista de projetos atualizada
2. Atualize as informações de contato
3. Adicione links reais para projetos concluídos
4. Personalize o número do WhatsApp
5. Teste em diferentes dispositivos

---

**Desenvolvido por Marcelo Henrique**
