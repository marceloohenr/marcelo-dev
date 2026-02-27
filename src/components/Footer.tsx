import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={24} className="text-blue-400" />
            <span className="text-xl font-bold text-slate-100">Marcelo Henrique</span>
          </div>
          <p className="text-slate-400 mb-2">Desenvolvedor Web</p>
          <p className="text-slate-500 text-sm">
            © 2026 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
