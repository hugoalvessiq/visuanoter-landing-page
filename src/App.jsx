import { motion } from "framer-motion";
import { Layers, ShieldCheck, Zap, Bell, Palette, Layout } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

const screenshots = {
  hero: "/assets/claro_escuro.webp",
  main: "/assets/escuro_print.webp",
  edit: "/assets/edicao_de_notas.webp",
  settings: "/assets/configuracoes.webp",
  trash: "/assets/lixeira.webp",
  archived: "/assets/notas_arquivadas.png",
};

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero screenshots={screenshots} />
        <Features
          Palette={Palette}
          ShieldCheck={ShieldCheck}
          Bell={Bell}
          Zap={Zap}
          Layer={Layers}
          Layout={Layout}
        />
        <Showcase screenshots={screenshots} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
