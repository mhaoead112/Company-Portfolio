import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
// import CinematicIntro from './components/CinematicIntro'; // 👈 make sure this file exists
import Portfolio from './components/Portfolio';
import Feedback from './components/Feedback';
import Testimonials from './components/Testimonials';

function App() {

  return (
    <div className="overflow-hidden">
      {/* <AnimatePresence mode="wait"> */}
        
          {/* // 🌈 Your actual website fades in smoothly */}
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            {/* Section 1: Navbar and Home */}
            <div className="min-h-screen bg-gradient-to-br from-[#010518] via-[#05224f] to-[#0b5cd9] relative">
              <Navbar />
              <Home />
            </div>

            {/* Section 2: Other sections */}
            <div className="bottom-section bg-black">
              <About />
              <Services />
              <Portfolio />
              <Feedback />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          </motion.div>
        
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
