'use client';

import React from 'react';
import { SectionHeader } from '../common/SectionHeader';

export const CapturedInMotion: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-24 bg-white border-b-4 border-black relative overflow-hidden">
      {/* Unique Pattern Texture: Halftone Multi-Color Confetti */}
      <div className="absolute inset-0 bg-pattern-confetti pointer-events-none opacity-50 z-0" />

      {/* Floating Donut Ring */}
      <div className="hidden lg:block absolute right-12 top-10 pointer-events-none z-0 animate-shape-float-b opacity-40">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="38" stroke="#4895EF" strokeWidth="16" fill="none" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <SectionHeader
          badge="Gallery"
          title="Captured in Motion"
          subtitle="Vibrant moments from hackathons, pitch fests, and startup summits at HIT Haldia."
        />

        <div className="gsap-cards-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 border-4 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_#000] h-80 sm:h-96 group">
            <img
              alt="E-Summit & Hackathon"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
            />
          </div>

          <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_#000] h-44 sm:h-48 group">
            <img
              alt="Pitch Fest"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop"
            />
          </div>

          <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_#000] h-44 sm:h-48 bg-primary p-4 flex items-center justify-center text-white">
            <span className="font-display font-black text-xl sm:text-2xl text-center leading-tight">
              #IDEATE<br />EVERYDAY
            </span>
          </div>

          <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_#000] h-44 sm:h-48 group">
            <img
              alt="Ideation Workshop"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop"
            />
          </div>

          <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_#000] h-44 sm:h-48 bg-secondary p-4 flex items-center justify-center text-white">
            <span className="font-display font-black text-xl sm:text-2xl text-center leading-tight">
              JOIN THE<br />VIBE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
