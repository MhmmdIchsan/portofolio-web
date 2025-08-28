"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Software Developer",
  "Web Developer",
  "Mobile Developer",
];

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // ganti setiap 3 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 lg:h-12 flex items-center justify-center lg:justify-start mb-6">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          className="text-xl lg:text-3xl font-semibold text-[#38bdf8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
