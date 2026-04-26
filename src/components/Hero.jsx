import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Common';
import { PERSONAL_DETAILS } from '../constants';

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState('');
  const roles = ["Full Stack Developer", "Web Developer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentText = '';
    let charIndex = 0;
    const targetRole = roles[roleIndex];
    const typeInterval = setInterval(() => {
      if (charIndex < targetRole.length) {
        currentText += targetRole[charIndex];
        setDisplayedRole(currentText);
        charIndex++;
      } else clearInterval(typeInterval);
    }, 60);
    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto">
        <p className="text-xl text-slate-300 mb-4 font-medium" style={{ animation: 'fadeIn 0.8s 0.2s both' }}>
          {PERSONAL_DETAILS.tagline}
        </p>

        <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-spiderman text-white mb-6 flex flex-wrap justify-center gap-x-6 tracking-widest drop-shadow-[0_0_40px_rgba(255,0,0,0.4)]">
          {PERSONAL_DETAILS.name.split(' ').map((word, wIndex) => (
            <span key={wIndex} className="whitespace-nowrap transition-all hover:scale-110 hover:text-red-500 hover:drop-shadow-[0_0_30px_rgba(255,0,0,0.5)] duration-500 cursor-default">
              {word}
            </span>
          ))}
        </h1>

        <div className="h-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-white to-violet-500 bg-clip-text text-transparent italic tracking-wide">
            {displayedRole}<span className="text-red-600 animate-blink">|</span>
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 sm:gap-6 justify-center flex-wrap mb-12" style={{ animation: 'fadeInUp 0.8s 1.4s both' }}>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} 
            className="bg-cyan-500 text-black font-black px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_#06b6d440]"
          >
            View My Work
          </button>
          
          <a 
            href="/Ayush_Sharma_CV.pdf" 
            download="Ayush_Sharma_CV.pdf" 
            className="border-2 border-cyan-500 text-cyan-400 font-black px-10 py-5 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105 active:scale-95"
          >
            Download CV
          </a>

          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
            className="bg-violet-600 text-white font-black px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_#7c3aed40]"
          >
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-16" style={{ animation: 'fadeInUp 1s 1.8s both' }}>
          <a href={PERSONAL_DETAILS.github} target="_blank" className="text-white/60 hover:text-white transition-all transform hover:scale-125 hover:-translate-y-1"><Github className="w-8 h-8" /></a>
          <a href={PERSONAL_DETAILS.linkedin} target="_blank" className="text-white/60 hover:text-white transition-all transform hover:scale-125 hover:-translate-y-1"><Linkedin className="w-8 h-8" /></a>
          <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-white/60 hover:text-white transition-all transform hover:scale-125 hover:-translate-y-1"><Mail className="w-8 h-8" /></a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-300">SCROLL DOWN</span>
        <div className="w-[2px] h-10 bg-gradient-to-b from-cyan-500 via-red-500 to-transparent group-hover:h-14 transition-all duration-500"></div>
        <span className="text-white transform group-hover:translate-y-1 transition-transform">↓</span>
      </div>
    </section>
  );
};

export default Hero;
