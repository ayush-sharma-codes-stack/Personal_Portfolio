import React, { useState } from 'react';
import { Send, CircleCheck, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Github, Linkedin } from './Common';
import { PERSONAL_DETAILS } from '../constants';
import { SectionHeading } from './Common';
import useReveal from '../hooks/useReveal';

const Contact = () => {
  const sectionRef = useReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6" ref={sectionRef}>
      <SectionHeading title="Contact Me" subtitle="Let's Connect" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Info Cards */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-6xl font-spiderman text-white tracking-widest uppercase">Let's Talk</h2>
            <MessageCircle className="w-10 h-10 text-red-600 fill-red-600/20" />
          </div>
          <p className="text-slate-400 text-xl leading-relaxed mb-8 max-w-md italic">
            "With great power comes great responsibility..." Let's build something legendary together.
          </p>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "EMAIL", value: PERSONAL_DETAILS.email, color: "text-red-500", bg: "bg-red-500/10", border: "hover:border-red-500/30" },
              { icon: Phone, label: "PHONE", value: PERSONAL_DETAILS.phone, color: "text-blue-500", bg: "bg-blue-500/10", border: "hover:border-blue-500/30" },
              { icon: MapPin, label: "LOCATION", value: PERSONAL_DETAILS.location, color: "text-white", bg: "bg-white/10", border: "hover:border-white/30" }
            ].map((item, i) => (
              <div key={i} className={`reveal-start flex items-center gap-6 bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 transition-all duration-500 group ${item.border}`}>
                <div className={`p-4 ${item.bg} rounded-2xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.3)]`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-white break-all group-hover:text-white transition-colors">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] mb-6 uppercase">SOCIAL MULTIVERSE</p>
            <div className="flex gap-4">
              <a href={PERSONAL_DETAILS.github} target="_blank" className="p-5 bg-gray-900/60 border border-white/5 rounded-2xl text-white hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 hover:shadow-[0_0_20px_white]"><Github className="w-6 h-6" /></a>
              <a href={PERSONAL_DETAILS.linkedin} target="_blank" className="p-5 bg-gray-900/60 border border-white/5 rounded-2xl text-white hover:bg-[#0077b5] transition-all transform hover:-translate-y-2 hover:shadow-[0_0_20px_#0077b5]"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="p-5 bg-gray-900/60 border border-white/5 rounded-2xl text-white hover:bg-black transition-all transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative group">
          {/* Glowing Background Blur */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
            <form action={`https://formsubmit.co/${PERSONAL_DETAILS.email}`} method="POST" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 tracking-[0.2em] ml-1 uppercase">Mission Agent</label>
                  <input name="name" type="text" required placeholder="Your Name" className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 focus:bg-red-900/5 transition-all shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 tracking-[0.2em] ml-1 uppercase">Signal Channel</label>
                  <input name="email" type="email" required placeholder="Your Email" className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 focus:bg-blue-900/5 transition-all shadow-inner" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 tracking-[0.2em] ml-1 uppercase">Objective</label>
                <input name="subject" type="text" required placeholder="What are we building?" className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 focus:bg-red-900/5 transition-all shadow-inner" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 tracking-[0.2em] ml-1 uppercase">Mission Details</label>
                <textarea name="message" rows="5" required placeholder="Tell me about your vision..." className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 focus:bg-blue-900/5 transition-all shadow-inner resize-none"></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full relative group/btn overflow-hidden rounded-2xl transition-all duration-300 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 group-hover/btn:from-red-600 group-hover/btn:to-red-400 transition-all"></div>
                <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                  <span className="text-white font-black tracking-[0.3em] uppercase">{isSubmitting ? "THWIPPING..." : "LAUNCH MISSION"}</span>
                  <Send className="w-5 h-5 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </div>
              </button>
            </form>

            {isSuccess && (
              <div className="mt-8 p-5 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-4 text-green-400 animate-fadeIn backdrop-blur-md">
                <CircleCheck className="w-6 h-6" /> 
                <div>
                  <p className="font-bold">Mission Received!</p>
                  <p className="text-xs opacity-70">I'll get back to your signal shortly.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
