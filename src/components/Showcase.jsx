import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Showcase = ({ screenshots }) => {
  return (
    <section id="showcase" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Fluxo de Trabalho Fluido
            </h2>
          </div>
        </RevealOnScroll>

        {/* Feature 1: Editing */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <RevealOnScroll delay={0.2}>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Edição Rápida
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                Um modal limpo e direto. Defina título, conteúdo, cor e lembrete
                em segundos. Atalhos de teclado como{" "}
                <kbd className="bg-slate-800 px-2 py-1 rounded">Ctrl+S</kbd>{" "}
                aceleram sua rotina.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>{" "}
                  Seletor de Cores Intuitivo
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>{" "}
                  Agendamento de Data/Hora
                </li>
              </ul>
            </RevealOnScroll>
          </div>

          <div className="flex-1">
            <RevealOnScroll delay={0.4}>
              <img
                src={screenshots.edit}
                alt="Editing Modal"
                className="rounded-xl shadow-2xl border border-slate-700 hover:scale-[1.02] transition-transform duration-500"
              />
            </RevealOnScroll>
          </div>
        </div>

        {/* Feature 2: Settings & Backup */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <RevealOnScroll delay={0.2}>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Controle Total de Dados
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                Acesse a área de configurações para definir onde seus dados
                vivem. Ative o backup automático e escolha o intervalo. Inclui
                uma "Zona de Perigo" para reset de fábrica.
              </p>
            </RevealOnScroll>
          </div>

          <div className="flex-1">
            <RevealOnScroll delay={0.4}>
              <img
                src={screenshots.settings}
                alt="Settings Modal"
                className="rounded-xl shadow-2xl border border-slate-700 hover:scale-[1.02] transition-transform duration-500"
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
