import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RobotBackground from './components/RobotBackground';
import Loader from './components/Loader';
import Stats from './components/Stats';
import Education from './components/Education';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.3 });
    
    // Only observe after loading is done
    if (!loading) {
      document.querySelectorAll('section').forEach(s => observer.observe(s));
    }
    
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="relative selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <RobotBackground />
          <Navbar activeSection={activeSection} />
          <main>
            <Hero />
            <Stats />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
