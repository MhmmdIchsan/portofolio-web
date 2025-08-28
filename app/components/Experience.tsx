"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "./data/experienceData";
// Import the improved data structure
interface ExperienceItem {
  id: number;
  startDate: string;
  endDate: string | "Present";
  title: string;
  organization: string;
  type: "work" | "education" | "organization" | "course";
  status: "completed" | "ongoing";
  details: string[];
  skills?: string[];
  location?: string;
}


// Utility functions
const sortExperienceByDate = (experiences: ExperienceItem[], order: 'asc' | 'desc' = 'desc'): ExperienceItem[] => {
  return [...experiences].sort((a, b) => {
    const aDate = new Date(a.startDate + '-01').getTime();
    const bDate = new Date(b.startDate + '-01').getTime();
    return order === 'desc' ? bDate - aDate : aDate - bDate;
  });
};

const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate + '-01');
  const startFormatted = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  
  if (endDate === 'Present') {
    return `${startFormatted} - Present`;
  }
  
  const end = new Date(endDate + '-01');
  const endFormatted = end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  
  return `${startFormatted} - ${endFormatted}`;
};

const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate + '-01');
  const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
  
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;
    
    let result = `${years} year${years > 1 ? 's' : ''}`;
    if (remainingMonths > 0) {
      result += ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return result;
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'work':
      return '💼';
    case 'education':
      return '🎓';
    case 'organization':
      return '🏛️';
    case 'course':
      return '📚';
    default:
      return '⭐';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'work':
      return 'from-[#00FFB2] to-[#38bdf8]';
    case 'education':
      return 'from-[#fbbf24] to-[#f59e0b]';
    case 'organization':
      return 'from-[#8b5cf6] to-[#7c3aed]';
    case 'course':
      return 'from-[#06b6d4] to-[#0891b2]';
    default:
      return 'from-[#00FFB2] to-[#38bdf8]';
  }
};

