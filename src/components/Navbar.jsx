import React, { useState, useEffect } from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setNavOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-spiderman text-white tracking-[0.2em] hover:text-red-500 hover:drop-shadow-[0_0_10px_#ef4444] transition-all duration-300">
          {PERSONAL_DETAILS.name.split(' ')[0]}
        </a>

        <div className="hidden md:flex gap-10 relative">
          {links.map(link => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, link)}
                className={`text-sm font-spiderman uppercase tracking-[0.2em] transition-colors duration-300 relative py-2 ${isActive ? 'text-red-500' : 'text-slate-400 hover:text-white'}`}
              >
                {link}
                {/* Individual smooth underline for each word */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-500 ease-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></span>
              </a>
            );
          })}
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setNavOpen(!navOpen)}>
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl transition-all duration-700 flex flex-col items-center justify-center gap-8 md:hidden ${navOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {links.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, link)}
            className={`text-4xl font-spiderman uppercase tracking-widest transition-all duration-500 ${activeSection === link.toLowerCase() ? 'text-red-500 scale-125' : 'text-slate-500'}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {link}
          </a>
        ))}
        <button className="absolute top-8 right-8 text-white text-4xl" onClick={() => setNavOpen(false)}>✕</button>
      </div>
    </nav>
  );
};

export default Navbar;
