'use client';

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { SectionHeader } from '../common/SectionHeader';
import { MemphisCard } from '../common/MemphisCard';
import { ExternalLink } from 'lucide-react';

export const FeaturedStartups: React.FC = () => {
  const startups = useAppSelector((state) => state.startups.items);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="INNOVATION HUB"
          title="Featured Student Startups"
          subtitle="Discover ground-breaking companies born right here at Haldia Institute of Technology."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {startups.map((item) => (
            <MemphisCard key={item.id} className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white">
                    {item.name}
                  </h3>
                  <span className="bg-secondary/20 text-secondary font-display font-bold text-xs px-3 py-1 rounded-full border border-secondary">
                    {item.stage}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 font-body">
                  {item.tagline}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold text-slate-500">
                <span>Founders: {item.founders.join(', ')}</span>
                <span className="flex items-center gap-1 text-primary cursor-pointer hover:underline">
                  Visit <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </MemphisCard>
          ))}
        </div>
      </div>
    </section>
  );
};
