import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setExit(true), 400);
          setTimeout(onComplete, 1600);
          return 100;
        }
        return prev + (Math.random() > 0.8 ? 5 : 2);
      });
    }, 40);

    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 50);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-all duration-1000 overflow-hidden ${exit ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      {/* 4K Web Pattern */}
      <div className="absolute inset-0 bg-web opacity-60 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-blue-900/20"></div>

      {/* Cinematic Glitch Overlay */}
      {glitch && <div className="absolute inset-0 bg-red-500/5 mix-blend-screen pointer-events-none"></div>}

      <div className="relative text-center scale-110 sm:scale-125">
        {/* Dramatic Spinning Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-[1px] border-red-600/20 border-t-red-600 rounded-full animate-spin-custom"></div>
          <div className="absolute w-56 h-56 border-[1px] border-blue-600/20 border-b-blue-600 rounded-full animate-spin-custom" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute w-48 h-48 border-[1px] border-white/5 border-l-white/40 rounded-full animate-spin-custom" style={{ animationDuration: '3s' }}></div>
        </div>

        {/* 4K Logo */}
        <div className="relative z-10 mb-10">
          <div className="text-[10px] uppercase tracking-[1em] text-red-500 font-black mb-4 animate-pulse">MARVEL STUDIOS</div>
          <h2 className="text-6xl sm:text-7xl font-spiderman text-white tracking-widest drop-shadow-[0_0_30px_rgba(255,0,0,0.8)] leading-none">
            AYUSH<br />
            <span className="text-red-600">SHARMA</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-[1px] w-8 bg-blue-600"></span>
            <div className="text-[12px] uppercase tracking-[0.5em] text-blue-500 font-black">THE WEB DEVELOPER</div>
            <span className="h-[1px] w-8 bg-blue-600"></span>
          </div>
        </div>

        {/* Cinematic Progress */}
        <div className="w-72 bg-white/5 h-1 rounded-full overflow-hidden mx-auto border border-white/10 relative">
          <div 
            className="h-full bg-gradient-to-r from-red-600 via-white to-blue-600 transition-all duration-300 shadow-[0_0_15px_#ff0000]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-1">
          <div className="text-[14px] font-spiderman text-red-500 tracking-widest animate-bounce">THWIP!</div>
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            SYNCHRONIZING WEBS... {progress}%
          </div>
        </div>
      </div>

      {/* 4K Cinematic Exit Effect */}
      {exit && (
        <>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl animate-pulse z-[101]"></div>
          <div className="absolute top-0 left-0 w-1/2 h-full bg-black animate-slideOutLeft z-[102] border-r border-red-600/50"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black animate-slideOutRight z-[102] border-l border-blue-600/50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white animate-introFadeIn opacity-0" style={{ animationDelay: '0.1s' }}></div>
        </>
      )}
    </div>
  );
};

export default Loader;
