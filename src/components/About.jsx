import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { SectionHeading } from './Common';
import useReveal from '../hooks/useReveal';

const About = () => {
  const refLeft = useReveal();
  const refRight = useReveal();

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading title="Who Am I?" subtitle="About" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div ref={refLeft} className="reveal-start bg-gray-900 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-500 relative group">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 p-1 mb-6">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-900">
              <span className="text-5xl font-black text-white">{PERSONAL_DETAILS.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white relative z-10">{PERSONAL_DETAILS.name}</h3>
          <p className="text-cyan-400 font-medium mb-4 relative z-10">{PERSONAL_DETAILS.profession}</p>
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for work
          </div>
        </div>

        <div ref={refRight} className="reveal-start" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
          <p className="text-slate-300 leading-relaxed mb-8">{PERSONAL_DETAILS.about}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 border border-white/5">
              <MapPin className="text-cyan-400 w-5 h-5" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                <p className="text-sm text-white font-medium">{PERSONAL_DETAILS.location}</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 border border-white/5">
              <Mail className="text-cyan-400 w-5 h-5" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                <p className="text-sm text-white font-medium break-all">{PERSONAL_DETAILS.email}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB', 'MySQL'].map(tech => (
              <span key={tech} className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-1.5 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
