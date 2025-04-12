"use client";

import { motion } from "framer-motion";
import { contactData } from "./data/contactData";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-64 flex items-center justify-center bg-[#0D1B1E]"
    >
      <div className="container mx-auto px-4">
        {/* Title and Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FFB2] mb-4 drop-shadow-[0_0_10px_#00FFB2]">
            Let's Connect
          </h2>
          <p className="text-lg text-[#C1FCEA]">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactData.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#00FFB2] hover:border-2 group"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#C1FCEA] mb-2">
                {item.title}
              </h3>
              <p className="text-[#E6FFF9] text-sm">{item.text}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
