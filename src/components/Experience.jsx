import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);

  const experiences = [
    {
      id: 1,
      period: "2024 – Present",
      title: "Senior Frontend Developer",
      company: "NextWave Technologies",
      location: "San Francisco, CA",
      description: "Leading the frontend team to build immersive, high-performance web applications. Spearheaded the migration to React 18 + GSAP animations, achieving a 40% improvement in user engagement. Mentoring junior developers and establishing coding standards.",
      technologies: ["React 18", "GSAP", "TypeScript", "Framer Motion", "Next.js 14", "TailwindCSS"],
      level: "Senior",
      color: "from-blue-600 to-indigo-600",
      icon: "🚀",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      side: "right"
    },
    {
      id: 2,
      period: "2022 – 2024",
      title: "Full Stack Developer",
      company: "InnovateX Labs",
      location: "New York, NY",
      description: "Built scalable microservices and rich UI dashboards. Collaborated with design team to deliver smooth user journeys with Tailwind & Node.js. Implemented CI/CD pipelines and improved deployment efficiency by 30%.",
      technologies: ["Node.js", "React", "MongoDB", "TailwindCSS", "Docker", "AWS"],
      level: "Mid-Level",
      color: "from-green-600 to-emerald-600",
      icon: "💻",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      side: "left"
    },
    {
      id: 3,
      period: "2020 – 2022",
      title: "Advanced Frontend Developer",
      company: "TechVision Solutions",
      location: "Austin, TX",
      description: "Developed complex single-page applications with advanced state management and real-time features. Optimized bundle size and implemented code splitting, resulting in 50% faster load times. Created reusable component library used across 5+ projects.",
      technologies: ["React", "Redux Toolkit", "TypeScript", "Webpack", "Jest", "GraphQL"],
      level: "Advanced",
      color: "from-purple-600 to-pink-600",
      icon: "⚡",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      side: "right"
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A journey through my career — building, breaking, and learning with passion.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full hidden md:block" />
          
          <div className="space-y-6 relative">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Desktop Timeline Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left side card */}
                  {exp.side === "left" && (
                    <>
                      <div className="w-1/2 pr-8">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          onHoverStart={() => setActiveCard(exp.id)}
                          onHoverEnd={() => setActiveCard(null)}
                        >
                          <ExperienceCard exp={exp} activeCard={activeCard} />
                        </motion.div>
                      </div>
                      <div className="w-12 flex justify-center relative">
                        <div className="w-8 h-8 rounded-full bg-white shadow-md border-2 border-white z-10 flex items-center justify-center text-base">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  )}
                  
                  {/* Right side card */}
                  {exp.side === "right" && (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="w-12 flex justify-center relative">
                        <div className="w-8 h-8 rounded-full bg-white shadow-md border-2 border-white z-10 flex items-center justify-center text-base">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="w-1/2 pl-8">
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          onHoverStart={() => setActiveCard(exp.id)}
                          onHoverEnd={() => setActiveCard(null)}
                        >
                          <ExperienceCard exp={exp} activeCard={activeCard} />
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onHoverStart={() => setActiveCard(exp.id)}
                    onHoverEnd={() => setActiveCard(null)}
                  >
                    <ExperienceCard exp={exp} activeCard={activeCard} />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Card Component
const ExperienceCard = ({ exp, activeCard }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 hover:shadow-lg transition-all duration-300"
    style={{ borderLeftColor: exp.borderColor.replace('border-', '').replace('-200', '') }}
    animate={{ 
      scale: activeCard === exp.id ? 1.01 : 1,
      y: activeCard === exp.id ? -2 : 0
    }}
    transition={{ duration: 0.2 }}
  >
    {/* Header with Gradient */}
    <div className={`bg-gradient-to-r ${exp.color} p-4 text-white`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">
          {exp.level}
        </span>
        <div className="flex items-center gap-1 text-xs">
          <Calendar size={12} />
          <span>{exp.period}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-0.5">{exp.title}</h3>
      <div className="flex items-center gap-2 text-white/90 text-sm">
        <Briefcase size={12} />
        <span>{exp.company}</span>
      </div>
      <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
        <MapPin size={10} />
        <span>{exp.location}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      <p className="text-sm text-gray-700 mb-3 leading-relaxed">
        {exp.description}
      </p>

      {/* Technologies */}
      <div>
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              whileHover={{ scale: 1.02 }}
              className={`px-2 py-1 ${exp.bgColor} text-gray-700 rounded-md text-xs font-medium border ${exp.borderColor}`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default Experience;