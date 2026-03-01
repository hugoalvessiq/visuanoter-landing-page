import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  Code,
  Terminal,
  Settings,
  Save,
  Bell,
  Shield,
} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const DocSection = ({ icon: Icon, title, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
    </div>
    <div className="text-slate-400 leading-relaxed space-y-4 ml-11">
      {children}
    </div>
  </div>
);

const Documentation = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <header className="mb-16 border-b border-slate-800 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Documentação do <span className="text-blue-500">VisuaNoter</span>
            </h1>
            <p className="text-xl text-slate-400">
              Guia completo de utilização, configuração e detalhes técnicos do
              projeto.
            </p>
          </header>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <DocSection icon={Book} title="Visão Geral">
            <p>
              O VisuaNoter é um ecossistema de anotações focado em organização
              visual e privacidade de dados. Desenvolvido com Vue 3 e Electron,
              ele opera localmente para garantir que suas notas nunca saiam do
              seu dispositivo sem permissão.
            </p>
          </DocSection>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <DocSection icon={Terminal} title="Atalhos de Teclado">
            <p>
              Para maximizar sua produtividade, o app responde aos seguintes
              comandos globais:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                <kbd className="text-blue-400">Ctrl + N</kbd>: Criar Nova Nota
              </li>
              <li className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                <kbd className="text-blue-400">Ctrl + F</kbd>: Focar na Busca
              </li>
              <li className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                <kbd className="text-blue-400">Ctrl + S</kbd>: Salvar nota no
                editor
              </li>
              <li className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                <kbd className="text-blue-400">Ctrl + ,</kbd>: Abrir
                Configurações
              </li>
            </ul>
          </DocSection>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <DocSection icon={Shield} title="Backup e Segurança">
            <p>
              O sistema de backup automático permite exportar seus dados em
              formato JSON[cite: 1, 53]. Você pode definir uma pasta de destino
              nas configurações e escolher a frequência (Diária, Semanal,
              etc.)[cite: 53]. Em caso de remoção acidental, o app conta com uma{" "}
              <strong>Lixeira</strong> para recuperação de notas[cite: 17, 53].
            </p>
          </DocSection>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <DocSection icon={Code} title="Arquitetura Técnica">
            <p>Abaixo está a estrutura principal do repositório:</p>
            <pre className="bg-slate-900 p-4 rounded-xl overflow-x-auto text-sm text-blue-300 border border-slate-800">
              {`├── electron/      # Processo principal do sistema
├── src/           # Interface Vue 3
│   ├── store/     # Gerenciamento de estado reativo
│   └── components/# UI Components (Modais, Cards)
└── public/        # Ativos estáticos e ícones`}
            </pre>
          </DocSection>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <div className="mt-20 p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Dúvidas ou Sugestões?</h3>
            <p className="text-slate-400 mb-6">
              Este projeto é de código aberto sob a licença MIT.
            </p>
            <a
              href="https://github.com/hugoalvessiq/visuanoter-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            >
              Acessar Repositório
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Documentation;
