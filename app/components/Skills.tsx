"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer, FaBrain } from "react-icons/fa";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPhp, SiReact, SiPython, SiC,
  SiNodedotjs, SiAdonisjs, SiLaravel, SiNextdotjs, SiFlask,
  SiFigma, SiDocker, SiGit, SiGithub, SiLinux, SiMongodb, SiGooglecloud,
} from "react-icons/si";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [autoPlayIndex, setAutoPlayIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { 
      id: "brain",
      icon: <FaBrain className="w-12 h-12" />,
      title: "Core Skills",
      description: "Full Stack Development",
      color: "from-[#00FFB2] to-[#38bdf8]",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Python", "PHP"],
      centerColor: "text-[#00FFB2]"
    },
    { 
      id: "web",
      icon: <FaCode className="w-12 h-12" />, 
      title: "Web Development",
      description: "Frontend & Backend",
      color: "from-[#00FFB2] to-[#38bdf8]",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "React", "Laravel", "Next.js", "AdonisJS"],
      centerColor: "text-[#00FFB2]"
    },
    { 
      id: "api",
      icon: <FaServer className="w-12 h-12" />, 
      title: "REST API",
      description: "Backend Services",
      color: "from-[#38bdf8] to-[#1e3a8a]",
      skills: ["Node.js", "Flask", "Python", "AdonisJS", "Laravel", "MongoDB"],
      centerColor: "text-[#38bdf8]"
    },
    { 
      id: "mobile",
      icon: <FaMobileAlt className="w-12 h-12" />, 
      title: "Mobile Development",
      description: "Cross-platform Apps",
      color: "from-[#1e3a8a] to-[#00FFB2]",
      skills: ["React", "TypeScript", "C", "JavaScript"],
      centerColor: "text-[#1e3a8a]"
    },
  ];

  const allSkills = [
    { name: "HTML", icon: <SiHtml5 className="w-8 h-8" />, color: "text-orange-500", proficiency: 95 },
    { name: "CSS", icon: <SiCss3 className="w-8 h-8" />, color: "text-blue-500", proficiency: 90 },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" />, color: "text-yellow-400", proficiency: 88 },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, color: "text-blue-600", proficiency: 85 },
    { name: "PHP", icon: <SiPhp className="w-8 h-8" />, color: "text-purple-500", proficiency: 82 },
    { name: "React", icon: <SiReact className="w-8 h-8" />, color: "text-cyan-400", proficiency: 92 },
    { name: "Python", icon: <SiPython className="w-8 h-8" />, color: "text-yellow-600", proficiency: 80 },
    { name: "C", icon: <SiC className="w-8 h-8" />, color: "text-blue-700", proficiency: 75 },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" />, color: "text-green-600", proficiency: 87 },
    { name: "AdonisJS", icon: <SiAdonisjs className="w-8 h-8" />, color: "text-indigo-500", proficiency: 78 },
    { name: "Laravel", icon: <SiLaravel className="w-8 h-8" />, color: "text-red-600", proficiency: 85 },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, color: "text-white", proficiency: 88 },
    { name: "Flask", icon: <SiFlask className="w-8 h-8" />, color: "text-gray-300", proficiency: 80 },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" />, color: "text-green-500", proficiency: 83 },
  ];

  const tools = [
    { name: "Figma", icon: <SiFigma className="w-6 h-6" />, color: "text-purple-500" },
    { name: "Docker", icon: <SiDocker className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Git", icon: <SiGit className="w-6 h-6" />, color: "text-orange-500" },
    { name: "GitHub", icon: <SiGithub className="w-6 h-6" />, color: "text-white" },
    { name: "Linux", icon: <SiLinux className="w-6 h-6" />, color: "text-yellow-400" },
    { name: "GCP", icon: <SiGooglecloud className="w-6 h-6" />, color: "text-blue-300" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setAutoPlayIndex((prev) => (prev + 1) % categories.length);
    }, 10000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, categories.length]);

  // Set selected category based on autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      setSelectedCategory(categories[autoPlayIndex]?.id || null);
    }
  }, [autoPlayIndex, isAutoPlaying, categories]);


  const getCurrentCategory = () => {
    return categories.find(cat => cat.id === selectedCategory) || categories[0];
  };

  const isSkillHighlighted = (skillName: string) => {
    const currentCat = getCurrentCategory();
    return currentCat ? currentCat.skills.includes(skillName) : false;
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Skill positioning for circular layout
  const getSkillPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle };
  };

  const currentCategory = getCurrentCategory();
  const highlightedSkills = allSkills.filter(skill => currentCategory.skills.includes(skill.name));

  return (
    <section id="skills" className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#00FFB2]/5 to-[#38bdf8]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#1e3a8a]/5 to-[#00FFB2]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FFB2] text-lg font-medium mb-2 block">What I Do</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Interactive skills visualization - hover or click to explore different domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-3 bg-[#1e293b]/30 p-2 rounded-2xl border border-[#00FFB2]/20">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#00FFB2]/20 to-[#38bdf8]/20 text-[#00FFB2] border border-[#00FFB2]/40'
                    : 'text-gray-400 hover:text-white hover:bg-[#1e293b]/50'
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="font-medium text-sm hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Skills Visualization */}
        <div className="relative flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
          {/* Center Brain/Category Icon */}
          <motion.div 
            className="relative z-20"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <div className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r ${currentCategory.color} flex items-center justify-center shadow-2xl relative overflow-hidden`}>
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Icon */}
              <motion.div
                key={currentCategory.id}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className={`${currentCategory.centerColor} relative z-10`}
              >
                {currentCategory.icon}
              </motion.div>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Category Info */}
            <motion.div 
              className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center"
              key={currentCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-1">{currentCategory.title}</h3>
              <p className="text-gray-400 text-sm">{currentCategory.description}</p>
            </motion.div>
          </motion.div>

          {/* Floating Skills */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {highlightedSkills.map((skill, index) => {
                const radius = window.innerWidth < 768 ? 180 : 250; // Responsive radius
                const { x, y } = getSkillPosition(index, highlightedSkills.length, radius);
                
                return (
                  <motion.div
                    key={`${currentCategory.id}-${skill.name}`}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ 
                      scale: 0, 
                      x: 0, 
                      y: 0,
                      opacity: 0
                    }}
                    animate={{ 
                      scale: 1, 
                      x, 
                      y,
                      opacity: 1
                    }}
                    exit={{
                      scale: 0,
                      x: 0,
                      y: 0,
                      opacity: 0
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.2, zIndex: 30 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Connection Line */}
                    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
                      width: Math.abs(x) * 2 + 100,
                      height: Math.abs(y) * 2 + 100,
                      zIndex: 1
                    }}>
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={x > 0 ? "0%" : "100%"}
                        y2={y > 0 ? "0%" : "100%"}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00FFB2" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1"/>
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Skill Card */}
                    <div className="relative z-10 group">
                      <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/90 backdrop-blur-sm border flex items-center justify-center transition-all duration-300 ${
                        hoveredSkill === skill.name 
                          ? 'border-[#00FFB2]/60 shadow-lg shadow-[#00FFB2]/30' 
                          : 'border-[#00FFB2]/30'
                      }`}>
                        <span className={skill.color}>{skill.icon}</span>
                      </div>

                      {/* Skill Name & Proficiency */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-[#1e293b]/95 backdrop-blur-sm border border-[#00FFB2]/30 rounded-xl p-3 text-center whitespace-nowrap"
                        >
                          <div className="text-white font-medium text-sm mb-1">{skill.name}</div>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-[#00FFB2] to-[#38bdf8]"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              />
                            </div>
                            <span className="text-xs text-gray-300">{skill.proficiency}%</span>
                          </div>
                        </motion.div>
                      )}

                      {/* Floating Animation */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 3 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tools Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#38bdf8] mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1e293b]/40 to-[#0f172a]/40 border border-[#38bdf8]/20 rounded-xl hover:border-[#38bdf8]/40 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className={tool.color}>{tool.icon}</span>
                <span className="text-white font-medium text-sm">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Auto-play Indicator */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2">
            {categories.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === autoPlayIndex && isAutoPlaying
                    ? 'bg-[#00FFB2]'
                    : 'bg-gray-600'
                }`}
                animate={{
                  scale: index === autoPlayIndex && isAutoPlaying ? [1, 1.2, 1] : 1
                }}
                transition={{
                  duration: 0.5,
                  repeat: index === autoPlayIndex && isAutoPlaying ? Infinity : 0
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
