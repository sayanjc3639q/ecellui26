'use client';

import React from 'react';
import Link from 'next/link';
import { MemphisButton } from '../common/MemphisButton';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-secondary dark:bg-blue-900 border-b-4 border-black dark:border-white text-white relative overflow-hidden">
      {/* Unique Pattern Texture: Circuit Energy Nodes */}
      <div className="absolute inset-0 bg-pattern-circuit pointer-events-none opacity-40 z-0" />

      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0 opacity-20">
        <svg className="w-full h-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C300,100 600,-20 900,50 L1200,0 L0,0 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
        <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
          Ready to turn your idea into the next big startup?
        </h2>
        <p className="font-body text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
          Join E-Cell HIT Haldia today and gain access to incubation support, founder networks, and exclusive grant opportunities.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/events">
            <MemphisButton variant="primary">Explore Events</MemphisButton>
          </Link>
          <Link href="/idea-pitching">
            <MemphisButton variant="dark">Submit Pitch Deck</MemphisButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
