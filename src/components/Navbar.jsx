import { Download, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white">
              VN
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
              VisuaNoter
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="hover:text-blue-400 transition-colors"
              >
                Funcionalidades
              </a>
              <a
                href="#showcase"
                className="hover:text-blue-400 transition-colors"
              >
                Visual
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contato
              </a>
              <a
                href="https://github.com/hugoalvessiq/visuanoter-desktop"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2" target="_blank"
              >
                <Download size={18} /> Baixar v1.0
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Funcionalidades
            </a>
            <a
              href="#showcase"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Visual
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Contato
            </a>
            <a
              href="#download"
              className="block px-3 py-2 text-blue-400 font-bold"
            >
              Baixar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
