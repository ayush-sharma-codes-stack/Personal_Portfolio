import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { SectionHeading } from './Common';
import useReveal from '../hooks/useReveal';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const tabs = ['Frontend', 'Backend', 'Tools'];
  const sectionRef = useReveal();

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6" ref={sectionRef}>
      <SectionHeading title="What I Work With" subtitle="My Skills" />
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeTab === tab ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white border border-white/10'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {SKILLS[activeTab].map((skill, i) => (
          <div
            key={skill.name}
            className="group relative bg-gray-900 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/60 hover:-translate-y-2 hover:scale-105 transition-all duration-400 cursor-default overflow-hidden"
          >
            {/* Animated Glow Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{skill.icon}</div>
            <h4 className="text-white font-semibold text-lg group-hover:text-red-400 transition-colors">{skill.name}</h4>
            <div className="w-full bg-white/10 rounded-full h-1.5 mt-5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-600 to-blue-600 h-full rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_#ff0000]"
                style={{ width: `${skill.pct}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500 mt-2 group-hover:text-slate-300">{skill.pct}% Proficiency</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
