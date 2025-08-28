"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "./data/contactData";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden py-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-16 w-24 h-24 border border-[#00FFB2]/20 rotate-45"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full border-2 border-dashed border-[#38bdf8]/20"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#00FFB2]/5 to-[#38bdf8]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FFB2] text-lg font-medium mb-2 block">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Reach me through any of the platforms below. I'm always excited to connect and collaborate!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer ${
                hoveredCard === index
                  ? "border-[#00FFB2]/60 bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80"
                  : "border-[#00FFB2]/20 bg-gradient-to-br from-[#1e293b]/40 to-[#0f172a]/40 hover:border-[#00FFB2]/40"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#0F172A] text-2xl">{item.icon}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00FFB2] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {item.text}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20 p-8 bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 rounded-2xl border border-[#00FFB2]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#00FFB2] mb-4">Ready to Collaborate?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's build something impactful together. Whether it's a project idea or just a chat, I'm just one click away.
          </p>
          <motion.a
            href="mailto:mhmmd.ichsan321@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] text-[#0F172A] font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00FFB2]/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✉️ Send an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
