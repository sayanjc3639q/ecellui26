'use client';

import React from 'react';
import { MemphisButton } from '../common/MemphisButton';
import Link from 'next/link';

export const SpiritOfInnovation: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-24 bg-peach/20 border-b-4 border-black relative overflow-hidden">
      {/* Unique Pattern Texture: Chevron / Zigzag */}
      <div className="absolute inset-0 bg-pattern-zigzag pointer-events-none opacity-60 z-0" />

      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0 opacity-40">
        <svg className="w-full h-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,0 L0,0 Z" fill="#FF6B35" />
        </svg>
      </div>

      {/* Floating Memphis Geometric Accents */}
      <div className="hidden lg:block absolute right-8 top-12 pointer-events-none z-0 animate-shape-float-a">
        <svg width="48" height="48" viewBox="0 0 100 100">
          <polygon points="50,5 95,95 5,95" fill="#4895EF" stroke="#000" strokeWidth="5" />
        </svg>
      </div>
      <div className="hidden lg:block absolute left-12 bottom-12 pointer-events-none z-0 animate-shape-float-b">
        <svg width="60" height="24" viewBox="0 0 120 40">
          <path d="M5 20 Q 25 5 45 20 T 85 20 T 115 20" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-secondary text-white font-display font-extrabold text-xs rounded-full border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#000]">
              Innovation Hub
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black leading-[1.1] tracking-tight text-slate-900">
              The <span className="text-primary underline decoration-black decoration-wavy decoration-4">Spirit</span> of Innovation
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-lg leading-relaxed">
              Fueling tomorrow&apos;s entrepreneurs at HIT Haldia. We turn raw ideas into market-ready ventures through incubation, mentorship, and angel funding.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/about">
                <MemphisButton variant="primary">Explore More</MemphisButton>
              </Link>
              <Link href="/idea-pitching">
                <MemphisButton variant="outline">Watch Story</MemphisButton>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_#000] bg-white">
              <img
                alt="Spirit of Innovation"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-300 rounded-full border-3 border-black animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mint rounded-2xl border-3 border-black rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
