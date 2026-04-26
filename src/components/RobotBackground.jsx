import React from 'react';

const RobotBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
    {/* Cinematic Web Pattern Overlay */}
    <div className="absolute inset-0 bg-web opacity-20 z-[1]"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black z-[2]"></div>

    {/* Moving Shiny Particles (Optimized for 60FPS) */}
    <div className="absolute inset-0 z-[3]">
      {[...Array(400)].map((_, i) => {
        const size = Math.random() * 2 + 0.5; 
        const colorType = Math.random();
        let bgColor = colorType < 0.5 ? '#ff0000' : '#3b82f6';
        let glowColor = colorType < 0.5 ? '#991b1b' : '#1d4ed8';
        return (
          <div 
            key={i} 
            className="absolute rounded-full"
            style={{
              backgroundColor: bgColor,
              boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}10`,
              width: size + 'px',
              height: size + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              opacity: Math.random() * 0.4 + 0.1,
              willChange: 'transform'
            }}
          ></div>
        );
      })}
    </div>

    {/* Enhanced Cinematic Spiderman Mask */}
    <div className="absolute top-1/2 right-[-50%] sm:right-[-20%] lg:right-[-10%] -translate-y-1/2 w-[140vh] h-[140vh] opacity-10 sm:opacity-40 flex items-center justify-center mix-blend-screen z-[4]">
      <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_100px_rgba(255,0,0,0.2)]">
        <defs>
          <radialGradient id="maskGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        
        {/* Outer Glow */}
        <circle cx="250" cy="250" r="220" fill="url(#maskGlow)" />
        
        {/* Detailed Webbing Structure */}
        <g stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.3">
          {[...Array(24)].map((_, i) => (
            <path key={i} d={`M250 250 L${250 + 250 * Math.cos(i * Math.PI / 12)} ${250 + 250 * Math.sin(i * Math.PI / 12)}`} />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle key={i} cx="250" cy="250" r={30 + i * 30} strokeDasharray="5,5" />
          ))}
        </g>

        {/* The Mask Face (Sharp Style) */}
        <path 
          d="M250 80 C150 80 90 180 90 280 C90 380 150 420 250 420 C350 420 410 380 410 280 C410 180 350 80 250 80 Z" 
          fill="#1a0000" 
          stroke="#ff0000" 
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Cinematic Eyes */}
        <g transform="translate(250, 250)">
          {/* Left Eye */}
          <path 
            d="M-100 -30 Q-60 -80 -10 -20 Q-40 50 -100 -30" 
            fill="white" 
            stroke="black" 
            strokeWidth="8"
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
          {/* Right Eye */}
          <path 
            d="M100 -30 Q60 -80 10 -20 Q40 50 100 -30" 
            fill="white" 
            stroke="black" 
            strokeWidth="8"
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
        </g>
      </svg>
    </div>
  </div>
);

export default RobotBackground;
