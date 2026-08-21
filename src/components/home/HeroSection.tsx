'use client';

import React from 'react';
import Link from 'next/link';
import { MemphisButton } from '../common/MemphisButton';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-44 pb-36 min-h-[75vh] flex items-center justify-center overflow-hidden relative border-b-4 border-black bg-white text-center bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/40 pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <h1 className="gsap-hero-item font-display font-black text-6xl sm:text-8xl tracking-tight text-slate-900 leading-[1.05]">
          Innovation Starts with You
        </h1>
        <p className="gsap-hero-item font-body text-slate-600 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
          We’re here to accelerate it. Build, launch, and scale your ideas with the finest minds in the ecosystem.
        </p>
        <div className="gsap-hero-item flex flex-wrap justify-center gap-6 pt-4">
          <Link href="/events">
            <MemphisButton variant="primary" className="flex items-center gap-2 px-10 py-4 text-lg">
              Events <ArrowRight className="w-5 h-5" />
            </MemphisButton>
          </Link>
          <Link href="/idea-pitching">
            <MemphisButton variant="outline" className="px-10 py-4 text-lg">
              Idea
            </MemphisButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
