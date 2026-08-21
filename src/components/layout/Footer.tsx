'use client';

import React from 'react';
import { FooterLinks } from './FooterLinks';
import { Zap, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t-4 border-black dark:border-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b-2 border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-white shadow-[2px_2px_0px_0px_#fff]">
                <Zap className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-white">E-CELL HIT HALDIA</span>
            </div>
            <p className="text-slate-400 font-body text-sm max-w-sm">
              Fostering innovation, entrepreneurship, and startup culture at Haldia Institute of Technology.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border-2 border-white hover:translate-y-0.5 hover:bg-primary transition-all">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border-2 border-white hover:translate-y-0.5 hover:bg-primary transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border-2 border-white hover:translate-y-0.5 hover:bg-primary transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FooterLinks />
          </div>
        </div>

        <div className="pt-8 text-center text-xs font-body text-slate-400">
          © 2026 E-Cell HIT Haldia. Designed with Memphis Spirit.
        </div>
      </div>
    </footer>
  );
};
