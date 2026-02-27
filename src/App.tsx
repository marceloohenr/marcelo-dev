import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Projects from './components/Projects';
import Services from './components/Services';
import Differentials from './components/Differentials';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Problem />
      <Projects />
      <Services />
      <Differentials />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

