import React from "react";
import FeatureCard from "./FeatureCard";
import RevealOnScroll from "./RevealOnScroll"; // Importe o novo componente
import { Layers, ShieldCheck, Zap, Bell, Palette, Layout } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Poderoso por dentro, simples por fora
            </h2>
            <p className="text-slate-400">
              Tudo o que você precisa para manter o foco, sem distrações.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          <RevealOnScroll delay={0.1}>
            <FeatureCard
              icon={Palette}
              title="Organização Visual"
              desc="Use cores vibrantes e tags personalizadas para filtrar e encontrar suas notas instantaneamente."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <FeatureCard
              icon={ShieldCheck}
              title="Backup Local Seguro"
              desc="Seus dados são seus. Configure backups automáticos para uma pasta local do seu computador."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <FeatureCard
              icon={Bell}
              title="Lembretes Nativos"
              desc="Integração com o sistema de notificações do OS. Nunca perca um prazo importante."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <FeatureCard
              icon={Zap}
              title="Alta Performance"
              desc="Construído com Vue 3 e Electron. Inicia instantaneamente e consome poucos recursos."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            <FeatureCard
              icon={Layers}
              title="Lixeira e Arquivo"
              desc="Apagou sem querer? Restaure da lixeira. Nota antiga? Arquive para limpar a visão."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.6}>
            <FeatureCard
              icon={Layout}
              title="Temas Personalizáveis"
              desc="Modo Dark, Light e temas coloridos que respeitam as preferências do seu sistema."
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Features;
