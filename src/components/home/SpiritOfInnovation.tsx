'use client';

import React from 'react';
import { MemphisButton } from '../common/MemphisButton';
import Link from 'next/link';

export const SpiritOfInnovation: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-24 bg-peach/20 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
