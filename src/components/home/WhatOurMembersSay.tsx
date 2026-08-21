'use client';

import React from 'react';
import { SectionHeader } from '../common/SectionHeader';

interface MemberTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const memberTestimonials: MemberTestimonial[] = [
  {
    id: '1',
    name: 'Sneha Roy',
    role: 'Founder, EcoTech Labs',
    quote: 'E-Cell transformed my vision into a scalable venture. The faculty guidance and investor connect were invaluable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    bgColor: 'bg-white',
    textColor: 'text-slate-900',
  },
  {
    id: '2',
    name: 'Rahul Karmakar',
    role: 'Lead Developer, TechFest',
    quote: 'The community here is electric. Everyone is constantly pushing boundaries, experimenting, and building real projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    bgColor: 'bg-primary',
    textColor: 'text-white',
  },
  {
    id: '3',
    name: 'Priya Mukherjee',
    role: 'Innovator & Pitch Winner',
    quote: 'I found my co-founders during an E-Cell ideathon. It is truly the heartbeat of HIT Haldia’s startup ecosystem.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    bgColor: 'bg-secondary',
    textColor: 'text-white',
  },
];

export const WhatOurMembersSay: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-24 bg-mint/15 border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Community Voices"
          title="What Our Members Say"
          subtitle="Real stories from student innovators, founders, and community champions."
        />

        <div className="gsap-cards-grid grid md:grid-cols-3 gap-8">
          {memberTestimonials.map((t) => (
            <div key={t.id} className="relative pt-10">
              <div
                className={`${t.bgColor} ${t.textColor} p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] relative space-y-6`}
              >
                <div className="absolute -top-8 left-8 w-16 h-16 rounded-full border-4 border-black overflow-hidden bg-white">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-base sm:text-lg font-body leading-relaxed italic pt-2">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t-2 border-black/20 pt-4">
                  <div className="font-display font-black text-lg">{t.name}</div>
                  <div className="text-xs font-display font-bold uppercase tracking-wider opacity-85">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
