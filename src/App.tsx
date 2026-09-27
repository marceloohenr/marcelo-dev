import Navbar from './components/Navbar';
import SiteHead from './components/SiteHead';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import TechnologyStack from './components/TechnologyStack';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AmbientBackground from './components/AmbientBackground';
import { useLanguage } from './i18n/LanguageContext';

function App() {
  const { t } = useLanguage();
  return (
    <div className="site-page">
      <SiteHead />
      {/* Link de acessibilidade para pular direto para o conteúdo principal */}
      <a href="#conteudo-principal" className="skip-link">
        {t('Pular para o conteúdo principal')}
      </a>
      <AmbientBackground />

      <Navbar />
      {/* Blocos principais da página inicial */}
      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <About />
        <TechnologyStack />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
