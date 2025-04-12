"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPhp, SiReact, SiPython, SiC,
  SiNodedotjs, SiAdonisjs, SiLaravel, SiNextdotjs, SiFlask,
  SiFigma, SiDocker, SiGit, SiGithub, SiLinux, SiMongodb, SiGooglecloud,
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleHover = (category: string | null) => {
    setSelectedCategory(category);
  };

  const categoryMap = {
    "Web Development": ["HTML", "CSS", "JavaScript", "PHP", "React", "Laravel", "Next.js", "AdonisJS"],
    "REST API": ["Node.js", "Flask", "Python", "AdonisJS", "Laravel"],
    "Mobile Development": ["React", "TypeScript", "C"],
  };

  const toolsCategory = {
    "Web Development": ["Git", "GitHub", "Docker", "Figma"],
    "REST API": ["Docker", "MongoDB", "Linux"],
    "Mobile Development": ["Git", "GitHub", "Figma"],
  };

  const isBlurred = (name: string, category: keyof typeof categoryMap) => {
    return selectedCategory && selectedCategory in categoryMap && !categoryMap[selectedCategory as keyof typeof categoryMap].includes(name);
  };

  const isBlurredTool = (name: string, category: keyof typeof toolsCategory) => {
    return selectedCategory && !toolsCategory[selectedCategory as keyof typeof toolsCategory].includes(name);
  };

  return (
    <section id="skills" className=" bg-[#0D1B1E] text-[#C1FCEA]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FFB2] drop-shadow-[0_0_8px_#00FFB2] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#C1FCEA]">Turning ideas into reality with the right tools and technologies.</p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: <FaCode className="w-12 h-12 text-[#00FFB2]" />, title: "Web Development" },
            { icon: <FaServer className="w-12 h-12 text-[#00FFB2]" />, title: "REST API" },
            { icon: <FaMobileAlt className="w-12 h-12 text-[#00FFB2]" />, title: "Mobile Development" },
          ].map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-[#132B2F] rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => handleHover(cat.title)}
              onMouseLeave={() => handleHover(null)}
            >
              {cat.icon}
              <h3 className="text-xl font-semibold mt-4 text-[#C1FCEA]">{cat.title}</h3>
            </div>
          ))}
        </motion.div>

        {/* Languages & Frameworks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-[#132B2F] p-6 rounded-lg shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-[#00FFB2] mb-6">Languages & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "HTML", icon: <SiHtml5 className="w-8 h-8 text-orange-500" /> },
                { name: "CSS", icon: <SiCss3 className="w-8 h-8 text-blue-500" /> },
                { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-600" /> },
                { name: "PHP", icon: <SiPhp className="w-8 h-8 text-purple-500" /> },
                { name: "React", icon: <SiReact className="w-8 h-8 text-cyan-400" /> },
                { name: "Python", icon: <SiPython className="w-8 h-8 text-yellow-600" /> },
                { name: "C", icon: <SiC className="w-8 h-8 text-blue-700" /> },
                { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-green-600" /> },
                { name: "AdonisJS", icon: <SiAdonisjs className="w-8 h-8 text-indigo-500" /> },
                { name: "Laravel", icon: <SiLaravel className="w-8 h-8 text-red-600" /> },
                { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
                { name: "Flask", icon: <SiFlask className="w-8 h-8 text-gray-300" /> },
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 transition duration-300 ${
                    isBlurred(skill.name, selectedCategory as keyof typeof categoryMap)
                      ? "blur-sm opacity-40"
                      : ""
                  }`}
                >
                  {skill.icon}
                  <p className="text-[#C1FCEA]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#132B2F] p-6 rounded-lg shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-[#00FFB2] mb-6">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Figma", icon: <SiFigma className="w-8 h-8 text-purple-500" /> },
                { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-400" /> },
                { name: "Git", icon: <SiGit className="w-8 h-8 text-orange-500" /> },
                { name: "GitHub", icon: <SiGithub className="w-8 h-8 text-white" /> },
                { name: "Linux", icon: <SiLinux className="w-8 h-8 text-yellow-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
                { name: "GCP", icon: <SiGooglecloud className="w-8 h-8 text-blue-300" /> },
              ].map((tool, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 transition duration-300 ${
                    isBlurredTool(tool.name, selectedCategory as keyof typeof toolsCategory)
                      ? "blur-sm opacity-40"
                      : ""
                  }`}
                >
                  {tool.icon}
                  <p className="text-[#C1FCEA]">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
