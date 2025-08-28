"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0F172A]/70 backdrop-blur-md border-b border-[#00FFB2]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-[#00FFB2] tracking-wider drop-shadow-[0_0_8px_#00FFB2]">
            Muhammad Ichsan
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-[#E6FFF9] px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00FFB2] p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0F172A]/70 border-t border-[#00FFB2]/20 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[#E6FFF9] px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
