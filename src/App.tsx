import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-bg-base text-text-primary">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <Projects />
        <Services />
        <Differentials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
