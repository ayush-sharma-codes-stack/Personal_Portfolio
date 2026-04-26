import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Common';
import { PERSONAL_DETAILS } from '../constants';

const Footer = () => (
  <footer className="py-12 border-t border-white/10 text-center">
    <div className="flex justify-center gap-6 mb-8">
      <a href={PERSONAL_DETAILS.github} target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all"><Github className="w-6 h-6" /></a>
      <a href={PERSONAL_DETAILS.linkedin} target="_blank" className="text-slate-400 hover:text-cyan-400 transition-all"><Linkedin className="w-6 h-6" /></a>
      <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-400 hover:text-cyan-400 transition-all"><Mail className="w-6 h-6" /></a>
    </div>
    <p className="text-slate-500 text-sm italic">Designed & Built by {PERSONAL_DETAILS.name}</p>
    <p className="text-slate-600 text-xs mt-2">© 2024 • All rights reserved</p>
  </footer>
);

export default Footer;
