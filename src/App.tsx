import Navbar from './components/Navbar';
import SiteHead from './components/SiteHead';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Differentials from './components/Differentials';
import SeoSupportContent from './components/SeoSupportContent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-bg-base text-text-primary">
      <SiteHead />
      {/* Link de acessibilidade para pular direto para o conteúdo principal */}
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Navbar />
      {/* Blocos principais da página inicial */}
      <main id="conteudo-principal">
        <Hero />
        <Projects />
        <Services />
        <Differentials />
        <SeoSupportContent />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
