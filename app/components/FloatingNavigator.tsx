import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Untuk digunakan di Home component:
// import FloatingNavigator from './components/FloatingNavigator';
// Lalu tambahkan <FloatingNavigator /> setelah <Loader />

interface Section {
  id: string;
  label: string;
  icon: string;
}

const FloatingNavigator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const sections: Section[] = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];
  

  // Scroll spy to detect active section
useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '-10% 0px -10% 0px',
  }
);

  // Hanya observe kalau element ada
  sections.forEach(({ id }) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });

  return () => observer.disconnect();
}, []);


  // Show navigator after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000); // Show after loader + fade in
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative group flex items-center justify-center w-12 h-12 rounded-full
                  transition-all duration-300 ease-out
                  ${activeSection === section.id 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' 
                    : 'bg-white/20 text-gray-300 hover:bg-white/30 hover:text-white'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 }
                }}
              >
                {/* Icon */}
                <span className="text-lg">{section.icon}</span>
                
                {/* Active indicator */}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute -left-1 w-1 h-8 bg-blue-400 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {section.label}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900" />
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Progress indicator */}
          <div className="absolute -right-1 top-0 bottom-0 w-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"
              style={{
                height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        
        {/* Floating animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavigator;
