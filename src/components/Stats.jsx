import React from 'react';
import useReveal from '../hooks/useReveal';

const Stats = () => {
  const sectionRef = useReveal();
  const stats = [
    { label: "Projects Completed", value: "5+", icon: "🚀" },
    { label: "Github Repos", value: "7+", icon: "🐙" },
    { label: "Technologies", value: "6+", icon: "⚡" },
    { label: "Years Experience", value: "1", icon: "⏳" },
    { label: "Clients", value: "0+", icon: "👥" },
    { label: "Available", value: "NOW", icon: "💎" }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6" ref={sectionRef}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <div 
            key={stat.label} 
            className="reveal-start group relative bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:border-red-500/50 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Marvel Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{stat.icon}</div>
              <div className="text-4xl font-spiderman text-white group-hover:text-red-500 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{stat.value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-2 font-black group-hover:text-slate-300 transition-colors">{stat.label}</div>
            </div>

            {/* Corner Decorative Lines */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-red-500 transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-blue-500 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
