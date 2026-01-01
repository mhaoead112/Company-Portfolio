import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1.5 }} // delay until intro ends
      className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-20 text-white font-[Manrope]"
    >
      {/* Logo */}
      <div className="flex items-center space-y-2 space-x-2 cursor-pointer">
        <img
          src={logo}
          alt="BluraForce Logo"
          className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-xl font-bold tracking-wide"
        >
          <span className="text-cyan-400">Blura</span>Force
        </motion.span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        {["Home", "Services", "About", "Contact"].map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 + i * 0.1, duration: 0.6 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition cursor-pointer shadow-lg hover:shadow-cyan-400/50"
      >
        Get Started
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
