import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Common';
import { PROJECTS } from '../constants';
import { SectionHeading } from './Common';
import useReveal from '../hooks/useReveal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Frontend', 'Backend', 'Full Stack'];
  const sectionRef = useReveal();
  const filteredProjects = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6" ref={sectionRef}>
      <SectionHeading title="Marvelous Works" subtitle="Cinematic Projects" />
      
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeFilter === f ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]' : 'text-slate-400 hover:text-white bg-white/5 border border-white/10'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project, i) => (
          <div
            key={project.id}
            className="group relative bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:border-red-600 transition-all duration-500 shadow-2xl"
          >
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-[1]"></div>
            
            <div className="h-72 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-red-900/20 to-blue-900/20">
              {/* Tech Badges */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                {project.tech.map(t => (
                  <span key={t} className="bg-black/80 text-red-400 text-[10px] font-black px-3 py-1 rounded-md border border-red-500/30 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>

              {/* Poster Number */}
              <span className="absolute -bottom-8 -right-8 text-[12rem] font-spiderman text-white/5 select-none leading-none group-hover:text-red-500/10 transition-colors duration-500">
                {project.id}
              </span>

              {/* Interactive Icon */}
              <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <ExternalLink className="w-10 h-10 text-red-500 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="p-10 relative z-10">
              <h3 className="text-4xl font-spiderman text-white mb-4 group-hover:text-red-600 transition-colors tracking-widest">{project.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{project.description}</p>
              
              <div className="flex gap-6">
                <a href={project.live} target="_blank" className="flex items-center gap-2 text-sm font-black text-red-500 hover:text-red-400 uppercase tracking-widest group/btn">
                  Live Mission <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
                <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-black text-slate-500 hover:text-white uppercase tracking-widest group/btn">
                  Source Code <Github className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                </a>
              </div>
            </div>

            {/* Cinematic Borders */}
            <div className="absolute top-0 right-0 w-[1px] h-0 bg-gradient-to-b from-red-600 to-transparent group-hover:h-full transition-all duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-600 to-transparent group-hover:w-full transition-all duration-1000"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
