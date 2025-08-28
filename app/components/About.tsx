'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: "Web Development", icon: "🌐" },
    { name: "Mobile Development", icon: "📱" },
    { name: "API Development", icon: "⚡" },
    { name: "Python", icon: "🐍" }
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "15+", label: "Technologies" }
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden py-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-20 h-20 border border-[#00FFB2]/20 rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full border-2 border-dashed border-[#38bdf8]/20"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 rounded-full blur-xl"></div>
        
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          
          {/* Left Side - Image Section */}
          <motion.div 
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#00FFB2]/20 to-[#38bdf8]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Image frame */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-3 rounded-3xl border border-[#00FFB2]/30 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#00FFB2]/5 to-[#38bdf8]/5">
                    <Image
                      src="/image/pic1.jpeg"
                      alt="Muhammad Ichsan"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] rounded-2xl rotate-12"
                  animate={{ 
                    rotate: [12, 25, 12],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#38bdf8] rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content Section */}
          <motion.div 
            className="order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00FFB2] text-lg font-medium mb-2 block">Get to know me</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                About{" "}
                <span className="bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi, I'm <span className="font-semibold text-[#00FFB2]">Muhammad Ichsan</span>, 
                a Software Developer and Informatics graduate with a GPA of 3.76/4.0 (Cum Laude).
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I have a strong foundation in software development, with proven ability to learn new technologies quickly 
                and adapt to different environments. My academic and organizational experiences have also shaped my 
                leadership, problem-solving, and collaboration skills.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#38bdf8] mb-6">What I Do</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group bg-gradient-to-br from-[#1e293b]/50 to-[#0f172a]/50 p-4 rounded-xl border border-[#00FFB2]/20 hover:border-[#00FFB2]/50 transition-all duration-300 hover:transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-gray-200 group-hover:text-[#00FFB2] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional Background Animation */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
