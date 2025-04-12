'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Trigger exit after 3 seconds
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0F172A] text-[#00FFB2] flex items-center justify-center"
          initial={{ clipPath: 'circle(0% at 0% 100%)' }}
          animate={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ clipPath: 'circle(0% at 100% 0%)', transition: { duration: 1.2, ease: 'easeInOut' } }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Ichsan 👋</h1>
            <p className="text-lg md:text-xl">Welcome to my world of code & creativity.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
