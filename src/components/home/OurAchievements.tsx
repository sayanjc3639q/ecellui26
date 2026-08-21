'use client';

import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { MemphisCard } from '../common/MemphisCard';
import { useAppSelector } from '@/store/hooks';

export const OurAchievements: React.FC = () => {
  const startupsState = useAppSelector((state) => state.startups);
  const items = startupsState?.items ?? [];

  return (
    <section className="gsap-section-reveal py-24 bg-mint/20 border-b-4 border-black relative overflow-hidden">
      {/* Unique Pattern Texture: Isometric Blueprint Grid */}
      <div className="absolute inset-0 bg-pattern-isometric-grid pointer-events-none opacity-50 z-0" />

      {/* Floating Star and Cube Memphis Elements */}
      <div className="hidden lg:block absolute left-8 top-16 pointer-events-none z-0 animate-hero-spin-slow opacity-30">
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path d="M50 0 L60 38 L98 50 L60 62 L50 100 L40 62 L2 50 L40 38 Z" fill="#FFD166" stroke="#000" strokeWidth="4"/>
        </svg>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0 opacity-25">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 600,-40 900,60 C1050,110 1150,40 1200,60 L1200,120 L0,120 Z" fill="#0077B6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <SectionHeader
          badge="Track Record"
          title="Our Achievements"
          subtitle="Explore breakout ventures and startups incubated right here at HIT Haldia."
        />

        {/* Startups Showcase Grid with GSAP stagger */}
        <div className="gsap-cards-grid grid md:grid-cols-2 gap-8">
          {items.slice(0, 4).map((startup) => (
            <MemphisCard key={startup.id} className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-44 h-44 rounded-2xl border-3 border-black overflow-hidden shrink-0 bg-peach">
                <img
                  src={startup.logoUrl || 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop'}
                  alt={startup.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary border-2 border-secondary font-display font-extrabold text-xs rounded-full">
                    {startup.domain.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary border-2 border-primary font-display font-extrabold text-xs rounded-full">
                    {startup.stage}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-black text-slate-900">{startup.name}</h3>
                <p className="text-slate-600 font-body text-sm leading-relaxed">{startup.tagline}</p>
                <div className="text-xs font-display font-bold text-slate-800">
                  Founded by <span className="text-primary">{startup.founders?.join(', ')}</span> ({startup.foundedYear})
                </div>
              </div>
            </MemphisCard>
          ))}
        </div>

        {/* Statistics Grid */}
        <div className="gsap-cards-grid grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="gsap-card-item p-6 bg-white border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_#000] text-center rotate-1">
            <div className="text-4xl sm:text-5xl font-display font-black text-slate-900 mb-1">50+</div>
            <div className="text-xs font-display font-extrabold uppercase tracking-widest text-slate-600">Startups Incubated</div>
          </div>
          <div className="gsap-card-item p-6 bg-primary border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_#000] text-center -rotate-1 text-white">
            <div className="text-4xl sm:text-5xl font-display font-black mb-1">₹10Cr+</div>
            <div className="text-xs font-display font-extrabold uppercase tracking-widest text-white/90">Funding Raised</div>
          </div>
          <div className="gsap-card-item p-6 bg-white border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_#000] text-center rotate-1">
            <div className="text-4xl sm:text-5xl font-display font-black text-slate-900 mb-1">200+</div>
            <div className="text-xs font-display font-extrabold uppercase tracking-widest text-slate-600">Workshops &amp; Meets</div>
          </div>
          <div className="gsap-card-item p-6 bg-secondary border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_#000] text-center -rotate-1 text-white">
            <div className="text-4xl sm:text-5xl font-display font-black mb-1">15k+</div>
            <div className="text-xs font-display font-extrabold uppercase tracking-widest text-white/90">Active Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};
