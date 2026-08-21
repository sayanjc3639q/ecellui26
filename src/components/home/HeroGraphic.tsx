'use client';

import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export const HeroGraphic: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center p-4">
      <div className="w-64 h-64 sm:w-80 sm:h-80 bg-secondary rounded-3xl border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] flex flex-col items-center justify-center text-white relative">
        <Rocket className="w-24 h-24 stroke-[1.5] mb-4 animate-bounce" />
        <span className="font-display font-black text-2xl tracking-tight">BUILD & SCALE</span>
        <div className="absolute -top-5 -right-5 bg-primary text-white p-3 rounded-full border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000]">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
