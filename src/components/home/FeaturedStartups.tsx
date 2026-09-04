'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setStageFilter } from '@/store/slices/startupsSlice';
import { StartupStage } from '@/types/startup';
import { SectionHeader } from '../common/SectionHeader';
import { MemphisCard } from '../common/MemphisCard';
import { MemphisButton } from '../common/MemphisButton';
import { ExternalLink, Tag } from 'lucide-react';

const STAGES: ('All' | StartupStage)[] = ['All', 'Idea', 'Early Stage', 'Incubated', 'Scaled'];

export const FeaturedStartups: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, selectedStage } = useAppSelector((state) => state.startups);

  const filteredStartups = items.filter(
    (s) => selectedStage === 'All' || s.stage === selectedStage
  );

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badgeText="INNOVATION IN ACTION"
        title="Featured Startups"
        subtitle="Discover student and alumni ventures incubated and supported by E-Cell HIT Haldia."
      />

      {/* Stage filter pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {STAGES.map((stage) => (
          <button
            key={stage}
            onClick={() => dispatch(setStageFilter(stage))}
            className={`px-4 py-2 text-xs font-black font-display uppercase rounded-xl border-2 border-black dark:border-white transition-all ${
              selectedStage === stage
                ? 'bg-secondary text-slate-900 shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] translate-x-[-1px] translate-y-[-1px]'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {stage}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredStartups.map((startup) => (
          <MemphisCard key={startup.id} className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="flex items-center gap-1.5 text-xs font-black font-display px-3 py-1 rounded-full border border-black bg-primary/20 text-primary">
                  <Tag className="w-3 h-3" /> {startup.domain}
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700">
                  {startup.stage}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl mb-2 text-slate-900 dark:text-white">
                {startup.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-body">
                {startup.tagline}
              </p>
            </div>

            <div>
              <div className="border-t-2 border-dashed border-slate-200 dark:border-slate-700 pt-4 mb-4">
                <p className="text-xs font-bold text-slate-500 mb-1">Founders</p>
                <p className="text-xs font-black text-slate-800 dark:text-slate-200">
                  {startup.founders.join(', ')} • Founded {startup.foundedYear}
                </p>
              </div>

              {startup.websiteUrl && (
                <a
                  href={startup.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <MemphisButton variant="secondary" className="w-full text-xs">
                    Visit Website <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                  </MemphisButton>
                </a>
              )}
            </div>
          </MemphisCard>
        ))}
      </div>
    </section>
  );
};
