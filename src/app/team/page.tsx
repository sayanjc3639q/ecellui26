import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MemphisCard } from '@/components/common/MemphisCard';

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badgeText="MEET THE CREW"
        title="E-Cell Leadership Team"
        subtitle="The passionate student leaders behind all E-Cell HIT Haldia initiatives."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Core Team Lead', 'Events Head', 'Tech Lead'].map((role, i) => (
          <MemphisCard key={i} className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto border-2 border-black dark:border-white mb-4 flex items-center justify-center font-display font-black text-xl text-primary">
              {role.charAt(0)}
            </div>
            <h3 className="font-display font-black text-xl">Member Name</h3>
            <p className="text-xs font-bold text-primary mb-2">{role}</p>
            <p className="text-xs text-slate-500 font-body">Leading innovation & student mentoring at HIT Haldia.</p>
          </MemphisCard>
        ))}
      </div>
    </div>
  );
}
