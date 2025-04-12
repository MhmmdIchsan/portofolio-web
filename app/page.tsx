'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3100); // Match loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      {showContent && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
        </motion.main>
      )}
    </>
  );
}

