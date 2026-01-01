import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Home = () => {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setTarget({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    let frame;
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.1,
        y: prev.y + (target.y - prev.y) * 0.1,
      }));
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black text-white"
    >
      <Navbar />

      {/* 🌌 Glowing gradient following mouse */}
      <motion.div
        className="pointer-events-none absolute w-[800px] h-[800px] bg-gradient-to-tr from-slate-800 to-blue-800 rounded-full blur-[200px] opacity-80"
        style={{
          top: position.y - 400,
          left: position.x - 400,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Hero text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl z-10 mt-20"
      >
        We Build Smart <span className="text-cyan-400">Software Solutions</span> for Modern Businesses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        className="text-gray-300 mt-6 max-w-xl z-10"
      >
        Transform your business with cutting-edge technology. We deliver custom software
        solutions that drive growth, efficiency, and innovation.
      </motion.p>

      {/* Email input */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="flex mt-10 bg-white/10 rounded-full p-2 z-10 backdrop-blur-md font-[Manrope]"
      >
        <input
          type="email"
          placeholder="sales@email.com"
          className="bg-transparent px-6 py-2 focus:outline-none text-white placeholder-gray-400"
        />
        <button href="contact" className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer shadow-lg hover:shadow-cyan-400/50">
          Get early access
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
