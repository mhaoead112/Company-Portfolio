// CinematicIntro.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"
const CinematicIntro = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 4000); // total animation time
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 flex justify-center items-center bg-black z-[9999]"
        >
          {/* 🔵 Logo with cinematic motion */}
          <motion.img
            src={logo} // ✅ adjust if your logo is elsewhere
            alt="Logo"
            initial={{ scale: 0.6, opacity: 0, y: 50 }}
            animate={{
              scale: [0.6, 1.1, 1],
              opacity: [0, 1, 1],
              y: [50, 0, -30],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
            className="w-48 h-48 object-contain"
          />

          {/* optional subtle glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[300px] h-[300px] bg-cyan-500/30 rounded-full blur-[120px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
