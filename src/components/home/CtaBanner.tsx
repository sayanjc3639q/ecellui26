'use client';

import React from 'react';
import Link from 'next/link';
import { MemphisButton } from '../common/MemphisButton';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-secondary dark:bg-blue-900 border-b-4 border-black dark:border-white text-white">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
          Ready to turn your idea into the next big startup?
        </h2>
        <p className="font-body text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
          Join E-Cell HIT Haldia today and gain access to incubation support, founder networks, and exclusive grant opportunities.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/join">
            <MemphisButton variant="primary">Become a Member</MemphisButton>
          </Link>
          <Link href="/idea-pitching">
            <MemphisButton variant="dark">Submit Pitch Deck</MemphisButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
