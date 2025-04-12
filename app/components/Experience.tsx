"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { experienceData } from "./data/experienceData";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [paused, setPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const duplicatedData = [...experienceData, ...experienceData];

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (paused || containerWidth === 0) return;

    const interval = setInterval(() => {
      setScrollX((prev) => {
        if (prev >= containerWidth) return 0;
        return prev + 1;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [paused, containerWidth]);

  return (
    <section id="experience" className=" bg-[#0D1B1E] text-[#E6FFF9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FFB2] drop-shadow-[0_0_10px_#00FFB2]">
            Experience
          </h2>
          <p className="text-lg text-[#C1FCEA] mt-2">A dynamic view of my journey</p>
        </div>

        <div
          className="overflow-x-hidden relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            animate={{ x: -scrollX }}
            transition={{ ease: "linear", duration: 0.01 }}
            style={{ willChange: "transform" }}
          >
            {duplicatedData.map((exp, index) => (
              <motion.div
                key={`${exp.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-[#132b2f] hover:bg-[#164248] transition-all duration-500 ease-in-out rounded-xl shadow-lg px-5 py-6 group hover:scale-[1.05] relative overflow-hidden"
              >
                <h3 className="text-lg font-bold text-[#00FFB2] mb-1 truncate">{exp.title}</h3>
                <p className="text-sm text-[#C1FCEA] mb-1 truncate">{exp.organization}</p>
                <p className="text-xs text-[#94e5ce] mb-2">{exp.year}</p>
                <ul className="text-xs text-[#C1FCEA] list-disc pl-4 space-y-1 max-h-[6.5rem] overflow-hidden group-hover:overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#00FFB2]/40 scrollbar-track-transparent">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="break-words">{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
