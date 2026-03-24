import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiGsap, SiTailwindcss, SiPostgresql, SiThreedotjs,
  SiRedis, SiDocker, SiMongodb, SiGit
} from 'react-icons/si';

const Skills = () => {
  const [skills] = useState([
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "selenium", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Express", icon: SiGsap, color: "#88CE02" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "dynamoose", icon: SiPostgresql, color: "#4169E1" },
    { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "node.js", icon: SiDocker, color: "#2496ED" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" }
  ]);

  // Generate random initial positions
  const getRandomPosition = () => ({
    x: Math.random() * 700 - 350, // -350 to 350
    y: Math.random() * 350 - 175, // -175 to 175
  });

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Drag, throw, and watch them bounce. Nothing escapes!
        </motion.p>

        <div className="relative h-[500px] bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 p-6 overflow-hidden shadow-xl">
          {/* Floating background particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`bg-${i}`}
              className="absolute w-2 h-2 bg-indigo-200 rounded-full"
              animate={{
                x: [Math.random() * 800, Math.random() * 800],
                y: [Math.random() * 500, Math.random() * 500],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const initialPos = getRandomPosition();
            
            return (
              <motion.div
                key={skill.name}
                drag
                dragMomentum={true}
                dragElastic={0.7}
                dragTransition={{ 
                  bounceStiffness: 300, 
                  bounceDamping: 20,
                  power: 0.2,
                  timeConstant: 300
                }}
                whileDrag={{ 
                  scale: 1.15,
                  rotate: 5,
                  zIndex: 50,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
                }}
                animate={{
                  x: [initialPos.x, initialPos.x + 30, initialPos.x - 20, initialPos.x],
                  y: [initialPos.y, initialPos.y - 30, initialPos.y + 20, initialPos.y],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="absolute cursor-grab active:cursor-grabbing"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: -80,
                  marginTop: -50,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Skill Card */}
                <motion.div 
                  className="w-40 h-24 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-2 p-3"
                  style={{
                    boxShadow: `0 10px 25px -5px ${skill.color}40`,
                  }}
                  animate={{
                    borderColor: [skill.color + '00', skill.color + '80', skill.color + '00'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Icon with color */}
                  <div className="text-3xl" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Instructions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            <span className="animate-bounce">👇</span>
            Drag any card and watch it bounce around!
            <span className="animate-bounce delay-100">👆</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;