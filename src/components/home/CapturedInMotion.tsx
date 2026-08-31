'use client';

import React from 'react';
import { SectionHeader } from '../common/SectionHeader';

const galleryItems = [
  {
    id: 'summit',
    title: 'SUMMIT',
    description: 'E-Summit HIT Haldia is the flagship event bringing together thousands of students, founders, and investors for an unparalleled experience.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'pitch',
    title: 'PITCH',
    description: 'Our annual pitching competition where student startups battle it out for seed funding, mentorship, and incubation support.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'hackathon',
    title: 'HACKATHON',
    description: '48 hours of relentless coding, caffeine, and innovation. Teams collaborate to solve pressing real-world challenges.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'global',
    title: 'GLOBAL',
    description: 'Representing HIT Haldia on the global stage, participating in international entrepreneurial summits and global showcases.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop'
  }
];

export const CapturedInMotion: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-20 sm:py-24 bg-white dark:bg-slate-950 border-b-4 border-black relative overflow-hidden">
      {/* Unique Pattern Texture: Halftone Multi-Color Confetti */}
      <div className="absolute inset-0 bg-pattern-confetti pointer-events-none opacity-40 z-0" />

      {/* Floating Donut Ring */}
      <div className="hidden lg:block absolute right-12 top-10 pointer-events-none z-0 animate-shape-float-b opacity-40">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="38" stroke="#4895EF" strokeWidth="16" fill="none" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <SectionHeader
          badge="Gallery"
          title="Captured in Motion"
          subtitle="Vibrant moments from hackathons, pitch fests, and startup summits at HIT Haldia."
        />

        {/* Accordion Gallery */}
        <div className="flex w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-[32px] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_#000] bg-black">
          {galleryItems.map((item, idx) => (
            <div 
              key={item.id}
              className="group relative h-full flex-1 hover:flex-[4] sm:hover:flex-[5] transition-all duration-700 ease-out cursor-pointer overflow-hidden border-r-4 last:border-r-0 border-black"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40" 
              />
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
              
              {/* Vertical Text (Visible when NOT hovered) */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-white font-display font-black text-2xl sm:text-3xl md:text-5xl tracking-widest uppercase -rotate-90 whitespace-nowrap drop-shadow-[2px_2px_0px_#000]">
                  {item.title}
                </span>
              </div>

              {/* Description Text (Visible when hovered) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150 p-6 text-center">
                <h3 className="text-white font-display font-black text-3xl sm:text-5xl md:text-6xl mb-4 tracking-tight drop-shadow-[3px_3px_0px_#000] uppercase">
                  {item.title}
                </h3>
                <p className="text-white/90 font-body text-xs sm:text-sm md:text-lg max-w-lg drop-shadow-md font-medium leading-relaxed hidden sm:block">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
