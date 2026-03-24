import { Github, Code2, Globe, ChevronRight, Zap, ChevronLeft, ExternalLink } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tagline: "Next-Gen Shopping Experience",
      description: "A revolutionary e-commerce platform powered by AI, featuring real-time inventory, predictive analytics, and immersive shopping experiences.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      features: [
        { text: "AI-Powered Recommendations", icon: "🤖", highlight: true },
        { text: "Real-time Inventory Sync", icon: "⚡", highlight: false },
        { text: "3D Product Viewer", icon: "🔄", highlight: true },
        { text: "Voice Search Integration", icon: "🎤", highlight: false }
      ],
      techStack: [
        { name: "Next.js 14", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js", level: 85 },
        { name: "GraphQL", level: 88 }
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/wasimakram/ecommerce-platform",
      color: "from-blue-600 via-cyan-500 to-teal-400",
      bgGradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "AI Healthcare Assistant",
      tagline: "Revolutionizing Patient Care",
      description: "Advanced healthcare platform using deep learning for early diagnosis, personalized treatment plans, and 24/7 patient monitoring.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        { text: "Deep Learning Diagnosis", icon: "🧠", highlight: true },
        { text: "Real-time Patient Monitoring", icon: "📊", highlight: false },
        { text: "AI Treatment Planner", icon: "📋", highlight: true },
        { text: "Telemedicine Integration", icon: "📹", highlight: false }
      ],
      techStack: [
        { name: "TensorFlow", level: 92 },
        { name: "Python", level: 95 },
        { name: "React Native", level: 88 },
        { name: "PostgreSQL", level: 85 }
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/wasimakram/ai-healthcare",
      color: "from-emerald-600 via-green-500 to-teal-400",
      bgGradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20"
    },
    {
      id: 3,
      title: "Modern Portfolio 2025",
      tagline: "Digital Experience Masterpiece",
      description: "Cutting-edge portfolio with WebGL visualizations, real-time 3D interactions, and groundbreaking animation systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      features: [
        { text: "WebGL 3D Engine", icon: "🎨", highlight: true },
        { text: "Real-time Particles", icon: "✨", highlight: false },
        { text: "Gesture Controls", icon: "👆", highlight: true },
        { text: "Voice Navigation", icon: "🗣️", highlight: false }
      ],
      techStack: [
        { name: "Three.js", level: 96 },
        { name: "WebGL", level: 90 },
        { name: "GSAP", level: 94 },
        { name: "TypeScript", level: 95 }
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/wasimakram/portfolio",
      color: "from-purple-600 via-pink-500 to-orange-400",
      bgGradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    }
  ];

  const scrollToProject = (index) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = index * container.offsetWidth;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const projectWidth = container.offsetWidth;
      const newIndex = Math.round(scrollPosition / projectWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-black min-h-screen relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pushing the boundaries of web development with cutting-edge technology and creative innovation
          </p>
        </div>

        {/* Projects Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollToProject(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scrollToProject(Math.min(projects.length - 1, currentIndex + 1))}
            disabled={currentIndex === projects.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all ${
              currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-hidden snap-x snap-mandatory"
          >
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 snap-start px-12"
                >
                  {/* Project Card */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${project.color}`} />
                    
                    {/* Content - Grid Layout */}
                    <div className="grid lg:grid-cols-3 gap-6 p-8">
                      {/* Left Column - Project Image */}
                      <div className="lg:col-span-1">
                        <div className={`relative h-48 lg:h-64 rounded-xl overflow-hidden ${project.bgGradient} border border-white/10`}>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <ExternalLink size={16} className="text-white/80" />
                            <span className="text-xs text-white/80">Project Preview</span>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                            <div className="text-xl font-bold text-white">4+</div>
                            <div className="text-xs text-gray-400">Features</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                            <div className="text-xl font-bold text-white">4</div>
                            <div className="text-xs text-gray-400">Tech Stack</div>
                          </div>
                        </div>
                      </div>

                      {/* Middle Column - Project Info */}
                      <div className="lg:col-span-1 space-y-4">
                        {/* Title and Number */}
                        <div>
                          <span className="text-sm text-gray-500 font-mono">
                            Project {(index + 1).toString().padStart(2, '0')}
                          </span>
                          <h3 className={`text-3xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {project.title}
                          </h3>
                        </div>

                        {/* Tagline */}
                        <p className="text-lg text-gray-300 font-light">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-white/5 text-gray-300 rounded-full flex items-center gap-1"
                            >
                              <span>{feature.icon}</span>
                              {feature.text}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-xl transition-all text-sm"
                          >
                            <Globe size={16} />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-white/10 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-white/20 transition-all border border-white/10 text-sm"
                          >
                            <Github size={16} />
                            Source Code
                          </a>
                        </div>
                      </div>

                      {/* Right Column - Tech Power Status */}
                      <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 text-gray-300 mb-4">
                          <Zap size={20} className="text-yellow-500" />
                          <h4 className="font-semibold">Tech Power Status</h4>
                        </div>
                        
                        <div className="space-y-4">
                          {project.techStack.map((tech, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-300">{tech.name}</span>
                                <span className="text-gray-400 font-mono">{tech.level}%</span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
                                  style={{ width: `${tech.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Power Status Summary */}
                        <div className="mt-6 pt-4 border-t border-white/10">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Average Proficiency</span>
                            <span className="text-white font-bold">
                              {Math.round(project.techStack.reduce((acc, tech) => acc + tech.level, 0) / project.techStack.length)}%
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="text-gray-400">Peak Performance</span>
                            <span className="text-green-400 font-bold">
                              {Math.max(...project.techStack.map(t => t.level))}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/wasimakram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-xl transition-all"
          >
            <Github size={20} />
            View All Projects
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;