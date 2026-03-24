import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
         SiTailwindcss, SiMongodb, SiGit, SiDocker } from 'react-icons/si';

const About = () => {
  const technologies = [
    { id: 1, name: 'React', icon: SiReact, color: '#61DAFB' },
    { id: 2, name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { id: 3, name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { id: 4, name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { id: 5, name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { id: 6, name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { id: 7, name: 'Git', icon: SiGit, color: '#F05032' },
    { id: 8, name: 'Docker', icon: SiDocker, color: '#2496ED' }
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12"
        >
          Get to know me and the technologies I work with
        </motion.p>
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left side - Profile with Rotating Tech Icons */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Center Profile - Bigger WA */}
              <motion.div 
                className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl z-10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                WA
              </motion.div>
              
              {/* Rotating Group - All icons rotate together */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Tech Icons positioned around the circle */}
                {technologies.map((tech, index) => {
                  const angle = (index * 360) / technologies.length;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 160; // Increased radius to accommodate bigger center
                  const left = 192 + Math.cos(radian) * radius; // 384/2 = 192
                  const top = 192 + Math.sin(radian) * radius;
                  const IconComponent = tech.icon;
                  
                  return (
                    <div
                      key={tech.id}
                      className="absolute"
                      style={{ 
                        left: left + 'px', 
                        top: top + 'px',
                        transform: 'translate(-50%, -50%)'
                      }}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div 
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-xl shadow-lg border-2 transition-all hover:brightness-110 hover:scale-110"
                        style={{ borderColor: tech.color }}
                      >
                        <IconComponent style={{ color: tech.color }} size={28} />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
              
              {/* Hover Tooltip */}
              {hoveredTech && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap z-20 shadow-lg"
                >
                  {hoveredTech}
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Right side - Details with Education and Achievements */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Wasim Akram</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate Software Developer & Web Developer with expertise in building modern web applications. I love creating interactive and user-friendly experiences that make a difference.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I specialize in React, Node.js, MongoDB, and modern JavaScript frameworks. With a strong foundation in computer science and a keen eye for design, I bring ideas to life through clean code and creative solutions.
              </p>
              
              {/* Education & Achievements Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
                {/* Education Section */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="text-2xl mr-2">🎓</span>
                    Education
                  </h4>
                  
                  {/* B.Tech */}
                  <div className="mb-4 pl-4 border-l-4 border-blue-500">
                    <p className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block mb-2 font-semibold">
                      2015 – 2019
                    </p>
                    <p className="font-semibold text-gray-800">B.Tech, Computer Science</p>
                    <p className="text-xs text-gray-600">Govt. Engineering College</p>
                    <p className="text-xs text-gray-500">CGPA: 7.37</p>
                  </div>
                  
                  {/* Higher Secondary */}
                  <div className="pl-4 border-l-4 border-green-500">
                    <p className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block mb-2 font-semibold">
                      2013 – 2015
                    </p>
                    <p className="font-semibold text-gray-800">Higher Secondary</p>
                    <p className="text-xs text-gray-600">MVHSS Higher Secondary School</p>
                    <p className="text-xs text-gray-500">CGPA: 9.1</p>
                  </div>
                </div>
                
                {/* Achievements Section */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="text-2xl mr-2">🏆</span>
                    Achievements
                  </h4>
                  
                  {/* Excellence Award */}
                  <div className="mb-4 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <p className="font-semibold text-gray-800 flex items-center">
                      <span className="text-base mr-2">🌟</span>
                      Excellence Award
                    </p>
                    <p className="text-xs text-gray-600 ml-6">Received for resolving critical issues</p>
                  </div>
                  
                  {/* Fire Fighter Award */}
                  <div className="mb-4 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <p className="font-semibold text-gray-800 flex items-center">
                      <span className="text-base mr-2">🔥</span>
                      Fire Fighter Award
                    </p>
                    <p className="text-xs text-gray-600 ml-6">For dedication and hard working</p>
                  </div>
                  
                  {/* Open Source Certificate */}
                  <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <p className="font-semibold text-gray-800 flex items-center">
                      <span className="text-base mr-2">📜</span>
                      Open Source Certificate
                    </p>
                    <p className="text-xs text-gray-600 ml-6">Significant contributions to OSS projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;