"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import type { SwiperRef } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./data/projectData";
import type { CSSProperties } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const imagesSwiperRef = useRef<SwiperRef>(null);
  const contentSwiperRef = useRef<SwiperRef>(null);


  // Sync swipers
  const handleSlideChange = (swiper: SwiperClass) => {
  setActiveIndex(swiper.realIndex);

  if (contentSwiperRef.current?.swiper) {
    contentSwiperRef.current.swiper.slideTo(swiper.realIndex);
  }
  if (imagesSwiperRef.current?.swiper) {
    imagesSwiperRef.current.swiper.slideTo(swiper.realIndex);
  }
};

  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (imagesSwiperRef.current?.swiper) {
      if (isAutoPlaying) {
        imagesSwiperRef.current.swiper.autoplay.stop();
      } else {
        imagesSwiperRef.current.swiper.autoplay.start();
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-16 w-24 h-24 border border-[#00FFB2]/20 rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full border-2 border-dashed border-[#38bdf8]/20"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 rounded-full blur-xl"></div>
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
          <span className="text-[#00FFB2] text-lg font-medium mb-2 block">My Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Enhanced Carousel */}
          <motion.div 
            className="relative order-2 xl:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Counter */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm font-medium text-gray-400">
                <span className="text-[#00FFB2] text-xl font-bold">{activeIndex + 1}</span>
                <span className="mx-2">/</span>
                <span>{projects.length}</span>
              </div>
              
              {/* Control Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAutoplay}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isAutoPlaying 
                      ? 'bg-[#00FFB2]/20 text-[#00FFB2] hover:bg-[#00FFB2]/30' 
                      : 'bg-gray-600/20 text-gray-400 hover:bg-gray-600/30'
                  }`}
                >
                  {isAutoPlaying ? '⏸️' : '▶️'}
                </button>
              </div>
            </div>

            {/* Enhanced Swiper Container */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <Swiper
                ref={imagesSwiperRef}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 25,
                  stretch: 0,
                  depth: 150,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={isAutoPlaying ? {
                  delay: 5000,
                  disableOnInteraction: false,
                } : false}
                navigation={true}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true 
                }}
                modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
                className="w-full h-[400px] lg:h-[500px] relative z-10"
                onSlideChange={handleSlideChange}
                style={{
                  '--swiper-navigation-color': '#00FFB2',
                  '--swiper-pagination-color': '#00FFB2',
                } as CSSProperties}
              >
                {projects.map((project, index) => (
                  <SwiperSlide
                    key={project.id}
                    className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl overflow-hidden border border-[#00FFB2]/30 shadow-2xl"
                    style={{ width: '300px', height: '400px' }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-3/5 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
                      
                      {/* Project number badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#00FFB2] rounded-full flex items-center justify-center text-[#0f172a] font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="p-6 h-2/5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#00FFB2] mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-[#00FFB2]/10 text-[#00FFB2] px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-gray-400 text-xs px-2 py-1">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs text-gray-400 font-medium">Progress</span>
              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-xs text-gray-400">
                {Math.round(((activeIndex + 1) / projects.length) * 100)}%
              </span>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Project Details */}
          <motion.div 
            className="order-1 xl:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Swiper
              ref={contentSwiperRef}
              autoplay={isAutoPlaying ? {
                delay: 5000,
                disableOnInteraction: false,
              } : false}
              modules={[Autoplay]}
              className="w-full"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <motion.div
                    className="space-y-8"
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Project Title & Category */}
                    <div className="text-center xl:text-left">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <span className="text-[#38bdf8] font-medium text-sm uppercase tracking-wider">
                          Project #{index + 1}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-bold text-[#00FFB2] mt-2 mb-4">
                          {project.title}
                        </h3>
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto xl:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold text-[#38bdf8] mb-4 text-center xl:text-left">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap justify-center xl:justify-start gap-3">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 text-[#00FFB2] border border-[#00FFB2]/30 px-4 py-2 rounded-full text-sm font-medium hover:border-[#00FFB2]/50 hover:bg-[#00FFB2]/20 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.a
                        href={project.docsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] text-[#0F172A] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-[#00FFB2]/25 transition-all duration-300 transform hover:scale-105 text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          View Live Demo
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </motion.a>

                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border-2 border-[#00FFB2] text-[#00FFB2] px-8 py-4 rounded-full hover:bg-[#00FFB2] hover:text-[#0F172A] transition-all duration-300 font-semibold text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Source Code
                        </span>
                      </motion.a>
                    </motion.div>

                    {/* Project Stats */}
                    <motion.div 
                      className="grid grid-cols-3 gap-4 pt-6 border-t border-[#00FFB2]/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
                          {project.techStack.length}
                        </div>
                        <div className="text-gray-400 text-sm">Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
                          2024
                        </div>
                        <div className="text-gray-400 text-sm">Year</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
                          Live
                        </div>
                        <div className="text-gray-400 text-sm">Status</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <motion.div 
          className="flex justify-center items-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                imagesSwiperRef.current?.swiper.slideTo(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-[#00FFB2]' 
                  : 'w-2 bg-gray-600 hover:bg-[#38bdf8]'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
