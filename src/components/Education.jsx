import React from 'react';
import { GraduationCap, Trophy, MapPin, Calendar } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { SectionHeading } from './Common';
import useReveal from '../hooks/useReveal';

const Education = () => {
  const sectionRef = useReveal();

  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6" ref={sectionRef}>
      <SectionHeading title="Education & Certifications" subtitle="My Journey" />
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Side: Education */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-cyan-400 w-8 h-8" />
            <h3 className="text-3xl font-black text-white">Education</h3>
          </div>
          
          <div className="space-y-12 relative border-l-2 border-white/10 ml-4 pl-8">
            {EDUCATION.map((edu, i) => (
              <div 
                key={i} 
                className="reveal-start relative bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500 group"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-10 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black group-hover:scale-150 transition-transform shadow-[0_0_10px_#22d3ee]"></div>
                
                <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-black px-4 py-1.5 rounded-full mb-4 border border-cyan-500/20 uppercase tracking-widest">
                  {edu.period}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
                <p className="text-slate-400 font-medium">{edu.institution}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider">
                  <MapPin className="w-3 h-3 text-cyan-500" /> {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Certifications */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-red-500 w-8 h-8" />
            <h3 className="text-3xl font-black text-white">Certifications</h3>
          </div>
          
          <div className="space-y-6">
            {CERTIFICATIONS.map((cert, i) => (
              <div 
                key={i} 
                className="reveal-start flex items-center gap-6 bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 hover:border-red-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 group cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center text-3xl border border-white/5 group-hover:border-red-500/50 group-hover:bg-red-900/20 transition-all shadow-inner">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{cert.title}</h4>
                  <p className="text-slate-500 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
