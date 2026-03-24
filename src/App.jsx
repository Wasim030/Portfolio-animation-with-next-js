import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Contact from './components/Contact';
import Footer from './components/Footer';
import MagneticCursor from './effects/MagneticCursor';
import MagneticBubble from './effects/MagneticBubble';
// or import MagneticCursorAdvanced from './effects/MagneticCursorAdvanced';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <MagneticCursor /> {/* Simple magnetic cursor */}
      {/* <MagneticCursorAdvanced /> /* Advanced with hover effects */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

