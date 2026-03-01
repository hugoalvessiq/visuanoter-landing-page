import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{
      y: -10,
      zIndex: 10, 
      transition: { duration: 0.3 },
    }}
    className="p-6 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors h-full flex flex-col relative"
  >
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400 shrink-0">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 flex-grow">{desc}</p>
  </motion.div>
);

export default FeatureCard;
