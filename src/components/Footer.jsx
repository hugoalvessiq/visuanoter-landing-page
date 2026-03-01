import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="bg-slate-950 py-12 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 mb-2">
              VisuaNoter
            </h2>
            <p className="text-slate-500">Desenvolvido por Hugo</p>
          </div>
          <div className="flex justify-center gap-6 text-slate-400">
            <a
              href="https://github.com/hugoalvessiq/visuanoter-desktop"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>

            <Link to="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>

            <a
              href="https://github.com/hugoalvessiq/visuanoter-desktop/blob/main/LICENSE"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Licença MIT
            </a>
          </div>
          <p className="mt-8 text-slate-600 text-sm">
            © {new Date().getFullYear()} VisuaNoter. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
