'use client';

import React from 'react';
import { QuickStat } from '@/types/common';

const statsData: QuickStat[] = [
  { id: '1', label: 'Incubated Startups', value: '25+', bgColor: 'bg-peach' },
  { id: '2', label: 'Funding Raised', value: '₹50L+', bgColor: 'bg-mint' },
  { id: '3', label: 'Community Members', value: '1,200+', bgColor: 'bg-pink-soft' },
  { id: '4', label: 'Annual Events', value: '15+', bgColor: 'bg-amber-100' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 rounded-2xl border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] ${stat.bgColor} dark:bg-slate-800 text-center`}
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="font-body font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