const getYearFromDate = (dateString: string) => {
  return new Date(dateString + '-01').getFullYear();
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  // Sort and filter data
  const sortedData = sortExperienceByDate(experienceData, 'desc');
  const filteredData = filterType === 'all' 
    ? sortedData 
    : sortedData.filter(exp => exp.type === filterType);

  // Group by year for better organization
  const groupedByYear = filteredData.reduce((acc, exp) => {
    const year = getYearFromDate(exp.startDate);
    if (!acc[year]) acc[year] = [];
    acc[year].push(exp);
    return acc;
  }, {} as Record<number, ExperienceItem[]>);

  const years = Object.keys(groupedByYear).map(Number).sort((a, b) => b - a);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredData.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredData.length]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setExpandedItem(expandedItem === index ? null : index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
    setActiveIndex(0);
    setExpandedItem(null);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#00FFB2]/5 to-[#38bdf8]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#8b5cf6]/5 to-[#00FFB2]/5 blur-3xl"></div>
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
          <span className="text-[#00FFB2] text-lg font-medium mb-2 block">My Journey</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Career{" "}
            <span className="bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            An interactive vertical journey through my professional experiences and achievements
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {['all', 'work', 'education', 'organization', 'course'].map((type) => (
            <button
              key={type}
              onClick={() => handleFilterChange(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                filterType === type
                  ? 'bg-gradient-to-r from-[#00FFB2]/20 to-[#38bdf8]/20 text-[#00FFB2] border border-[#00FFB2]/40'
                  : 'bg-[#1e293b]/30 text-gray-400 hover:text-white hover:bg-[#1e293b]/50'
              }`}
            >
              <span>{type === 'all' ? '🌟' : getTypeIcon(type)}</span>
              <span className="capitalize font-medium text-sm">
                {type === 'all' ? 'All' : type}
              </span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">
                {type === 'all' ? filteredData.length : experienceData.filter(exp => exp.type === type).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Timeline Desktop */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          {years.map((year, yearIndex) => (
            <div key={year} className="mb-12 last:mb-0">
              {/* Year Header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#00FFB2] to-[#38bdf8] flex items-center justify-center text-xl font-bold text-[#0F172A]">
                  {year}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#00FFB2]/50 to-transparent"></div>
                <div className="text-sm text-gray-400 font-medium">
                  {groupedByYear[year].length} experience{groupedByYear[year].length > 1 ? 's' : ''}
                </div>
              </motion.div>

              {/* Experiences for this year */}
              <div className="space-y-6 ml-8 border-l-2 border-dashed border-[#00FFB2]/20 pl-8 relative">
                {groupedByYear[year].map((exp, expIndex) => {
                  const globalIndex = filteredData.findIndex(item => item.id === exp.id);
                  const isActive = activeIndex === globalIndex;
                  const isExpanded = expandedItem === globalIndex;

                  return (
                    <motion.div
                      key={exp.id}
                      className="relative"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (yearIndex * 0.1) + (expIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {/* Connection dot */}
                      <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full bg-[#0F172A] border-4 border-[#00FFB2] z-10">
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-[#00FFB2]"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Experience Card */}
                      <motion.div
                        className={`cursor-pointer transition-all duration-300 ${
                          isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                        }`}
                        onClick={() => handleItemClick(globalIndex)}
                        whileHover={{ y: -2 }}
                      >
                        <div className={`bg-gradient-to-br from-[#1e293b]/50 to-[#0f172a]/50 rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isActive ? 'border-[#00FFB2]/50 shadow-lg shadow-[#00FFB2]/20' : 'border-[#00FFB2]/20 hover:border-[#00FFB2]/40'
                        }`}>
                          {/* Card Header */}
                          <div className="p-6 pb-4">
                            <div className="flex items-start gap-4">
                              {/* Type Icon */}
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getTypeColor(exp.type)} flex items-center justify-center text-lg flex-shrink-0`}>
                                {getTypeIcon(exp.type)}
                              </div>

                              {/* Main Info */}
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                                  isActive ? 'text-[#00FFB2]' : 'text-white'
                                }`}>
                                  {exp.title}
                                </h3>
                                <div className="text-[#38bdf8] font-semibold mb-2">{exp.organization}</div>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                  <span className="flex items-center gap-1">
                                    📅 {formatDateRange(exp.startDate, exp.endDate)}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    ⏱️ {calculateDuration(exp.startDate, exp.endDate)}
                                  </span>
                                  {exp.location && (
                                    <span className="flex items-center gap-1">
                                      📍 {exp.location}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Status & Expand Icon */}
                              <div className="flex flex-col items-end gap-2">
                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  exp.status === 'ongoing' 
                                    ? 'bg-[#00FFB2]/20 text-[#00FFB2]' 
                                    : 'bg-gray-600/20 text-gray-400'
                                }`}>
                                  {exp.status === 'ongoing' ? '🟢 Ongoing' : '✅ Completed'}
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-gray-400"
                                >
                                  ⌄
                                </motion.div>
                              </div>
                            </div>

                            {/* Skills Preview */}
                            {exp.skills && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {exp.skills.slice(0, 3).map((skill, idx) => (
                                  <span
                                    key={skill}
                                    className="px-2 py-1 bg-[#00FFB2]/10 border border-[#00FFB2]/20 rounded-md text-xs text-[#00FFB2]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                                {exp.skills.length > 3 && (
                                  <span className="px-2 py-1 bg-gray-600/20 rounded-md text-xs text-gray-400">
                                    +{exp.skills.length - 3} more
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Expandable Details */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 border-t border-[#00FFB2]/10">
                                  <div className="pt-4 space-y-4">
                                    {/* Detailed Achievements */}
                                    <div>
                                      <h4 className="text-sm font-semibold text-[#38bdf8] mb-3 flex items-center gap-2">
                                        🎯 Key Achievements
                                      </h4>
                                      <ul className="space-y-2">
                                        {exp.details.map((detail, idx) => (
                                          <motion.li
                                            key={idx}
                                            className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                          >
                                            <div className="w-1.5 h-1.5 bg-[#00FFB2] rounded-full mt-2 flex-shrink-0" />
                                            <span>{detail}</span>
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* All Skills */}
                                    {exp.skills && (
                                      <div>
                                        <h4 className="text-sm font-semibold text-[#38bdf8] mb-3 flex items-center gap-2">
                                          ⚡ Skills & Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                          {exp.skills.map((skill, idx) => (
                                            <motion.span
                                              key={skill}
                                              className="px-3 py-1 bg-gradient-to-r from-[#00FFB2]/10 to-[#38bdf8]/10 border border-[#00FFB2]/30 rounded-full text-sm text-[#00FFB2]"
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                                            >
                                              {skill}
                                            </motion.span>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {filteredData.map((exp, idx) => {
            const isExpanded = expandedItem === idx;
            return (
              <motion.div
                key={exp.id}
                className="bg-[#1e293b]/50 rounded-2xl border border-[#00FFB2]/20 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setExpandedItem(isExpanded ? null : idx)}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getTypeColor(exp.type)} flex items-center justify-center text-lg`}>
                    {getTypeIcon(exp.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#00FFB2]">{exp.title}</h3>
                    <div className="text-[#38bdf8] font-medium">{exp.organization}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      📅 {formatDateRange(exp.startDate, exp.endDate)} • ⏱️ {calculateDuration(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    ⌄
                  </motion.div>
                </div>

                {/* Expand Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden mt-4"
                    >
                      {/* Details */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-[#38bdf8]">🎯 Key Achievements</h4>
                          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                            {exp.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>
                        {exp.skills && (
                          <div>
                            <h4 className="text-sm font-semibold text-[#38bdf8]">⚡ Skills</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {exp.skills.map((s, i) => (
                                <span key={i} className="px-2 py-1 bg-[#00FFB2]/10 border border-[#00FFB2]/20 rounded-md text-xs text-[#00FFB2]">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { 
              icon: "💼", 
              number: experienceData.filter(exp => exp.type === 'work').length, 
              label: "Work Experience",
              color: "from-[#00FFB2] to-[#38bdf8]"
            },
            { 
              icon: "🎓", 
              number: experienceData.filter(exp => exp.type === 'education').length, 
              label: "Education Programs",
              color: "from-[#fbbf24] to-[#f59e0b]"
            },
            { 
              icon: "🏛️", 
              number: experienceData.filter(exp => exp.type === 'organization').length, 
              label: "Organizations",
              color: "from-[#8b5cf6] to-[#7c3aed]"
            },
            { 
              icon: "📚", 
              number: experienceData.filter(exp => exp.type === 'course').length, 
              label: "Teaching Roles",
              color: "from-[#06b6d4] to-[#0891b2]"
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#1e293b]/30 to-[#0f172a]/30 rounded-2xl border border-[#00FFB2]/20 hover:border-[#00FFB2]/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-play Control */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 px-6 py-3 bg-[#1e293b]/30 rounded-2xl border border-[#00FFB2]/20">
            <span className="text-sm text-gray-400">
              {isAutoPlaying ? "Auto-highlighting enabled" : "Manual mode"}
            </span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-[#00FFB2]/20 text-[#00FFB2] hover:bg-[#00FFB2]/30"
                  : "bg-gray-600/20 text-gray-400 hover:bg-gray-600/30"
              }`}
            >
              {isAutoPlaying ? "⏸️" : "▶️"}
            </button>
            {isAutoPlaying && (
              <div className="flex gap-1">
                {filteredData.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === activeIndex ? 'bg-[#00FFB2]' : 'bg-gray-600'
                    }`}
                    animate={{
                      scale: idx === activeIndex ? [1, 1.2, 1] : 1,
                      opacity: idx === activeIndex ? [1, 0.7, 1] : 0.5
                    }}
                    transition={{
                      duration: 1,
                      repeat: idx === activeIndex ? Infinity : 0
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          className="text-center mt-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          💡 Click on any experience card to expand details
        </motion.div>
      </div>
    </section>
  );
}
