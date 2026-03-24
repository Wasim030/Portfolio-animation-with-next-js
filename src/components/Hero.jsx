import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Character animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 }
    }
  };

  // Text to animate character by character
  const nameText = "Wasim Akram";
  const roleText = "Software Developer";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
          
          {/* CENTERED CONTENT: Name + Software Development + Buttons + Social (all stacked) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            {/* Name with character animation */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="inline-block">
                {nameText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariants}
                    className="inline-block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* "Software Developer" with character animation */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              {roleText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>

            {/* CONTACT & RESUME BUTTONS - horizontal row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-row gap-4 justify-center mb-8"
            >
              <a 
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Contact Me
              </a>
              <a 
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
              >
                My Resume
              </a>
            </motion.div>

            {/* SOCIAL MEDIA ICONS - horizontal below buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-row gap-6 justify-center items-center"
            >
              {/* GitHub */}
              <a href="https://github.com/wasimakram" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/wasimakram" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/wasimakram" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:wasim@akram.dev" className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </a>
              {/* Small label */}
              <span className="text-xs text-gray-400 ml-2">SOCIAL</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <div className="relative flex flex-col items-center">
          <div className="w-7 h-11 rounded-full border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300 flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 group-hover:bg-blue-500 rounded-full animate-scrollWheel"></div>
          </div>
          <div className="mt-2 flex flex-col items-center">
            <ChevronDown 
              size={20} 
              className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 animate-bounce" 
            />
          </div>
          <p className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors duration-300 mt-1 font-medium tracking-wider">
            SCROLL
          </p>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-100 opacity-0 group-hover:opacity-30 scale-0 group-hover:scale-150 transition-all duration-500"></div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scrollWheel {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        
        .animate-scrollWheel {
          animation: scrollWheel 2s infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;