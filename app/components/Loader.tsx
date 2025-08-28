'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0F172A] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Neon Glow Circle */}
          <motion.div
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#00FFB2]/20 to-[#38bdf8]/20 animate-pulse blur-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, transition: { duration: 0.8 } }}
          />

          {/* Floating Glow Dots */}
          <motion.div
            className="absolute w-4 h-4 bg-[#00FFB2] rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-[#38bdf8] rounded-full"
            animate={{ x: [0, 15, 0], y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
          />

          {/* Text Content */}
          <motion.div
            className="relative text-center z-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] mb-4 drop-shadow-lg">
              Hi, I'm Ichsan 👋
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Welcome to my world of <span className="text-[#00FFB2] font-semibold">code & creativity</span>.
            </p>
          </motion.div>

          {/* Loader Bar */}
          <motion.div
            className="absolute bottom-20 w-32 md:w-48 h-1 rounded-full bg-[#00FFB2]/30 overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#00FFB2] to-[#38bdf8]"
              animate={{ x: [ -100, 100 ] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
