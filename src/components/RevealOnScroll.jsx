import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const RevealOnScroll = ({ children, width = "100%", delay = 0 }) => {
  const ref = useRef(null);
  // once: true faz a animação acontecer apenas uma vez
  const isInView = useInView(ref, { once: true, margin: "-75px" });

  return (
    <div ref={ref} style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        style={{ height: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOnScroll;
