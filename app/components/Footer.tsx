"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-[#C1FCEA] py-8 border-t border-[#00FFB2]/20 overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#00FFB2]/5 to-[#38bdf8]/5 blur-3xl"></div>
      <div className="absolute -bottom-16 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-[#00FFB2]/10 blur-2xl"></div>

      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <motion.p
          className="text-center md:text-left text-sm text-[#E6FFF9]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Muhammad Ichsan. All rights reserved.
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Contact" ? "#contact" : "#"}
              className="text-[#00FFB2] hover:underline transition duration-300"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
