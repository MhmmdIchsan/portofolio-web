"use client"

// app/components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import RoleSwitcher from "./RoleSwitcher";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#0F172A] text-white overflow-hidden">
      {/* === Background Decorative Elements === */}
      <div className="absolute inset-0 z-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-[#00FFB2] rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full border-2 border-dashed border-[#38bdf8] opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] rounded-full opacity-20"></div>
        
        {/* Large background circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#00FFB2]/10 to-[#38bdf8]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          
          {/* === LEFT CONTENT === */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Greeting */}
              <motion.p 
                className="text-[#00FFB2] text-lg font-medium mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hello,
              </motion.p>
              
              {/* Name */}
              <motion.h1 
                className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I Am<br></br>{" "}
                <span className="bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
                  Muhammad Ichsan
                </span>
              </motion.h1>
              
              {/* Role */}
              <motion.h2 
                className="text-xl lg:text-3xl font-semibold text-[#38bdf8] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <RoleSwitcher />
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
              I am a web developer passionate about building modern, responsive, and elegant applications — both front-end and back-end. I also enjoy crafting intuitive user interfaces, reliable APIs, and exploring mobile development to deliver seamless cross-platform experiences.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
              >
                <Link
                  href="/CV.pdf"
                  className="group bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] text-[#0F172A] px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00FFB2]/25 transition-all duration-300 transform hover:scale-105"
                >
                  Download CV
                </Link>

                <Link
                  href="#projects"
                  className="border-2 border-[#00FFB2] px-8 py-4 rounded-full text-white hover:bg-[#00FFB2] hover:text-[#0F172A] transition-all duration-300 font-semibold"
                >
                  View Projects
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-6 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mhmmdichsan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#00FFB2] rounded-full flex items-center justify-center hover:bg-[#38bdf8] transition-colors cursor-pointer"
                  >
                    <FaLinkedinIn className="text-[#0F172A] text-sm" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/MhmmdIchsan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#00FFB2] rounded-full flex items-center justify-center hover:bg-[#38bdf8] transition-colors cursor-pointer"
                  >
                    <FaGithub className="text-[#0F172A] text-sm" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/mhmd.ichsnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#00FFB2] rounded-full flex items-center justify-center hover:bg-[#38bdf8] transition-colors cursor-pointer"
                  >
                    <FaInstagram className="text-[#0F172A] text-sm" />
                  </a>
                </div>

                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* === RIGHT IMAGE === */}
          <div className="flex-1 lg:pl-8 flex justify-center lg:justify-end">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Image container with enhanced styling */}
              <div className="relative group">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Main image */}
                <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-2 rounded-3xl border border-[#00FFB2]/20">
                  <Image
                    src="/image/foto.png"
                    alt="Muhammad Ichsan"
                    width={500}
                    height={600}
                    priority
                    className="rounded-2xl w-[320px] sm:w-[400px] lg:w-[500px] object-cover shadow-2xl"
                    style={{ objectPosition: "center" }}
                  />
                  
                  {/* Decorative overlay */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#00FFB2] to-[#38bdf8] rounded-2xl rotate-12 opacity-80 blur-sm"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#38bdf8] to-[#1e3a8a] rounded-2xl -rotate-12 opacity-60 blur-sm"></div>
                </div>
              </div>

              {/* Floating elements around image */}
              <motion.div 
                className="absolute -top-8 -left-8 w-6 h-6 bg-[#00FFB2] rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-4 h-4 bg-[#38bdf8] rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* === Animated Background Elements === */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
